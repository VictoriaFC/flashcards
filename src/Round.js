const Turn = require('../src/Turn');


class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    let newTurn = new Turn(guess, currentCard)
    this.turns++
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);
    }
    return newTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    let incorrectPercentage = this.incorrectGuesses.length / this.turns * 100
    return 100 - incorrectPercentage.toFixed(2)
  }

  endRound() {
    const message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(message)
    return message;
  }
}

module.exports = Round;
