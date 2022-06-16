import './style.css';
import { userScore, loadScores } from '../modules/PlayerList.js';
import { addScore } from '../modules/score.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ai5Nvjw0VJjtGbkLNuyF/scores';
const playerForm = document.querySelector('#player-form');
const refreshBtn = document.querySelector('#refresh');

// Event: Display player
window.addEventListener('load', () => loadScores(url));

// Refresh the list of players
refreshBtn.addEventListener('click', () => loadScores(url));

// Event: Add a player
playerForm.addEventListener('submit', async (e) => {
  // prevent actual submit
  e.preventDefault();
  await addScore(url, userScore());
  loadScores(url);
  playerForm.reset();
});
