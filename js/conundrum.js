/* ------------------------------------------------------------------
---------------------------------------------------------------------
Conundrum Scripts 
--------------------------------------------------------------------
-------------------------------------------------------------------*/ 
//word to be scrambled
var word;
//scrambled version of the word
var scrambled;
//list of 9 letter words
var wordList = ["abduction", "abolished", "absolving", "absurdity", "abusively", "adjusting", "adoringly", "adversity", "afterglow", "alchemist", "algorithm", "alongside", "ambushing", "amplitude", "amusingly", "anguished", "anxiously", "artichoke", "auctioned", "authorise", "awestruck", "backfired", "bacterium", "bedspring", "beholding", "benchmark", "bestowing", "betraying", "binocular", "biography", "birdhouse", "blasphemy", "bleaching", "blotchier", "blueprint", "bothering", "boulevard", "boyfriend", "breaching", "breakdown", "breathing", "brimstone", "bronchial", "bucketing", "budgetary", "byproduct", "bystander", "captioned", "capturing", "cautioned", "cavorting", "certainly", "chagrined", "chemistry", "chortling", "chunkiest", "clampdown", "clergyman", "clipboard", "cloudiest", "coastline", "columbine", "columnist", "combative", "combusted", "comparing", "competing", "complaint", "compliant", "comprised", "computing", "configure", "confirmed", "conflated", "conjugate", "conspired", "construed", "consulate", "consulted", "contrived", "convulsed", "copulated", "copyright", "cornfield", "cornflake", "countable", "courtship", "craftsmen", "crankiest", "cremation", "crumbling", "crusading", "culminate", "curtailed", "cushioned", "custodial", "customary", "customise", "dangerous", "decamping", "decathlon", "declaring", "defiantly", "deflating", "deforming", "deformity", "departing", "deploring", "deploying", "deporting", "depravity", "desirably", "detaching", "devaluing", "devouring", "diplomacy", "discharge", "discovery", "disembark", "dishtowel", "dishwater", "dislocate", "dismantle", "downright", "downscale", "downshift", "draftsmen", "drinkable", "drumstick", "duplicate", "dystopian", "earthling", "eastbound", "ectoplasm", "educating", "education", "eightfold", "embarking", "embodying", "embracing", "embryonic", "employing", "emulating", "emulation", "enviously", "equitably", "equivocal", "escorting", "excluding", "exclusion", "excursion", "exploding", "exploring", "exporting", "expulsion", "factoring", "faltering", "farmhouse", "fashioned", "fathering", "fathoming", "featuring", "fecundity", "feudalism", "feudalist", "fieldwork", "firsthand", "fisherman", "flagstone", "flowchart", "flowering", "flyweight", "foresight", "formality", "formative", "formulaic", "formulate", "forsaking", "fostering", "franchise", "frolicked", "frugality", "frumpiest", "fumigated", "furnished", "furtively", "genocidal", "ghastlier", "ghostlike", "glutamine", "godfather", "godmother", "godparent", "goldsmith", "grandiose", "greyhound", "grumpiest", "gunpowder", "gymnastic", "hailstone", "hairstyle", "hampering", "hamstring", "handiwork", "handwrite", "harlequin", "headfirst", "heinously", "heralding", "herbalist", "hesitancy", "hideously", "horseback", "horseplay", "humdinger", "hungriest", "hydrating", "hydration", "hydraulic", "hyperbola", "hypnotism", "hypnotise", "hypocrite", "implanted", "impotence", "imprudent", "incubator", "incurable", "inexactly", "inoculate", "inspector", "insulated", "insulator", "interplay", "introduce", "jackfruit", "jockeying", "jockstrap", "juxtapose", "labyrinth", "layperson", "lecturing", "lethargic", "lifeguard", "livestock", "locksmith", "logarithm", "longevity", "longitude", "lubricant", "lubricate", "lucrative", "lumbering", "lunchtime", "lymphatic", "machinery", "magnitude", "makeshift", "manicured", "manifesto", "marketing", "masculine", "masterful", "misquoted", "mockingly", "modernist", "modernity", "molesting", "monastery", "mothering", "mousetrap", "moustache", "neighbour", "nailbrush", "naughtier", "naughtily", "nervously", "nightclub", "nightmare", "normality", "nostalgic", "nourished", "numerical", "obfuscate", "objecting", "obligated", "obscenity", "obscurely", "obscuring", "obscurity", "observant", "observing", "obstinacy", "obtrusive", "oligarchy", "onslaught", "operating", "organised", "ostracise", "outlander", "outlawing", "outplayed", "outranked", "outwardly", "overawing", "overnight", "oversight", "ovulating", "ownership", "paintwork", "palmistry", "pantheism", "parsimony", "patchwork", "patronise", "pecuniary", "personify", "pervading", "philander", "pitchfork", "playhouse", "pluckiest", "pneumatic", "pneumonia", "polarised", "policeman", "porcelain", "posturing", "powdering", "preaching", "prefacing", "presuming", "printable", "privately", "producing", "profanely", "profanity", "profusely", "provident", "prudently", "pseudonym", "published", "publisher", "pugnacity", "pulmonary", "pulsating", "pulsation", "purchased", "quavering", "quicksand", "recouping", "redaction", "reducibly", "reduction", "replacing", "replaying", "repulsion", "reputably", "resolving", "restyling", "resulting", "revaluing", "revamping", "revolting", "revulsion", "rocketing", "routinely", "schnauzer", "schnitzel", "scoundrel", "scrambled", "scrawling", "screaming", "scrounged", "sculpting", "searching", "seaworthy", "secondary", "seduction", "sexuality", "shipwreck", "showering", "shrinkage", "signatory", "signature", "simpleton", "simulator", "skeptical", "sketching", "slaughter", "snowflake", "sobriquet", "soldering", "solemnity", "something", "sparingly", "sparkling", "spearmint", "specialty", "spherical", "sphincter", "sprawling", "spreading", "sprinkled", "sprouting", "squeaking", "squealing", "stauncher", "stepchild", "stockpile", "stockyard", "strangely", "strangled", "streaking", "streaming", "subatomic", "sublimate", "submarine", "subtropic", "sunbather", "sunflower", "supernova", "supremacy", "surveying", "swordplay", "sycophant", "symphonic", "syndicate", "tampering", "tarnished", "taxidermy", "tediously", "thinkable", "threading", "throwback", "thumbnail", "tinderbox", "trampling", "trapezium", "trembling", "tribesman", "triumphed", "truckload", "unblocked", "unclaimed", "uncloaked", "undercoat", "unearthly", "unethical", "unholiest", "uniformed", "uniformly", "universal", "unscathed", "unsightly", "upholster", "uploading", "upscaling", "urbanised", "vaporised", "varnished", "vasectomy", "vehicular", "verbosity", "veritably", "vibrantly", "voluntary", "vulcanise", "vulgarity", "welcoming", "womaniser", "wonderful", "wordsmith", "workbench", "workplace", "wristband", "yachtsmen", "yardstick", "youngster"];
//countdown time
var count;
//show time on screen
var time;
//record score
var score = 0;
//record number of attempts
var attempts = 0;
//record user's answer
var userSolution;
//record if solution button has been clicked so not to double count score
var lastClick = true;

