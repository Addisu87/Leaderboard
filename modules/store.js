class Store {
  static getPlayers() {
    let players;
    if (localStorage.getItem('players') === null) {
      players = [];
    } else {
      players = JSON.parse(localStorage.getItem('players'));
    }
    return players;
  }

  static addPlayer(player) {
    const players = Store.getPlayers();

    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));
  }
}

export default Store;
