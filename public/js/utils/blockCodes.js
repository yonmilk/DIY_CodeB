// 블록 코드 On/Off 제어
let flagBlockCode = 1;

//콘솔창 값 저장용
let tab1Console = "";
let tab2Console = "";
let tab3Console = "";
let offConsole = "";

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

        toggleConsole();    //콘솔 값 변화

        flagBlockCode = 1;
    } else {
        btnBlockCode.html("블록 코드 Off");
        btnBlockCode.removeClass("green");
        btnBlockCode.addClass("red");
        pyCodeEditor.css("visibility", "hidden");
        asyncEditor.css("visibility", "visible");

        toggleConsole();    //콘솔 값 변화

        flagBlockCode = 0;
    }
}

// 블록 On/Off 변경시 콘솔창 내용 변경
function toggleConsole(){
    var b = workspaceCheck();

    var exe = document.getElementById('exeArea'); // 콘솔 창 ID가져옴
    var resultN = exe.value;   

    if(b == Workspace1) {
        if(flagBlockCode){  //블록코드 Off 로 전환했을 때
            tab1Console = resultN;
            exe.innerHTML = offConsole;
        } else {
            offConsole = resultN;
            exe.innerHTML = tab1Console;
        }

    } else if(b == Workspace2) {
        if(flagBlockCode){  //블록코드 Off 로 전환했을 때
            tab2Console = resultN;
            exe.innerHTML = offConsole;
        } else {
            offConsole = resultN;
            exe.innerHTML = tab2Console;
        }

    } else if(b == Workspace3) {
        if(flagBlockCode){  //블록코드 Off 로 전환했을 때
            tab3Console = resultN;
            exe.innerHTML = offConsole;
        } else {
            offConsole = resultN;
            exe.innerHTML = tab3Console;
        }
    }
}

// ----------------------------- BlockExport_Editor.ejs 로 이동 -------------------------------------
// runCode() 결과 값 변수에 저장해둠
// function runCodeConsole(result){
//     if(flagBlockCode == 0){
//         offConsole = result;
//     } else {
//         var b = workspaceCheck();

//         if(b == Workspace1) {
//             tab1Console = result;
//         } else if(b == Workspace2) {
//             tab2Console = result;
//         } else if(b == Workspace3) {
//             tab3Console = result;
//         } 
//     }
// }

// 탭 이동시 콘솔창 값 변화
// function tabClickConsole(tabNum){
//     if(flagBlockCode == 0){
//         return offConsole;
//     } else {
//         if(tabNum == 'tab1') {
//             return tab1Console;
//         } else if(tabNum == 'tab2') {
//             return tab2Console;
//         } else if(tabNum == 'tab3') {
//             return tab3Console;
//         } 
//     }
// }