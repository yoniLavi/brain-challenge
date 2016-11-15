//return a random number to decide which box will flash
function getRandom() {
	return Math.floor(Math.random()*9)+1
};

var currentBox = 0;
var previousBox = 0;
var clickedBox = 0;
var flashArray = [];
var gameStatus = true;
var storedSequence = [];
var clickedSequence = [];
var roundCounter = 0;
var clickCounter = 0;

//record current box number (so the script can find an adjacent box)
function setCurrentBox(number) {
	currentBox = number;
};

//record previous box number (the adjacent box cannot be the previous box)
function setPreviousBox(number) {
	previousBox = number;
};

//make a random box flash (the first box, to start the game)
function pickRandomFlash() {
	
	roundCounter++;
	var number = getRandom();
	//flashArray.push(currentBox);
	setCurrentBox(number);
	setPreviousBox(currentBox);
	storedSequence.push(number);
	console.log("First flash is " + number)
	//console.log("Current is " + currentBox);
	//console.log("Previous is " + previousBox);
};

//make an adjacent box flash (cannot be the previous box)
function pickNextFlash(currentBox) {
	
	var nextOptions = [];

	//get array of adjacent boxes to the current box
	if (currentBox ===  1) {
		nextOptions = [2,4];
	} else if (currentBox === 2) {
		nextOptions = [1,3,5];
	} else if (currentBox === 3) {
		nextOptions = [2,6];
	} else if (currentBox === 4) {
		nextOptions = [1,5,7];
	} else if (currentBox === 5) {
		nextOptions = [2,4,6,8];
	} else if (currentBox === 6) {
		nextOptions = [3,5,9];
	} else if (currentBox === 7) {
		nextOptions = [4,8];
	} else if (currentBox === 8) {
		nextOptions = [5,7,9];
	} else if (currentBox === 9) {
		nextOptions = [6,8];
	}

	//drop previous box number from array options
	var i = nextOptions.indexOf(previousBox);
	nextOptions.splice(i, 1);

	//pick random number from the available adjacent box options
	var nextFlashNumber = nextOptions[Math.floor(Math.random() * nextOptions.length)];
	
	setPreviousBox(currentBox);
	setCurrentBox(nextFlashNumber);
	storedSequence.push(nextFlashNumber);
	console.log("Next flash is " + nextFlashNumber);
};


//set the timeout interval for the flashing boxes
function makeBoxFlash(number) {
	
	var boxName = "box" + String(number);
	var box = document.getElementById(boxName);
	
  	box.style.opacity = 1;
  	setTimeout(function() { 
		box.style.opacity = 0.3;
	
  	}, number * 1000);

};

//set the timeout interval for the flashing boxes
function makeFlash(i) {
  	setTimeout(function() { 
  		if (i === 0) {
  			randomFlash();
  		} else {
  			adjacentFlash(currentBox); 
  		}
  		
  	}, i*1000);

};

//make multiple boxes flash in sequence
function makeSequenceFlash(rounds) {
	for (var i=0; i<storedSequence.length; i++) {
		makeBoxFlash(storedSequence[i]);
	}
};


/*
//make multiple boxes flash in sequence
function multipleFlash(rounds) {
	for (var i=0; i<rounds; i++) {
		makeFlash(i);
	}
};
*/

function makeClickedFlash(number) {
	var boxName = "box" + String(number);
	var box = document.getElementById(boxName);
	box.style.opacity = 1;
	setTimeout(function() {
		box.style.opacity = 0.3;
	}, 1000); 
};

//start the game
function startGame() {
	resetRound();
	pickRandomFlash();
	makeSequenceFlash();
	addListener();
};

//eventListener for clicks
function addListener(){
	var buttons = document.getElementsByClassName('memBox');

	for (var i = 0; i < buttons.length; i++){
	    buttons[i].onclick = function(){ 
	    	
	    	var number = parseInt(this.id.slice(-1));
	    	makeClickedFlash(number);
	    	clickedBox = number;
	    	console.log("Clicked is box" + clickedBox);
	    	clickedSequence.push(number);
	    	clickCounter++;
	    	console.log("Click counter is " + clickCounter);
	    	compareLastClick(clickCounter - 1);
	    	if (storedSequence.length == clickedSequence.length) {
	    		continueGame();
	    	}
	    }
	}
};


function compareLastClick(number) {
	if (clickedSequence[number] !== storedSequence[number]) {
		gameStatus = false;
		console.log("Game Over");
		showRound();
		
	}
	console.log("Compared " + clickedSequence[number] + " with " + storedSequence[number])
	//console.log("Last click compare executed");
	var storedString = printArray(storedSequence);
	var clickedString = printArray(clickedSequence);
	console.log("Stored sequence is " + storedString);
	console.log("Clicked sequence is " + clickedString);
};

/*
function compareSequences() {
	if (storedSequence.length !== clickedSequence.length) {
		gameStatus = false;
		console.log("Game Over 3");
	}

	for (var i=0; i<storedSequence.length; i++) {
		if (storedSequence[i] !== clickedSequence[i]) {
			gameStatus = false;
			console.log("Game Over 4");
		}
	}
	console.log("Full compare has executed");
}; 
*/

function continueGame() {
	roundCounter++;
	clickedSequence = [];
	clickCounter = 0;
	showRound();
	console.log("Round counter is " + roundCounter);
	pickNextFlash(currentBox);
	makeSequenceFlash();
};

function printArray(name) {
	var converted = name.toString();
	return converted;
}

//test function
function showRound() {
	
	var word = document.getElementById("roundNumber");

	if (gameStatus) {
		word.innerHTML = "Round " + String(roundCounter);
	} else {
		word.innerHTML = "Game Over"
	}
};

function resetRound() {
	var word = document.getElementById("roundNumber");
	word.innerHTML = "Round 1";
	roundCounter = 0;
	storedSequence = [];
}
	

//Add sound for the buttons.


 
   