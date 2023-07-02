var gvbvdxxPack = require("gvbvdxx-pack");
var fs = require("fs");
var path = require("path");
var FS = fs;
var filepathlist = [];
function ThroughDirectory(directory) {
    fs.readdirSync(directory).forEach(File => {
        const absolute = path.join(directory, File);
        if (fs.statSync(absolute).isDirectory()) {
            return ThroughDirectory(absolute);
        } else {
            return filepathlist.push(absolute);
		}
    });
}
filepathlist = [];
ThroughDirectory("./src/");
var files = gvbvdxxPack.compile(filepathlist,false);
gvbvdxxPack.buildElectron(files, fs.readFileSync("template/index.html"), 6546);
