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
    // var b = workspace;
    var b = workspaceCheck();
    b.markFocused();
    b.setScale(b.options.zoomOptions.startScale);
    b.beginCanvasTransition();
    b.scrollCenter();
    setTimeout(b.endCanvasTransition.bind(b), 500);
    Blockly.Touch.clearTouchIdentifier();
}

function workspacePlusEvent() {
    var b = workspaceCheck();
    b.markFocused();
    b.zoomCenter(-1);
    Blockly.Touch.clearTouchIdentifier();
}
function workspaceMinusEvent() {
    var b = workspaceCheck();
    b.markFocused();
    b.zoomCenter(1);
    Blockly.Touch.clearTouchIdentifier();
}

// 탭 workspace 확인용 
function workspaceCheck() {
    let tab = document.getElementsByClassName('tab-link current'); 
	let tab_id = tab[0].firstElementChild.id;

    if(tab_id == 'tab_1') {
        return Workspace1;

    } else if(tab_id == 'tab_2') {
        return Workspace2;

    } else if(tab_id == 'tab_3') {
        return Workspace3;

    }
}

/**
 * HTML 엔티티로부터 전달받은 특수문자 (&lt; &gt; 등)를 
 * 실제 XML 형식의 문자열로 파싱하는 함수
 * 
 * @param {*} str
 * @returns HTML 엔티티에서 파싱된 XML String을 반환한다.
 */
function decodeHTMLEntities (str) {
    if(str !== undefined && str !== null && str !== '') {
        str = String(str);

        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        var element = document.createElement('div');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
    }

    return str;
}