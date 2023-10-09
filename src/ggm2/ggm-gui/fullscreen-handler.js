
var console = require("log");

var gameArea = document.getElementById('gameArea');
var gameScreen = document.getElementById("gameScreen");
var files = document.getElementById("files");
var mainMenu = document.getElementById("main_menu");
var fullscreenButtonImage = document.getElementById("fullscreenButtonImage");

function toggleFullScreen() {
    if (gameArea.className == 'fullscreenGame') {
        gameArea.className = '';
        gameScreen.setAttribute('style', 'image-rendering: pixelated;');
        files.hidden = false;
        if (window.desktopFullScreenFunction) {
            window.desktopFullScreenFunction(false);
        }
        mainMenu.setAttribute("hidemenu","false");
        document.getElementById('fullscreenButtonImage').src = 'static/player/fullscreen-button.png';
		console.log("Exited full screen.");
    } else {
        gameArea.className = 'fullscreenGame';
        fullscreenButtonImage.src = 'static/player/exit-fullscreen-button.png';
        gameScreen.setAttribute('style', 'z-index:100000000;width:88.5%;height:calc(100vh - 18px);image-rendering:pixelated;');
        files.hidden = true;
        if (window.desktopFullScreenFunction) {
            window.desktopFullScreenFunction(true);
        }
        mainMenu.setAttribute("hidemenu","true");
		console.log("Entered full screen.");
    }
}

document.getElementById("toggleFullscreenButton").onclick = function () {
	toggleFullScreen();
};