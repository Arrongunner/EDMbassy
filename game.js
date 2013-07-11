API.addEventListener(API.CHAT, gamesticles);

var userChoice = [];
var targeted = " ";
var player = " ";
var name = " ";
var playing = false;
var playingWait = 600000;
var pWait = 300000;
var playingPassed = 0;
var pPassed = 0;
var playingTimer = null;
var pTimer = null;
var tpTimer = null;
var hr = 6E5 * 6;
var chosen = true;
var gamesPlayed = 0;
var gamesWon = 0;
var gamesLost = 0;
var winMsg = ["dammit I lost, I won't lose the next game", ""];
var loseMsg = " ha you lose";
var drawMsg = " game tied";
var quitMsg = "I jizz on the cookie you could have won for quitting!! B==:punch:D:sweat_drops::cookie:";
var cookieMsg = " here is your winning cookie :cookie:";
var kickMsg = " you lost now I get to jizz on you B==:punch:D:sweat_drops:";
var targeted = " ";


function gamesticles(data) {
	var msg = data.message.toLowerCase();
	if (API.getUser(data.fromID).permission >= 2 && msg.indexOf("/start") > -1) {
		API.sendChat("/me Game Initiated! Starting in T-Minus 10 Minutes");
		setTimeout("targetPlayer()", 600000);
		tpTimer = setInterval("targetPlayer();", hr);
	}
	if (playing == false && player.indexOf(data.fromID) > -1 && msg.indexOf("/pass") > -1) {
		API.sendChat("/me Player cancelled!");
		clearInrerval (pTimer);
		pPassed = 0;
		target = " ";
		player = " ";
	}
        if (playing == false && player.indexOf(data.fromID) > -1 && msg.indexOf("/play") > -1) {
	        API.sendChat("@" + data.from + " welcome to Rock Paper Scissors Kick. Win 3 games and get a Cookie, lose 3 games, get kicked from the room. You can quit at anytime by typing /quit.");
	        API.sendChat("@" + data.from + " Rock Paper or Scissors?");
	        playing = true;
		chosen = false;
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
	            		return "ROCK beats SCISSORS " + winMsg[Math.floor(Math.random() * winMsg.length)];
	        	}
	        	else {
	        		gamesLost = gamesLost + 1;
	            		return "PAPER beats ROCK " + loseMsg[Math.floor(Math.random() * loseMsg.length)];
	        	}
	    	}
	    	if (choice1 == "PAPER") {
	        	if (choice2 == "ROCK") {
	        		gamesWon = gamesWon + 1;
	            		return "PAPER beats ROCK " + winMsg[Math.floor(Math.random() * winMsg.length)];
	        	}
	        	else {
	        		gamesLost = gamesLost + 1;
	            		return "SCISSORS beats PAPER " + loseMsg[Math.floor(Math.random() * loseMsg.length)];
	        	}
	    	}
	    	if (choice1 == "SCISSORS") {
	        	if (choice2 == "PAPER") {
	        		gamesWon = gamesWon + 1;
	            		return "SCISSORS beats PAPER " + winMsg[Math.floor(Math.random() * winMsg.length)];
	        	}
	        	else {
	        		gamesLost = gamesLost + 1;
	            		return "ROCK beats SCISSORS " + loseMsg[Math.floor(Math.random() * loseMsg.length)];
	        	}
	    	}
	};
	API.sendChat("@" + API.getUser(player).username + " You chose " + userChoice + ", and I chose " + computerChoice + ". " + compare(userChoice, computerChoice));
	checkStats();
}
function targetPlayer(){
	targeted = API.getWaitList()[Math.floor(Math.random() * API.getWaitList().length)];
	player = targeted.id;
	name = API.getUser(player).username;
	API.sendChat("@" + name + " you have been randomly selected to play Rock Paper Scissors Kick. Type '/play' within the next 5 minutes to play, or type '/pass' to skip this opportunity");
	pTimer = setInterval("checkPassed()", 1000);
	checkGames();
}
function checkGames() {
	if (gamesPlayed == 5) {
		clearInterval(tpTimer);
		clearInterval(tTimer);
		clearInterval(playingTimer);
		playing = false;
		playingPassed = 0;
	}
}	
		
function checkStats() {
	if (gamesWon < 3 && gamesLost < 3) {
		setTimeout('API.sendChat("@" + API.getUser(player).username + " Stats: WON: " + gamesWon + " LOST: " + gamesLost + ". Rock Paper or Scissors?");', 2000);
		userChoice = [];
		chosen = false;
	}
	if (gamesWon == 3) {
		setTimeout('API.sendChat("@" + API.getUser(player).username + " Congratulations, " + cookieMsg[Math.floor(Math.random() * cookieMsg.length)]);', 2000);
		playingTimer = setInterval("checkPlaying()", 1000);
        	userChoice = [];
        	setTimeout('player = " ";', 7000);
        	chosen = true;
		gamesPlayed = gamesPlayed + 1;
        	gamesWon = 0;
        	gamesLost = 0;
	}
	if (gamesLost == 3) {
		setTimeout('API.sendChat("@" + API.getUser(player).username + " Shit son, " + kickMsg[Math.floor(Math.random() * kickMsg.length)]);', 2000);
		playingTimer = setInterval("checkPlaying()", 1000);
		setTimeout('new ModerationKickUserService(player, "Ouch unlucky. Great game though. See you in an hour");', 5000);
        	userChoice = [];
        	setTimeout('player = " ";', 7000);
        	chosen = true;
		gamesPlayed = gamesPlayed + 1;
        	gamesWon = 0;
        	gamesLost = 0;	
	}

}

function checkPassed() {
	if (pPassed >= pWait) {
		clearInrerval (pTimer);
		pPassed = 0;
		target = " ";
		player = " ";
	}
	else {
		pPassed = pPassed + 1000;
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
