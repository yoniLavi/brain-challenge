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

//pick a random box to make flash (the first box, to start the game)
function pickRandomFlash() {
	//add to the round counter, which starts at zero
	roundCounter++;
	//add to the score, which starts at -1
	score++;
	//get a random box number
	var number = getRandom();
	//record which box has flashed
	setCurrentBox(number);
	//record that this is the previous box, for use in calculating the neighbours
	//in the next round
	setPreviousBox(currentBox);
	//add box that has flashed to the stored sequence array
	storedSequence.push(number);
};

//pick a neighbouring box that will flash (cannot be the previous box)
function pickNextFlash(currentBox) {
	
	//if game is still in play
	if (gameStatus) {

		//array to store possible neighbours
		var nextOptions = [];

		//list possible adjacent boxes to the current box(up, down, left, right, diagonal)
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
		
		//change previous box for use in next flash
		setPreviousBox(currentBox);
		//set new current box
		setCurrentBox(nextFlashNumber);
		//store picked box in the flash sequence
		storedSequence.push(nextFlashNumber);
	}
};

//make individual box flash
function makeBoxFlash(boxNumber) {
	
	//variable to link to id in html
	var boxName = "box" + String(boxNumber);
	var box = document.getElementById(boxName);
	
	//change opacity to bright to make flash
  	box.style.opacity = endOpacity;

  	//after set period of time, change opacity back to normal
  	setTimeout(function() { 
		box.style.opacity = baseOpacity;
  	}, gameSpeed);

};

//set the timeout interval for the flashing boxes
function setFlashInterval(arrayIndex) {

	//set the interval for the first box in the sequence flash
	if (roundCounter === 1) {
			setTimeout(function() {
			makeBoxFlash(storedSequence[arrayIndex]);
		}, arrayIndex*gameSpeed)
	} else {
		//set interval for subsequent boxes to flash with a delay depending on 
		//their position in the array
		setTimeout(function() {
			makeBoxFlash(storedSequence[arrayIndex]);
		}, arrayIndex*gameSpeed + (2*gameSpeed))
	}
	
};

//make multiple boxes flash in sequence
function makeSequenceFlash(rounds) {
	//loop through array and make each box flash in turn
	for (var i=0; i<storedSequence.length; i++) {
		
		setFlashInterval(i);

		
	}
};

//make a box flash after it's clicked
function makeClickedFlash(number) {

	//set box id to correspond to html
	var boxName = "box" + String(number);
	var box = document.getElementById(boxName);

	//for each box, make it flash by adjusting opacity
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

	//loop through boxes and set listener for clicks
	for (var i = 0; i < buttons.length; i++){
	    buttons[i].onclick = function(){ 
	    	
	    	//parse the number from the end of the box id
	    	var number = parseInt(this.id.slice(-1));
	    	//make the clicked box flash
	    	makeClickedFlash(number);
	    	//record which box has been clicked
	    	clickedBox = number;
	   		//add box to clicked sequence
	    	clickedSequence.push(number);
	    	//add to click counter
	    	clickCounter++;
	    
	    	//check if the sequence is complete by using the counted number of clicks
	    	//and the game status
	    	compareLastClick(clickCounter - 1);
	    	//if all clicks have been correctly made, continue with a new box
	    	if ((storedSequence.length == clickedSequence.length) && (gameStatus)) {
	    		continueGame();
	    	}
	    }
	}
};

//compare last click and ensure it's the same box as in the stored sequence
function compareLastClick(number) {
	//if last click isn't what it should be in the sequence, game is over
	if (clickedSequence[number] !== storedSequence[number]) {
		gameStatus = false;
		console.log("Game Over");
		showRound();
		recordHighScore();
		showYourScore();
	}
	
	
	
};
//when the sequence has been correctly copied, continue with the next flash
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


//display round number on the screen
function showRound() {
	
	var word = document.getElementById("roundNumber");

	if (gameStatus) {
		word.innerHTML = "Round " + String(roundCounter);
	} else {
		word.innerHTML = "Game Over"
	}
};

//reset scoring to start a new round
function initialiseRound() {

	//reset variables
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

	//reset score on screen
	var yourScore = document.getElementById("showScore");
	yourScore.innerHTML = String(0);
}

//record high score
function recordHighScore() {
	
	var wordScore = document.getElementById("recordScore");
	
	var oldScore = parseInt(wordScore.innerHTML);
	console.log(score);

	//compare current score to old high score and change at the end of the game
	if (score > oldScore) {
		wordScore.innerHTML = String(score);
	}
};

//show current score on the screen
function showYourScore() {
	
	var yourScore = document.getElementById("showScore");
	yourScore.innerHTML = String(score);

}


 

   