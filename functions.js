const gameBoard = (function () {
    const gameArray = ["","","","","","","","",""];
    var turnCounter = 1;
    const xMark = (num) =>  gameArray[num] == "" ? gameArray[num] = "x" : console.log("place taken");
    const oMark = (num) => gameArray[num] == "" ? gameArray[num] = "o" : console.log("place taken");
    const playerTurn = (num) => turnCounter % 2 === 0 ? oMark(num) && turnCounter++ : xMark(num) && turnCounter++;
    return {gameArray, playerTurn};
})()

// const game = (function (){
//     var turnCounter = 1
//     const {xMark, oMark, gameArray} = gameBoard();
//     const playerTurn = (num) => turnCounter % 2 === 0 ? xMark(num) && turnCounter++ : oMark(num) && turnCounter++;
//     return {playerTurn};
// })()

// game.playerTurn(1);
gameBoard.playerTurn(3)
gameBoard.playerTurn(7)
gameBoard.playerTurn(5)
gameBoard.playerTurn(0)
console.log(gameBoard.gameArray)