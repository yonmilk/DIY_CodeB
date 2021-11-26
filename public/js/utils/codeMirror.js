// JS 코드미러
let jsEditor = CodeMirror(document.getElementById("jsCodeEditor"), {
    mode: "javascript",
    // value: "codemirror",
    theme: "oceanic-next",          // 테마
    inputStyle: "contenteditable",  // 입력 처리 방식
    // readOnly: true,              // 읽기 전용 설정
    lineNumbers: true,              // 라인 넘버 설정
    lineWrapping: true,             // 자동 줄바꿈 설정
    // spellcheck: true,   autocorrect: true,
});

// PY 코드미러
let pyEditor = CodeMirror(document.getElementById("pyCodeEditor"), {
    mode: "python",
    // value: "codemirror",
    theme: "oceanic-next",          // 테마
    inputStyle: "contenteditable",  // 입력 처리 방식
    // readOnly: true,              // 읽기 전용
    lineNumbers: true,              // 라인 넘버 설정
    lineWrapping: true,             // 자동 줄바꿈 설정
    // spellcheck: true,            // 스펠링 체크
    extraKeys: { "Ctrl-Space": "autocomplete" }, // 단축키
    //   spellcheck: true,   autocorrect: true,
});

// async 코드미러)
let asyncEditor = CodeMirror(document.getElementById("asyncCodeEditor"), {
    mode: "python",
    // value: "codemirror",
    theme: "oceanic-next",          // 테마
    inputStyle: "contenteditable",  // 입력 처리 방식
    // readOnly: true,              // 읽기 전용 설정
    lineNumbers: true,              // 라인 넘버 설정
    lineWrapping: true,             // 자동 줄바꿈 설정
    extraKeys: { "Ctrl-Space": "autocomplete" }, // 단축키
    // spellcheck: true,   autocorrect: true,
});

// ==================================
// 코드 갱신하기 
//===================================  
//---------------------------------------예원 수정-----------------------------------------
function codeUpdate(event) {
	async function coderun() {
        //예원
        let tab = document.getElementsByClassName('tab-link current'); 
	    let tab_id = tab[0].id;

	try {
        //예원
        var pyCode;
        if(tab_id == 'tab_1') {
            pyCode = Blockly.Python.workspaceToCode(Workspace1);
        
        } else if(tab_id == 'tab_2') {
            pyCode = Blockly.Python.workspaceToCode(Workspace2);
        
        } else if(tab_id == 'tab_3') {
            pyCode = Blockly.Python.workspaceToCode(Workspace3);
        
        }

		// var pyCode = Blockly.Python.workspaceToCode(demoWorkspace); // 워크스페이스를 코드로 변환 후 값 저장
		// console.log("pycode : " + escape(pyCode));
		pyEditor.setValue(pyCode); // 그 값을 파이썬코드미러에 값 저장
	} catch (e) {
		console.log('python 코드가 매핑되어 있지 않습니다. Error : ' + e);
	}
	}
	// coderun이 끝나고나서 작동됨.
	coderun().then(() => {
	try {
        //예원
        var jsCode;
        if(tab_id == 'tab_1') {
            jsCode = Blockly.JavaScript.workspaceToCode(Workspace1);
        
        } else if(tab_id == 'tab_2') {
            jsCode = Blockly.JavaScript.workspaceToCode(Workspace2);
        
        } else if(tab_id == 'tab_3') {
            jsCode = Blockly.JavaScript.workspaceToCode(Workspace3);
        
        }

		// var jsCode = Blockly.JavaScript.workspaceToCode(demoWorkspace); // 워크스페이스를 js코드로 변환 후 값 저장
		jsEditor.setValue(jsCode); // 그 값을 js코드미러에 값 저장
	} catch (e) {
		console.log('java script 코드가 매핑되어 있지 않습니다. Error : ' + e);
	}
	});
}