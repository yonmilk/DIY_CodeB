'use strict';

var datas="";           // 데이터 변수 초기화
var fss;                // FS가 BrowserFS와 겹치기 때문에 재 생성
var fileName2="temp";   // 파일 명   
var rows = "";          // ?

//== 기태 수정 (로컬 파일 열기 ) 21.01.01 =============================================
// 텍스트 파일 처리하기 
function localFileOpen(blockId) {
  console.log("local Text FileOpen");
  var input = document.createElement("input"); // input 태그를 하나 만든다.
  // 태그 속성 정의
  input.type = "file";
  input.accept = ".txt, .csv"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
  input.onchange = function (e) { // input의 값이 변하면 => 파일을 불러오면
    if (e.target.files != undefined) { // 이중부정을 굳이?
      console.log("txt or csv 파일 불러옴")
      var reader = new FileReader(); // 파일리더 객체 생성
    
      // reader가 준비되면 
      reader.onload = function (e) { 
        datas = e.target.result;      // 다읽어온 파일의 값을 datas에 저장      
        console.log("datas", datas);  // datas 출력 => txt나 csv를 출력한번 해본다.
        fss.writeFileSync(fileName2, datas); // FS에 파일명으로 datas를 저장
        var block = demoWorkspace.getBlockById(blockId); // 블럭안의 input에 파일 경로를 적기위해 블럭 찾음
        var bId = Blockly.mainWorkspace.getBlockById(blockId) // ???
        block.setFieldValue(JSON.stringify("data/" + fileName2), 'file_path'); // 블럭안에 input에 파일경로를 적어줌
      };

      fileName2 =  e.target.files[0].name;  // 파일명 받아옴
      console.log(fileName2);               // 파일명 출력해봄
      reader.readAsText(e.target.files[0]); // 리더객체가 텍스트를 읽음        
    }
  };
  input.click(); // 블럭이 클릭되면 실행
}

function localFileOpen3() {
  console.log("local Text FileOpen3");
  let input = document.createElement("input"); // input 태그를 하나 만든다.
  // 태그 속성 정의
  input.type = "file";
  input.onchange = function (e) { // input의 값이 변하면 => 파일을 불러오면
    fileName2 =  e.target.files[0].name;
    console.log(fileName2);
    // 파일명, 확장자 분리작업
    let _fileLen = fileName2.length;                                      // 파일명의 길이
    let _lastDot = fileName2.lastIndexOf('.');                            // 파일명에서 가장 마지막에 나오는 .확인 => 확장자 체크
    let _fileExt = fileName2.substring(_lastDot, _fileLen).toLowerCase(); // 확장자를 소문자로 변경해 저장

    // 확장자가 wav일때 + 폰트 처리를 위해 확장자 추가 (2021.03.03 - 기태)
    if(_fileExt == ".wav" || _fileExt == ".ttf" ){
      if (e.target.files != undefined) {
        console.log("웨이브 파일")
        var reader = new FileReader();
      
        reader.onload = function (e) {
          datas = e.target.result;          
          console.log("datas", datas);    
          // wav 파일 처리하기 
          fss.writeFileSync(fileName2, Buffer(new Uint8Array(datas))); // 버퍼 배열로 파일 저장
        };
        fileName2 =  e.target.files[0].name;
        console.log(fileName2);
        reader.readAsArrayBuffer(e.target.files[0]);  // 웨이브 파일은 버퍼로 읽어온다    
      }
    } else if(_fileExt == ".jpg" || _fileExt == ".png" || _fileExt == ".bmp" ) { // 확장자가 wav가아니면 이미지라고 판단
      if (e.target.files != undefined) {
        console.log("이미지 파일")
        var reader = new FileReader();
        
        // reader가 이미지를 다 읽었을때 실행
        reader.onload = function (e) {
          datas = e.target.result;  // 이미지 값을 datas에 저장
          console.log("datas", datas);    
          var data = datas.replace(/^data:image\/\w+;base64,/, ""); // 이 부분을 삭제함
          var buf = Buffer.from(data, 'base64');  // base64 버퍼로 저장
          fss.writeFileSync(fileName2, buf); 
        };
        reader.readAsDataURL(e.target.files[0]);  // reader가 이미지를 읽음   
      }
    } else {
      if (e.target.files != undefined) { // 이중부정을 굳이?
        var reader = new FileReader(); // 파일리더 객체 생성
      
        // reader가 준비되면 
        reader.onload = function (e) { 
          datas = e.target.result;      // 다읽어온 파일의 값을 datas에 저장      
          console.log("datas : ", datas);  // datas 출력 => txt나 csv를 출력한번 해본다.
          fss.writeFileSync(fileName2, datas); // FS에 파일명으로 datas를 저장
        };

        fileName2 =  e.target.files[0].name;  // 파일명 받아옴
        console.log(fileName2);               // 파일명 출력해봄
        reader.readAsText(e.target.files[0]); // 리더객체가 텍스트를 읽음        
      }
    };
  }
  input.click(); // input을 클릭했을 때. 
}

