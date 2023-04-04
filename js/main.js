// TODO: Use the api from https://deckofcardsapi.com/
// Get a deck from the API - Done
// Link the deck to the rest of the game - Done
// Ask Player to enter their name - Done
// Store their name - Done
// Ask user to begin game - Done
// Ask player to ask if cards should be shuffled - Done
// Shuffle cards if the user clicks the button - Done
// Ask player to deal the cards - Done
// Draw 5 cards for each player - Done
// Assign cards to players
// Select applicable cards only -Done
// Player / Bot goes first
// For each card played the opponent must play a card of the same type if they have it. If they pick any other card they should'nt be allowed
// If they have multiple of the same they can pick which of that one they play
// If they dont they pick any other card
// If a player has the larger card in the final play they win
// If a player wins when they play 6 in their last play their score is worth 3 points
// If a player wins when they play 7 in their last play their score is worth 2 points
// If a player wins with 6 in the fourth card and 7 in the final card their score is worth 5 points
let deckID = ''
let userName = ''
let cardsLeft = ''
const cardsAccepted = `AS,KS,QS,JS,0S,9S,8S,7S,6S,AD,KD,QD,JD,0D,9D,8D,7D,6D,AC,KC,QC,JC,0C,9C,8C,7C,6C,AH,KH,QH,JH,0H,9H,8H,7H,6H`

// Get a Deck of Cards
document.querySelector('#startGame').addEventListener('click', getDeck)
function getDeck() {
  // const choice = document.querySelector('input').value
  const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${cardsAccepted}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckID = data.deck_id
      document.querySelector('#startGame').disabled = true
      userName = document.querySelector('#userName').value
      document.querySelector('h3').innerText += ` ${userName} to the game!`
      showNumberOfCardsLeft(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

// Show cards left
function showNumberOfCardsLeft(data) {
  document.querySelector('p').innerText += ` ${data.remaining}`
}

// Shuffle Cards
document.querySelector('#shuffle').addEventListener('click', shuffle)

function shuffle() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/?remaining=true`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log("Cards shuffled")
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

// Deal Cards
document.querySelector('#dealCards').addEventListener('click', dealCards)

function dealCards() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=10`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log("Cards dealt")
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}


// Face Cards conversion to Numbers
function cardsConvertion(val) {
  if (val == 'ACE') {
    return 14
  } else if (val == 'KING') {
    return 13
  }
  else if (val == 'QUEEN') {
    return 12
  }
  else if (val == 'JACK') {
    return 11
  }

}