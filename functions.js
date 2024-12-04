
function createPlayer(name, mark) {
    const playerName = name;
    const marker = mark
    const playerScore = "";
    return {playerName, playerScore, marker}
}


const gameBoard = (function () {
    const gameArray =  ["","","","","","","","",""];
    const xMark = (num) => gameArray[num] == "" ? gameArray[num] = "x" : console.log("place taken");
    const oMark = (num) => gameArray[num] == "" ? gameArray[num] = "o" : console.log("place taken");
    return {gameArray, oMark, xMark};
})()



const game = (function (){
    var turnCounter = 1
    var winner = ""
    const {xMark, oMark, gameArray} = gameBoard;
    const gameOver = function() {
        if(gameArray[0] != "" && gameArray[0] == gameArray[1] && gameArray[0] == gameArray[2]) {
            winner = `The Winner is: ${gameArray[0]}`;
            console.log(winner);
            turnCounter = "game over"
        }
        else if(gameArray[3] != "" && gameArray[3] == gameArray[4] && gameArray[3] == gameArray[5]) {
            winner = `The Winner is: ${gameArray[3]}`;
            console.log(winner);
            turnCounter = "game over"
        }
        else if(gameArray[6] != "" && gameArray[6] == gameArray[7] && gameArray[6] == gameArray[8]) {
            winner = `The Winner is: ${gameArray[6]}`;
            console.log(winner);
            turnCounter = "game over"
        }
        else if(gameArray[3] != "" && gameArray[0] == gameArray[3] && gameArray[0] == gameArray[6]) {
            winner = `The Winner is: ${gameArray[0]}`;
            console.log(winner);
            turnCounter = "game over"
        }
        else if(gameArray[4] != "" && gameArray[1] == gameArray[4] && gameArray[1] == gameArray[7]) {
            winner = `The Winner is: ${gameArray[1]}`;
            console.log(winner);
            turnCounter = "game over"
        }
        else if(gameArray[2] != "" && gameArray[2] == gameArray[5] && gameArray[2] == gameArray[5]) {
            winner = `The Winner is: ${gameArray[2]}`;
            console.log(winner);
            turnCounter = "game over"
        }
        else if(gameArray[0] != "" && gameArray[0] == gameArray[4] && gameArray[0] == gameArray[8]) {
            winner = `The Winner is: ${gameArray[0]}`;
            console.log(winner);
            turnCounter = "game over"
        }
        else if(gameArray[2] != "" && gameArray[2] == gameArray[4] && gameArray[2] == gameArray[6]) {
            winner = `The Winner is: ${gameArray[2]}`;
            console.log(winner);
            turnCounter = "game over"
        }
    }
    const playerTurn = function(num) { 
        if(turnCounter != "game over") { 
            if(turnCounter % 2 === 0) {
                xMark(num) 
                turnCounter++ 
                gameOver() 
            } 
            else {
                oMark(num)
                turnCounter++
                gameOver()
            }
        }}
    return {playerTurn, gameArray, winner};
})()

const render = (function() {
    const board = document.querySelector("#board");
    const {gameArray} = gameBoard;
    const {playerTurn} = game;
    const fillBoard = ()=> {
        board.innerHTML = ""
        for(i = 0; i < 9; i++) {
        const square = `<div class="square"><h1>${gameArray[i]}</h1></div>`
        board.innerHTML += square;
       
        }
    
        const boardSquare = document.querySelectorAll(".square");
        for(let i = 0; i < 9; i++){
        boardSquare[i].addEventListener("click",  ()=> playerTurn(i));
        boardSquare[i].addEventListener("click", fillBoard);
        
}
}

    return {fillBoard};
})()
render.fillBoard()

console.log(gameBoard.gameArray)