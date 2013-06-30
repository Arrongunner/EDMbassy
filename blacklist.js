var ohmahgawded = false;
var ohmahgawdedWait = 300000;
var ohmahgawdedPassed = 0;
var ohmahgawdedTimer = null;
var omgMsg = [
	"OH... MAH GAWD!", 
	"Merciful Heavens!", 
	"Goodness Gracious!", 
	"Zounds", 
	"For the Love of Mike!", 
	"Holy Cammoli!", 
	"Jeez-Oh-Pete!", 
	"Jesus H. Christ!", 
	"OH EM GEEEEE!", 
	"Jeepers Creepers!", 
	"Holy Crap!", 
	"Jesus, Joseph and Marry!", 
	"Holy Beejebus!", 
	"Ye Gods!", 
	"My Word!", 
	"Golly Gosh!", 
	"My Goodness!", 
	"Egad!", 
	"What the Fudge Balls!", 
	"Knights of Columbus!", 
	"Oh Crikey!", 
	"Oh my Stars!", 
	"Oh my Days!", 
	"Holy Shiznizz",
	"Holy Smokes!",
	"Caramba! (Spanish)",
	"Hells Bells and a Bucket of Blood!",
	"Holy Cow!",
	"Good Greif",
	"OH MAH ALLAH!",
	"Holy Macaroni!",
	"Sweet Nibblets!",
	"Oh My Gully!",
	"Oh My Glob!",
	"Jiminy Cricket!",
	"Great Scott!",
	"By the Beard of Zues!",
	"Uncle Anthony's Corncob Pipe!",
	"Zoe Mah Gawd!",
	"Great Caesar's Ghost!",
	"Walloping Websnappers!",
	"Holy Batman!",
	"Great Zarquon's Ghost!",
	"Mother of Pearls!",
	"Oh my Insert Preffered Deity Here",
	"Eirini kai Kalo! (Greek)",
];
		

API.addEventListener(API.CHAT, omgsticles);

function omgsticles(data) {
        if (ohmahgawded == false && data.message.indexOf('omg') > -1) {
        	ohmahgawded = true;
		ohmahgawdedTimer = setInterval("checkOhmahgawded();", 1000);
        	API.sendChat("OMG alternative: " + omgMsg[Math.floor(Math.random() * omgMsg.length)]);
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