// 미디어 파일 처리하기 
function localFileOpen2(blockId) {
  console.log("local Image FileOpen");
  var input = document.createElement("input");
  input.type = "file";
  input.accept = ".jpg, .png, .bmp, .wav, .ttf"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
  input.onchange = function (e) {
  
  fileName2 =  e.target.files[0].name;
  console.log(fileName2);

  // 파일명, 확장자 분리작업
  var _fileLen = fileName2.length;                                      // 파일명의 길이
  var _lastDot = fileName2.lastIndexOf('.');                            // 파일명에서 가장 마지막에 나오는 .확인 => 확장자 체크
  var _fileExt = fileName2.substring(_lastDot, _fileLen).toLowerCase(); // 확장자를 소문자로 변경해 저장

  // 확장자가 wav일때 + 폰트 처리를 위해 확장자 추가 (2021.03.03 - 기태)
  if(_fileExt == ".wav" || _fileExt == ".ttf" ){
    if (e.target.files != undefined) {
      console.log("웨이브 파일")
      var reader = new FileReader();
    
      reader.onload = function (e) {
        datas = e.target.result;          
        console.log("datas", datas);    
        // wav 파일 처리하기 
        fss.writeFileSync(fileName2, Buffer(new Uint8Array(datas))); // 버퍼 배열로 파일 저장
        var block = demoWorkspace.getBlockById(blockId);
        var bId = Blockly.mainWorkspace.getBlockById(blockId)
        block.setFieldValue(JSON.stringify("data/" + fileName2), 'file_path');
      };
      fileName2 =  e.target.files[0].name;
      console.log(fileName2);
      reader.readAsArrayBuffer(e.target.files[0]);  // 웨이브 파일은 버퍼로 읽어온다    
    }
  } else { // 확장자가 wav가아니면 이미지라고 판단
    if (e.target.files != undefined) {
      console.log("이미지 파일")
      var reader = new FileReader();
      
      // reader가 이미지를 다 읽었을때 실행
      reader.onload = function (e) {
        datas = e.target.result;  // 이미지 값을 datas에 저장
        console.log("datas", datas);    
        var data = datas.replace(/^data:image\/\w+;base64,/, ""); // 이 부분을 삭제함
        var buf = Buffer.from(data, 'base64');  // base64 버퍼로 저장
        fss.writeFileSync(fileName2, buf); 
        var block = demoWorkspace.getBlockById(blockId);
        var bId = Blockly.mainWorkspace.getBlockById(blockId)
        block.setFieldValue(JSON.stringify("data/" + fileName2), 'file_path');
      };
      reader.readAsDataURL(e.target.files[0]);  // reader가 이미지를 읽음   
    }
  }
};
input.click(); // input을 클릭했을 때. 
}