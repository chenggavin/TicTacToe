// GLOBALS
var restartButton = document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;

// Wais for page to load doing interesting things
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


	// CLear board and Add click events on squares
	for (i = 0; i < spaces.length; i++) {
		spaces[i].innerHTML = ''
		spaces[i].addEventListener("click", takeSpace);
	}
}

function takeSpace() {

	turn++;
	this.innerHTML = symbols[turn % 2];
	this.removeEventListener("click", takeSpace);

	for (i = 0; i < wins.length; i++) {
		if (checkForWin(wins[i])) {
			alert ("whoo hoo!");
		}
	}
}


function checkForWin(winArray) {


	return spaces[winArray[0]] !== '' &&
		spaces[winArray[0]] === spaces[winArray[1]] &&
		spaces[winArray[0]] === spaces[winArray[2]];

		}
























