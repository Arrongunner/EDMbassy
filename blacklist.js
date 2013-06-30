var ohmahgawded = false;
var ohmahgawdedWait = 600000;
var ohmahgawdedPassed = 0;
var ohmahgawdedTimer = null;
var wtfed = false;
var wtfedWait = 600000;
var wtfedPassed = 0;
var wtfTimer = null;
var omgMsg = [
	" #1: OH... MAH GAWD!", 
	" #2: Merciful Heavens!", 
	" #3: Goodness Gracious!", 
	" #4: Zounds!", 
	" #5: Holy Macaroni!",
	" #6: Sweet Nibblets!",
	" #7: Oh My Gully!",
	" #8: Great Caesar's Ghost!",
	" #9: Holy Cammoli!", 
	" #10: Jeez-Oh-Pete!", 
	" #11: Jesus H. Christ!", 
	" #12: OH EM GEEEEE!", 
	" #13: Jeepers Creepers!", 
	" #14: Holy Crap!", 
	" #15: Jesus, Joseph and Marry!", 
	" #16: Holy Beejebus!", 
	" #17: Ye Gods!", 
	" #18: For the Love of Mike!", 
	" #19: Oh My Glob!",
	" #20: Walloping Websnappers!",
	" #21: Jiminy Cricket!",
	" #22: Great Scott!",
	" #23: By the Beard of Zues!",
	" #24: Uncle Anthony's Corncob Pipe!",
	" #25: Zoe Mah Gawd!",
	" #26: My Word!", 
	" #27: Golly Gosh!", 
	" #28: My Goodness!", 
	" #29: Egad!", 
	" #30: What the Fudge Balls!", 
	" #31: Knights of Columbus!", 
	" #32: Oh Crikey!", 
	" #33: Oh my Stars!", 
	" #34: Oh my Days!", 
	" #35: Holy Shiznizz",
	" #36: Holy Smokes!",
	" #37: Caramba! (Spanish)",
	" #38: Hells Bells and a Bucket of Blood!",
	" #39: Holy Cow!",
	" #40: Good Greif",
	" #41: OH MAH ALLAH!",,
	" #42: Holy Batman!",
	" #43: Great Zarquon's Ghost!",
	" #44: Mother of Pearls!",
	" #45: Oh my [Insert Preffered Deity Here]",
	" #46: Eirini kai Kalo! (Greek)",
];
		

API.addEventListener(API.CHAT, omgsticles);

function omgsticles(data) {
        if (ohmahgawded == false && data.message.indexOf('omg') > -1) {
        	ohmahgawded = true;
		ohmahgawdedTimer = setInterval("checkOhmahgawded();", 1000);
        	API.sendChat("OMG alternative" + omgMsg[Math.floor(Math.random() * omgMsg.length)]);
	}
	if (wtfed == false && data.message.indexOf('wtf') > -1 || data.message.indexOf('WTF') > -1) {
		wtfed = true;
		wtfTimer = setInterval("checkWtfed();", 1000);
		API.sendChat("@" + data.from + " why yew telling people you're Willing To Fuck O_O");
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

function checkWtfed() {
	if (wtfedPassed >= wtfedWait) {
		clearInterval(wtfTimer);
		wtfed = false;
		wtfedPassed = 0;
	}
	else {
		wtfedPassed = wtfedPassed + 1000;
	}
}
