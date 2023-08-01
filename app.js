const Game = require('./game');

function main() {
    const Players = 3;

    if (Players < 2 || Players > 4) {
    console.log('Error: The number of players must be between 2 and 4.');
    return;
    }

    const Decks = 1;

    const game = new Game(Players, Decks);
    game.playGame();
}

main();