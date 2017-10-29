// GLOBALS
var restartButton = document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');
// Waits for page to load and then executes next functions
document.onreadystatechange = function() {
	if (document.readyState = "interactive") {
		restartButton.onclick = startGame;
		startGame();
	}
};

function startGame () {
	// Reset the turn counter
	turn = 0;
	// Remove winner notification and make sure div is hidden
	winnerMessage.innerHTML = 0;
	notification.style.display = 'none';
	// CLear board and Add click events on squares
	for (i = 0; i < spaces.length; i++) {
		spaces[i].innerHTML = '';
		spaces[i].addEventListener("click", takeSpace);
	}
}

function takeSpace() {

	turn++;
	// depending if 'turn' was an even or odd integer, the symbol would change between X/O.
	var currentPlayer = symbols[turn % 2];
	this.innerHTML = symbols[turn % 2];
	this.removeEventListener("click", takeSpace);
	// Checking for winner by refering to winable combinations from wins.js
	for (i = 0; i < wins.length; i++) {
		if (checkForWin(wins[i])) {
			// No more clicking after win
		for (var j = 0; j < wins.length; j++) {
			spaces[j].removeEventListener("click", takeSpace);
		}
			// Notify the players that the game is over
			notification.style.display = 'block';
			winnerMessage.innerHTML = "yayyyy!!!! " + currentPlayer + " won!!!!!!";
		}
		else {
			if (turn == 9) {
				if (notification.style.display != 'block') {

				notification.style.display = "block";
				winnerMessage.innerHTML = "BUMMER! you both lose!";
			}
			}
		}
		
	}

}


function checkForWin(winArray) {
	// If spaces is not completely empty && 3 of the spaces in a row match the winArray with the same symbol, then there is a winner.
	return spaces[winArray[0]].innerHTML !== '' &&
		spaces[winArray[0]].innerHTML === spaces[winArray[1]].innerHTML &&
		spaces[winArray[0]].innerHTML === spaces[winArray[2]].innerHTML;

		}

























