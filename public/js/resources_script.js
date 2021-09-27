// Blockly Configuration
document.write('<script src="/js/blockly/storage.js"></script>');
document.write('<script src="/js/blockly/brython.js"></script>');
document.write('<script src="/js/blockly/brython_stdlib.js"></script>');
document.write('<script src="/js/blockly/blockly_compressed.js"></script>');
document.write('<script src="/js/blockly/javascript_compressed.js"></script>');
document.write('<script src="/js/blockly/python_compressed.js"></script>');
document.write('<script src="/js/blockly/blocks_compressed.js"></script>');

// 미리 정의되어 있는 기본 블록에 대한 설정을 모두 담고 있음.
document.write('<script src="/js/blockly/block_pyodide.js"></script>')

// Code Mirror
document.write('<script src="/js/codemirror/lib/codemirror.js"></script>');
document.write('<script src="/js/codemirror/mode/javascript/javascript.js"></script>');
document.write('<script src="/js/codemirror/mode/python/python.js"></script>');

// Code Mirror Auto Complete'
document.write('<script src="/js/codemirror/addon/hint/show-hint.js"></script>');
document.write('<script src="/js/codemirror/addon/hint/javascript-hint.js"></script>');
document.write('<script src="/js/codemirror/addon/hint/anyword-hint.js"></script>');
document.write('<link rel="stylesheet" href="/js/codemirror/addon/hint/show-hint.css">');

// Plotly.js
document.write('<script src="/js/utils/plotly.js"></script>');

// 그림판 Canvas
document.write('<script src="/js/utils/canvas.js"></script>');

// 블록, 블록 + 코드, 코드 워크스페이스 View 변경
document.write('<script src="/js/utils/tabDisplay.js"></script>');

// Graph aside
document.write('<script src="/js/utils/aside.js"></script>');

// <!-- 크롤링 -->
document.write('<script src=/js/croll.js></script>')

// Cookie
document.write('<script src="/js/utils/cookie.js"></script>');
document.write('<script>setCookie("download_block", "", 1);</script>');

// Message Box
document.write('<script src="/js/blockly/messagebox/messagebox.js"></script>');
document.write('<link href="/js/blockly/messagebox/messagebox.css" rel="stylesheet" type="text/css">');

// Vanila Toast
document.write('<script src="/js/vanila-toast/vanillatoasts.js"></script>');
document.write('<link rel="stylesheet" href="/js/vanila-toast/vanillatoasts.css"></link>');

//<!-- 리사이즈 플러그인 -->
document.write('<script src=/js/utils/ResizeSensor.js></script>');

// jsZIP
document.write('<script src="/js/utils/jszip.js"></script>')
document.write('<script src="/js/utils/jszip.min.js"></script>')

console.log("[Notice] All Resources are imported.");