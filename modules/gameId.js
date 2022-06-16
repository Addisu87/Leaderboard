// create a new game
const game = {
  name: 'Gebeta',
};

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api//games/ai5Nvjw0VJjtGbkLNuyF/scores';

const getId = async () => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  return response.json();
};

export default getId;
