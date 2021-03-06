import { getAll } from './score.js';

// Get form values
const userInput = document.querySelector('#user');
const scoreInput = document.querySelector('#score');
const playerList = document.querySelector('#player-list');

// Example POST method implementation:
const userScore = () => {
  const scoreData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: userInput.value.trim(),
      score: scoreInput.value.trim(),
    }),
  };
  return scoreData;
};

const loadScores = async (url) => {
  const { result } = await getAll(url);
  playerList.innerHTML = result
    .sort((a, b) => b.score - a.score)
    .map(
      (player) => `<tr><td>${player.user}</td> 
    <td>${player.score}</td></tr>`,
    );
};

export { loadScores, userScore };
