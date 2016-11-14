//return a random number to decide which box will flash
function getRandom() {
	return Math.floor(Math.random()*9)+1
};

//make one box flash
function changeOpacity() {
	var number = getRandom();
	var boxName = "box" + String(number);
	var box = document.getElementById(boxName);
	box.style.opacity = 1;
	setTimeout(function() {
		box.style.opacity = 0.3;
	}, 1000);

};

//set the timeout interval for the flashing boxes
function makeFlash(i) {
  	setTimeout(function() { 
  		changeOpacity(); 
  	}, i*1000);
};

//make multiple boxes flash in sequence
function multipleFlash(rounds) {
	for (var i=0; i<rounds; i++) {
		makeFlash(i);
	};
};

function startGame() {
	multipleFlash(5);
};

/*function printArray(array1) {
	var word = document.getElementById("randomNumber");
	var arrayWord = "";

	for (var i=0; i<array1.length; i++) {
		arrayWord += String(array1[i]);
	}
	randomNumber.innerHTML=arrayWord; 
	console.log(arrayWord);
	
};*/
	
 
   