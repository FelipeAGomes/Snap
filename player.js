class Player{
    constructor(){
        this.hand = [];
    };

    getHand(){
        return this.hand;
    };

    addCard(cards){
        this.hand.push(...cards);
    };

    playCard(){
        return this.hand.pop();
    };

    showHand() {
        this.hand.forEach((card) => {
          console.log(`${card.value} of ${card.suit}`);
        });
    }
};

module.exports = Player;