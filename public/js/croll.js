'use strict';

// let htmldata; // 크롤링된 html dom
function _requestsURL(_url) {
  $.ajax({
    url: '/test2', // server.js에서 URI확인
    method: 'POST', // HTTP 요청 메소드(GET, POST 등)
    data: { url: _url }, // json형식으로 서버에 url전송
    dataType: 'json', // 서버에서 받아올 데이터의 타입
    success: function (data) {
      console.log(data);
      let htmlData = data.data;
      
      // 크롬에서는 버퍼 크기 문제로 큰 데이터를 옮기지 못함
      // 1000개씩 잘라서 차례차례 보낸다
      let pythonCode = `
      subHtmlData = ""
      req = ""`
      pyodide.runPython(pythonCode);

      for (let i = 0; i < htmlData.length; i += 1000) {
        let subHtmlData = htmlData.substr(i, 1000);
        // console.log(subHtmlData);     // 1000개씩 잘린 코드를 출력해본다. -> 너무 많네ㅎ
        pyodide.globals.set('subHtmlData', subHtmlData);
        pythonCode = `req += subHtmlData`;
        pyodide.runPython(pythonCode);
      }
    },
  });
}
