// TODO: Use the api from https://deckofcardsapi.com/
// Get a deck from the API - Done
// Link the deck to the rest of the game
// Ask Player to enter their name - Done
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
let deckID = ''

document.querySelector('#startGame').addEventListener('click', getDeck)

function getDeck() {
  // const choice = document.querySelector('input').value
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckID = data.deck_id
      console.log(deckID)
      console.log(data.remaining)
      document.querySelector('#startGame').disabled = true
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

