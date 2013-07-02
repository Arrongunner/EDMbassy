API.addEventListener(API.CHAT, gamesticles);

var userChoice = [];
var player = " ";
var playing = false;
var playingWait = 60000;
var playingPassed = 0;
var playingTimer = null;
var chosen = true;
var gamesWon = 0;
var gamesLost = 0;

function gamesticles(data) {
	var msg = data.message.toLowerCase();
        if (playing == false && msg.indexOf("/play") > -1) {
                API.sendChat("@" + data.from + " welcome to Rock Paper Scissors Kick. Win 3 games and get a Cookie, lose 3 games, get kicked from the room. You can quit at anytime by typing /quit.");
                API.sendChat("@" + data.from + " Rock Paper or Scissors?");
                playing = true;
        	chosen = false;
        	player = (data.fromID);
        }
        if (playing == true && player.indexOf(data.fromID) > -1 && msg.indexOf("/quit") > -1) {
        	API.sendChat("@" + data.from + " N'awwooo you quitter!!! you could have won. Final score: WON: " + gamesWon + " LOST: " + gamesLost);
        	playingTimer = setInterval("checkPlaying()", 1000);
        	userChoice = [];
        	player = " ";
        	chosen = true;
        	gamesWon = 0;
        	gamesLost = 0;
        }
        if (chosen == false && player.indexOf(data.fromID) > -1 && msg.indexOf("rock") > -1) {
        	userChoice.push("ROCK");
        	chosen = true;
        	game();
        }
        else if (chosen == false && player.indexOf(data.fromID) > -1 && msg.indexOf("paper") > -1) {
        	userChoice.push("PAPER");
        	chosen = true;
        	game();
        }
        else if (chosen == false && player.indexOf(data.fromID) > -1 && msg.indexOf("scissors") > -1) {
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
	        		gamesWon = gamesWon + 1;
	            		return "ROCK beats SCISSORS which means you win! You won't be so lucky next time!";
	        	}
	        	else {
	        		gamesLost = gamesLost + 1;
	            		return "PAPER beats ROCK which means I'm the champion! in yo' FACE!";
	        	}
	    	}
	    	if (choice1 == "PAPER") {
	        	if (choice2 == "ROCK") {
	        		gamesWon = gamesWon + 1;
	            		return "PAPER beats ROCK which means I've lost! how... how can this be? :(";
	        	}
	        	else {
	        		gamesLost = gamesLost + 1;
	            		return "SCISSORS beats PAPER which means I win Bitches!! L-O-S-E-R spells LOSER!! ner ner n-ner neeeer!";
	        	}
	    	}
	    	if (choice1 == "SCISSORS") {
	        	if (choice2 == "PAPER") {
	        		gamesWon = gamesWon + 1;
	            		return "SCISSORS beats PAPER which means DAMMIT I lost :( good game dude, good game!";
	        	}
	        	else {
	        		gamesLost = gamesLost + 1;
	            		return "ROCK beats SCISSORS which means you have lost to my all mighty POWA!! HA! go and cry SUCKA!";
	        	}
	    	}
	};
	API.sendChat("@" + API.getUser(player).username + " you chose " + userChoice + " and I chose " + computerChoice + ". " + compare(userChoice, computerChoice));
	userChoice = [];
	chosen = false;
	if (gamesWon < 3 && gamesLost < 3) {
		API.sendChat("@" + API.getUser(player).username + " Stats: WON: " + gamesWon + " LOST: " + gamesLost + ". Rock Paper or Scissors?");
	}
	checkStats();
}

function checkStats() {
	if (gamesWon == 3) {
		API.sendChat("@" + API.getUser(player).username + " Congratulations, you just beat Rock Paper Scissors Kick! As promised, here is your winning cookie!! :cookie:");
		playingTimer = setInterval("checkPlaying()", 1000);
        	userChoice = [];
        	player = " ";
        	chosen = true;
        	gamesWon = 0;
        	gamesLost = 0;
	}
	if (gamesLost == 3) {
		API.sendChat("@" + API.getUser(player).username + " Shit son, you have balls! But this time it has not paid off for you. Thanks for playing, GOODBYE!!!");
		playingTimer = setInterval("checkPlaying()", 1000);
		setTimeout('API.moderateKickUser(player, "Ouch unlucky. Great game though. See you in an hour (^_^)");', 6000);
        	userChoice = [];
        	player = " ";
        	chosen = true;
        	gamesWon = 0;
        	gamesLost = 0;	
	}
	
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
