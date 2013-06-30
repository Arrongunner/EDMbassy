var ohmahgawded = false;
var ohmahgawdedWait = 300000;
var ohmahgawdedPassed = 0;
var ohmahgawdedTimer = null;

API.addEventListener(API.CHAT, omgsticles);

function omgsticles(data) {
        if (ohmahgawded == false && data.message.indexOf('omg') > -1) {
        	var yMsg = ["OH... MAH GAWD!", "OH EM GEEEEE!"];
		ohmahgawded = true;
		ohmahgawdedTimer = setInterval("checkOhmahgawded();", 1000);
        	API.sendChat(yMsg[Math.floor(Math.random() * yMsg.length)]);
	}
}

function checkOhmahgawded() {
	if (ohmahgawdedPassed >= ohmahgawdedWait) {
		clearInterval(ohmahgawdedTimer);
		ohmahgawded = false;
		ohmahgawdedPassed = 0;
	}
	else {
		ohmahgawdedPassed = ohmahgawdedPassed + 1000;
	}
}
