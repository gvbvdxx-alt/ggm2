var fileLoader = require("file-loader"); //file reader does not work, it only outputs the "processed script" version
var ggm2path = require("src/paths.js");
function doScriptAdd(s) {
    return require("src/"+ggm2path+"/" + s);
}
var styles = require("src/"+ggm2path+"/ggm-gui/gui-styles.js");
document.write(`<style>${styles}</style>${require("src/"+ggm2path+"/ggm-gui/gui-html.js")}`);
//faster way to add the scripts in.
doScriptAdd("ggm-gui/blocks/blockColors.js");
doScriptAdd("ggm-gui/blocks/toolbox.js");
doScriptAdd("ggm-gui/libary/lib.js");
doScriptAdd("blockly/blockly_compressed.js");
doScriptAdd("blockly/msg/js/en.js");
doScriptAdd("blockly/blocks_compressed.js");
doScriptAdd("blockly/javascript_compressed.js");

doScriptAdd("ggm-vm/index.js");
doScriptAdd("ggm-vm/renderer.js");
doScriptAdd("ggm-vm/audio.js");
doScriptAdd("ggm-vm/better-audio-ctx.js");

doScriptAdd("ggm-gui/theme.js");
doScriptAdd("ggm-gui/index.js");
doScriptAdd("ggm-gui/zip-export.js");
doScriptAdd("ggm-gui/jszip.min.js");

//hide the loading screen
var loadingScreen = document.getElementById("loadingscreen");
loadingScreen.hidden = true;

console.log("%cGGM2","color:grey;font-size:50px;font-weight:bold;font-family:arial;");
console.log("Welcome to GGM2 1.5, GGM2 now runs on gvbvdxx-pack instead of static html5, which makes GGM2 super fast to load!")
console.log("Feel free to browse the source code for ggm2 and do whatever you want with it, that is up to you!")