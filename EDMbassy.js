//THERE IS A BREAK(S) SOMEWHERE, FINDING IT HARD TO LOCATE. CONSOLE RETURNS "SyntaxError: Unexpected token {" WHAT
//EVER THE FUCK THAT MEANS. PLEASE TRY TO LOCATE THE BREAK(S)!!!! D:

//needed for the 4 timers in the script
var clickTimer = 	null;
var clicked = 		false;
var clickPassed =	0;
var clickToWait =	5000;
var skipTimer =		null;
var skipped =		false;
var skipPassed =	0;
var skipToWait =	2000;
var mentionTimer =	null;
var mentioned =		false;
var mentionPassed =	0;
var mentionToWait =	120000;
var boothWaitTimer =	null;
var boothWaiting =	false;
var boothWaitPassed =	0;

//click send message
var rulesMsg = "/me Rules: 1) No spamming 2) No posting lewd content (pictures/videos/doujins) ect. 3) No songs over 7 minutes unless under certain conditions (A featured artist playing a mix.) 4) Please speak English. Have fun!";
var fbMsg = ["/me Check out the promoters on their youtube channels! HDmusicNexus: http://www.youtube.com/HDmusicNexus HDdubRAVE3: http://www.youtube.com/HDdubRave3 HDMusicGirl:http://www.youtube.com/TheHDMusicGirl"];
var enMsg = ["English only in chat please!", "Please could you talk in English."];
var skipMsg = ["Please do not ask to skip songs.", "Asking to skip songs can lead to being kicked!"];
var fansMsg = ["Please do not ask for fans.", "Earn your fans like the rest of us."];
var wafflesMsg = ["WAFFLES FOR EVERYONE!! #-(>_<)-#", "did somebody say WAFFLES? #-(>_<)-#", "cheese ca- I mean WAFFLES TIME! #-(>_<)-#", "do you know what it is time for? WAFFLES #-(>_<)-#"];
var bhvMsg = ["please be appropriate in the chat", "please do not talk like that, control yourself!",  "please be mature in the chat guys"];
var sleepMsg = ["Bye, i am out for today!", "Going to sleep now.", "Bed time!", "tiredness... taking... over... must sleep"];
var workMsg = ["I'm working so mention me if I'm needed.", "I'm going to be busy for a while, mention if needed."];
var afkMsg = ["Stepping away for a moment.", "Going AFK for a while, be back soon!"];
var backMsg = ["I have returned", "I'm baaacckkk"];
var spamMsg = ["Please get rid of your autowoot, it spams the chat.", "Your autowoot is no good, it spams the chat without you knowing and would be best to remove it.", "If you do not remove your autowoot you will be kicked.", "Your autowoot is no good, remove it or you will leave the room.", "Luke! I am your father, and I say remove your autowoot because it is spamming the chat, or perish in the fires of the darkside!"];


//auto respond messages
var autoAwayMsg = ["I'm currently AFK", "I'm AFK", "I'm on an adventure (afk)", "gone away for a moment", "not present at keyboard"];
var autoSlpMsg = ["I'm currently sleeping", "I'm counting sheep in my dreams", "I've hit the sack", "I'm asleep", "I've gone to sleep"];
var autoWrkMsg = ["I'm currently working", "I'm busy", "I shall get back to you when i can."];


