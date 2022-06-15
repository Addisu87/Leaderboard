import PlayerList from '../modules/PlayerList.js';
import Store from '../modules/store.js';
import './style.css';

// Leaderboard class: Represent Leaderboard.
class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

// Event: Display player
document.addEventListener('DOMContentLoaded', PlayerList.displayPlayer);

// Event: Add a player
document.querySelector('#player-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();

  // Get form values
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  // validate
  if (name === '' || score === '') {
    PlayerList.showAlert('Please fill in all fields ', 'danger');
  } else {
    // Instantiate player
    const player = new Player(name, score);

    // add player to PlayerList
    PlayerList.addPlayerList(player);

    // add player to store
    Store.addPlayer(player);
  }
});

// Event: Update the status
document.querySelector('#refresh').addEventListener('click', () => {
  // sorting the array from highest to lowest
  Player.sort((a, b) => a.index - b.index);
});
