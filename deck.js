class Deck {
    constructor(cards){
        this.cards = cards;;
    }
    
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

    draw(){
        return this.cards.shift();
    };

    empty(){
        return this.cards.length === 0;
    };
};

module.exports = Deck;