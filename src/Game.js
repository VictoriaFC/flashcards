const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map((cardObj) => {
      return new Card(cardObj.id, cardObj.question, cardObj.answers, cardObj.correctAnswer);
    })
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);

    this.printMessage(deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
}

module.exports = Game;
