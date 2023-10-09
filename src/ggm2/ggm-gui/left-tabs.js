//tabs

var codeTab = document.getElementById("codeTab");
var assetsTab = document.getElementById("assetsTab");
var consoleTab = document.getElementById("consoleTab");

//"windows"

var setBlocklyVisibility = function(a){
	workspace.setVisible(a);
};
var filecontain = document.getElementById("filecontain");
var conscontain = document.getElementById("conscontain");

//code for switching between tabs

/* Coding tab */
function openCode () {
	assetsTab.setAttribute("selected","false");
	consoleTab.setAttribute("selected","false");
	codeTab.setAttribute("selected","true");
	filecontain.hidden = true;
	conscontain.hidden = true;
	setBlocklyVisibility(true);
}
/* Debugging tab */
function openConsole () {
	assetsTab.setAttribute("selected","false");
	consoleTab.setAttribute("selected","true");
	codeTab.setAttribute("selected","false");
	filecontain.hidden = true;
	conscontain.hidden = false;
	setBlocklyVisibility(false);
}
/* Assets tab */
function openAssets () {
	assetsTab.setAttribute("selected","true");
	consoleTab.setAttribute("selected","false");
	codeTab.setAttribute("selected","false");
	filecontain.hidden = false;
	conscontain.hidden = true;
	setBlocklyVisibility(false);
}

//Assign the code for the tabs.
codeTab.onclick = function () {openCode();};
assetsTab.onclick = function () {openAssets();};
consoleTab.onclick = function () {openConsole();};

//Set the tabs.
openCode();