
//does the resources stuff


var resoureupload = document.getElementById('resourceupload');
var files = document.getElementById('files');
window.fileResources = [];
window.fileResourcesArray = [];
resoureupload.accept = "audio/*,image/*";
window.clearResources = function clearResources() {
    files.innerHTML = "";
    window.fileResources = [];
    window.fileResourcesArray = [];
}
window.readFileAsResource = function readFileAsResource(data, name, type) {
    var div = document.createElement("div");
    div.innerHTML = name + `:
	`;
    resourceupload.files[0]
    if (type == "image") {
        var image = document.createElement("img");
        image.src = data;
        div.appendChild(image);
        image.width = "200";
    }
    if (type == "audio") {
        var audio = document.createElement("audio");
        audio.src = data;
        audio.controls = true;
        div.appendChild(audio);
    }
    div.innerHTML += "<br>";
    files.appendChild(div);
    window.fileResources[name] = ({
        data: data,
        name: name,
        type: type
    });
    window.fileResourcesArray.push({
        data: data,
        name: name,
        type: type
    });
    window.vm.project.resources = fileResources;
}
resoureupload.multiple = true;
resoureupload.onchange = function () {
    if (resourceupload.files[0]) {
        for (const file of resourceupload.files) {
            const reader = new FileReader();
            console.log(file.name)
            reader.onload = function () {
                readFileAsResource(reader.result, file.name, file.type.split('/')[0]);
                resourceupload.value = "";
            }
            console.log(file.size);
            if (file.size > 7000000 && false) {
                window.alert("file is too big! for reasons you cant upload something too big, if its music, please compress and find loops, it should help you");
            } else {
                reader.readAsDataURL(file);
            }
        }
    }
};
