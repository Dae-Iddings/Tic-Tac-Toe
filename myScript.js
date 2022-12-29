const gameBoard = (() => {
    const spot1 = (marker) => marker
    const spot2 = (marker) => marker
    const spot3 = (marker) => marker
    const spot4 = (marker) => marker
    const spot5 = (marker) => marker
    const spot6 = (marker) => marker
    const spot7 = (marker) => marker
    const spot8 = (marker) => marker
    const spot9 = (marker) => marker
    return {
        spot1,
        spot2,
        spot3,
        spot4,
        spot5,
        spot6,
        spot7,
        spot8,
        spot9
    };
    
     
})();
const player = (playerName, marker) => {
    let newName = playerName;
    let playerMarker = marker;
    return {newName, playerMarker}
}
  const renderGameBoard = (() => {
        const spot1 = document.querySelector('#spot1');
        const spot2 = document.querySelector('#spot2');
        const spot3 = document.querySelector('#spot3');
        const spot4 = document.querySelector('#spot4');
        const spot5 = document.querySelector('#spot5');
        const spot6 = document.querySelector('#spot6');
        const spot7 = document.querySelector('#spot7');
        const spot8 = document.querySelector('#spot8');
        const spot9 = document.querySelector('#spot9');
        spot1.addEventListener('click', () => {
            if (!spot1.textContent) {
                spot1.textContent = gameBoard.spot1('x');
            }
        })
        spot2.addEventListener('click', () => {
            if (!spot2.textContent) {
                spot2.textContent = gameBoard.spot2('o');
            }
        })
        spot3.addEventListener('click', () => {
            if (!spot3.textContent) {
                spot3.textContent = gameBoard.spot3('x');
            }
        })
        spot4.addEventListener('click', () => {
            if (!spot4.textContent) {
                spot4.textContent = gameBoard.spot4('o');
            }
        })
        spot5.addEventListener('click', () => {
            if (!spot5.textContent) {
                spot5.textContent = gameBoard.spot5('x');
            }
        })
        spot6.addEventListener('click', () => {
            if (!spot6.textContent) {
                spot6.textContent = gameBoard.spot6('o');
            }
        })
        spot7.addEventListener('click', () => {
            if (!spot7.textContent) {
                spot7.textContent = gameBoard.spot7('x');
            }
        })
        spot8.addEventListener('click', () => {
            if (!spot8.textContent) {
                spot8.textContent = gameBoard.spot8('o');
            }
        })
        spot9.addEventListener('click', () => {
            if (!spot9.textContent) {
                spot9.textContent = gameBoard.spot9('x');
            }
        })
    })(); 