//css styles
var styles = [
            '.sidebar {position: fixed; top: 0; height: 100%; width: 200px; z-index: 99999; background-image: linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -o-linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -moz-linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -webkit-linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -ms-linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0, #000000),color-stop(1, #3B5678));}',
            '.sidebar#side-right {right: -190px;z-index: 99999;}',
            '.sidebar#side-left {left: -190px; z-index: 99999; }',
            '.sidebar-handle {width: 12px;height: 100%;z-index: 99999;margin: 0;padding: 0;background: rgb(96, 141, 197);box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .9);cursor: "ne-resize";}',
            '.sidebar-handle span {display: block;position: absolute;width: 10px;top: 50%;text-align: center;letter-spacing: -1px;color: #000;}',
            '.sidebar-content {position: absolute;width: 185px;height: 100%; padding-left: 15px}',
            '.sidebar-content2 {position: absolute;width: 185px;height: 100%; overflow: auto}',
            '.sidebar-content2 h3 {font-weight: bold; padding-left: 5px; padding-bottom: 5px; margin: 0;}',
            '.sidebar-content2 a {font-weight: bold; font-size: 13px; padding-left: 5px;}',
            '#side-right .sidebar-handle {float: left;}',
            '#side-left .sidebar-handle {float: right;}',
            '#side-right a {display: block;min-width: 100%;cursor: pointer;padding: 4px 5px 8px 5px;border-radius: 4px;font-size: 13px;}',
            '.sidebar-content2 span {display: block; min-width: 94%;cursor: pointer;border-radius: 4px; padding: 0 5px 0 5px; font-size: 12px;}',
            '#side-right a span {padding-right: 8px;}',
            '#side-right a:hover {background-color: rgba(97, 146, 199, 0.65);text-decoration: none;}',
            '.sidebar-content2 span:hover {background-color: rgba(97, 146, 199, 0.65);text-decoration: none;}',
            '.sidebar-content2 a:hover {text-decoration: none;}',
            '.chat-bouncer {background: url(http://i.imgur.com/9qWWO4L.png) no-repeat 0 5px;padding-left: 17px;width: 292px;}',
            '.chat-manager {background: url(http://i.imgur.com/hqqhTcp.png) no-repeat 0 5px;padding-left: 17px;width: 292px;}',
            '.chat-cohost {background: url(http://i.imgur.com/njajqVG.png) no-repeat 0 5px;padding-left: 17px;width:292px;}',
            '.chat-host {background: url(http://i.imgur.com/njajqVG.png) no-repeat 0 5px;padding-left: 17px;width: 292px;}',
            '#dj-console, #dj-console {background-image: url(http://i.imgur.com/gqdMdaz.gif);min-height:33px;min-width:131px;}',
            '.chat-from-you {color: #0099FF;font-weight: bold;margin-top: 0px; padding-top: 0px;}',
            '.chat-from-featureddj {color: rgb(255, 0, 135); font-weight: bold; margin-top: 0px; padding-top: 0px;}',
            '.chat-from-bouncer {color: rgb(199, 0, 199); font-weight: bold; margin-top: 0px; padding-top: 0px;}',
            '.chat-from-manager {color: rgb(255, 199, 148); font-weight: bold; margin-top: 0px; padding-top: 0px;}',
            '.chat-from-cohost {color: rgb(255, 92, 0); font-weight: bold; margin-top: 0px; padding-top: 0px;}',
            '.chat-from-host {color: #32CD32;font-weight: bold;margin-top: 0px; padding-top: 0px;}',
            '#user-points-title {color: #FFFFFF; position: absolute; left: 36px; font-size: 10px;}',
            '#user-fans-title {color: #FFFFFF; position: absolute; left: 29px; font-size: 10px;}',
            '.meta-header span {color: rgba(255, 255, 255, 0.79); position: absolute; left: 15px; font-size: 10px;}',
            '#button-lobby {background-image: url(http://i.imgur.com/brpRaSY.png);}',
            '#volume-bar-value {background-image: url(http://i.imgur.com/xmyonON.png) ;}',
            '.chat-message:nth-child(2n), .chat-mention:nth-child(2n), .chat-skip:nth-child(2n), .chat-moderation:nth-child(2n), .chat-emote:nth-child(2n), .chat-update:nth-child(2n) {background-color: rgba(26, 26, 26, 0.65);}',
            '.frame-background {background-color: rgba(0, 0, 0, 0.8);}',
            '#hr-div {height: 100%; width: 100%;margin: 0;padding-left: 12px;}',
            '#hr2-div2 {height: 100%; width: 100%;margin: 0;}',
            '#hr-style {position: absolute;display: block;height: 20px;width: 100%;bottom: 0%;background-image: url(http://i.imgur.com/jQhf3BW.png);}',
            '#hr2-style2 {position: absolute;display: block;height: 20px;width: 94%%;bottom: 0%;background-image: url(http://i.imgur.com/jQhf3BW.png);}',
            '#side-left h3 {padding-left: 5px}',
            '::-webkit-scrollbar {height: 6px; width: 6px;}',
            '::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); -webkit-border-radius: 6px;border-radius: 6px;}',
            '::-webkit-scrollbar-thumb {-webkit-border-radius: 2px;border-radius: 6px;background: rgba(232,37,236,0.8); -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,0.5);}',
            '::-webkit-scrollbar-thumb:window-inactive {background: rgba(232,37,236,0.4);}',
];


