'use strict';

var htmldata; // 크롤링된 html dom
function _requestsURL(_url){
	$.ajax({
		url: "/editor/webCrawling.do",        // server.js에서 URI확인
		method: "POST",       // HTTP 요청 메소드(GET, POST 등) 
		data : {url : _url},  // json형식으로 서버에 url전송
		dataType: "text",     // 서버에서 받아올 데이터의 타입
		success: function(data){
			console.log(data);
	 		pyodide.globals.req = data;  // node에서 받아온 데이터를 htmldata 전역변수에 넣어준다. (차후 크롤링블록에서 htmldata변수가 사용됨)
		}
	});
}

