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
console.log(gameBoard.spot1('x'))
