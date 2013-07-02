API.addEventListener(API.CHAT, gamesticles);

var userChoice = [];
var player = [];
var playing = false;
var playingWait = 60000;
var playingPassed = 0;
var playingTimer = null;
var chosen = true;


function gamesticles(data) {
	var msg = data.message.toLowerCase();
        if (playing == false && msg.indexOf("/play") > -1) {
                API.sendChat("@" + data.from + " welcome to Rock Paper Scissors. which do you choose?");
                playingTimer = setInterval("checkPlaying()", 1000);
                playing = true;
        	chosen = false;
        	player.push(data.fromID);
        }
        if (chosen == false && player.indexOf(data.fromID) > -1 && msg.substr(0, 5).indexOf("rock") > -1) {
        	userChoice.push("ROCK");
        	chosen = true;
        	game();
        }
        else if (chosen == false && player.indexOf(data.fromID) > -1 && msg.substr(0, 6).indexOf("paper") > -1) {
        	userChoice.push("PAPER");
        	chosen = true;
        	game();
        }
        else if (chosen == false && player.indexOf(data.fromID) > -1 && msg.substr(0, 9).indexOf("scissors") > -1) {
        	userChoice.push("SCISSORS");
        	chosen = true;
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
	        	return "The result is a tie! We are both losers :'(";
	    	}
	    	if (choice1 == "ROCK") {
	        	if (choice2 == "SCISSORS") {
	            		return "ROCK beats SCISSORS which means you win! You won't be so lucky next time!";
	        	}
	        	else {
	            		return "PAPER beats ROCK which means I'm the champion! in yo' FACE!";
	        	}
	    	}
	    	if (choice1 == "PAPER") {
	        	if (choice2 == "ROCK") {
	            		return "PAPER beats ROCK which means I've lost! how... how can this be? :(";
	        	}
	        	else {
	            		return "SCISSORS beats PAPER which means I win Bitches!! L-O-S-E-R spells LOSER!! ner ner n-ner neeeer!";
	        	}
	    	}
	    	if (choice1 == "SCISSORS") {
	        	if (choice2 == "PAPER") {
	            		return "SCISSORS beats PAPER which means DAMMIT I lost :( good game dude, good game!";
	        	}
	        	else {
	            		return "ROCK beats SCISSORS which means you have lost to my all mighty POWA!! HA! go and cry SUCKA!";
	        	}
	    	}
	};
	API.sendChat("@" + API.getUser(player).username + " you chose " + userChoice + " and I chose " + computerChoice + ". " + compare(userChoice, computerChoice));
	player = [];
	userChoice = [];
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
