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
