// 블록 코드 On/Off 제어
let flagBlockCode = 1;
function toggleBlockCode() {
    let btnBlockCode = $("#btn_block_code");
    let pyCodeEditor = $("#pyCodeEditor");
    let asyncEditor = $("#asyncCodeEditor");
    if (flagBlockCode == 0) {
        btnBlockCode.html("블록 코드 On");
        btnBlockCode.removeClass("red");
        btnBlockCode.addClass("green");
        pyCodeEditor.css("visibility", "visible");
        asyncEditor.css("visibility", "hidden");
        flagBlockCode = 1;
    } else {
        btnBlockCode.html("블록 코드 Off");
        btnBlockCode.removeClass("green");
        btnBlockCode.addClass("red");
        pyCodeEditor.css("visibility", "hidden");
        asyncEditor.css("visibility", "visible");
        flagBlockCode = 0;
    }
}