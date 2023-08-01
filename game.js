const Card = require('./card');
const Deck = require('./deck');
const Hand = require('./hand');
const Player = require('./player');


class Game{
    constructor(nP, nD) {
        this.players = Array.from({length: nP}, ()=> new Player());
        this.cards = this.createDeck(nD);
        this.deck = new Deck(this.cards);
    };

    createDeck(nD){
        const s = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const v = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const cards = [];
        for( let i = 0; i < nD; i++){
            for( const suit of s ){
                for( const value of v){
                    cards.push(new Card(suit, value));
                };
            };
        };
        console.log('DECK',cards);
        return cards;
    };

    distributeCards() {
        const hand = new Hand(this.players, this.cards);
        hand.dCards();
        console.log('RANDOM CARDS',hand.cards)
    }
    
    showHands() {
        console.log("Player's cards:");
        this.players.forEach((player, index) => {
          console.log(`Player ${index + 1}:`);
          player.showHand();
          console.log('-----------------------------------');
        });
    }

    playGame() {
        console.log('Starting the game...');
        this.distributeCards();
        this.showHands();
        console.log('Game over.');
    }
};

module.exports = Game;