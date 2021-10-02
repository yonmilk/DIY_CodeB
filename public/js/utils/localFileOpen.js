'use strict';

let datas = "";           // 데이터 변수 초기화
let fss;                // FS가 BrowserFS와 겹치기 때문에 재 생성
let fileName2 = "temp";   // 파일 명   
let rows = "";          // ?

//== 기태 수정 (로컬 파일 열기 ) 21.01.01 =============================================
// 텍스트 파일 처리하기 
function localFileOpen(blockId) {
  console.log("local Text FileOpen");
  let input = document.createElement("input"); // input 태그를 하나 만든다.
  // 태그 속성 정의
  input.type = "file";
  input.accept = ".txt, .csv"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
  input.onchange = function (e) { // input의 값이 변하면 => 파일을 불러오면
    if (e.target.files != undefined) { // 이중부정을 굳이?
      console.log(e.target.files);
      console.log("txt or csv 파일 불러옴")
      let reader = new FileReader(); // 파일리더 객체 생성

      // reader가 준비되면 
      reader.onload = function (e) {
        datas = e.target.result;                                                // 다읽어온 파일의 값을 datas에 저장      
        console.log("datas", datas);                                            // datas 출력 => txt나 csv를 출력한번 해본다.
        fss.writeFile(fileName2, datas);                                    // FS에 파일명으로 datas를 저장

        let block;
        let tab = document.getElementsByClassName('tab-link current'); 
	      let tab_id = tab[0].firstElementChild.id;
        console.log(tab_id)
        if(tab_id == 'tab_1') {
          block = Workspace1.getBlockById(blockId); 
        } else if(tab_id == 'tab_2') {
          block = Workspace2.getBlockById(blockId);
        } else if(tab_id == 'tab_3') {
          block = Workspace3.getBlockById(blockId);
        }

        let bId = Blockly.mainWorkspace.getBlockById(blockId);                   // 블럭안의 input에 파일 경로를 적기위해 블럭 찾음
        bId.setFieldValue(JSON.stringify(fileName2), 'file_path');  // 블럭안에 input에 파일경로를 적어줌
      };

      fileName2 = e.target.files[0].name;  // 파일명 받아옴
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
    fileName2 = e.target.files[0].name;
    console.log(fileName2);
    // 파일명, 확장자 분리작업
    let _fileLen = fileName2.length;                                      // 파일명의 길이
    let _lastDot = fileName2.lastIndexOf('.');                            // 파일명에서 가장 마지막에 나오는 .확인 => 확장자 체크
    let _fileExt = fileName2.substring(_lastDot, _fileLen).toLowerCase(); // 확장자를 소문자로 변경해 저장

    // 확장자가 wav일때 + 폰트 처리를 위해 확장자 추가 (2021.03.03 - 기태)
    if (_fileExt == ".wav" || _fileExt == ".ttf") {
      if (e.target.files != undefined) {
        console.log("웨이브 파일")
        let reader = new FileReader();

        reader.onload = function (e) {
          datas = e.target.result;
          console.log("datas", datas);
          // wav 파일 처리하기 
          let buf = Buffer(new Uint8Array(datas));  // base64 버퍼로 저장
          fss.writeFile(fileName2, buf); // 버퍼 배열로 파일 저장
        };
        fileName2 = e.target.files[0].name;
        console.log(fileName2);
        reader.readAsArrayBuffer(e.target.files[0]);  // 웨이브 파일은 버퍼로 읽어온다    
      }
    } else if (_fileExt == ".jpg" || _fileExt == ".png" || _fileExt == ".bmp") { // 확장자가 wav가아니면 이미지라고 판단
      if (e.target.files != undefined) {
        console.log("이미지 파일")
        let reader = new FileReader();

        // reader가 이미지를 다 읽었을때 실행
        reader.onload = function (e) {
          datas = e.target.result;  // 이미지 값을 datas에 저장
          console.log("datas", datas);
          let data = datas.replace(/^data:image\/\w+;base64,/, ""); // 이 부분을 삭제함
          let buf = data.toString('base64');  // base64 버퍼로 저장
          fss.writeFile(fileName2, buf);
        };
        reader.readAsDataURL(e.target.files[0]);  // reader가 이미지를 읽음   
      }
    } else {
      if (e.target.files != undefined) { // 이중부정을 굳이?
        let reader = new FileReader(); // 파일리더 객체 생성

        // reader가 준비되면 
        reader.onload = function (e) {
          datas = e.target.result;      // 다읽어온 파일의 값을 datas에 저장      
          console.log("datas : ", datas);  // datas 출력 => txt나 csv를 출력한번 해본다.
          fss.writeFile(fileName2, datas); // FS에 파일명으로 datas를 저장
        };

        fileName2 = e.target.files[0].name;  // 파일명 받아옴
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
  let input = document.createElement("input");
  input.type = "file";
  input.accept = ".jpg, .png, .bmp, .wav, .ttf"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
  input.onchange = function (e) {

    fileName2 = e.target.files[0].name;
    console.log(fileName2);

    // 파일명, 확장자 분리작업
    let _fileLen = fileName2.length;                                      // 파일명의 길이
    let _lastDot = fileName2.lastIndexOf('.');                            // 파일명에서 가장 마지막에 나오는 .확인 => 확장자 체크
    let _fileExt = fileName2.substring(_lastDot, _fileLen).toLowerCase(); // 확장자를 소문자로 변경해 저장

    // 확장자가 wav일때 + 폰트 처리를 위해 확장자 추가 (2021.03.03 - 기태)
    if (_fileExt == ".wav" || _fileExt == ".ttf") {
      if (e.target.files != undefined) {
        console.log("웨이브 파일")
        let reader = new FileReader();

        reader.onload = function (e) {
          datas = e.target.result;
          console.log("datas", datas);
          // wav 파일 처리하기 
          let buf = Buffer(new Uint8Array(datas));  // base64 버퍼로 저장
          fss.writeFile(fileName2, buf); // 버퍼 배열로 파일 저장
          // let block = demoWorkspace.getBlockById(blockId);
          let bId = Blockly.mainWorkspace.getBlockById(blockId)
          bId.setFieldValue(JSON.stringify(fileName2), 'file_path');
        };
        fileName2 = e.target.files[0].name;
        console.log(fileName2);
        reader.readAsArrayBuffer(e.target.files[0]);  // 웨이브 파일은 버퍼로 읽어온다    
      }
    } else { // 확장자가 wav가아니면 이미지라고 판단
      if (e.target.files != undefined) {
        console.log("이미지 파일")
        let reader = new FileReader();

        // reader가 이미지를 다 읽었을때 실행
        reader.onload = function (e) {
          datas = e.target.result;  // 이미지 값을 datas에 저장
          console.log("datas", datas);
          let data = datas.replace(/^data:image\/\w+;base64,/, ""); // 이 부분을 삭제함
          let buf = data.toString('base64');  // base64 버퍼로 저장
          fss.writeFile(fileName2, buf);
          // let block = demoWorkspace.getBlockById(blockId);
          let bId = Blockly.mainWorkspace.getBlockById(blockId)
          bId.setFieldValue(JSON.stringify(fileName2), 'file_path');
        };
        reader.readAsDataURL(e.target.files[0]);  // reader가 이미지를 읽음   
      }
    }
  };
  input.click(); // input을 클릭했을 때. 
}

// 폴더 단위 업로드 - 2021.08.19 이정윤
function localFolderOpen(blockId) {
  const input = document.createElement("input");    // input 태그를 하나 만든다.
  input.type = 'file';                              // 태그의 속성을 file로 정의
  input.setAttribute('webkitdirectory', '');        // webkitdirectory 속성을 지정하여 폴더를 업로드 할 수있도록 지정
  input.click();                                    // input 태그 실행

  input.onchange = (e) => {                         // input의 값이 변한다 = 파일을 불러온다
    const files = e.target.files;                   // files에 파일 리스트 저장
    const path = files[0].webkitRelativePath;       // 파일 경로
    const directoryName = path.split('/')[0];       // 폴더 이름

    fss.mkdir(`${directoryName}`, { recursive: true }, (err) => {  // 폴더 이름으로 디렉토리 생성
      throw new Error(err, '디렉토리 생성 실패');
    });
    fss.chmod(`${directoryName}`, 0o777);           // 만든 디렉토리에 777권한 부여 => 권한이 없으면 아무것도 안된다

    for (let file of files) {                       // 반복문을 돌며 파일을 하나씩 가져옴
      const path = file.webkitRelativePath;         // 파일의 경로
      const fileName = file.name;                   // 파일 이름

      const reader = new FileReader();              // 파일마다 파일리더 객체 생성
      reader.readAsText(file);                      // 파일 하나를 읽는다

      reader.onload = (e) => {                      // 정상적으로 읽었다면
        const datas = e.target.result;              // 파일 내용 받아와서
        fss.writeFile(path, datas);                 // 파일 경로에 저장한다
        console.log(`${fileName} : 업로드 성공`);
      }
    }
    let bId = Blockly.mainWorkspace.getBlockById(blockId);                    // 블럭안의 input에 폴더 경로를 적기위해 블럭 찾음
    bId.setFieldValue(JSON.stringify(directoryName), 'folder_path');  // 블럭안에 input에 폴더 경로를 적어줌
  }
}
/*
추가 구현해야 할 부분
1. csv 파일 필터링
2. 디렉터리를 만들 때 이미 폴더가 있으면 만들지 않기 (해결)
3. 작업 경로를 바꿔버리면 나중에 문제 될 수 있음. 수정 필요 (해결)
4. 블록의 경로 부분 채우기
5. 변수 정리 (필요없는 것, const로 바꿀 것 있으면 바꾸고) (해결)
6. 이걸 os쪽 블록으로 넣는게 좋을까 (해결)
7. 한글...지원 안되는 것 숙지하기
*/