API.addEventListener(API.CHAT, gamesticles);

var userChoice = " ";
var player = " ";
var playing = false;
var playingWait = 600000;
var playingPassed = 0;
var playingTimer = null;
var chosen = true;


function gamesticles(data) {
        if (playing == false && data.message.indexOf("/play") > -1) {
                API.sendChat("@" + data.from + " welcome to Rock Paper Scissors. which do you choose?");
                playing = true;
        	chosen = false;
        	player = data.fromID;
        }
        if (chosen == false && API.getUser(player) && data.message.indexOf("rock") > -1) {
        	userChoice = "ROCK";
        	chosen = true;
        	player = " ";
        	game();
        }
        else if (chosen == false && API.getUser(player) && data.message.indexOf("paper") > -1) {
        	userChoice = "PAPER";
        	chosen = true;
        	player = " ";
        	game();
        }
        else if (chosen == false && API.getUser(player) && data.message.indexOf("scissors") > -1) {
        	userChoice = "SCISSORS";
        	chosen = true;
        	player = " ";
        	game();
        }
}

function game(){
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "ROCK";
	} 
	else if(computerChoice <= 0.67) {
		computerChoice = "PAPER";
	} 
	else {
		computerChoice = "SCISSORS";
	}
	var compare = function(choice1, choice2) {
		if (choice1 == choice2) {
	        	return "The result is a tie!";
	    	}
	    	if (choice1 == "ROCK") {
	        	if (choice2 == "SCISSORS") {
	            		return "ROCK wins";
	        	}
	        	else {
	            		return "PAPER wins";
	        	}
	    	}
	    	if (choice1 == "PAPER") {
	        	if (choice2 == "ROCK") {
	            		return "PAPER wins";
	        	}
	        	else {
	            		return "SCISSORS wins";
	        	}
	    	}
	    	if (choice1 == "SCISSORS") {
	        	if (choice2 == "PAPER") {
	            		return "SCISSORS wins";
	        	}
	        	else {
	            		return "ROCK wins";
	        	}
	    	}
	};
	API.sendChat("you chose " + userChoice + " and I chose " + computerChoice + ". " + compare(userChoice, computerChoice));
}

function checkPlaying() {
	if (playingPassed >= playingWait) {
		clearInterval(playingTimer);
		playing = false;
		playingPassed = 0;
	}
	else {
		playingPassed = playingPassed + 1000;
	}
}
