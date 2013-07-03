API.addEventListener(API.CHAT, gamesticles);

var userChoice = [];
var player = " ";
var playing = false;
var playingWait = 6000;
var playingPassed = 0;
var playingTimer = null;
var chosen = true;
var gamesWon = 0;
var gamesLost = 0;
var winMsg = "dammit I lost, I won't lose the next game";
var loseMsg = " ha you lose";
var drawMsg = " game tied";
var quitMsg = "I jizz on the cookie you could have won for quitting!! B==:punch:D:sweat_drops::cookie:";
var cookieMsg = " here is your winning cookie :cookie:";
var kickMsg = " you lost now I get to jizz on you B==:punch:D:sweat_drops:";

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
        	API.sendChat("@" + data.from + " " + quitMsg + " Final Score: WON: " + gamesWon + " LOST: " + gamesLost);
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
	        	return drawMsg;
	    	}
	    	if (choice1 == "ROCK") {
	        	if (choice2 == "SCISSORS") {
	        		gamesWon = gamesWon + 1;
	            		return "ROCK beats SCISSORS " + winMsg;
	        	}
	        	else {
	        		gamesLost = gamesLost + 1;
	            		return "PAPER beats ROCK " + loseMsg;
	        	}
	    	}
	    	if (choice1 == "PAPER") {
	        	if (choice2 == "ROCK") {
	        		gamesWon = gamesWon + 1;
	            		return "PAPER beats ROCK " + winMsg;
	        	}
	        	else {
	        		gamesLost = gamesLost + 1;
	            		return "SCISSORS beats PAPER " + loseMsg;
	        	}
	    	}
	    	if (choice1 == "SCISSORS") {
	        	if (choice2 == "PAPER") {
	        		gamesWon = gamesWon + 1;
	            		return "SCISSORS beats PAPER " + winMsg;
	        	}
	        	else {
	        		gamesLost = gamesLost + 1;
	            		return "ROCK beats SCISSORS " + loseMsg;
	        	}
	    	}
	};
	API.sendChat("@" + API.getUser(player).username + " You chose " + userChoice + ", and I chose " + computerChoice + ". " + compare(userChoice, computerChoice));
	checkStats();
}

function checkStats() {
	if (gamesWon < 3 && gamesLost < 3) {
		setTimeout('API.sendChat("@" + API.getUser(player).username + " Stats: WON: " + gamesWon + " LOST: " + gamesLost + ". Rock Paper or Scissors?");', 2000);
		userChoice = [];
		chosen = false;
	}
	if (gamesWon == 3) {
		setTimeout('API.sendChat("@" + API.getUser(player).username + " Congratulations, " + cookieMsg);', 2000);
		playingTimer = setInterval("checkPlaying()", 1000);
        	userChoice = [];
        	setTimeout('player = " ";', 7000);
        	chosen = true;
        	gamesWon = 0;
        	gamesLost = 0;
	}
	if (gamesLost == 3) {
		setTimeout('API.sendChat("@" + API.getUser(player).username + " Shit son, " + kickMsg);', 2000);
		playingTimer = setInterval("checkPlaying()", 1000);
		setTimeout('new ModerationKickUserService(player, "Ouch unlucky. Great game though. See you in an hour");', 5000);
        	userChoice = [];
        	setTimeout('player = " ";', 7000);
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
