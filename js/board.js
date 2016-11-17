/* ------------------------------------------------------------------
---------------------------------------------------------------------
BoardSwap Scripts 
--------------------------------------------------------------------
-------------------------------------------------------------------*/ 

var emptySpace = 2;
var hoveredPiece;
var minimumMoves;
var status = false;
var board = ["w","w","_","b", "b"];

function playGame() {
	resetBoard();
	printBoard(board);
	watchClicks();
};

function recordEmptySpace(number) {
	emptySpace = number;
};

function updateMovePiece(number) {
	//on hover, update mightMovePiece
};

function addListener() {
	//watch for hover, on hover change colour of box
	//watch for click, on click update the emptySpace
	//check if board is complete
};

function checkMove(emptySpace) {
	//on hover over box, check if piece can be moved into the empty
	//space, and then highlight the box either green or red.
	//if hoveredPiece is within 2 of emptySpace, and is also within
	//the bounds of the board, the move is ok
};

function calculateMinimumMoves() {

};

function updateStatus(board) {
	var centre = Math.floor(board.length/2);
	console.log("centre is " + centre);
	var firstHalf = board.slice(0, centre);
	var secondHalf = board.slice(centre + 1, board.length);

	printBoard(firstHalf);
	printBoard(secondHalf);

	if (firstHalfTrue(firstHalf) && secondHalfTrue(secondHalf)) {
		status = true;
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
	printBoard(board);
	updateStatus(board);

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

function printBoard(board) {
	var stringBoard = board.toString();
	console.log(stringBoard);
};

//eventListener for clicks
function watchClicks(){
	var buttons = document.getElementsByClassName('pieceBox');

	for (var i = 0; i < buttons.length; i++){
	    buttons[i].onclick = function(){ 
	    	
	    	var number = parseInt(this.id.slice(-1));
	    	console.log("Empty Space is " + emptySpace);
	    	console.log("Clicked is " + number);
	    	movePiece(number);
	    	console.log("Empty Space is " + emptySpace);
	    	//update board
	    	//update empty space
	    }
	}
};

function resetBoard() {
	board = ["w","w","_","b", "b"];
	status = false;
	emptySpace = 2;
	
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
	
};