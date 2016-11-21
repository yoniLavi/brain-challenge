/* ------------------------------------------------------------------
---------------------------------------------------------------------
Conundrum Scripts 
--------------------------------------------------------------------
-------------------------------------------------------------------*/ 

var word;
var scrambled;
var wordList = ["abduction", "abolished", "absolving", "absurdity", "abusively", "adjusting", "adoringly", "adversity", "afterglow", "alchemist", "algorithm", "alongside", "ambushing", "amplitude", "amusingly", "anguished", "anxiously", "artichoke", "auctioned", "authorise", "awestruck", "backfired", "bacterium", "bedspring", "beholding", "benchmark", "bestowing", "betraying", "binocular", "biography", "birdhouse", "blasphemy", "bleaching", "blotchier", "blueprint", "bothering", "boulevard", "boyfriend", "breaching", "breakdown", "breathing", "brimstone", "bronchial", "bucketing", "budgetary", "byproduct", "bystander", "captioned", "capturing", "cautioned", "cavorting", "certainly", "chagrined", "chemistry", "chortling", "chunkiest", "clampdown", "clergyman", "clipboard", "cloudiest", "coastline", "columbine", "columnist", "combative", "combusted", "comparing", "competing", "complaint", "compliant", "comprised", "computing", "configure", "confirmed", "conflated", "conjugate", "conspired", "construed", "consulate", "consulted", "contrived", "convulsed", "copulated", "copyright", "cornfield", "cornflake", "countable", "courtship", "craftsmen", "crankiest", "cremation", "crumbling", "crusading", "culminate", "curtailed", "cushioned", "custodial", "customary", "customise", "dangerous", "decamping", "decathlon", "declaring", "defiantly", "deflating", "deforming", "deformity", "departing", "deploring", "deploying", "deporting", "depravity", "desirably", "detaching", "devaluing", "devouring", "diplomacy", "discharge", "discovery", "disembark", "dishtowel", "dishwater", "dislocate", "dismantle", "downright", "downscale", "downshift", "draftsmen", "drinkable", "drumstick", "duplicate", "dystopian", "earthling", "eastbound", "ectoplasm", "educating", "education", "eightfold", "embarking", "embodying", "embracing", "embryonic", "employing", "emulating", "emulation", "enviously", "equitably", "equivocal", "escorting", "excluding", "exclusion", "excursion", "exploding", "exploring", "exporting", "expulsion", "factoring", "faltering", "farmhouse", "fashioned", "fathering", "fathoming", "featuring", "fecundity", "feudalism", "feudalist", "fieldwork", "firsthand", "fisherman", "flagstone", "flowchart", "flowering", "flyweight", "foresight", "formality", "formative", "formulaic", "formulate", "forsaking", "fostering", "franchise", "frolicked", "frugality", "frumpiest", "fumigated", "furnished", "furtively", "genocidal", "ghastlier", "ghostlike", "glutamine", "godfather", "godmother", "godparent", "goldsmith", "grandiose", "greyhound", "grumpiest", "gunpowder", "gymnastic", "hailstone", "hairstyle", "hampering", "hamstring", "handiwork", "handwrite", "harlequin", "headfirst", "heinously", "heralding", "herbalist", "hesitancy", "hideously", "horseback", "horseplay", "humdinger", "hungriest", "hydrating", "hydration", "hydraulic", "hyperbola", "hypnotism", "hypnotise", "hypocrite", "implanted", "impotence", "imprudent", "incubator", "incurable", "inexactly", "inoculate", "inspector", "insulated", "insulator", "interplay", "introduce", "jackfruit", "jockeying", "jockstrap", "juxtapose", "labyrinth", "layperson", "lecturing", "lethargic", "lifeguard", "livestock", "locksmith", "logarithm", "longevity", "longitude", "lubricant", "lubricate", "lucrative", "lumbering", "lunchtime", "lymphatic", "machinery", "magnitude", "makeshift", "manicured", "manifesto", "marketing", "masculine", "masterful", "misquoted", "mockingly", "modernist", "modernity", "molesting", "monastery", "mothering", "mousetrap", "moustache", "neighbour", "nailbrush", "naughtier", "naughtily", "nervously", "nightclub", "nightmare", "normality", "nostalgic", "nourished", "numerical", "obfuscate", "objecting", "obligated", "obscenity", "obscurely", "obscuring", "obscurity", "observant", "observing", "obstinacy", "obtrusive", "oligarchy", "onslaught", "operating", "organised", "ostracise", "outlander", "outlawing", "outplayed", "outranked", "outwardly", "overawing", "overnight", "oversight", "ovulating", "ownership", "paintwork", "palmistry", "pantheism", "parsimony", "patchwork", "patronise", "pecuniary", "personify", "pervading", "philander", "pitchfork", "playhouse", "pluckiest", "pneumatic", "pneumonia", "polarised", "policeman", "porcelain", "posturing", "powdering", "preaching", "prefacing", "presuming", "printable", "privately", "producing", "profanely", "profanity", "profusely", "provident", "prudently", "pseudonym", "published", "publisher", "pugnacity", "pulmonary", "pulsating", "pulsation", "purchased", "quavering", "quicksand", "recouping", "redaction", "reducibly", "reduction", "replacing", "replaying", "repulsion", "reputably", "resolving", "restyling", "resulting", "revaluing", "revamping", "revolting", "revulsion", "rocketing", "routinely", "schnauzer", "schnitzel", "scoundrel", "scrambled", "scrawling", "screaming", "scrounged", "sculpting", "searching", "seaworthy", "secondary", "seduction", "sexuality", "shipwreck", "showering", "shrinkage", "signatory", "signature", "simpleton", "simulator", "skeptical", "sketching", "slaughter", "snowflake", "sobriquet", "soldering", "solemnity", "something", "sparingly", "sparkling", "spearmint", "specialty", "spherical", "sphincter", "sprawling", "spreading", "sprinkled", "sprouting", "squeaking", "squealing", "stauncher", "stepchild", "stockpile", "stockyard", "strangely", "strangled", "streaking", "streaming", "subatomic", "sublimate", "submarine", "subtropic", "sunbather", "sunflower", "supernova", "supremacy", "surveying", "swordplay", "sycophant", "symphonic", "syndicate", "tampering", "tarnished", "taxidermy", "tediously", "thinkable", "threading", "throwback", "thumbnail", "tinderbox", "trampling", "trapezium", "trembling", "tribesman", "triumphed", "truckload", "unblocked", "unclaimed", "uncloaked", "undercoat", "unearthly", "unethical", "unholiest", "uniformed", "uniformly", "universal", "unscathed", "unsightly", "upholster", "uploading", "upscaling", "urbanised", "vaporised", "varnished", "vasectomy", "vehicular", "verbosity", "veritably", "vibrantly", "voluntary", "vulcanise", "vulgarity", "welcoming", "womaniser", "wonderful", "wordsmith", "workbench", "workplace", "wristband", "yachtsmen", "yardstick", "youngster"];
var count;
var time;
var score = 0;
var attempts = 0;
var userSolution;
var lastClick = true;


