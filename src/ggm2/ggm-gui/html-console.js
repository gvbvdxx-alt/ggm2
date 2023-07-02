


//very short script for the html console i can say,

vm.console.log = function (text) {
    document.getElementById('console').innerHTML += text + "<br>";
}
vm.console.error = function (text) {
    document.getElementById('console').innerHTML += "Error:" + text + "<br>";
    vm.stop();
}
vm.console.clear = function (text) {
    document.getElementById('console').innerHTML = "";
}