//initialise new game
function newGame() {
	lastClick = true;
	resetClock();
	clearInput();
	countdown();
	clearSolution();
	getWord();
};

//get new word for the conundrum
function getWord() {
	//get random word from wordList array
	var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
	console.log(randomWord);
	word = randomWord;
	scrambleWord(word);
	insertWord(scrambled)
};

//scramble word to produce anagram
function scrambleWord(word) {
	
    var charIndex = 0;
    //array of characters from the word
    wordArray = word.split("");
    //empty array for scrambled word
    var scrambledArray = [];
    
    //scramble word
    while(wordArray.length > 0) {
        charIndex = Math.floor(Math.random()*wordArray.length);
        scrambledArray += wordArray[charIndex];
        wordArray.splice(charIndex,1);
    }
	scrambled = scrambledArray.toString();

	if (scrambled === word) {
		scrambleWord(word);
	}

};

//insert scrambled word into top boxes on the page
function insertWord(scrambled) {
	
	scrambledArray = scrambled.split("");
	
	//insert individual letters
	for (var i=0; i<scrambledArray.length; i++) {

		var letter = document.getElementById("letter" + String(i+1));

		letter.innerHTML = scrambledArray[i].toUpperCase();
	}
};

//reveal the solution in the lower set of boxes on the page
function revealSolution(word) {
	
	//clear the timer
	clearTimeout(time);

	if (lastClick === true) {
		
		//split word into character array
		wordArray = word.split("");

		//insert individual letters
		for (var i=0; i<wordArray.length; i++) {
			var letter = document.getElementById("solution" + String(i+1));

			letter.innerHTML = wordArray[i].toUpperCase();
		}

		//check if answer is correct and update the score
		var solution = document.getElementById('userSolve').value;
		var correct = document.getElementById('checkAnswer');
		var current = document.getElementById('currentScore');
		var total = document.getElementById('totalMoves');
		
		if (solution.toLowerCase() === word) {
			correct.innerHTML="CORRECT!";
			correct.style.visibility="show";
			score += 1;
			current.innerHTML=String(score);
		} else {
			correct.innerHTML="WRONG!";
		}

		attempts += 1;

		total.innerHTML=String(attempts);

	}
	lastClick = false;
};

//when restarting the game, clear the solution
function clearSolution() {
	for (var i=0; i<9; i++) {
		var letter = document.getElementById("solution" + String(i+1));

		letter.innerHTML = " ";
	}
	document.getElementById('checkAnswer').innerHTML="";
	
};

//countdown clock functionality - reduce the time by 1 second every 
//time this function is called
function countdown() {

	count = document.getElementById('countdownClock').innerHTML;
	count = parseInt(count);

	if (count == 1) {
	  	var stopCount = document.getElementById('countdownClock');
	  	stopCount.innerHTML = "TIME UP!";
	  	revealSolution(word);
	  	return;
	}

	count--;
	temp = document.getElementById('countdownClock');
	temp.innerHTML = count;
	time = setTimeout(countdown, 1000);
};

//reset the clock when starting new game
function resetClock() {
	clearTimeout(time);
	var reset = document.getElementById('countdownClock');
	reset.innerHTML="31";
};

//clear the input box after the solution is revealed
function clearInput() {
	var box =document.getElementById('userSolve');
	box.value = '';
};
