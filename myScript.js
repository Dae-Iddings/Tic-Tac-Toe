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
        const renderSpot1 = document.querySelector('#spot1');
        const renderSpot2 = document.querySelector('#spot2');
        const renderSpot3 = document.querySelector('#spot3');
        const renderSpot4 = document.querySelector('#spot4');
        const renderSpot5 = document.querySelector('#spot5');
        const renderSpot6 = document.querySelector('#spot6');
        const renderSpot7 = document.querySelector('#spot7');
        const renderSpot8 = document.querySelector('#spot8');
        const renderSpot9 = document.querySelector('#spot9');
        renderSpot1.textContent = gameBoard.spot1('x');
        renderSpot2.textContent = gameBoard.spot2('o');
        renderSpot3.textContent = gameBoard.spot3('x');
        renderSpot4.textContent = gameBoard.spot4('o');
        renderSpot5.textContent = gameBoard.spot5('x');
        renderSpot6.textContent = gameBoard.spot6('o');
        renderSpot7.textContent = gameBoard.spot7('x');
        renderSpot8.textContent = gameBoard.spot8('o');
        renderSpot9.textContent = gameBoard.spot9('x');
    })(); 
