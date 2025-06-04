// src/components/MapComponent.jsx
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import useGameStore from '../store/gameStore';
// import countriesGeoJson from '../../public/countries.geo.json';
import { FLASH_DURATION_MS } from '../config/gameConfig';
import './MapComponent.css';

const STYLES = {
  DEFAULT: { fill: "#F5F5F5", stroke: "#666666", strokeWidth: 1, outline: "none" },
  HOVER: { fill: "#EFF6FF", stroke: "#2563EB", strokeWidth: 1.5, outline: "none" },
  PRESSED: { fill: "#EFF6FF", stroke: "#2563EB", strokeWidth: 1.5, outline: "none" },
  // CORRECT_IN_SESSION replaces CORRECT_IN_LEVEL and CORRECT_PREVIOUS_LEVEL
  CORRECT_IN_SESSION: { fill: "#10B981", stroke: "#047857", strokeWidth: 1, outline: "none", opacity: 0.65 },
  INCORRECT_FLASH: { fill: "#EF4444", stroke: "#991B1B", strokeWidth: 1.5, outline: "none" },
  // OUT_OF_PLAY style is removed
};

const MapComponent = () => {
  const countriesStatus = useGameStore(state => state.countries); // Status by ID: { assigned, correctlyPlaced }
  const selectedCountryIdFromList = useGameStore(state => state.selectedCountryId);
  const attemptAssignment = useGameStore(state => state.attemptAssignment);
  const lastIncorrectAttemptDetails = useGameStore(state => state.lastIncorrectAttemptDetails);

  const handleMapRegionClick = (geo) => {
    const mapRegionId = geo.properties.iso_a2;
    if (!mapRegionId) {
        console.warn("Clicked map region has no ID (iso_a2):", geo.properties);
        return;
    }

    const countryState = countriesStatus[mapRegionId];
    
    // Prevent re-assigning an already correctly placed country in this session
    if (countryState?.correctlyPlaced) {
        console.log(`${mapRegionId} is already correctly placed in this session.`);
        return;
    }

    if (selectedCountryIdFromList) {
      attemptAssignment(mapRegionId); // Let the store handle all validation logic
    } else {
      console.log(`Map region clicked: ${geo.properties.name} (${mapRegionId}), but no country selected from list.`);
    }
  };

  return (
    <div className="map-component-wrapper">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 200 }} // Your preferred scale
      >
        <Geographies geography={"./countries.geo.json"}>
          {({ geographies }) =>
            geographies.map(geo => {
              const countryIsoA2 = geo.properties.iso_a2;
              if (!countryIsoA2) return null;

              const countryState = countriesStatus[countryIsoA2];
              let currentStyle = STYLES.DEFAULT;
              let isLockedThisSession = false;

              if (countryState?.correctlyPlaced) {
                currentStyle = STYLES.CORRECT_IN_SESSION;
                isLockedThisSession = true;
              } else if (
                lastIncorrectAttemptDetails.mapRegionId === countryIsoA2 &&
                // Ensure the flash is relevant to an active selection attempt
                lastIncorrectAttemptDetails.listCountryId && 
                Date.now() - lastIncorrectAttemptDetails.timestamp < FLASH_DURATION_MS
              ) {
                // This map region was the one incorrectly clicked for the selected list item
                currentStyle = STYLES.INCORRECT_FLASH;
              }
              // Else, it remains STYLES.DEFAULT

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => !isLockedThisSession && handleMapRegionClick(geo)}
                  style={{
                    default: currentStyle,
                    hover: isLockedThisSession ? currentStyle : STYLES.HOVER,
                    pressed: isLockedThisSession ? currentStyle : STYLES.PRESSED,
                  }}
                  // ClassName logic simplified: locked if correct in session, otherwise interactive.
                  className={isLockedThisSession ? 'locked-geography' : 'interactive-geography'}
                  data-id={countryIsoA2}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapComponent;