// aside 열고 닫기 토글
function sidebar_toggle() {
    var duration = 300;
    var side = $('#sidebar');

    // side의 클래스를 open으로 토글함
    side.toggleClass('open');

    if (side.hasClass('open')) {
      side.stop(true).animate({
        right: '0px'
      }, duration);
    } else {
      side.stop(true).animate({
        right: '-900px'
      }, duration);
    };
};

// 지우기(상단지우기)
function csv_clear() {
  $("#graph1").remove(); 
  $("#csv_show").before("<div id='graph1' style=\"height:500px; width:900;\"><img id='pyplotfigure' /></div>");
  // $('#csv_show').empty(); // 초기화
};

// 전체초기화
function sidebar_clear() {
    //$('#graph1').empty(); 기존 그래프 초기화
    $("#graph1").remove(); 
    $("#csv_show").before("<div id='graph1' style=\"height:500px; width:900;\"><img id='pyplotfigure' /></div>");
    $("#csv_show").remove(); 
    $("#graph1").after("<div id='csv_show'></div>");
};

    //===================================
    // 커스텀 prompt
    //===================================

    const prompt2 = (title, defaultInput, button1, button2) => { return new Promise(function (resolve, reject) {
      let tempData = null;

      $.MessageBox({ // 커스텀 메세지 박스
        buttonDone  : button1, // 버튼
        buttonFail  : button2,
        message     : title, 
        input       : defaultInput, // 입력창, checkEvent : 기본입력 값 -> 쿠키에 저장된 값
        speed       : 0
      })
      .done(function(data){ // button1일때
        if($.trim(data)){
          resolve(checkFileName(data));
        }
      }).fail(function(){ // button2일때
        resolve(null);
      });
    })};



  // 파일명에 .py, .xml이 들어갔을 경우 제거
  function checkFileName(FileName) {
    var _cNameLen = FileName.length;                                      // 파일명의 길이
    var _lastDot = FileName.lastIndexOf('.');                            // 파일명에서 가장 마지막에 나오는 .확인 => 확장자 체크
    var _fileExt = FileName.substring(_lastDot, _cNameLen).toLowerCase(); // 확장자를 소문자로 변경해 저장

    if(_fileExt == ".xml" || _fileExt == ".py" ){
      FileName = FileName.substring(0,_lastDot);
    }

    return FileName;
  }
