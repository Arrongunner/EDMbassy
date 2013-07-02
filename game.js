API.addEventListener(API.CHAT, gamesticles);

var playing = false;
var chosen = false;
var playingWait = 600000;
var playingPassed = 0;
var playingTimer = null;
var userChoice = " ";

function gamesticles(data) {
        if (playing = false && data.message.indexOf("/play") > -1) {
        	playing = true;
        	playingTimer = setInterval("checkPlaying();", 1000);
                API.sendChat("@" + data.from + " welcome to Rock Paper Scissors. which do you choose?");
        }
        if (chosen = false && playing = true && data.message.indexOf("rock") > -1) {
        	chosen = true;
        	userChoice = "rock";
        	game();
        }
        else if (chosen = false && playing = true && API.getUser(player) && data.message.indexOf("paper") > -1) {
        	chosen = true;
        	userChoice = "paper";
        	game();
        }
        else if (chosen = false && playing = true && API.getUser(player) && data.message.indexOf("scissors") > -1) {
        	chosen = true;
        	userChoice = "scissors";
        	game();
        }
}

function game(){
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} 
	else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} 
	else {
		computerChoice = "scissors";
	}
	var compare = function(choice1, choice2) {
		if (choice1 == choice2) {
	        	return "The result is a tie!";
	    	}
	    	if (choice1 == "rock") {
	        	if (choice2 == "scissors") {
	            		return "rock wins";
	        	}
	        	else {
	            		return "paper wins";
	        	}
	    	}
	    	if (choice1 == "paper") {
	        	if (choice2 == "rock") {
	            		return "paper wins";
	        	}
	        	else {
	            		return "scissors wins";
	        	}
	    	}
	    	if (choice1 == "scissors") {
	        	if (choice2 == "paper") {
	            		return "scissors wins";
	        	}
	        	else {
	            		return "rock wins";
	        	}
	    	}
	};
	API.sendChat("you chose " + userChoice);
	API.sendChat("computer chose " + computerChoice);
	API.sendChat(compare(userChoice, computerChoice));
};

function checkPlaying() {
	if (playingPassed >= playingWait) {
		clearInterval(playingTimer);
		playing = false;
		chosen = false;
		playingPassed = 0;
	}
	else {
		playingPassed = playingPassed + 1000;
	}
}
