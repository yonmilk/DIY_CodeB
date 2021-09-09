// 파일 다운로드 
function fileDownload(){
  var minetype;     // 데이터 타입 
  var blob;         // 블롭 변수
  var base64Image;  // base64이미지

  var _filename = prompt("저장할 파일명을 입력해주세요(ex> hello.txt)");    // 파일명+확장자 입력
  if(_filename != null){
    var _fileLen = _filename.length;                                      // 파일명의 길이
    var _lastDot = _filename.lastIndexOf('.');                            // 파일명에서 마지막에 나오는 '.'찾기 -> 확장자를 찾을수있음
    var _fileExt = _filename.substring(_lastDot, _fileLen).toLowerCase(); // 분리된 파일 확장자
  }

  // readFile - 인코딩 없이 minetype으로 구분해서 처리하면 됨.
  fss.readFile(_filename, function(err, data) {
    console.log(data); // data정보 확인
    // 에러가 났을 때
    if(err){
      alert("해당 파일이 존재하지 않습니다.");
      return;
    }

    // 확장자 비교 후 작동.
    if(_fileExt == '.txt'){
      minetype = "text/plain;charset=utf-8";            
    } else if(_fileExt == '.csv'){
      minetype = "text/csv;charset=utf-8";
    } else if(_fileExt == '.bmp'){            
      minetype : 'image/bmp';            
    } else if(_fileExt == '.jpg'){  
      minetype = 'image/jpeg';             
    } else if(_fileExt == '.wav'){            
      minetype : 'audio/wav';           
    }
    
    // 블롭 생성
    blob = new Blob([data], { type: minetype });
    console.log(blob);
    // 블롭 저장.
    saveAs(blob, _filename);
    
  });
}