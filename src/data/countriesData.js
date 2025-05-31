// src/data/countriesData.js

// Helper function to shuffle an array (Fisher-Yates shuffle)
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const initialCountries = [

  // Africa
  { id: "DZ", name: "Algeria", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "AO", name: "Angola", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BJ", name: "Benin", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BW", name: "Botswana", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BF", name: "Burkina Faso", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BI", name: "Burundi", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CM", name: "Cameroon", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CF", name: "Central African Republic", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TD", name: "Chad", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CG", name: "Republic of the Congo", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CD", name: "Democratic Republic of the Congo", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CI", name: "Côte d'Ivoire", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "DJ", name: "Djibouti", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "EG", name: "Egypt", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GQ", name: "Equatorial Guinea", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "ER", name: "Eritrea", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SZ", name: "Eswatini", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "ET", name: "Ethiopia", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GA", name: "Gabon", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GM", name: "Gambia", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GH", name: "Ghana", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GN", name: "Guinea", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GW", name: "Guinea-Bissau", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "KE", name: "Kenya", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "LS", name: "Lesotho", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "LR", name: "Liberia", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "LY", name: "Libya", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MG", name: "Madagascar", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MW", name: "Malawi", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "ML", name: "Mali", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MR", name: "Mauritania", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MA", name: "Morocco", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MZ", name: "Mozambique", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "NA", name: "Namibia", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "NE", name: "Niger", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "NG", name: "Nigeria", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "RW", name: "Rwanda", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SN", name: "Senegal", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SL", name: "Sierra Leone", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SO", name: "Somalia", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "ZA", name: "South Africa", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SS", name: "South Sudan", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SD", name: "Sudan", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TZ", name: "Tanzania", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TG", name: "Togo", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TN", name: "Tunisia", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "UG", name: "Uganda", continent: "Africa", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "EH", name: "Western Sahara", continent: "Africa", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "ZM", name: "Zambia", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "ZW", name: "Zimbabwe", continent: "Africa", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },

  // Americas
  { id: "AR", name: "Argentina", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BS", name: "The Bahamas", continent: "Americas", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BZ", name: "Belize", continent: "Americas", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BO", name: "Bolivia", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BR", name: "Brazil", continent: "Americas", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CA", name: "Canada", continent: "Americas", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CL", name: "Chile", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CO", name: "Colombia", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CR", name: "Costa Rica", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CU", name: "Cuba", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "DO", name: "Dominican Republic", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "EC", name: "Ecuador", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SV", name: "El Salvador", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GT", name: "Guatemala", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GY", name: "Guyana", continent: "Americas", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "HT", name: "Haiti", continent: "Americas", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "HN", name: "Honduras", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "JM", name: "Jamaica", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MX", name: "Mexico", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "NI", name: "Nicaragua", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "PA", name: "Panama", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "PY", name: "Paraguay", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "PE", name: "Peru", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SR", name: "Suriname", continent: "Americas", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TT", name: "Trinidad and Tobago", continent: "Americas", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "US", name: "United States", continent: "Americas", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "UY", name: "Uruguay", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "VE", name: "Venezuela", continent: "Americas", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },

  // Europe
  { id: "AL", name: "Albania", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "AT", name: "Austria", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BY", name: "Belarus", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BE", name: "Belgium", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BA", name: "Bosnia and Herzegovina", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BG", name: "Bulgaria", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "HR", name: "Croatia", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CY", name: "Cyprus", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CZ", name: "Czechia", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "DK", name: "Denmark", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "EE", name: "Estonia", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "FI", name: "Finland", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "FR", name: "France", continent: "Europe", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "DE", name: "Germany", continent: "Europe", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GR", name: "Greece", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "HU", name: "Hungary", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "IS", name: "Iceland", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "IE", name: "Ireland", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "IT", name: "Italy", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "LV", name: "Latvia", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "LT", name: "Lithuania", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "LU", name: "Luxembourg", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MD", name: "Moldova", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "ME", name: "Montenegro", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "NL", name: "Netherlands", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MK", name: "North Macedonia", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "NO", name: "Norway", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "PL", name: "Poland", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "PT", name: "Portugal", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "RO", name: "Romania", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "RU", name: "Russia", continent: "Europe", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "RS", name: "Serbia", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SK", name: "Slovakia", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SI", name: "Slovenia", continent: "Europe", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "ES", name: "Spain", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SE", name: "Sweden", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CH", name: "Switzerland", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "UA", name: "Ukraine", continent: "Europe", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GB", name: "United Kingdom", continent: "Europe", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },

  // Asia
  { id: "AF", name: "Afghanistan", continent: "Asia", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "AM", name: "Armenia", continent: "Asia", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "AZ", name: "Azerbaijan", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BD", name: "Bangladesh", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BT", name: "Bhutan", continent: "Asia", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "BN", name: "Brunei", continent: "Asia", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "KH", name: "Cambodia", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "CN", name: "China", continent: "Asia", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "GE", name: "Georgia", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "IN", name: "India", continent: "Asia", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "ID", name: "Indonesia", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "IR", name: "Iran", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "IQ", name: "Iraq", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "IL", name: "Israel", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "JP", name: "Japan", continent: "Asia", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "JO", name: "Jordan", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "KZ", name: "Kazakhstan", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "KW", name: "Kuwait", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "KG", name: "Kyrgyzstan", continent: "Asia", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "LA", name: "Laos", continent: "Asia", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "LB", name: "Lebanon", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MY", name: "Malaysia", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MN", name: "Mongolia", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "MM", name: "Myanmar", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "NP", name: "Nepal", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "KP", name: "North Korea", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "OM", name: "Oman", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "PK", name: "Pakistan", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "PS", name: "Palestine", continent: "Asia", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "PH", name: "Philippines", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "QA", name: "Qatar", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SA", name: "Saudi Arabia", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "KR", name: "South Korea", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "LK", name: "Sri Lanka", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "SY", name: "Syria", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TW", name: "Taiwan", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TJ", name: "Tajikistan", continent: "Asia", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TH", name: "Thailand", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TL", name: "Timor-Leste", continent: "Asia", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TR", name: "Turkey", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "TM", name: "Turkmenistan", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "AE", name: "United Arab Emirates", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "UZ", name: "Uzbekistan", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "VN", name: "Vietnam", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "YE", name: "Yemen", continent: "Asia", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },

  // Oceania
  { id: "AU", name: "Australia", continent: "Oceania", difficulty: "easy", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "FJ", name: "Fiji", continent: "Oceania", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "NZ", name: "New Zealand", continent: "Oceania", difficulty: "medium", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "PG", name: "Papua New Guinea", continent: "Oceania", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },
  { id: "VU", name: "Vanuatu", continent: "Oceania", difficulty: "hard", assigned: false, correctlyPlaced: false, attempts: 0 },

];

// Helper function to get a fresh copy of all country data with initial game state
export const getInitialCountryObjects = () => 
    initialCountries.map(country => ({
        ...country, // Spread existing properties like id, name, continent, difficulty
        assigned: false,
        correctlyPlaced: false,
        attempts: 0
    }));


export const getCountries = ({ continent, difficulty }) => {
  let filtered = getInitialCountryObjects(); // Start with a fresh, full list with all properties

  if (continent && continent !== "Whole World") {
    filtered = filtered.filter(c => c.continent === continent);
  }
  if (difficulty) { // Difficulty always has a value (defaults to 'easy')
    filtered = filtered.filter(c => c.difficulty === difficulty);
  }
  return filtered; // Returns array of country objects
};