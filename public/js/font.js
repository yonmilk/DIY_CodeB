// Node.js 서버로 폰트 요청
function _requestFont(font){  

  var fontName = '';

  fetch('/sendFont', {
      method: 'POST',
      headers: {"font": font}
  })
  .then((response) => {

    fontName = response.headers.get('fontName');

    if(response.ok){
      return response.arrayBuffer();
    }else {
      throw console.error();
    }

  })
  .then((buf) => {

    fontName = fontName;
    let font = new Uint8Array(buf);

    pyodide.FS.chdir('/data');
    pyodide.FS.writeFile(fontName + '.ttf', font);

    console.log("맑은고딕 Font 로딩완료");

  })
  .catch((error) => console.log(error));
}
