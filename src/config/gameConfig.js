// src/config.js
export const FLASH_DURATION_MS = 700; // milliseconds for flash effects

export const CONTINENTS = ["Whole World", "Africa", "Americas", "Asia", "Europe", "Oceania"];
export const DIFFICULTIES = ["easy", "medium", "hard"];

export const COUNTRIES_PER_LEVEL = {
  easy: 6,
  medium: 10,
  hard: 15,
};

export const POINTS_PER_DIFFICULTY = {
  easy: 5,
  medium: 10,
  hard: 20,
};

export const GAME_STORAGE_KEY = 'earth-map-game-state-v2'; // New key for new structure