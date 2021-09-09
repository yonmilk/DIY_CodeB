// Blockly Configuration
document.write('<script src="../public/js/blockly/storage.js"></script>');
document.write('<script src="../public/js/blockly/brython.js"></script>');
document.write('<script src="../public/js/blockly/brython_stdlib.js"></script>');
document.write('<script src="../public/js/blockly/blockly_compressed.js"></script>');
document.write('<script src="../public/js/blockly/javascript_compressed.js"></script>');
document.write('<script src="../public/js/blockly/python_compressed.js"></script>');
document.write('<script src="../public/js/blockly/blocks_compressed.js"></script>');

// Code Mirror
document.write('<script src="../public/js/codemirror/lib/codemirror.js"></script>');
document.write('<link rel="stylesheet" href="../public/js/codemirror/lib/codemirror.css">');
document.write('<script src="../public/js/codemirror/mode/javascript/javascript.js"></script>');
document.write('<script src="../public/js/codemirror/mode/python/python.js"></script>');

// Code Mirror Style
document.write('<link rel="stylesheet" href="../public/js/codemirror/theme/oceanic-next.css">');

// Code Mirror Auto Complete'
document.write('<script src="../public/js/codemirror/addon/hint/show-hint.js"></script>');
document.write('<script src="../public/js/codemirror/addon/hint/javascript-hint.js"></script>');
document.write('<script src="../public/js/codemirror/addon/hint/anyword-hint.js"></script>');
document.write('<link rel="stylesheet" href="../public/js/codemirror/addon/hint/show-hint.css">');

// Plotly.js
document.write('<script src="../public/js/utils/plotly.js"></script>');

// 그림판 Canvas
document.write('<script src="../public/js/utils/canvas.js"></script>');

// 블록, 블록 + 코드, 코드 워크스페이스 View 변경
document.write('<script src="../public/js/utils/tabDisplay.js"></script>');

// Graph aside
document.write('<script src="../public/js/utils/aside.js"></script>');

// Cookie
document.write('<script src="../public/js/utils/cookie.js"></script>');
document.write('<script>setCookie("download_block", "", 1);</script>');

// Message Box
document.write('<script src="../public/js/blockly/messagebox/messagebox.js"></script>');
document.write('<link href="../public/js/blockly/messagebox/messagebox.css" rel="stylesheet" type="text/css">');

// Vanila Toast
document.write('<script src="../public/js/vanila-toast/vanillatoasts.js"></script>');
document.write('<link rel="stylesheet" href="../public/js/vanila-toast/vanillatoasts.css"></link>');

console.log("[Notice] All Resources are imported.");