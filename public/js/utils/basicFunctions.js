// 2020 - 12- 05 양승국 언어 변경
$("#language").change(function () {
    var selectName = $(this).find(":selected").val();

    if (selectName == "kor") {
        $("#lan").remove();
        var script = document.createElement("script");
        script.id = "lan";
        script.src = "/js/blockly/msg/js/ko.js"; // script url.
        document.body.appendChild(script);
    } else if (selectName == "eng") {
        $("#lan").remove();
        var script = document.createElement("script");
        script.id = "lan";
        script.src = "/js/blockly/msg/js/en.js"; // script url.
        document.body.appendChild(script);
    }
});

function Check_matplotlib_user_input(a, b) {
    if (a == 1 && b == 1) {
        DL_Gra = "graph_both_1";
    } else if (a == 1 || b == 1) {
        DL_Gra = "graph_or_1";
    } else {
        DL_Gra = 0;
    }
}

// 화면에 찍기 프린트
// function printc(x) {
//     var savetext = $("#exeArea").val();
//     $("#exeArea").val(savetext + x + "\n");
// }

// 상단 플마 로직 - 다른 곳으로 옮길 것
function workspaceFocusEvent() {
    var b = workspace;
    b.markFocused();
    b.setScale(b.options.zoomOptions.startScale);
    b.beginCanvasTransition();
    b.scrollCenter();
    setTimeout(b.endCanvasTransition.bind(b), 500);
    Blockly.Touch.clearTouchIdentifier();
}

function workspacePlusEvent() {
    var b = workspace;
    b.markFocused();
    b.zoomCenter(-1);
    Blockly.Touch.clearTouchIdentifier();
}
function workspaceMinusEvent() {
    var b = workspace;
    b.markFocused();
    b.zoomCenter(1);
    Blockly.Touch.clearTouchIdentifier();
}