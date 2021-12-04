// This will be responsible for holding all the logic related to configuring the game itself.//

function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        startNewGameErrorMessage.textContent = 'Ooops! You haven\'t entered both player names yet!';
        return;
    } else {
        startNewGameErrorMessage.style.display = 'none';
    }
    gameAreaElement.style.display = 'block';

}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
}

function selectGameField(event) {
    event.target.textContent = players[activePlayer].symbol; //players[0]
    event.target.classList.add('disabled');
    switchPlayer();
}