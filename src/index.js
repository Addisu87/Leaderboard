import './style.css';

import loadScores from '../modules/PlayerList.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

// Event: Display player
window.addEventListener('load', () => loadScores(url));

// Event: Add a player
document.querySelector('#player-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();
});
