/* ------------------------------------------------------------------
---------------------------------------------------------------------
BoardSwap Scripts 
--------------------------------------------------------------------
-------------------------------------------------------------------*/ 
//record empty space on the board
var emptySpace = 2;
//record minimum possible moves for this board
var minimumMoves = 8;
//record status of board being complete
var status = false;
//array to record current state of the board
var board = ["w","w","_","b", "b"];
//record how many moves have been made
var moveCounter = 0;

//initialise the game
function playGame() {
	resetBoard();
	//printBoard(board);
	watchClicks();
};

//record which space on the board is empty
function recordEmptySpace(number) {
	emptySpace = number;
};

//check if board is complete
function updateStatus(board) {

	var centre = Math.floor(board.length/2);
	
	//create 
	var firstHalf = board.slice(0, centre);
	var secondHalf = board.slice(centre + 1, board.length);

	if (firstHalfTrue(firstHalf) && secondHalfTrue(secondHalf)) {
		status = true;
		showResult();
	}

	console.log("Status is " + status);
};

function firstHalfTrue(board) {
	
	for (var i = 0; i < board.length; i++) {
		if (board[i] !== "b") {
			return false;
			break;
		} 
	} 
	return true;
};

function secondHalfTrue(board) {
	var status = false;
	for (var i = 0; i < board.length; i++) {
		if (board[i] !== "w") {
			return false;
			break;
		} 
	} 
	return true;
};

function updateMoveColour(number) {
	moveColour = board[number];
	console.log("Move Colour is " + moveColour);
};

function movePiece(number){
	//number is the piece to be moved
	updateMoveColour(number);
	
	//swap pieces in array
	changeColours(emptySpace, number);
	board[emptySpace]=moveColour;
	emptySpace = number;
	board[number] = "_";
	moveCounter++;
	printBoard(board);
	updateStatus(board);
	document.getElementById('yourMoves').innerHTML=String(moveCounter);

};

function changeColours(oldEmpty, newEmpty) {
	var oldName = "piece" + oldEmpty;
	var newName = "piece" + newEmpty;

	var oldColour = document.getElementById(oldName);
	var newColour = document.getElementById(newName);

	if (moveColour==="b") {
		oldColour.style.background = "black";
	} else {
		oldColour.style.background = "rgb(193,28,28)";
		oldColour.style.border = "1px solid black";
	}

	newColour.style.background = "white";
	newColour.style.border = "none";

}

//eventListener for clicks
function watchClicks(){
	var buttons = document.getElementsByClassName('pieceBox');

	for (var i = 0; i < buttons.length; i++){
	    buttons[i].onclick = function(){ 
	    	
	    	var number = parseInt(this.id.slice(-1));
	    	console.log("Empty Space is " + emptySpace);
	    	console.log("Clicked is " + number);

	    	if ((number - emptySpace) < -2 || (number - emptySpace) > 2 || (number == emptySpace)) {
	    		alert("Illegal Move");
	    		console.log("Illegal Move");

	    	} else {

	    		movePiece(number);
	    		console.log("Empty Space is " + emptySpace);
	
	    	}
	    }
	}
};

function resetBoard() {
	board = ["w","w","_","b", "b"];
	status = false;
	emptySpace = 2;
	moveCounter = 0;
	
	var button0 = document.getElementById('piece0');
	button0.style.background = "rgb(193,28,28)";
	button0.style.border = "1px solid black";

	var button1 = document.getElementById('piece1');
	button1.style.background = "rgb(193,28,28)";
	button1.style.border = "1px solid black";

	var button2 = document.getElementById('piece2');
	button2.style.background = "white";
	button2.style.border = "none";

	var button3 = document.getElementById('piece3');
	button3.style.background = "black";
	button3.style.border = "1px solid black";

	var button4 = document.getElementById('piece4');
	button4.style.background = "black";
	button4.style.border = "1px solid black";

	document.getElementById('yourMoves').innerHTML=String(moveCounter);
	document.getElementById('textButton').innerHTML='Restart Game';
	hideResult();
	
};

function showResult() {
	var result = document.getElementById('boardResult');
	console.log("moves is " + moveCounter);
	console.log("minimum moves is " + minimumMoves);
	if (moveCounter === minimumMoves) {
		result.innerHTML = "Congratulations, you completed the game in the minimum moves!";
	} else {
		result.innerHTML = "You completed the game, but not in the minimum moves. Please try again!";
	}

}

function hideResult() {
	var result = document.getElementById('boardResult');
	result.innerHTML = "";
}

function printBoard(board) {

}

function calculateMinimumMoves() {

};

//start at board size 3 and increase
//add cookies to record all high scores
//work on login and account page
