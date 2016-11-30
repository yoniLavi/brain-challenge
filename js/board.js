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
var board = ["r","r","_","b", "b"];
//record how many moves have been made
var moveCounter = 0;
//record which colour has been moved
var moveColour;

//initialise the game
function playGame() {
	resetBoard();
	watchClicks();
};

//record which space on the board is empty
function recordEmptySpace(number) {
	emptySpace = number;
};

//check if board is complete
function updateStatus(board) {

	//get centre of board to split it
	var centre = Math.floor(board.length/2);
	
	//create two halves of the board for comparison
	var firstHalf = board.slice(0, centre);
	var secondHalf = board.slice(centre + 1, board.length);

	//check if both halves of the board are complete
	if (firstHalfTrue(firstHalf) && secondHalfTrue(secondHalf)) {
		//change status to show game is finished
		status = true;
		showResult();
	}
	
};
//check if the first half of the board is the right colour
function firstHalfTrue(board) {
	
	//loop through pieces and ensure they are black
	for (var i = 0; i < board.length; i++) {
		if (board[i] !== "b") {
			return false;
			break;
		} 
	} 
	return true;
};

//check if the second half of the board is the right colour
function secondHalfTrue(board) {
	
	//loop through pieces and ensure they are red
	for (var i = 0; i < board.length; i++) {
		if (board[i] !== "r") {
			return false;
			break;
		} 
	} 
	return true;
};

//update which colour piece is being moved, for use in movePiece function
function updateMoveColour(number) {
	moveColour = board[number];
};

//
function movePiece(number){
	//number is the piece to be moved
	updateMoveColour(number);
	
	//swap pieces in array
	changeColours(emptySpace, number);
	//update empty space in array to moved colour 
	board[emptySpace]=moveColour;
	//update empty space number
	emptySpace = number;
	//update moved colour in array to empty space
	board[number] = "_";
	//add 1 to move counter
	moveCounter++;
	//check if board is complete
	updateStatus(board);
	//update move counter on the screen
	document.getElementById('yourMoves').innerHTML=String(moveCounter);

};

//change the colours of the boxes on screen after a move is made
function changeColours(oldEmpty, newEmpty) {
	//get ids of the old and new empty space
	var oldName = "piece" + oldEmpty;
	var newName = "piece" + newEmpty;

	var oldColour = document.getElementById(oldName);
	var newColour = document.getElementById(newName);

	//check which colour has been moved, and update the old empty space to the new colour
	if (moveColour==="b") {
		oldColour.style.background = "black";
	} else {
		oldColour.style.background = "rgb(193,28,28)";
		oldColour.style.border = "1px solid black";
	}

	//change the moved piece to the empty space colour (white background)
	newColour.style.background = "white";
	newColour.style.border = "none";

}

//eventListener for clicks
function watchClicks(){
	var buttons = document.getElementsByClassName('pieceBox');

	//loop to add listener to all boxes
	for (var i = 0; i < buttons.length; i++){
	    buttons[i].onclick = function(){ 
	    	//get the last digit of the id of the box that is clicked
	    	var number = parseInt(this.id.slice(-1));

	    	//ensure that only boxes within 2 spaces of the empty space are clicked, and not the empty space itself
	    	if ((number - emptySpace) < -2 || (number - emptySpace) > 2 || (number == emptySpace)) {
	    		alert("Illegal Move");

	    	} else {

	    		movePiece(number);
	
	    	}
	    }
	}
};
//reset the board after the game is started
function resetBoard() {
	//return board to starting position
	board = ["r","r","_","b", "b"];
	//reset completion status
	status = false;
	//reset empty space
	emptySpace = 2;
	//reset move counter
	moveCounter = 0;
	
	//change box colours back to starting positions
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

	//reset move counter
	document.getElementById('yourMoves').innerHTML=String(moveCounter);
	//change text of start button
	document.getElementById('textButton').innerHTML='Restart Game';
	hideResult();
	
};

//after board is complete, show whether it was completed in the minimum moves
function showResult() {
	
	var result = document.getElementById('boardResult');

	//check if completed in the minimum moves, and print the relevant message
	if (moveCounter === minimumMoves) {
		result.innerHTML = "Congratulations, you completed the game in the minimum moves!";
	} else {
		result.innerHTML = "You completed the game, but not in the minimum moves. Please try again!";
	}

}
//hide the above result at the start of a new game
function hideResult() {
	var result = document.getElementById('boardResult');
	result.innerHTML = "";
}

//function to be used when game is expanded to bigger boards
function calculateMinimumMoves() {

};

