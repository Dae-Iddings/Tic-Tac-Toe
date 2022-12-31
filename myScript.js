const player = (playerName, marker) => {
    let currentPlayerName = playerName;
    let playerMarker = marker;
    return { currentPlayerName, playerMarker }
}
const form = document.querySelector('.newGame')
let players = [];
     const submitButton = document.querySelector('#submitButton');
     
     submitButton.addEventListener('click', () => {
     let playerOneInput = document.querySelector('#playerOne');
     let playerTwoInput = document.querySelector('#playerTwo'); 
     let playerOneName = playerOneInput.value;  
     let playerTwoName = playerTwoInput.value;
     players.push(playerOneName)
     players.push(playerTwoName)
     console.log(playerOneName);
     form.style.display = 'none'
     
const renderGameBoard = (() => {
    
     console.log(players)
    function isEven(n) {
        return n % 2 == 0;
     }
     
     function isOdd(n) {
        return Math.abs(n % 2) == 1;
     }
     
    let roundsPlayed = []
    const playerOne = player(players[0], 'X');
    const playerTwo = player(players[1], 'O');
    const spot1 = document.querySelector('#spot1');
    const spot2 = document.querySelector('#spot2');
    const spot3 = document.querySelector('#spot3');
    const spot4 = document.querySelector('#spot4');
    const spot5 = document.querySelector('#spot5');
    const spot6 = document.querySelector('#spot6');
    const spot7 = document.querySelector('#spot7');
    const spot8 = document.querySelector('#spot8');
    const spot9 = document.querySelector('#spot9');
    const newGameButton = document.querySelector('#newGameButton');
    
    const subtitle = document.querySelector('.subtitle');
    spot1.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot1.textContent) {
            spot1.textContent = playerOne.playerMarker;
            let move = 'x spot 1';
            roundsPlayed.push(move);
            gameWon()
        } else if (isOdd(roundsPlayed.length) == true && !spot1.textContent) {
            spot1.textContent = playerTwo.playerMarker;;
            let move = `o spot 1`;
            roundsPlayed.push(move); 
            gameWon()
        }
    });
    spot2.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot2.textContent) {
            spot2.textContent = playerOne.playerMarker;
            let move = `x spot 2`;
            roundsPlayed.push(move);
            gameWon()
        } else if (isOdd(roundsPlayed.length) == true && !spot2.textContent) {
            spot2.textContent = playerTwo.playerMarker;;
            let move = `o spot 2`;
            roundsPlayed.push(move); 
            gameWon()
        }
    });
    spot3.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot3.textContent) {
            spot3.textContent = playerOne.playerMarker;
            let move = `x spot 3`;
            roundsPlayed.push(move);
            gameWon()
        } else if (isOdd(roundsPlayed.length) == true && !spot3.textContent) {
            spot3.textContent = playerTwo.playerMarker;;
            let move = `o spot 3`;
            roundsPlayed.push(move); 
            gameWon()
        }
    });
    spot4.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot4.textContent) {
            spot4.textContent = playerOne.playerMarker;
            let move = `x spot 4`;
            roundsPlayed.push(move);
            gameWon()
        } else if (isOdd(roundsPlayed.length) == true && !spot4.textContent) {
            spot4.textContent = playerTwo.playerMarker;;
            let move = `o spot 4`;
            roundsPlayed.push(move); 
            gameWon()
        }
    });
    spot5.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot5.textContent) {
            spot5.textContent = playerOne.playerMarker;
            let move = `x spot 5`;
            roundsPlayed.push(move);
            gameWon()
        } else if (isOdd(roundsPlayed.length) == true && !spot5.textContent) {
            spot5.textContent = playerTwo.playerMarker;;
            let move = `o spot 5`;
            roundsPlayed.push(move); 
            gameWon()
        }
    });
    spot6.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot6.textContent) {
            spot6.textContent = playerOne.playerMarker;
            let move = `x spot 6`;
            roundsPlayed.push(move);
            gameWon()
        } else if (isOdd(roundsPlayed.length) == true && !spot6.textContent) {
            spot6.textContent = playerTwo.playerMarker;;
            let move = `o spot 6`;
            roundsPlayed.push(move); 
            gameWon()
        }
    });
    spot7.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot7.textContent) {
            spot7.textContent = playerOne.playerMarker;
            let move = `x spot 7`;
            roundsPlayed.push(move);
            gameWon()
        } else if (isOdd(roundsPlayed.length) == true && !spot7.textContent) {
            spot7.textContent = playerTwo.playerMarker;;
            let move = `o spot 7`;
            roundsPlayed.push(move); 
            gameWon()
        }
    });
    spot8.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot8.textContent) {
            spot8.textContent = playerOne.playerMarker;
            let move = `x spot 8`;
            roundsPlayed.push(move);
            gameWon()
        } else if (isOdd(roundsPlayed.length) == true && !spot8.textContent) {
            spot8.textContent = playerTwo.playerMarker;;
            let move = `o spot 8`;
            roundsPlayed.push(move); 
        }
    });
    spot9.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot9.textContent) {
            spot9.textContent = playerOne.playerMarker;
            let move = `x spot 9`;
            roundsPlayed.push(move);
            gameWon()
        } else if (isOdd(roundsPlayed.length) == true && !spot9.textContent) {
            spot9.textContent = playerTwo.playerMarker;;
            let move = `o spot 9`;
            roundsPlayed.push(move); 
            gameWon()
        }
    });
    newGameButton.addEventListener('click', () => {
        form.style.display = 'block'
    })
    function gameWon() {
        // checks top row for wins 
        if(spot1.textContent == playerOne.playerMarker && spot2.textContent == playerOne.playerMarker && spot3.textContent == playerOne.playerMarker) {
            subtitle.textContent = `${playerOne.currentPlayerName} you won!`
            clearBoard()
        } else if (spot1.textContent == playerTwo.playerMarker && spot2.textContent == playerTwo.playerMarker && spot3.textContent == playerTwo.playerMarker) {
            subtitle.textContent = `${playerTwo.currentPlayerName} you won!`
            clearBoard()
            // checks second row for win
        }else if(spot4.textContent == playerOne.playerMarker && spot5.textContent == playerOne.playerMarker && spot6.textContent == playerOne.playerMarker) {
            subtitle.textContent = `${playerOne.currentPlayerName} you won!`
            clearBoard()
        } else if (spot4.textContent == playerTwo.playerMarker && spot5.textContent == playerTwo.playerMarker && spot6.textContent == playerTwo.playerMarker) {
            subtitle.textContent = `${playerTwo.currentPlayerName} you won!`
            clearBoard()
            //checks bottom row for win
        } else if(spot7.textContent == playerOne.playerMarker && spot8.textContent == playerOne.playerMarker && spot9.textContent == playerOne.playerMarker) {
            subtitle.textContent = `${playerOne.currentPlayerName} you won!`
            clearBoard()
        } else if (spot7.textContent == playerTwo.playerMarker && spot8.textContent == playerTwo.playerMarker && spot9.textContent == playerTwo.playerMarker) {
            subtitle.textContent = `${playerTwo.currentPlayerName} you won!`
            clearBoard()
            //1st column for win
        } else if(spot1.textContent == playerOne.playerMarker && spot4.textContent == playerOne.playerMarker && spot7.textContent == playerOne.playerMarker) {
            subtitle.textContent = `${playerOne.currentPlayerName} you won!`
            clearBoard()
        } else if (spot1.textContent == playerTwo.playerMarker && spot4.textContent == playerTwo.playerMarker && spot7.textContent == playerTwo.playerMarker) {
            subtitle.textContent = `${playerTwo.currentPlayerName} you won!`
            clearBoard()
            // checks 2nd column for win
        } else if(spot2.textContent == playerOne.playerMarker && spot5.textContent == playerOne.playerMarker && spot8.textContent == playerOne.playerMarker) {
            subtitle.textContent = `${playerOne.currentPlayerName} you won!`
            clearBoard()
        } else if (spot2.textContent == playerTwo.playerMarker && spot5.textContent == playerTwo.playerMarker && spot8.textContent == playerTwo.playerMarker) {
            subtitle.textContent = `${playerTwo.currentPlayerName} you won!`
            clearBoard()
            //checks last column for win
        } else if(spot3.textContent == playerOne.playerMarker && spot6.textContent == playerOne.playerMarker && spot9.textContent == playerOne.playerMarker) {
            subtitle.textContent = `${playerOne.currentPlayerName} you won!`
            clearBoard()
        } else if (spot3.textContent == playerTwo.playerMarker && spot6.textContent == playerTwo.playerMarker && spot9.textContent == playerTwo.playerMarker) {
            subtitle.textContent = `${playerTwo.currentPlayerName} you won!`
            clearBoard()
            //checks diagonal top left for wins
        } else if(spot1.textContent == playerOne.playerMarker && spot5.textContent == playerOne.playerMarker && spot9.textContent == playerOne.playerMarker) {
            subtitle.textContent = `${playerOne.currentPlayerName} you won!`
            clearBoard()
        } else if (spot1.textContent == playerTwo.playerMarker && spot5.textContent == playerTwo.playerMarker && spot9.textContent == playerTwo.playerMarker) {
            subtitle.textContent = `${playerTwo.currentPlayerName} you won!`
            clearBoard()
            //checks diagonal top right for win
        } else if(spot3.textContent == playerOne.playerMarker && spot5.textContent == playerOne.playerMarker && spot7.textContent == playerOne.playerMarker) {
            subtitle.textContent = `${playerOne.currentPlayerName} you won!`
            clearBoard()
        } else if (spot3.textContent == playerTwo.playerMarker && spot5.textContent == playerTwo.playerMarker && spot7.textContent == playerTwo.playerMarker) {
            subtitle.textContent = `${playerTwo.currentPlayerName} you won!`
            clearBoard()
        }
    }
    function clearBoard() {
        spot1.textContent = ''
        spot2.textContent = ''
        spot3.textContent = ''
        spot4.textContent = ''
        spot5.textContent = ''
        spot6.textContent = ''
        spot7.textContent = ''
        spot8.textContent = ''
        spot9.textContent = ''
        roundsPlayed = [];
    }
})();
})