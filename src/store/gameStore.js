// src/store/gameStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { 
    getInitialCountryObjects, 
    getCountries,
    shuffleArray 
} from '../data/countriesData';
import { 
    FLASH_DURATION_MS, 
    COUNTRIES_PER_LEVEL, 
    POINTS_PER_DIFFICULTY,
    GAME_STORAGE_KEY,
    DIFFICULTIES // For default
} from '../config/gameConfig';

const useGameStore = create(
  persist(
    (set, get) => ({
      // --- Static Configuration (derived) ---
      // This `baseCountries` holds the full definition of all countries (id, name, continent, difficulty)
      // The `countries` array below will store their dynamic game state (assigned, attempts, etc.)
      baseCountries: getInitialCountryObjects(), // All countries with their static data + initial game state

      // --- Game State ---
      countries: getInitialCountryObjects().reduce((acc, country) => { // Store game state by ID for easy lookup
        acc[country.id] = {
          assigned: country.assigned,
          correctlyPlaced: country.correctlyPlaced,
          attempts: country.attempts,
        };
        return acc;
      }, {}),

      score: 0,
      selectedCountryId: null, // For list selection
      lastIncorrectAttemptDetails: { mapRegionId: null, listCountryId: null, timestamp: 0 },

      // --- Level & Session Management ---
      selectedContinent: "Whole World", // Default as per your spec
      selectedDifficulty: DIFFICULTIES[0], // Default 'easy'

      currentLevelCountryIds: [], // IDs of countries in the current level
      allPlayableCountryIdsInSession: [], // IDs of all countries for the current continent/difficulty filters, shuffled
      
      sessionCompleted: false,

      // --- Actions ---
      setContinent: (continent) => {
        set({ selectedContinent: continent });
        get().startNewSession();
      },

      setDifficulty: (difficulty) => {
        set({ selectedDifficulty: difficulty });
        get().startNewSession();
      },

      startNewSession: () => {
        console.log("Starting new session...");
        const { selectedContinent, selectedDifficulty, baseCountries } = get();
        
        const filteredCountryObjects = getCountries({ 
            continent: selectedContinent, 
            difficulty: selectedDifficulty 
        });

        const shuffledIds = shuffleArray(filteredCountryObjects.map(c => c.id));

        // Reset game state for ALL countries
        const resetCountriesState = baseCountries.reduce((acc, country) => {
            acc[country.id] = { assigned: false, correctlyPlaced: false, attempts: 0 };
            return acc;
        }, {});

        set({
          score: 0,
          countries: resetCountriesState,
          allPlayableCountryIdsInSession: shuffledIds,
          currentLevelCountryIds: [],
          sessionCompleted: false,
          selectedCountryId: null,
          lastIncorrectAttemptDetails: { mapRegionId: null, listCountryId: null, timestamp: 0 },
        });
        get().loadNextLevel();
      },

      loadNextLevel: () => {
        const { selectedDifficulty, allPlayableCountryIdsInSession } = get();
        
        if (allPlayableCountryIdsInSession.length === 0) {
          set({ sessionCompleted: true, currentLevelCountryIds: [] });
          console.log("Session completed! All countries played.");
          return;
        }

        const numToLoad = COUNTRIES_PER_LEVEL[selectedDifficulty];
        const nextLevelIds = allPlayableCountryIdsInSession.slice(0, numToLoad);
        const remainingIdsInSession = allPlayableCountryIdsInSession.slice(numToLoad);

        console.log(`Loading next level with ${nextLevelIds.length} countries.`);
        set({
          currentLevelCountryIds: nextLevelIds,
          allPlayableCountryIdsInSession: remainingIdsInSession,
          selectedCountryId: null, // Clear any list selection
        });
      },

      setSelectedCountryId: (countryId) => set({ selectedCountryId: countryId }),

      attemptAssignment: (mapRegionId) => {
        const { selectedCountryId, countries, score, selectedDifficulty, currentLevelCountryIds, baseCountries } = get();

        if (!selectedCountryId) { // If no country is selected from list, do nothing or log
            console.log("Attempted assignment without a selected country from the list.");
            return;
        }
        
        // This check is technically redundant if the list only shows current level countries,
        // but it's a good safeguard.
        if (!currentLevelCountryIds.includes(selectedCountryId)) {
            console.warn("Selected country from list is not in the current level. This shouldn't happen.");
            set({ selectedCountryId: null }); // Clear potentially invalid selection
            return;
        }

        const listCountryBaseData = baseCountries.find(c => c.id === selectedCountryId);
        if (!listCountryBaseData) {
          console.error("Selected list country data not found in baseCountries");
          set({ selectedCountryId: null });
          return;
        }

        const isCorrect = selectedCountryId.toLowerCase() === mapRegionId.toLowerCase();
        const countryState = countries[selectedCountryId];

        if (isCorrect) {
          const pointsEarned = POINTS_PER_DIFFICULTY[selectedDifficulty];
          set((state) => ({
            countries: {
              ...state.countries,
              [selectedCountryId]: { // Update the LIST country's state
                ...(state.countries[selectedCountryId] || {}), // Ensure object exists
                assigned: true,
                correctlyPlaced: true,
                attempts: (state.countries[selectedCountryId]?.attempts || 0) + 1,
              }
            },
            score: state.score + pointsEarned,
            selectedCountryId: null,
            lastIncorrectAttemptDetails: { mapRegionId: null, listCountryId: null, timestamp: 0 },
          }));
        } else { // Incorrect: selectedCountryId (from list) does NOT match mapRegionId (clicked on map)
          const attemptTimestamp = Date.now();
          set((state) => ({
            countries: {
                ...state.countries,
                [selectedCountryId]: { // Update the LIST country's attempts
                    ...(state.countries[selectedCountryId] || {}),
                    attempts: (state.countries[selectedCountryId]?.attempts || 0) + 1,
                }
            },
            selectedCountryId: null, // Clear selection from list
            lastIncorrectAttemptDetails: { // Both list item and map region involved in the flash
              mapRegionId: mapRegionId,       // The map region that was WRONGLY clicked
              listCountryId: selectedCountryId, // The list item that was being PLACED
              timestamp: attemptTimestamp
            }
          }));

          setTimeout(() => {
            set((state) => {
              if (state.lastIncorrectAttemptDetails.timestamp === attemptTimestamp) {
                return { lastIncorrectAttemptDetails: { mapRegionId: null, listCountryId: null, timestamp: 0 } };
              }
              return {};
            });
          }, FLASH_DURATION_MS);
        }
      },

      resetCurrentLevel: () => {
        const { currentLevelCountryIds, countries } = get();
        if (currentLevelCountryIds.length === 0) return;

        console.log("Resetting current level...");
        const updatedCountriesState = { ...countries };
        currentLevelCountryIds.forEach(id => {
          if (updatedCountriesState[id]) {
            updatedCountriesState[id] = {
              ...updatedCountriesState[id],
              assigned: false,
              correctlyPlaced: false,
              // Optionally reset attempts for this level too: attempts: countries[id].initialAttemptsForLevel or similar
            };
          }
        });
        // Score is NOT reset for this level, user just retries the assignments.
        set({
          countries: updatedCountriesState,
          selectedCountryId: null,
          lastIncorrectAttemptDetails: { mapRegionId: null, listCountryId: null, timestamp: 0 },
        });
      },
      // Ensure store is initialized with a session when it first loads
      // This can be triggered in App.jsx or here if not persisted.
      // For persistence, onRehydrateStorage can be useful.
      // However, a simple check on mount in App.jsx for allPlayableCountryIdsInSession.length === 0
      // and currentLevelCountryIds.length === 0 might be enough to trigger startNewSession.
    }),
    {
      name: GAME_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      // For simplicity, persist most things. Can be optimized.
      partialize: (state) => ({
        score: state.score,
        countries: state.countries, // Persist the state of all countries
        selectedContinent: state.selectedContinent,
        selectedDifficulty: state.selectedDifficulty,
        currentLevelCountryIds: state.currentLevelCountryIds,
        allPlayableCountryIdsInSession: state.allPlayableCountryIdsInSession,
        sessionCompleted: state.sessionCompleted,
      }),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.log('Zustand hydration error: ', error);
        } else {
          // If rehydrating and no active level/session, start a new one with persisted/default filters.
          // This ensures the game is always in a playable state.
          if (state && state.currentLevelCountryIds.length === 0 && !state.sessionCompleted && state.allPlayableCountryIdsInSession.length === 0) {
            console.log("Rehydrated with no active session, starting new one.");
            // Timeout to allow store to fully initialize before calling actions that use `get()`
            setTimeout(() => useGameStore.getState().startNewSession(), 0);
          } else {
            console.log("Rehydration successful.");
          }
        }
      }
    }
  )
);

export default useGameStore;