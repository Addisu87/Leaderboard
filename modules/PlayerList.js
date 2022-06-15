// Get form values
const userInput = document.querySelector('#user');
const scoreInput = document.querySelector('#score');
const playerList = document.querySelector('#player-list');

// Example POST method implementation:
const userScore = async (url) => {
  const scoreData = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: userInput.value.trim(),
      score: scoreInput.value.trim()
    })
  });
  return scoreData.json();
};

const loadScores = async (url) => {
  const result = (await fetch(url)).json();
  playerList.innerHTML = result
    .sort((a, b) => b.player - a.player)
    .map(
      (player) =>
        `<tr><td>${player.user}</td></tr> <tr><td>${player.score}</td></tr>`
    )
    .join();
};

export { userScore, loadScores };
