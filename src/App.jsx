// src/App.jsx
import React, { useEffect } from 'react';
import MapComponent from './components/MapComponent';
import CountryListComponent from './components/CountryListComponent';
import useGameStore from './store/gameStore';
import './App.css';

function App() {
  // Select individual state pieces for stability
  const score = useGameStore(state => state.score);
  const currentLevelCountryIdsLength = useGameStore(state => state.currentLevelCountryIds.length);
  const allPlayableCountryIdsInSessionLength = useGameStore(state => state.allPlayableCountryIdsInSession.length);
  const sessionCompleted = useGameStore(state => state.sessionCompleted);
  const startNewSession = useGameStore(state => state.startNewSession); // Actions are generally stable

  // This useEffect ensures that if the store is somehow initialized without an active game
  // (e.g., localStorage is cleared, or initial load before hydration logic fully runs),
  // a new session is started. The onRehydrateStorage in Zustand handles persisted state.
  useEffect(() => {
    // Check if Zustand has initialized and if a game session needs to start
    const storeInitialized = useGameStore.persist.hasHydrated(); // Check if hydration is complete

    if (storeInitialized) {
      // If hydrated and no game session, start one.
      if (currentLevelCountryIdsLength === 0 && allPlayableCountryIdsInSessionLength === 0 && !sessionCompleted) {
        console.log("App.jsx: No active game session found on mount after hydration, starting new session.");
        startNewSession();
      }
    } else {
      // If not hydrated yet, subscribe to onFinishHydration.
      const unsub = useGameStore.persist.onFinishHydration(() => {
        const s = useGameStore.getState(); // Get fresh state after hydration
        if (s.currentLevelCountryIds.length === 0 && s.allPlayableCountryIdsInSession.length === 0 && !s.sessionCompleted) {
          console.log("App.jsx: No active game session found on mount after onFinishHydration, starting new session.");
          s.startNewSession();
        }
        unsub(); // Unsubscribe after the check to avoid multiple calls
      });

      // Return a cleanup function to unsubscribe if the component unmounts before hydration finishes.
      return () => {
        unsub();
      };
    }
  }, [startNewSession, currentLevelCountryIdsLength, allPlayableCountryIdsInSessionLength, sessionCompleted]);

  const currentYear = new Date().getFullYear();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Map Guessing Game</h1>
        <div className="score-display"> {/* Added a wrapper */}
          Score: <span className="score-value">{score}</span>
        </div>
      </header>
      <main className="game-area">
        <CountryListComponent />
        <MapComponent />
      </main>
      <footer className="app-footer">
        <p> Map Guessing Game © {currentYear} - By Fabrice Haguma</p>
      </footer>
    </div>
  );
}

export default App;