window.save = function save() {
    gui.requestSaveFile();
}
window.load = function load() {
    gui.requestLoadFile();
}
document.getElementById("gameFileUpload").onchange = function () {
    var reader = new FileReader();
    reader.onload = function () {
        gui.jsonTextToEditor(reader.result, "file");
        document.getElementById("gameFileUpload").value = "";
    };
    if (document.getElementById("gameFileUpload").files[0]) {
        reader.readAsText(document.getElementById("gameFileUpload").files[0]);
    }
}
document.getElementById("New_Game").onclick = function () {
    if (window.confirm('Do You Want To Start Over? Once You Click Ok, You Cannot Recover It.')) {
        workspace.clear();
        clearResources();
        loadDefaultGame();
    }
};
