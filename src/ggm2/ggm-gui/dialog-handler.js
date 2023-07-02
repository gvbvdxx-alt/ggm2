//dialogs
var dialogBox = document.getElementById("dialogBox");
var dialogBackground = document.getElementById("dialogBackground");
var dialogOptions = {
    inputs: {
        txt: document.getElementById("dialogInput")
    },

    buttons: {
        ok: document.getElementById("dialogButtonOk"),

        cancel: document.getElementById("dialogButtonCancel")

    },
    name: document.getElementById("dialogName"),

    txt: document.getElementById("dialogText"),

    hideAll: function () {
        document.getElementById("dialogInput").hidden = true;
        document.getElementById("dialogText").hidden = true;
        document.getElementById("dialogButtonOk").hidden = false;
        document.getElementById("dialogButtonCancel").hidden = false;
    }
};
var app = document.getElementById("app");
dialogBackground.style.display = "none";
window.gui.dialogs = {
    alert: (function (message, callback) {
        dialogBackground.style.display = "block";

        dialogBox.style.display = "block";

        dialogOptions.hideAll();

        dialogOptions.name.innerHTML = message;

        document.getElementById("dialogButtonCancel").hidden = true;

        dialogOptions.buttons.ok.onclick = function () {
            try {
                app.hidden = false;
                try {
                    callback();
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };

        dialogOptions.buttons.cancel.onclick = function () {
            try {
                try {
                    callback();
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };
    }),
    confirm: (function (message, callback) {
        dialogBackground.style.display = "block";

        dialogBox.style.display = "block";

        dialogOptions.hideAll();

        dialogOptions.name.innerHTML = message;

        dialogOptions.buttons.ok.onclick = function () {
            try {
                app.hidden = false;
                try {
                    callback(true);
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };

        dialogOptions.buttons.cancel.onclick = function () {
            try {
                try {
                    callback(false);
                } catch (e) {}
                dialogBackground.style.display = "none";
                dialogBox.style.display = "none";
            } catch (e) {}
        };
    }),
    prompt: (function (message, defaultValue, callback) {
        dialogBackground.style.display = "block";

        dialogBox.style.display = "block";

        dialogOptions.hideAll();

        dialogOptions.name.innerHTML = message;

        dialogOptions.inputs.txt.value = defaultValue;

        dialogOptions.inputs.txt.hidden = false;

        let dialogInput = dialogOptions.inputs.txt;

        dialogOptions.buttons.ok.onclick = function () {
            try {
                callback(dialogInput.value);
            } catch (e) {}
            dialogBackground.style.display = "none";
            dialogBox.style.display = "none";
        };

        dialogOptions.buttons.cancel.onclick = function () {
            try {
                callback(null);
            } catch (e) {}
            dialogBackground.style.display = "none";
            dialogBox.style.display = "none";
        };
    })
}
Blockly.alert = (function (message, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    document.getElementById("dialogButtonCancel").hidden = true;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback();
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback();
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});

Blockly.confirm = (function (message, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback(true);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback(false);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});

Blockly.prompt = (function (message, defaultValue, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    dialogOptions.inputs.txt.value = defaultValue;

    dialogOptions.inputs.txt.hidden = false;

    let dialogInput = dialogOptions.inputs.txt;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback(dialogInput.value);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback(null);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});
