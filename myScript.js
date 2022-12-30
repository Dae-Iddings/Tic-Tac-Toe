const player = (playerName, marker) => {
    let currentPlayerName = playerName;
    let playerMarker = marker;
    return { currentPlayerName, playerMarker }
}

const renderGameBoard = (() => {
    function isEven(n) {
        return n % 2 == 0;
     }
     
     function isOdd(n) {
        return Math.abs(n % 2) == 1;
     }
    let roundsPlayed = []
    const playerOne = player('Dae', 'X');
    const playerTwo = player('Jaden', 'O');
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
    const form = document.querySelector('.newGame')
    spot1.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot1.textContent) {
            spot1.textContent = playerOne.playerMarker;
            let move = 'x spot 1';
            roundsPlayed.push(move);
        } else if (isOdd(roundsPlayed.length) == true && !spot1.textContent) {
            spot1.textContent = playerTwo.playerMarker;;
            let move = `o spot 1`;
            roundsPlayed.push(move); 
        }
    });
    spot2.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot2.textContent) {
            spot2.textContent = playerOne.playerMarker;
            let move = `x spot 2`;
            roundsPlayed.push(move);
            console.log(roundsPlayed.length)
        } else if (isOdd(roundsPlayed.length) == true && !spot2.textContent) {
            spot2.textContent = playerTwo.playerMarker;;
            let move = `o spot 2`;
            roundsPlayed.push(move); 
            console.log(roundsPlayed.length)
        }
    });
    spot3.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot3.textContent) {
            spot3.textContent = playerOne.playerMarker;
            let move = `x spot 3`;
            roundsPlayed.push(move);
        } else if (isOdd(roundsPlayed.length) == true && !spot3.textContent) {
            spot3.textContent = playerTwo.playerMarker;;
            let move = `o spot 3`;
            roundsPlayed.push(move); 
        }
    });
    spot4.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot4.textContent) {
            spot4.textContent = playerOne.playerMarker;
            let move = `x spot 4`;
            roundsPlayed.push(move);
        } else if (isOdd(roundsPlayed.length) == true && !spot4.textContent) {
            spot4.textContent = playerTwo.playerMarker;;
            let move = `o spot 4`;
            roundsPlayed.push(move); 
        }
    });
    spot5.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot5.textContent) {
            spot5.textContent = playerOne.playerMarker;
            let move = `x spot 5`;
            roundsPlayed.push(move);
        } else if (isOdd(roundsPlayed.length) == true && !spot5.textContent) {
            spot5.textContent = playerTwo.playerMarker;;
            let move = `o spot 5`;
            roundsPlayed.push(move); 
        }
    });
    spot6.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot6.textContent) {
            spot6.textContent = playerOne.playerMarker;
            let move = `x spot 6`;
            roundsPlayed.push(move);
        } else if (isOdd(roundsPlayed.length) == true && !spot6.textContent) {
            spot6.textContent = playerTwo.playerMarker;;
            let move = `o spot 6`;
            roundsPlayed.push(move); 
        }
    });
    spot7.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot7.textContent) {
            spot7.textContent = playerOne.playerMarker;
            let move = `x spot 7`;
            roundsPlayed.push(move);
        } else if (isOdd(roundsPlayed.length) == true && !spot7.textContent) {
            spot7.textContent = playerTwo.playerMarker;;
            let move = `o spot 7`;
            roundsPlayed.push(move); 
        }
    });
    spot8.addEventListener('click', () => {
        if (isEven(roundsPlayed.length) == true && !spot8.textContent) {
            spot8.textContent = playerOne.playerMarker;
            let move = `x spot 8`;
            roundsPlayed.push(move);
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
        } else if (isOdd(roundsPlayed.length) == true && !spot9.textContent) {
            spot9.textContent = playerTwo.playerMarker;;
            let move = `o spot 9`;
            roundsPlayed.push(move); 
        }
    });
    newGameButton.addEventListener('click', () => {
        form.style.display = 'block'
    })
})();