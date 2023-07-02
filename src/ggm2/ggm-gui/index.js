/*
I get it, its messy,
its because it had a lot of debugging,
and errors and stuff, also this was a
static full html5 page, making stuff slow.

Im currently working on making this code look better on the eye

*/
var ggm2path = require("src/paths.js");
function doScriptAdd(s) {
	return require("src/"+ggm2path+"/"+s);
}
window.shared = false;

window.gui = {
    loadScript: function (src, callback) {
		doScriptAdd("ggm-gui" + "/" + src);
		if (callback) {
			callback();
		}
		return null;
    },
    blocks: {
        addExtension: function (json) {
            Blockly.defineBlocksWithJsonArray(json.blocks);
            toolboxHTML += "<category name='" + json.title + "' colour='" + json.color + "'>" + json.contents + "</category>";
            workspace.updateToolbox("<xml>" + toolboxHTML + "</xml>")
        }
    },
    editorToJsonText: function (type) {
        var loadingScreen = document.getElementById("loadingscreen");
        return JSON.stringify({
            blocklyXML: Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)),
            files: fileResourcesArray,
            title: document.getElementById("gameTitle").value,
            thumb: document.getElementById("gameScreen").toDataURL(),
            shared: window.shared,
            dis: document.getElementById("discription").value,
            code: vm.code
        });
    },
    jsonTextToEditor: function (JsonText, type) {
        var loadingScreen = document.getElementById("loadingscreen");
        loadingScreen.hidden = false;
        clearResources();
        var JsonTextParsed = JSON.parse(JsonText);
        var i = 0;
        while (JsonTextParsed.files.length > i) {
            readFileAsResource(JsonTextParsed.files[i].data, JsonTextParsed.files[i].name, JsonTextParsed.files[i].type);
            i += 1;
        }
        workspace.clear();
        document.getElementById("gameTitle").value = JsonTextParsed.title
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(JsonTextParsed.blocklyXML), workspace);
        if (type == "file") {}
        else {
            if (JsonTextParsed.shared) {
                window.shared = JsonTextParsed.shared;
            }
        }
        document.getElementById("discription").value = JsonTextParsed.dis;
        loadingScreen.hidden = true;
    }
}

var toolbox = document.getElementById('toolbox');
var toolboxHTML = document.getElementById('toolbox').innerHTML;
//blockly injection starts
var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
window.workspace = Blockly.inject(blocklyDiv, {
    toolbox: toolbox,
    collapse: false,
    sounds: true,
    move: {
        scrollbars: {
            horizontal: true,
            vertical: true
        },
        drag: true,
        wheel: false
    },
    zoom: {
        controls: true,
        wheel: false,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: false
    },
    trashcan: false,
    grid: {
        spacing: 20,
        length: 3,
        colour: '#bac8ff',
        snap: true
    },
    theme: Blockly.Themes.GGM,
    renderer: "custom_renderer",
    media: "./static/blockmedia/"
});
gui.loadScript("blockly-resize-handler.js");
gui.loadScript("vm-setup.js");
gui.loadScript("game-input.js");
gui.loadScript("html-console.js");
gui.loadScript("resources-tab.js");
gui.loadScript("menubar-handler.js");
gui.loadScript("dialog-handler.js");

//Toolbox Management

window.toolboxManagement = class {
    constructor() {
        this.blockly = Blockly;
        this.workspace = workspace;
        this.addCategory = function (info) {
            document.getElementById("toolbox").innerHTML += `
			<category name='${info.name}' colour='${info.color}'>
			${this.blockXML}
			</category>
			`;
            this.workspace.updateToolbox("<xml>" + document.getElementById("toolbox").innerHTML + "</xml>")
        };
        this.blockXML = "";
        this.log = function (text) {
            console.log("extension: " + text)
        };
        this.vm = window.vm;
    }
};
gui.loadScript("export-code.js");







gui.loadScript("ask-save-dialog.js");


gui.loadScript("scalefix.js"); //faster typing than using require
gui.loadScript("cloud-runtime.js");
window.loadDefaultGame = function loadDefaultGame() {
	//do we really need set time out? must have thought that was important
	clearResources();
	workspace.clear();
}
gui.loadScript("blocks/index.js");