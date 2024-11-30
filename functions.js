
function createPlayer(name, mark) {
    const playerName = name;
    const marker = mark
    const playerScore = "";
    return {playerName, playerScore, marker}
}


const gameBoard = (function () {
    const gameArray =  ["0","1","2","3","4","5","6","7","8"];
    // var turnCounter = 1;
    const xMark = (num) =>  gameArray[num] != "o" && gameArray[num] != "x" ? gameArray[num] = "x" : console.log("place taken");
    const oMark = (num) => gameArray[num] != "x" && gameArray[num] != "o" ? gameArray[num] = "o" : console.log("place taken");
    // const playerTurn = (num) => turnCounter % 2 === 0 ? oMark(num) && turnCounter++ : xMark(num) && turnCounter++;
    return {gameArray, oMark, xMark};
})()


const game = (function (){
    var turnCounter = 1
    var winner = ""
    const {xMark, oMark, gameArray} = gameBoard;
    const gameOver = function() {
        if(gameArray[0] == gameArray[1] && gameArray[0] == gameArray[2]) {
            winner = `The Winner is: ${gameArray[0]}`;
            console.log(winner);
        }
        else if(gameArray[3] == gameArray[4] && gameArray[3] == gameArray[5]) {
            winner = `The Winner is: ${gameArray[3]}`;
            console.log(winner);
        }
        else if(gameArray[6] == gameArray[7] && gameArray[6] == gameArray[8]) {
            winner = `The Winner is: ${gameArray[6]}`;
            console.log(winner);
        }
        else if(gameArray[0] == gameArray[3] && gameArray[0] == gameArray[6]) {
            winner = `The Winner is: ${gameArray[0]}`;
            console.log(winner);
        }
        else if(gameArray[1] == gameArray[4] && gameArray[1] == gameArray[7]) {
            winner = `The Winner is: ${gameArray[1]}`;
            console.log(winner);
        }
        else if(gameArray[2] == gameArray[5] && gameArray[2] == gameArray[5]) {
            winner = `The Winner is: ${gameArray[2]}`;
            console.log(winner);
        }
        else if(gameArray[0] == gameArray[4] && gameArray[0] == gameArray[8]) {
            winner = `The Winner is: ${gameArray[0]}`;
            console.log(winner);
        }
        else if(gameArray[2] == gameArray[4] && gameArray[2] == gameArray[6]) {
            winner = `The Winner is: ${gameArray[2]}`;
            console.log(winner);
        }
    }
    const playerTurn = (num) => turnCounter % 2 === 0 ? xMark(num) && turnCounter++ && gameOver() : oMark(num) && turnCounter++ && gameOver();
    return {playerTurn, gameArray, winner};
})()

game.playerTurn(0);
game.playerTurn(5)
game.playerTurn(0)
game.playerTurn(9)
game.playerTurn(1)
console.log(gameBoard.gameArray)