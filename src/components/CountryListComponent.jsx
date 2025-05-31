// src/components/CountryListComponent.jsx
import React, { useEffect, useState, useMemo } from 'react';
import useGameStore from '../store/gameStore';
import { FLASH_DURATION_MS, CONTINENTS, DIFFICULTIES, COUNTRIES_PER_LEVEL } from '../config/gameConfig';
import './CountryListComponent.css';

const CountryListComponent = () => {
  // Zustand state and actions
  const countries = useGameStore(state => state.countries);
  const baseCountries = useGameStore(state => state.baseCountries);
  const selectedCountryId = useGameStore(state => state.selectedCountryId);
  const setSelectedCountryId = useGameStore(state => state.setSelectedCountryId);
  const lastIncorrectAttemptDetails = useGameStore(state => state.lastIncorrectAttemptDetails);
  const selectedContinent = useGameStore(state => state.selectedContinent);
  const setContinent = useGameStore(state => state.setContinent);
  const selectedDifficulty = useGameStore(state => state.selectedDifficulty);
  const setDifficulty = useGameStore(state => state.setDifficulty);
  const currentLevelCountryIds = useGameStore(state => state.currentLevelCountryIds);
  const loadNextLevel = useGameStore(state => state.loadNextLevel);
  const resetCurrentLevel = useGameStore(state => state.resetCurrentLevel);
  const sessionCompleted = useGameStore(state => state.sessionCompleted);

  const [flashCountryId, setFlashCountryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Convert currentLevelCountryIds to full country objects for display
  const currentLevelCountryObjects = useMemo(() => {
    return currentLevelCountryIds
        .map(id => baseCountries.find(c => c.id === id))
        .filter(Boolean); // Filter out any undefined if IDs mismatch
  }, [currentLevelCountryIds, baseCountries]);

  const handleCountrySelect = (countryId) => {
    setSelectedCountryId(selectedCountryId === countryId ? null : countryId);
  };

  const handleResetLevel = () => {
    // Confirmation is good practice if there's progress
    if (window.confirm("Are you sure you want to reset this level?")) {
      resetCurrentLevel();
    }
  };

  useEffect(() => {
    if (lastIncorrectAttemptDetails.listCountryId && lastIncorrectAttemptDetails.timestamp) {
      setFlashCountryId(lastIncorrectAttemptDetails.listCountryId);
      const timeout = setTimeout(() => setFlashCountryId(null), FLASH_DURATION_MS);
      return () => clearTimeout(timeout);
    }
  }, [lastIncorrectAttemptDetails.listCountryId, lastIncorrectAttemptDetails.timestamp]);

  const availableCountriesForList = useMemo(() => {
    return currentLevelCountryObjects
      .filter(country => !countries[country.id]?.correctlyPlaced)
      .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [currentLevelCountryObjects, countries, searchTerm]);

  const allInLevelCorrect = useMemo(() => {
    if (currentLevelCountryIds.length === 0) return false;
    return currentLevelCountryIds.every(id => countries[id]?.correctlyPlaced);
  }, [currentLevelCountryIds, countries]);

  const totalForLevel = COUNTRIES_PER_LEVEL[selectedDifficulty] || currentLevelCountryIds.length;
  const assignedInLevel = currentLevelCountryIds.filter(id => countries[id]?.correctlyPlaced).length;

  return (
    <div className="country-list-container">
      <div className="list-settings">
        <div className="setting-group">
          <label htmlFor="continent-select">Continent:</label>
          <select 
            id="continent-select" 
            value={selectedContinent} 
            onChange={(e) => setContinent(e.target.value)}
          >
            {CONTINENTS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="setting-group">
          <label htmlFor="difficulty-select">Difficulty:</label>
          <select 
            id="difficulty-select"
            value={selectedDifficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            {DIFFICULTIES.map(d => <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>)}
          </select>
        </div>
      </div>

      <div className="list-header">
        <h2>
          Country List ({assignedInLevel} / {totalForLevel} in level)
          {selectedCountryId && <span className="selection-indicator"> (Selecting...)</span>}
        </h2>
        <input
          type="search"
          placeholder="Search current level..."
          className="country-search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {sessionCompleted ? (
        <p className="all-assigned-message">Session Complete! Well done!</p>
      ) : availableCountriesForList.length > 0 ? (
        <ul className="country-list-ul">
          {availableCountriesForList.map(country => {
            const isSelected = selectedCountryId === country.id;
            let itemClass = 'country-list-item';
            if (isSelected) itemClass += ' selected';
            if (flashCountryId === country.id) itemClass += ' error-flash';

            return (
              <li 
                key={country.id} 
                data-country-id={country.id}
                className={itemClass}
                onClick={() => handleCountrySelect(country.id)}
              >
                {country.name}
              </li>
            );
          })}
        </ul>
      ) : searchTerm && currentLevelCountryObjects.length > 0 ? (
        <p className="no-results-message">No countries match your search in this level.</p>
      ) : allInLevelCorrect && currentLevelCountryObjects.length > 0 ? (
        <p className="all-assigned-message">Level Complete!</p>
      ) : currentLevelCountryObjects.length === 0 && !sessionCompleted ? (
        <p className="no-results-message">Loading level...</p>
      ) : (
         <p className="no-results-message">No countries to display for this level.</p>
      )}

      <div className="list-actions">
        <button 
          onClick={loadNextLevel} 
          disabled={!allInLevelCorrect || sessionCompleted}
          className="action-button next-level-button"
        >
          {sessionCompleted ? "Session Done" : "Next Level"}
        </button>
        <button 
          onClick={handleResetLevel}
          disabled={sessionCompleted || currentLevelCountryIds.length === 0}
          className="action-button reset-button"
        >
          Reset Level
        </button>
      </div>
    </div>
  );
};

export default CountryListComponent;