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
function randomFlash() {
	
	roundCounter++;
	var number = getRandom();
	makeBoxFlash(number);
	//flashArray.push(currentBox);
	setCurrentBox(number);
	setPreviousBox(currentBox);
	storedSequence.push(number);
	console.log("First flash is " + number)
	console.log("Current is " + currentBox);
	console.log("Previous is " + previousBox);
};

//make an adjacent box flash (cannot be the previous box)
function pickNextFlash(currentBox) {
	
	roundCounter++;
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
	
  	}, number*1000);

};

//make multiple boxes flash in sequence
function makeSequenceFlash(rounds) {
	for (var i=0; i<storedSequence.length; i++) {
		makeBoxFlash(storedSequence[i]);
	}
};

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
	randomFlash();
	addListener();
	gameOn();
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
	    	compareLastClick(clickCounter);
	    	if (storedSequence.length == clickedSequence.length) {
	    		continueGame();
	    	}
	    }
	}
};


//these 2 functions don't work - uncaught type error, cannot read property style of null

function changeOpacity(boxName){
	var box = document.getElementById(boxName);
	box.style.opacity = 1;
};

function removeOpacity(boxName){
	var box = document.getElementById(boxName);
	box.style.opacity = 0.3;
};

//on clicking memory box, the box lights up.

//round 1 - light one button, round 2 cannot start until user lights the same button

//Add sound for the buttons.

function gameOn() {
	var i = 0;
	while (gameStatus) {
		if (i < 5) {
			i++;
		} else {
			gameStatus = false;
		}
	}
};

function compareLastClick(number) {
	if (clickedSequence[number] !== storedSequence[number]) {
		gameStatus = false;
	}
	console.log("Last click compare executed")
}

function compareSequences() {
	if (storedSequence.length !== clickedSequence.length) {
		gameStatus = false;
	}

	for (var i=0; i<storedSequence.length; i++) {
		if (storedSequence[i] !== clickedSequence[i]) {
			gameStatus = false;
		}
	}
	console.log("Full compare has executed");
};

function continueGame() {
	roundCounter++;
	pickNextFlash();
	makeSequenceFlash();
};

//test function
function printNumber() {
	var word = document.getElementById("currentNumber");
	
	/*var arrayWord = "";

	for (var i=0; i<array1.length; i++) {
		arrayWord += String(array1[i]);
	}
	randomNumber.innerHTML=arrayWord; 
	console.log(arrayWord); */
	
	word.innerHTML = String(getCurrentBox());
};
	


 
   