/* ------------------------------------------------------------------
---------------------------------------------------------------------
MemoryBox Scripts 
--------------------------------------------------------------------
-------------------------------------------------------------------*/ 
//store current box 
var currentBox = 0;
//store previous box
var previousBox = 0;
//record box which has been clicked
var clickedBox = 0;
//record that the game is still in play
var gameStatus = true;
//array to store sequence of flashes
var storedSequence = [];
//array to store sequence of clicks
var clickedSequence = [];
//record the number of rounds
var roundCounter = 0;
//record the number of clicks
var clickCounter = 0;
//control the speed of the flashes
var gameSpeed = 500;
//record the score
var score = roundCounter - 1;
//control the brightness of the flashes
var baseOpacity = 0.5;
var endOpacity = 1;

//return a random number to decide which box will flash
function getRandom() {
	return Math.floor(Math.random()*9)+1
};

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
	score++;
	var number = getRandom();
	setCurrentBox(number);
	setPreviousBox(currentBox);
	storedSequence.push(number);
};

//make an adjacent box flash (cannot be the previous box)
function pickNextFlash(currentBox) {
	
	if (gameStatus) {
		var nextOptions = [];

		//get array of adjacent boxes to the current box
		if (currentBox ===  1) {
			nextOptions = [2,4,5];
		} else if (currentBox === 2) {
			nextOptions = [1,3,4,5,6];
		} else if (currentBox === 3) {
			nextOptions = [2,5,6];
		} else if (currentBox === 4) {
			nextOptions = [1,2,5,7,8];
		} else if (currentBox === 5) {
			nextOptions = [1,2,3,4,6,7,8,9];
		} else if (currentBox === 6) {
			nextOptions = [2,3,5,8,9];
		} else if (currentBox === 7) {
			nextOptions = [4,5,8];
		} else if (currentBox === 8) {
			nextOptions = [4,5,6,7,9];
		} else if (currentBox === 9) {
			nextOptions = [6,5,8];
		}

		//drop previous box number from array options
		var i = nextOptions.indexOf(previousBox);
		nextOptions.splice(i, 1);

		//pick random number from the available adjacent box options
		var nextFlashNumber = nextOptions[Math.floor(Math.random() * nextOptions.length)];
		
		setPreviousBox(currentBox);
		setCurrentBox(nextFlashNumber);
		storedSequence.push(nextFlashNumber);
	}
};


//make individual box flash
function makeBoxFlash(boxNumber) {
	
	var boxName = "box" + String(boxNumber);
	var box = document.getElementById(boxName);
	
  	box.style.opacity = endOpacity;
  	setTimeout(function() { 
		box.style.opacity = baseOpacity;
	
  	}, gameSpeed);

};

//set the timeout interval for the flashing boxes
function setFlashInterval(arrayIndex) {
	if (roundCounter === 1) {
			setTimeout(function() {
			makeBoxFlash(storedSequence[arrayIndex]);
		}, arrayIndex*gameSpeed)
	} else {
		setTimeout(function() {
			makeBoxFlash(storedSequence[arrayIndex]);
		}, arrayIndex*gameSpeed + (2*gameSpeed))
	}
	
};

//make multiple boxes flash in sequence
function makeSequenceFlash(rounds) {
	for (var i=0; i<storedSequence.length; i++) {
		setFlashInterval(i);
	}
};

//make a box flash after it's clicked
function makeClickedFlash(number) {
	var boxName = "box" + String(number);
	var box = document.getElementById(boxName);

	if (gameStatus) {
		box.style.opacity = endOpacity;
		setTimeout(function() {
			box.style.opacity = baseOpacity;
		}, gameSpeed); 
	}
	
};

//start the game
function startGame() {
	initialiseRound();
	pickRandomFlash();
	makeSequenceFlash();
	monitorClicks();
};

//monitor the sequence of clicked boxes
function monitorClicks(){
	var buttons = document.getElementsByClassName('memBox');

	for (var i = 0; i < buttons.length; i++){
	    buttons[i].onclick = function(){ 
	    	
	    	var number = parseInt(this.id.slice(-1));
	    	makeClickedFlash(number);
	    	clickedBox = number;
	   
	    	clickedSequence.push(number);
	    	clickCounter++;
	    
	    	compareLastClick(clickCounter - 1);
	    	if ((storedSequence.length == clickedSequence.length) && (gameStatus)) {
	    		continueGame();
	    	}
	    }
	}
};

//compare last click and ensure it's the same box as in the stored sequence
function compareLastClick(number) {
	if (clickedSequence[number] !== storedSequence[number]) {
		gameStatus = false;
		console.log("Game Over");
		showRound();
		recordHighScore();
		showYourScore();
	}
	
	var storedString = printArray(storedSequence);
	var clickedString = printArray(clickedSequence);
	
};
//function to be called every time there's a correct click
function continueGame() {
	roundCounter++;
	score++;
	clickedSequence = [];
	clickCounter = 0;
	showYourScore();
	showRound();
	
	pickNextFlash(currentBox);
	makeSequenceFlash();
};
//test function
function printArray(name) {
	var converted = name.toString();
	return converted;
}

//display round number
function showRound() {
	
	var word = document.getElementById("roundNumber");

	if (gameStatus) {
		word.innerHTML = "Round " + String(roundCounter);
	} else {
		word.innerHTML = "Game Over"
		console.log("Game is " + gameStatus);
	}
};

//reset scoring to start a new round
function initialiseRound() {

	currentBox = 0;
	previousBox = 0;
	clickedBox = 0;
	gameStatus = true;
	storedSequence = [];
	clickedSequence = [];
	roundCounter = 0;
	clickCounter = 0;
	score = roundCounter - 1;
	showRound();

	var yourScore = document.getElementById("showScore");

	yourScore.innerHTML = String(0);
}

//record high score
function recordHighScore() {
	var wordScore = document.getElementById("recordScore");
	
	var oldScore = parseInt(wordScore.innerHTML);
	console.log(score);

	if (score > oldScore) {
		wordScore.innerHTML = String(score);
	}
};

//show current score
function showYourScore() {
	var yourScore = document.getElementById("showScore");

	yourScore.innerHTML = String(score);

}


 

   