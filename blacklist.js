blacklist = [
	 "50aeb489d6e4a94f7747d4a8",
]
	 

API.addEventListener(API.USER_JOIN, checkBlacklist);

function checkBlacklist(user) {
        if (blacklist.indexOf(user.id) > -1 ) {
                API.sendChat("/me automated kick");
                API.moderateBanUser(user.id, "HEH HEH HEH HEH I told you I'd have the last laugh");
        }
}

var ohmahgawded = false;
var ohmahgawdedWait = 300000;
var ohmahgawdedPassed = 0;
var ohmahgawdedTimer = null;

API.addEventListener(API.CHAT, omgsticles);

function omgsticles(data) {
        var yMsg = ["OH... MAH GAWD!", "OH EM GEEEEE!"];
	if (ohmahgawded == false && data.message.indexOf('omg') > -1) {
		ohmahgawded = true;
		ohmahgawdedTimer = setInterval("checkOhmahgawded();", 1000);
        	setInterval("API.sendChat(yMsg[Math.floor(Math.random() * yMsg.length)]);", 2000);
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
