//return a random number to decide which box will flash
function getRandom() {
	return Math.floor(Math.random()*9)+1
};

var currentBox;
var previousBox;
var flashArray = [];

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
	var number = getRandom();
	var boxName = "box" + String(number);
	var box = document.getElementById(boxName);
	box.style.opacity = 1;
	setTimeout(function() {
		box.style.opacity = 0.3;
	}, 1000);
	flashArray.push(currentBox);
	setPreviousBox(currentBox);
	setCurrentBox(number);
	console.log(currentBox);
};

//make an adjacent box flash (cannot be the previous box)
function adjacentFlash(currentBox) {
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
	
	var nextFlash = "box" + String(nextFlashNumber);
	
	var box = document.getElementById(nextFlash);
	box.style.opacity = 1;
	setTimeout(function() {
		box.style.opacity = 0.3;
	}, 1000);
	setPreviousBox(currentBox);
	setCurrentBox(nextFlashNumber);
	console.log(currentBox);
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
function multipleFlash(rounds) {
	for (var i=0; i<rounds; i++) {
		makeFlash(i);
	};
	
};

//start the game
function startGame() {
	multipleFlash(10);
	copySequence(10);
	
};

function copySequence(i) {
	setTimeout(function() { 
  		alert("Copy the sequence");
  		
  	}, (i)*1000);
};

//on clicking memory box, the box lights up.

//round 1 - light one button, round 2 cannot start until user lights the same button

//Add sound for the buttons.

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
	


 
   