//extra JS used for style
var scripts = [
            '(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery)',
            'if (jQuery.easing.easeOutCirc === undefined) jQuery.easing.easeOutCirc = function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a}',
            '$("#side-right").hoverIntent(function() {var timeout_r = $(this).data("timeout_r");if (timeout_r) {clearTimeout(timeout_r);}$(this).animate({"right": "0px"}, 500, "easeOutCirc");}, function() {$(this).data("timeout_r", setTimeout($.proxy(function() {$(this).animate({"right": "-190px"}, 500, "easeOutCirc");}, this), 500));});',
];


//bulk of the coding for the script to make it easier to read and edit in the condole
EDMbassyModel = Class.extend({
	init: function() {
		//set up proxies used later on in the script
		this.proxy = {
			//these ones are used in the buttons on the right hand side
			menu: {
				autowootClick:	$proxy(this.autowootClick,	this),
				autoqueueClick:	$proxy(this.autoqueueClick,	this),
				streamingClick:	$proxy(this.streamingClick,	this),
				hideVideoClick:	$proxy(this.hideVideotClick,	this),
				emotesClick:	$proxy(this.emotesClick,	this),
				audienceClick:	$proxy(this.audienceClick,	this),
				rulesClick:	$proxy(this.rulesClick,		this),
				linksCLick:	$proxy(this.linksClick,		this),
				fansClick:	$proxy(this.fansClick,		this),
				skipsClick:	$proxy(this.skipsClick,		this),
				wafflesClick:	$proxy(this.wafflesClick,	this),
				sleepClick: 	$proxy(this.sleepClick,		this),
				workCLick:	$proxy(this.workClick,		this),
				AFKClick:	$proxy(this.AFKClick,		this),
				backClick:	$proxy(this.backClick,		this),
				idleClick:	$proxy(this.idleClick,		this),
				skipClick:	$proxy(this.skipClick,		this),
				lockCLick:	$proxy(this.lockClick,		this),
				unlockClick:	$proxy(this.unlockClick,	this),
				lockskipClick:	$proxy(this.lockskipClick,	this),
				leftClick:	$proxy(this.leftClick,		this),
			},
			//these are used for the listeners
			djAdvanced:		$proxy(this.djAdvanced,		this),
	  		autoRespond:		$proxy(this.autoRespond,	this),
	  		queueUpdate:		$proxy(this.queueUpdate,	this),
	  		roomSkip:		$proxy(this.roomSkip,		this),
	  		populateUserlist:	$proxy(this.populateUserlist,	this),
			strobeListener:		$proxy(this.strobeListener,	this),
		},
		//loads settings
		this.loadSettings();
		//loads API listners
		this.initAPI();
		//loads UI buttons
		this.initUI();
	},
	//settings
	settings: {
		autowoot:	false,
		autoqueue: 	false,
		hideVideo:	false,
		emotes:		true,
		audience:	true,
		left:		false,
	},
	//funtion to load settings
	loadSettings: functnion() {
		if (localStorage.EDMbassy === undefined) return;
		var save = JSON.parse(localStorage.EDMbassy);
		for i in this.settings) {
			if (save[i] !== undefined) {
				this.settings[i] = save[i];
			}
		}
	},
	//function to save settings
	saveSettings: function() {
		localStorage.EDMbassy = JSON.stringify(this.settings);
	},
	//API listeners
	initAPI: function() {
		API.addEventListener(API.DJ_ADVANCE, 		this.proxy.djAdvanced);
  		API.addEventListener(API.CHAT,			this.proxy.autoRespond);
  		API.addEventListener(API.DJ_UPDATE, 		this.proxy.queueUpdate);
  		API.addEventListener(API.ROOM_SCORE_UPDATE, 	this.proxy.roomSkip);
  		API.addEventListener(API.VOTE_UPDATE, 		this.proxy.populateUserlist);
		API.addEventListener(API.USER_JOIN, 		this.proxy.populateUserlist);
    		API.addEventListener(API.USER_LEAVE, 		this.proxy.populateUserlist);
		API.addEventListener(API.CHAT,			this.proxy.strobeListener);
	},
	//sets up the buttons for the right hand side
	initUI: function() {
		this.addSettBtn(this.settings.autowoot,		'woot',		'Toggles Auto Woot',	'Auto Woot',		this.proxy.menu.autowootClick);
		this.addSettBtn(this.settings.autoqueue,	'queue',	'Toggles Auto Queue',	'Auto Queue',		this.proxy.menu.autoqueueClick);
		this.addSettBtn(!DB.settings.streamDisabled,	'streaming',	'Toggles Streaming',	'Video Streaming',	this.proxy.menu.streamingClick);
		this.addSettBtn(this.settings.hideVideo,	'hideVideo',	'Toggles Hide Video',	'Hide Video',		this.proxy.menu.hideVideoClick);
		this.addSettBtn(this.settings.emotes,		'emotes',	'Toggles Emoticons',	'Emoticons',		this.proxy.menu.emotesClick);
		this.addSettBtn(this.settings.audience,		'audience',	'Toggles Audience',	'Audience',		this.proxy.menu.audienceClick);
		this.addMsgsBtn('rules',			'Sends Rules Message In Chat',		'Rules'			this.proxy.menu.rulesClick);
		this.addMsgsBtn('links',			'Sends Links Message In Chat',		'Links'			this.proxy.menu.linksClick);
		this.addMsgsBtn('fans',				'Sends No Fans Message In Chat',	'No Fans'		this.proxy.menu.fansClick);
		this.addMsgsBtn('skip',				'Sends No Skip Message In Chat',	'No Skip'		this.proxy.menu.skipsClick);
		this.addMsgsBtn('waffles',			'Sends Waffles Message In Chat',	'Waffles'		this.proxy.menu.wafflesClick);
		this.addStatBtn('sleep',			'Sets Status to Sleeping',		'Sleeping'		this.proxy.menu.sleepClick);
		this.addStatBtn('work',				'Sets Status to Working',		'Working'		this.proxy.menu.workClick);
		this.addStatBtn('afk',				'sets Status to AFK',			'AFK'			this.proxy.menu.AFKClick);
		this.addStatBtn('back',				'sets Status to Available',		'Available'		this.proxy.menu.backClick);
		this.addStatBtn('idle',				'sets Status to Idle',			'Idle'			this.proxy.menu.idleClick);
		this.addModsBtn('skip',				'Skips Current DJ',			'Skip'			this.proxy.menu.skipClick);
		this.addModsBtn('lock',				'Locks Booth',				'Lock'			this.proxy.menu.lockClick);
		this.addModsBtn('unlock',			'Unlocks Booth',			'Unlock'		this.proxy.menu.unlockClick);
		this.addModsBtn('lockskip',			'Skips DJ and Adds Back to Booth',	'Lockskip'		this.proxy.menu.lockskipClick);
	},
	//creates the settings buttons on the right
	addSettBtn: function(setting, id, titling, text, callback) {
		$('#side-right .sidebar-content').append('<a id="EDMbassy-btn-' + id + '"><div title="' + titling + '" style="color:' + (setting ? '#3FFF00' : '#ED1C24') + '"></div>' + text + '</a>');
		$('#EDMbassy-btn-' + id).click(callback);
	},
	//creates the messages buttons on the right
	addMsgsBtn: function(id, titling, text, callback) {
		$('#side-right .sidebar-content').append('<a id="EDMbassy-btn-' + id + '"><div title="' + titling + '" style="color:#FF8C00"></div>' + text + '</a>');
		$('#EDMbassy-btn-' + id).click(callback);
	},
	//creates the status buttons on the right
	addStatBtn: function(id, titling, text, callback) {
		$('#side-right .sidebar-content').append('<a id="EDMbassy-btn-' + id + '"><div title="' + titling + '" style="color:#FF8FEE"></div>' + text + '</a>');
		$('#EDMbassy-btn-' + id).click(callback);
	},
	//creates the moderation buttons on the right
	addModsBtn: function(id, titling, text, callback) {
		$('#side-right .sidebar-content').append('<a id="EDMbassy-btn-' + id + '"><div title="' + titling + '" style="color:#E90E82"></div>' + text + '</a>');
		$('#EDMbassy-btn-' + id).click(callback);
	},
	//changes the settings button colours when clicked
	changeSettBtnColor: function(id, value);
		$('#plugcubed-btn-' + id).find('[style^="color:"], [style*=" color:"]').attr('style','color:' + (value === true ? '#3FFF00' : '#ED1C24'));
	},
	//what happens when the autowoot is clicked
	autowootClick: function() {
		this.settings.autowoot = !this.settings.autowoot;
		this.changeSettBtnColor('woot', this.settings.autowoot);
		if (this.settings.autowoot) {
			$('#button-vote-positive').click();
		}
		this.saveSettings();
	};
	//what happens when the autoqueue is clicked
	autoqueueClick: function() {
		this.settings.autoqueue = !this.settings.autoqueue;
		this.settBtnColor('queue', this.settings.autoqueue);
		if (this.settings.autoqueue && !isInQueue()) {
			joingQueue();
		}
		this.saveSettings();
	},
	//what happens when the streaming button is clicked
	streamingClick: function() {
		this.changeSettBtnColor('streaming', !DB.settings.streamDisabled);
		API.sendChat(DB.settings.streamDisabled ? '/stream on' : '/stream off');
		this.saveSettings();
	},
	//what happens when the hide video is clicked
	hideVideoClick: function() {
		this.settings.hideVideo = !this.settings.hideVideo;
		this.changeSettColor('hideVideo', this.settings.hideVideo);
		$("#yt-frame").animate({"height": (this.settings.hideVideo ? "0px" : "271px")}, {duration: "fast"});
		$("#playback .frame-background").animate({"opacity": (this.settings.hideVideo ? "0" : "0.91")}, {duration: "medium"});
		this.saveSettings();
	},
	//what happens when the emotes button is clicked
	emotesClick: function() {
		this.settings.emotes = !this.settings.emtoes;
		this.changeSettBtnColor('emotes', this.settings.emotes);
		if (this.settings.emotes) {
			Emoji.emojify = function(a) {
				var b=!1;": "==a.substr(0,2)&&(b=!0,a=a.substr(2));for(var c in Emoji._cons)var d=c,e=Emoji._cons[c],d=d.replace("<","&lt;").replace(">","&gt;"),d=RegExp("(\\s|^)("+Emoji._regexEscape(d)+")(?=\\s|$)","g"),a=a.replace(d,"$1:"+e+":");for(c=Emoji._matchStr.exec(a);c;)e=c[1].toLowerCase(),d="&colon;"+e+"&colon;",Emoji._map[e]&&(d='<span class="emoji-glow"><span class="emoji emoji-'+Emoji._map[e]+'"></span></span>'),a=a.substr(0,c.index)+d+a.substr(c.index+c[0].length),c=Emoji._matchStr.exec(a);return(b?": ":"")+a
			}
		}
		if (!this.settings.emotes) {
			emoji.emojify = function(data) {
				return data;
			}
		}
		this.saveSettings();
	},
	//what happens when the auidence button is clicked
	audienceClick: function() {
		this.settings.audience = !this.settings.audience;
		this.changeSettBtnColor('audience', this.settings.audience);
		if (this.settings.audience) {
			$('#audience').show();
		}
		if (!this.settings.audience) {
			$('#audience').hide();
		}
		this.saveSettings();
	},
	//what happens when the left bar is clicked
	leftClick: function() {
		this.settings.left = !this.settings.left;
		$(".sidebar #side-left").animate({"left": this.settings.left ? "0px" : "-190px"}, 300, "easeOutCirc");
		this.saveSettings();
	},
	//what happens when the rules is clicked
	rulesClick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			API.sendChat(rulesMsg);
		}
	}, 
	//what happens when the links button is clicked
	linksCLick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			API.sendChat(linksMsg);
		}
	},
	//what happens when the fans button is clicked
	fansClick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			API.sendChat(fansMsg[Math.floor(Math.random() * fansMsg.Length]);
		}
	},
	//what happens when the skips button is clicked
	skipsClick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			API.sendChat(skipsMsg[Math.floor(Math.random() * skipsMsg.Length]);
		}
	},
	//what happens when the waffles is clicked
	wafflesClick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			API.sendChat(wflsMsg[Math.floor(Math.random() * wflsMsg.Length]);
		}
	},
	//what happens when the sleep status button is clicked
	sleepClick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			if (Models.user.data.status != 3) {
				API.sendChat(sleepMsg[Math.floor(Math.random() * sleepMsg.length)]);
				Models.user.changeStatus(3);
			}
		}
	},
	//what happens when the working button is clicked
	workClick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			if (Models.user.data.status != 2) {
				API.sendChat(workMsg[Math.floor(Math.random() * workMsg.length)]);
				Models.user.changeStatus(2);
			}
		}
	},
	//what happens when the afk button is clicked
	AFKCLick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			if (Models.user.data.status != 1) {
				API.sendChat(afkMsg[Math.floor(Math.random() * afkMsg.length)]);
				Models.user.changeStatus(1);
			}
		}
	},
	//what happens when the available button is clicked
	backClick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			if (Models.user.data.status != 0) {
				API.sendChat(backMsg[Math.floor(Math.random() * backMsg.length)]);
				Models.user.changeStatus(0);
			}
		}
	},
	//what happens when the idle button is clicked (nesw)
	idleClick: function() {
		if (clicked == false) {
			clicked = true;
			clickTimer = setInterval("checkClicked();", 1000);
			if (Models.user.data.status != -1) {
				API.sendChat(idleMsg[Math.floor(Math.random() * idleMsg.length)]);
				Models.user.changeStatus(-1);
			}
		}
	},
	//what happens when the skip button is clicked
	skipClick: function() {
		if (skipped == false) {
			skipped = true;
			skipTimer = setInterval("checkSkipped();", 500);
			new ModerationForceSkipService;
		}
	},
	//what happens when the lock button is clicked
	lockClick: function() {
		new RoomPropsService(document.location.href.split('/')[3],true,true,1,5);
	},
	//what happens when the unlock button is clicked
	unlockClick: function() {
		new RoomPropsService(document.location.href.split('/')[3],false,true,1,5);
	},
	//what happens when the lockskip button is clicked
	lockskipClick: function() {
		if (skipped == false) {
			skipped = true;
			skipTimer = setInterval("checkSkipped();", 500);
			new RoomPropsService(document.location.href.split('/')[3],true,true,1,5);
			new ModerationForceSkipService;
			new RoomPropsService(document.location.href.split('/')[3],false,true,1,5);
		}
	},
	//determinses wether or not you are in the queue
	isInQueue: function() {
		var self = API.getSelf();
    		return API.getWaitList().indexOf(self) !== -1 || API.getDJs().indexOf(self) !== -1;
	},
	//joins you to the queue
	joinQueue: function() {
		if ($('#button-dj-play').css('display') === 'block') {
			$('#button-dj-play').click();
    		} 
		else if (API.getWaitList().length < MAX_USERS_WAITLIST) {
        		API.waitListJoin();
    		}
	},
	//what happens when the next DJ plays
	djAdvanced: function() {
		setTimeout("autoSkip", 6000);
		if (this.settings.autowoot) {
			setTimeout("$('#button-vote-positive').click();", 7000);
		}
		if (this.settings.hideVideo) {
			$("#yt-frame").css("height", "0px");
			$("#playback .frame-background").css("opacity", "0.0");
		}
		if (boothWaitTime = false) {
			boothWaiting = true;
			BoothWaitTimer = setInterval("CheckBoothWait()", 1000);
		}
	},
	//if set to anything other than available, autorespond kicks in
	autoRespond: function(data) {
		var a = data.type == "mention" && Models.room.data.staff[data.fromID] && Models.room.data.staff[data.fromID] >= Models.user.BOUNCER, b = data.message.indexOf('@') >0;
		if (data.type == "mention" && mentioned == false) {
			if (API.getUser(data.fromID).status == 0) {
				mentioned = true;
				mentionTimer = setInterval("checkMentioned();", 1000);
				if (Models.user.data.status == 1) {
					API.sendChat("@" + data.from + " automsg: " + autoAwayMsg[Math.floor(Math.random() * autoAwayMsg.length)]);
				}
				if (Models.user.data.status ==2) {
					API.sendChat("@" + data.from + " automsg: " + autoWrkMsg[Math.floor(Math.random() * autoWrkMsg.length)]);
				}
				if (Models.user.data.status ==3) {
					API.sendChat("@" + data.from + " automsg: " + autoSlpMsg[Math.floor(Math.random() * autoSlpMsg.length)]);
				}
			}
		}
	},
	//listens for the waitlist and if the button is set to autoqueue, and you're not in queue, you are added
	queueUpdate: function() {
		if (this.settings.autoqueue && !isInQueue()) {
			joinQueue();
		}
	},
	//creates everything on the left hand side, from the users in the room, position, booth timer and user list
	populateUserlist: function() {
		var currentdj = '';
		var mehlist = '';
    		var wootlist = '';
    		var undecidedlist = '';
		var a = API.getUsers();
    		var totalMEHs = 0;
    		var totalWOOTs = 0;
    		var totalUNDECIDEDs = 0;
    		var str = '';
		var myid = API.getSelf().id;
		for (i in a) {
			if (a[i].admin) {
				a[i].permission = 99;
			}
			if (a[i].ambassador) {
				a[i].permission = 50;
			}
        		str = '<span class="chat-from-clickable ';
        		if (typeof (a[i].permission) !== 'undefined' && a[i].permission == 99) {
            			str += 'chat-from-admin ';
        		} else if (typeof (a[i].permission) !== 'undefined' && a[i].permission == 50) {
            			str += 'chat-from-ambassador ';
        		}
        		else if (typeof (a[i].permission) !== 'undefined' && a[i].permission == 5) {
            			str += 'chat-from-host ';
        		}
        		else if (typeof (a[i].permission) !== 'undefined' && a[i].permission == 4) {
            			str += 'chat-from-cohost ';
        		}
        		else if (typeof (a[i].permission) !== 'undefined' && a[i].permission == 3) {
            			str += 'chat-from-manager ';
        		}
        		else if (typeof (a[i].permission) !== 'undefined' && a[i].permission == 2) {
            			str += 'chat-from-bouncer ';
        		}
        		else if (typeof (a[i].permission) !== 'undefined' && a[i].permission == 1) {
            			str += 'chat-from-featureddj ';
        		}
        		if (a[i].id === myid) {
            			str += 'chat-from-you ';
        		}
        		str += '" onclick="$(\'#chat-input-field\').val($(\'#chat-input-field\').val() + \'@' + a[i].username + ' \').focus();" title="click to mention">' + a[i].username + '</span>';
        		if (typeof (a[i].vote) !== 'undefined' && a[i].vote == -1) {
            			totalMEHs++;
            			mehlist += str; 
        		} 
        		else if (typeof (a[i].vote) !== 'undefined' && a[i].vote == +1) {
            			totalWOOTs++;
            			wootlist += str; 
        		}
        		else if (a[i].id == Models.room.data.currentDJ) {
        			currentdj += str;
        		}
        		else {
            			totalUNDECIDEDs++;
            			undecidedlist += str; 
        		}
    		}
    		var totalDECIDED = totalWOOTs + totalMEHs;
    		var totalUSERS = totalDECIDED + totalUNDECIDEDs;
    		var totalMEHsPercentage = Math.round((totalMEHs / totalUSERS) * 100);
    		var totalWOOTsPercentage = Math.round((totalWOOTs / totalUSERS) * 100);
    		if (isNaN(totalMEHsPercentage) || isNaN(totalWOOTsPercentage)) {
        		totalMEHsPercentage = totalWOOTsPercentage = 0;
    		}
    		currentdj = ' ' + currentdj;
		mehlist = '<a title="total mehs">' + ' ' + totalMEHs.toString() + '</a><a title=" meh percentage">' + ' (' + totalMEHsPercentage.toString() + '&#37;)' + '</a>' + mehlist;
    		wootlist = '<a title="total woots">' + ' ' + totalWOOTs.toString() + '</a><a title=" woot percentage">' + ' (' + totalWOOTsPercentage.toString() + '&#37;)' + '</a>' + wootlist;
    		undecidedlist = ' ' + totalUNDECIDEDs.toString() + undecidedlist;
		if ($('#side-left .sidebar-content2').children().length > 0) {
            		$('#side-left .sidebar-content2').append();
		}
        	$('#side-left .sidebar-content2').html('<h3 class="users" title="number of users in the room">users: ' + API.getUsers().length + '</h3>');
        	var spot = Models.room.getWaitListPosition();
        	var waitlistDiv = $('<h3 title="waitlist posisition"></h3>').addClass('waitlistspot').text('waitlist: ' + (spot !== null ? spot + ' / ' : '') + Models.room.data.waitList.length);
        	var waitpostime = Models.room.getWaitListPosition() * 240;
        	var offset = API.getMedia().duration - 240;
        	var approxtime = waitpostime + offset;
        	var timeDiv = $('<h3 title="approx. wait time until on the booth"</h3>').addClass('timewait').text('wait: ' + (spot !== null ? sts(decodeURIComponent(approxtime)) + ' ' : ''));
        	$('#side-left .sidebar-content2').append(waitlistDiv);
        	$('#side-left .sidebar-content2').append(spot !== null ? timeDiv : '');
        	$('#side-left .sidebar-content2').append('<div class="meanlist"></div>');
        	$(".meanlist").append( 
        			'<div id="currentdj_div" style="border: 1px solid rgb(0, 112, 255);"><a title="current dj">current dj:</a>' +   currentdj + '</div>'
        		+ 	'<div id="mehlist_div" style="border: 1px solid rgb(233, 6, 6);"><a title="meh list">meh list:</a>' +   mehlist + '</div>' 
        		+ 	'<div id="wootlist_div" style="border: 1px solid rgb(2, 140, 7);"><a title="woot list">woot list:</a>' + wootlist + '</div>'
        		+	'<div id="spacer_div"></br></br></div>'
        	);
	},
	//listens out for strobe command
	strobeListener: function(data) {
		if (API.getUser(data.fromID).permission >= 2 && data.message.indexOf('/strobe on') > -1) {
			RoomUser.audience.strobeMode(true);
			log(data.from + " activated strobes!");
		}
	},
	//used to determine the timer on the wait: timer on the left hand side
	sts: function(secs) {
		var nohrs = Math.floor((secs % 86400) / 3600);
		var nomins = Math.floor(((secs % 86400) % 3600) / 60);
		if (nohrs > 0) {
			if (nomins >9) {
				return nohrs + ":" + nomins
			} 
			else {
				return nohrs + ":0" + nomins
			}
		}
		else {
			if (nomins > 1) {
				return nomins + " mins"
			}
		}
	},
	//if one of the message buttons is clicked, this timer kicks in
	checkClicked: function() {
		if (clickPassed >= clickToWait) {
			clearInterval(clickTimer);
			clicked = false;
			clickPassed = 0;
		}
		else {
			clickPassed clickPassed + 1000;
		}
	},
	//if one of the skip buttons is clicked, this timer kicks in
	checkSkipped: function() {
		if (skipPassed >= skipToWait) {
			clearInterval(skipTimer);
			skipped = false;
			skipPassed = 0;
		}
		else {
			skipPassed = skipPassed + 500;
		}
	},
	//if mentioned and you are set to anything but availalbe, this timer kicks in
	checkMentioned: function() {
		if (mentionPassed >= mentionToWait) {
			clearInterval(mentionTimer);
			mentioned = false;
			mentionPassed = 0;
		}
		else {
			mentionPassed = mentionPassed + 1000;
		}
	},
	//this timer makes the predicted time to wait more accurate
	checkBoothWait: function() {
		if (boothWaitPassed >= API.getMedia().duration) {
			clearInterval(boothWaitTimer)
			boothWaiting = false;
			boothWaitPassed = 0;
		}
		else {
			 boothWaitPassed = boothWaitPassed + 1000;
		}
	},
});
var EDMbassy = new EDMbassyModel();
log("Also, welcome to The EDMbassy, coded by Nitro Ghost. Version: 4.1.5");
$('body').prepend('<style type="text/css" id="EDMbassy-css">' + "\n" + styles.join("\n") + "\n" + '</style>');
$('body').append('</div><div id="side-right" class="sidebar">' + '<div class="sidebar-handle"><span>|||</span></div>' + '<div class="sidebar-content"></div>' + '<div id="hr-div"><div><div id="hr-style"></div></div></div>' + '</div><div id="side-left" class="sidebar">' + '<div class="sidebar-handle" title="show/hide userlist"><span>|||</span></div>' + '<div class="sidebar-content2"></div>' + '<div id="hr2-div2"><div><div id="hr2-style2"></div></div></div>' + '</div>');
$('body').append('<script type="text/javascript" id="EDMbassy-js-extra">' + "\n" + scripts.join("\n") + "\n" + '</script>');
