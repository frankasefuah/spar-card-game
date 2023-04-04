// TODO: Use the api from https://deckofcardsapi.com/
// Get a deck from the API
// Link the deck to the rest of the game
// Ask Player to enter their name
// Ask user to begin game
// Ask player to ask if cards should be shuffled
// Ask player to deal the cards
// Draw 5 cards for each player
// Player / Bot goes first
// For each card played the opponent must play a card of the same type if they have it. If they pick any other card they should'nt be allowed
// If they have multiple of the same they can pick which of that one they play
// If they dont they pick any other card
// If a player has the larger card in the final play they win
// If a player wins when they play 6 in their last play their score is worth 3 points
// If a player wins when they play 7 in their last play their score is worth 2 points
// If a player wins with 6 in the fourth card and 7 in the final card their score is worth 5 points


document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/' + choice

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
