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