function newGame() {
	lastClick = true;
	resetClock();
	clearInput();
	countdown();
	clearSolution();
	getWord();
};

function getWord() {
	//get random word from wordList array
	var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
	console.log(randomWord);
	word = randomWord;
	scrambleWord(word);
	insertWord(scrambled)
};

function scrambleWord(word) {
	
    var charIndex = 0;
    wordArray = word.split("");
    var scrambledArray = [];
    

    while(wordArray.length > 0) {
        charIndex = Math.floor(Math.random()*wordArray.length);
        scrambledArray += wordArray[charIndex];
        wordArray.splice(charIndex,1);
    }
	scrambled = scrambledArray.toString();
	console.log(scrambled);

};

function insertWord(scrambled) {
	//insert scrambled word into top boxes on the page
	scrambledArray = scrambled.split("");
	
	for (var i=0; i<scrambledArray.length; i++) {

		var letter = document.getElementById("letter" + String(i+1));

		letter.innerHTML = scrambledArray[i].toUpperCase();
	}
};

function revealSolution(word) {
	//clear the timer
	clearTimeout(time);
	

	if (lastClick === true) {
			//insert word into lower boxes on page
		wordArray = word.split("");

		for (var i=0; i<wordArray.length; i++) {
			var letter = document.getElementById("solution" + String(i+1));

			letter.innerHTML = wordArray[i].toUpperCase();
		}


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
		//console.log(attempts);
		total.innerHTML=String(attempts);

	}
	lastClick = false;
};

function clearSolution() {
	for (var i=0; i<9; i++) {
		var letter = document.getElementById("solution" + String(i+1));

		letter.innerHTML = " ";
	}
	document.getElementById('checkAnswer').innerHTML="";
	
};

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

function resetClock() {
	clearTimeout(time);
	var reset = document.getElementById('countdownClock');
	reset.innerHTML="31";

};

function clearInput() {
	var box =document.getElementById('userSolve');
	box.value = '';
};

function recordLastClick() {

};
//make reveal solution not work if pressed a second time 