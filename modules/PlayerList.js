import Store from './store.js';

// UI class: Handle UI tasks
class PlayerList {
  static displayPlayer() {
    const players = Store.getPlayers();

    players.forEach((player) => PlayerList.addPlayerList(player));
  }

  static addPlayerList(player) {
    const list = document.querySelector('#player-list');
    const row = document.createElement('tr');

    row.innerHTML = `  
    <td>${player.title}</td>
    <td>${player.score}</td>
    `;

    list.appendChild(row);
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('#container');
    const form = document.querySelector('#player-form');
    container.insertBefore(div, form);

    // Vanish in 2 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }

  // clear fields
  static clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
}

export default PlayerList;
