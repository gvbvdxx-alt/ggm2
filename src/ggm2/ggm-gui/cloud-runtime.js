//cloud scripts
window.enableCloudSend = true;
class cloudProvider {
    constructor(wss, id) {
        //basic setup for cloud use
        var t = this;
        this.open = false;
        this.variables = {};
        this.ws = new WebSocket(wss);
        this.variables = {};
        this.variables[id] = {};
        this.id = id;
        this.ws.addEventListener("message", function (e) {
            if (window.enableCloudSend) {
                var data = e.data.toString();
                t.variables = JSON.parse(data);
            }
        });
        this.ws.onopen = function () {
            t.open = true;
        };
    }
    updateVariable(name, value) {
        if (!(this.variables[this.id])) {
            this.variables[this.id] = {};
        }
        this.variables[this.id][name.toLowerCase()] = value;
        if (window.enableCloudSend) {
            if (this.open) {
                //the vm calls this everytime there is a cloud update.
                this.ws.send(JSON.stringify({
                        command: "set",
                        name: name,
                        value: value,
                        id: this.id
                    }, null, "\t")) //i think formating it this can make it faster
            }
        }
    }
    getVariables() {
        if (this.open) {
            /*
            it will return something like this format:{
            "my-var":"my-value"
            }
             */
            return this.variables[this.id];
        }
    }
    getVariable(name) {
        if (this.open) {
            var vars = this.getVariables();
            if (vars) {
                return vars[name.toLowerCase()];
            } else {
                return null;
            }
        }
    }
}
if (window.cloudsetup) {
    function connectLoop() {
        var api = new cloudProvider(window.cloudsetup.ws, window.cloudsetup.id)
            vm.setCloudAPI(api);
        api.ws.onclose = function () {
            connectLoop();
        };
        api.ws.onerror = function () {
            connectLoop();
        }
    }
    connectLoop();
}
