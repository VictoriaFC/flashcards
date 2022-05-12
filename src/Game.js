const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  currentRound() {
    // keeps track of the current round
  }

  start() {
    // Creates Cards
    // Puts Cards in a Deck
    // Creates a new Round using the Deck
    // invokes printMessage to display the message in the CLI
    // invokes printQuestion to kick off our helper functions that allow interaction via the CLI
  }
}

module.exports = Game;
