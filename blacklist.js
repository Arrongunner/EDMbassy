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

API.addEventListener(API.CHAT, yolosticles);

function yolosticles(data) {
        var replies = ["oh, mah gawd, like totes YOLO!", "YOLO ma HOLO!", "YOLO: You only love once!"];
		if (data.message.indexOf('yolo') > -1 || data.message.indexOf('YOLO') > -1) {
            API.sendChat("@" + data.from + " " + replies[Math.floor(Math.random() * replies.length)]);
		}
}
