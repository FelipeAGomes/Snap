class Hand{
    constructor(players, cards){
        this.players = players;
        this.cards = cards;
    };

    // I used this article https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/ to help me create the shuffling.
    // I used this article https://www.w3schools.com/js/js_math.asp to help me work with math object.

    shuffle() { 
        let i = this.cards.length, ri, temp;
        while( i !== 0 ){
            ri = Math.floor(Math.random() * i);;
            i--;

            temp = this.cards[i];
            this.cards[i] = this.cards[ri];
            this.cards[ri] = temp;
        };
    };

    dCards(){
        this.shuffle();

        const numPlayers = this.players.length;
        const numCardPP = Math.floor(this.cards.length / numPlayers);
        const remainingCards = this.cards.length % numPlayers;

        let startI = 0;
        for (let i = 0; i <numPlayers; i++){
            const numCard = numCardPP + (i < remainingCards ? 1 : 0);
            const playerHand = this.cards.slice(startI, startI + numCard);
            this.players[i].addCard(playerHand);
            startI +=numCard;
        };
    };
};

module.exports = Hand;