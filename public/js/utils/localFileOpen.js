let datas = "";           // 데이터 변수 초기화
let fss;                // FS가 BrowserFS와 겹치기 때문에 재 생성
let fileName2 = "temp";   // 파일 명   
let rows = "";          // ?

const txtFileOpen = (e) => {
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
};

const binaryFileOpen = (e) => {
  let reader = new FileReader(); // 파일리더 객체 생성
  
  fileName2 = e.target.files[0].name;  // 파일명 받아옴
  console.log(fileName2);               // 파일명 출력해봄
  reader.readAsBinaryString(e.target.files[0]); // 리더객체가 텍스트를 읽음     
  
  // reader가 준비되면 
  reader.onload = function (e) {

    datas = e.target.result;                                // 다읽어온 파일의 값을 datas에 저장      
    console.log("datas", datas);                                            // datas 출력 => txt나 csv를 출력한번 해본다.

    var len = datas.length;
    var buf = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      buf[i] = datas.charCodeAt(i);
    }

    fss.writeFile(fileName2, buf);                                    // FS에 파일명으로 datas를 저장
  };
};


//== 기태 수정 (로컬 파일 열기 ) 21.01.01 =============================================
function localFileOpen(blockId) {
  console.log("local File Open");

  let input = document.createElement("input"); // input 태그를 하나 만든다.

  // 태그 속성 정의
  input.type = "file";
  input.accept = ".txt, .csv, .ttf"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
  input.onchange = function (e) { // input의 값이 변하면 => 파일을 불러오면
    fileName2 = e.target.files[0].name;
    console.log(fileName2);
    // 파일명, 확장자 분리작업
    let _fileLen = fileName2.length;                                      // 파일명의 길이
    let _lastDot = fileName2.lastIndexOf('.');                            // 파일명에서 가장 마지막에 나오는 .확인 => 확장자 체크
    let _fileExt = fileName2.substring(_lastDot, _fileLen).toLowerCase(); // 확장자를 소문자로 변경해 저장

    if (_fileExt == '.txt' || _fileExt == '.csv') {  // csv, txt 파일
      if (e.target.files != undefined) {
        txtFileOpen(e)        
      }
    }
    else {
      if (e.target.files != undefined) {
        // console.log(e.target.files);
        binaryFileOpen(e)
      }
    }
    let bId = Blockly.mainWorkspace.getBlockById(blockId);                   // 블럭안의 input에 파일 경로를 적기위해 블럭 찾음
    bId.setFieldValue(JSON.stringify(fileName2), 'file_path');  // 블럭안에 input에 파일경로를 적어줌
  }
  input.click(); // input을 클릭했을 때. 
}


function mediaFileOpen(blockId) {
  console.log("media File Open");
  let input = document.createElement("input"); // input 태그를 하나 만든다.
  // 태그 속성 정의
  input.type = "file";
  input.accept = ".wav, .jpg, .png, .bmp"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
  input.onchange = function (e) { // input의 값이 변하면 => 파일을 불러오면
    fileName2 = e.target.files[0].name;
    console.log(fileName2);
    // 파일명, 확장자 분리작업
    let _fileLen = fileName2.length;                                      // 파일명의 길이
    let _lastDot = fileName2.lastIndexOf('.');                            // 파일명에서 가장 마지막에 나오는 .확인 => 확장자 체크
    let _fileExt = fileName2.substring(_lastDot, _fileLen).toLowerCase(); // 확장자를 소문자로 변경해 저장

    if (e.target.files != undefined) {
      binaryFileOpen(e)    
    }
    let bId = Blockly.mainWorkspace.getBlockById(blockId);                   // 블럭안의 input에 파일 경로를 적기위해 블럭 찾음
    bId.setFieldValue(JSON.stringify(fileName2), 'file_path');  // 블럭안에 input에 파일경로를 적어줌
  }
  input.click(); // input을 클릭했을 때.
}


function pickleFileOpen(blockId) {
  console.log("media File Open");
  let input = document.createElement("input"); // input 태그를 하나 만든다.
  // 태그 속성 정의
  input.type = "file";
  input.accept = ".pickle, .pkl"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
  input.onchange = function (e) { // input의 값이 변하면 => 파일을 불러오면
    fileName2 = e.target.files[0].name;
    console.log(fileName2);
    // 파일명, 확장자 분리작업
    let _fileLen = fileName2.length;                                      // 파일명의 길이
    let _lastDot = fileName2.lastIndexOf('.');                            // 파일명에서 가장 마지막에 나오는 .확인 => 확장자 체크
    let _fileExt = fileName2.substring(_lastDot, _fileLen).toLowerCase(); // 확장자를 소문자로 변경해 저장

    if (e.target.files != undefined) {
      binaryFileOpen(e)    
    }
    let bId = Blockly.mainWorkspace.getBlockById(blockId);                   // 블럭안의 input에 파일 경로를 적기위해 블럭 찾음
    bId.setFieldValue(JSON.stringify(fileName2), 'pickle_path');  // 블럭안에 input에 파일경로를 적어줌
  }
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

