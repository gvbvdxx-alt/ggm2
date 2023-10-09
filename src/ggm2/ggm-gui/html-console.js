var console = require("log");


//very short script for the html console i can say,

vm.console.log = function (text) {
	console.log("VM Console [LOG]: "+text);
    document.getElementById('console').innerHTML += text + "<br>";
}
vm.console.error = function (text) {
	console.log("VM Console [ERROR]: "+text);
    document.getElementById('console').innerHTML += "Error:" + text + "<br>";
    vm.stop();
}
vm.console.clear = function (text) {
    document.getElementById('console').innerHTML = "";
}
