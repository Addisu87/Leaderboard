import './style.css';
import { userScore, loadScores } from '../modules/PlayerList.js';
import { addScore } from '../modules/score.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uRONUHHMkIFJJAbMV4X2/scores';

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

  // add scores
  await addScore(url, userScore());

  // refresh and sort scores
  loadScores(url);

  // reset the form
  playerForm.reset();
});
