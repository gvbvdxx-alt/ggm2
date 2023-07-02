//for setting up the vm

renderer.canvas = document.getElementById("gameScreen");
vm.code = "";
vm.attachRenderer(renderer);
vm.attachAudioEngine(audioEngine);

//updates the vm code when you edit the script space
function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    vm.code = code;
    window.showSaveDialog = true;
}
workspace.addChangeListener(myUpdateFunction);