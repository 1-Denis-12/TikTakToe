
function createPlayer(name, mark) {
    const playerName = name;
    const marker = mark
    const playerScore = 0;
    return {playerName, playerScore, marker}
}

function player(player1, player2) {
    const score = document.querySelector("#title");
    var playerone = createPlayer(player1, "o");
    var playertwo = createPlayer(player2, "x");
    players = {playerone, playertwo};
    return {players};
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
    const {playerone, playertwo} = players;
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
        else if (gameArray.every((value) => value != "")) {
            winner = "It's a tie!!!"
            console.log(winner)
            turnCounter = "game over"
        }
    }
    const playerTurn = function(num) { 
        if(turnCounter != "game over") { 
            if(turnCounter % 2 === 0) {
                xMark(num) 
            } 
            else {
                oMark(num)
            }
            turnCounter++
            gameOver()
        }}
        if(winner == "o") {
            playerone.playerScore += 1;
        } else if(winner == "x"){
            playertwo.playerScore += 1;
        }
    const restart = function() {
        turnCounter = 1;
        winner = "";
        gameArray =  ["","","","","","","","",""];
    }
        
    return {playerTurn, gameArray, winner, restart};
})()

const render = (function() {
    const board = document.querySelector("#board");
    const score = document.querySelector("#title");
    const restartButton = document.querySelector("#restart"); 
    const {gameArray} = gameBoard;
    const {playerTurn, restart} = game;
    

    
    const gameIntro = ()=> {
        score.innerHTML = `<div class="playerNames"> 
                            <form>
                            <lable for="player1"> O name:</lable>
                            <input type="text" Id="player1" name="player1"value="player 1">
                            <lable for="player2"> X name:</lable>
                            <input type="text Id="player2" name="player2" value="player 2">
                            <button type="button" onclick="player(this.form.player1.value, this.form.player2.value),render.fillBoard()">Start</button>
                            </form>
                        </div>`
        restartButton.innerHTML = `<button class="restart_button" onclick="restart">Restart</button>`
    } 

    const fillBoard = ()=> {
        const {playerone, playertwo} = players;
        board.innerHTML = "";
        score.innerHTML = `<div class ="playerNames">
                            <h1>${playerone.playerName}: ${playerone.playerScore}</h1>
                            <h1>${playertwo.playerName}: ${playertwo.playerScore}</h1>
                            </div>`;
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



    return {fillBoard, gameIntro};
})()
render.gameIntro()
// render.fillBoard()

console.log(gameBoard.gameArray)