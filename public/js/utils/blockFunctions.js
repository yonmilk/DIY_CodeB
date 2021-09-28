//==================================
// 결과 지우기 2020.10.04 남지원 수정
//===================================
function clear_result() {
    // 콘솔 지우기
    $("#exeArea").empty();
}

// ==================================
// 블록 지우기
//=================================== 
function clearBlock() {
    var b = workspaceCheck();   // 선택된 워크스페이스 값 가져옴
    b.clear();                  // 워크스페이스 초기화
    clear_result();             // 콘솔창 결과 초기화

}

// ==================================
// 코드 파일로 저장하기
//===================================
function file_save() {
    // 블록 코드 On/Off에 따른 코드 불러오기 로직 분기
    let code;
    flagBlockCode == 1
        ? (code = pyEditor.getValue())
        : (code = asyncEditor.getValue());

    let filename = prompt("다른 이름으로 저장"); // 다른이름으로 저장
    if (filename == null) {
        return false;
    } else if (filename == "") {
        filename = "no_named";
    }

    let fileObject = new File([code], filename + ".py"); // 파일 객체 생성 (data,name+확장자)
    // setCookie("download_block", filename, 1);
    // saveAs(blobObject, filename + ".py");
    saveAs(fileObject); // 로컬 저장
}

//==================================
// 블록 저장하기
//===================================
function saveBlock() {
    var b = workspaceCheck();   // 선택된 워크스페이스 값 가져옴

    xml = Blockly.Xml.workspaceToDom(b);  // 워크스페이스를 돔(xml)로 만듬
    py = Blockly.Python.workspaceToCode(b);	// 워크스페이스를 py로 만들기

    let p_xml = Blockly.Xml.domToPrettyText(xml); // 돔(xml)을 깔끔하게 만드는 부분

    let zip = JSZip();

    prompt2(
        "블록 저장하기",
        checkCookie("download_block"),
        "저장",
        "취소"
    ).then((filename) => {
        if (filename != null) {
            setCookie("download_block", filename, "1"); // 사용자가 정한 파일명을 다시 쿠키에 저장
            // let fileObject = new File([p_xml], filename + ".xml"); // 파일 객체 생성 (data,name+확장자)
            // saveAs(fileObject); // 로컬 저장

            zip.file(filename + ".xml", p_xml);
            zip.file(filename + ".py", py);

            zip.generateAsync({ type: "blob" })
                .then(function (blob) {
                    saveAs(blob, filename + ".zip"); // 은선 - 확장자 추가
                });
        }
    });
}

//===================================
// 블록 불러오기 
//===================================   
function loadBlock() {
    let reader = new FileReader();  // FileReader객체 생성
    let files = document.getElementById("file").files; // 로컬에 있는 파일의 id값 얻기
    let file = files[0];
    let fileName = "";
    if (file) {
        reader.onload = function (e) {          // 파일읽기 성공한 경우
            var xml = reader.result;              // 읽어들인 파일 내용


            for (var i = 0; i < xml.length;) {
                // console.log(xml.indexOf('field name="file_path', i));
                if (xml.indexOf('field name="file_path', i) == -1) {
                    i++; // 일치하는 값이 없을 시 증가
                } else {
                    i = xml.indexOf('field name="file_path', i) + 1; // 중복 값 출력 방지용
                    var b = xml.indexOf('</field>', i)
                    var q = xml.substring(i + 22, b)
                    xml = xml.replace(q, '경로')
                }
            }

            // if(xml.indexOf('field name="file_path') != -1){

            // 	// var a = xml.indexOf('"data/')
            // 	// var b = xml.indexOf('.csv"</field>')
            // 	var a = xml.indexOf('"file_path')
            // 	var b = xml.indexOf('</field>', a)
            // 	var q = xml.substring(a+12, b)
            // 	xml = xml.replace(q, '경로')
            // 	}

            var dom = Blockly.Xml.textToDom(xml); // text를 돔 형태로 변환
            var b = workspaceCheck();   // 선택된 워크스페이스 값 가져옴
            Blockly.Xml.appendDomToWorkspace(dom, b); //  돔을 디코딩 후 워크스페이스에 블록을 만들어 냄.
            fileName = file.name;

            // 워크스페이스에 있는 블록을 코드로 변환해 코드미러에 setValue해주는 부분
            try {
                // var pyCode1 = Blockly.Python.workspaceToCode(demoWorkspace);
                // pyEditor.setValue(pyCode);

                var pyCode1 = Blockly.Python.workspaceToCode(Workspace1);
                pyEditor.setValue(pyCode1);


            } catch (e) {
                console.log('python 코드가 매핑되어 있지 않습니다. Error : ' + e);
            }
            try {
                var jsCode = Blockly.JavaScript.workspaceToCode(Workspace1);
                jsEditor.getValue() = jsCode;
            } catch (e) {
                console.log('java script 코드가 매핑되어 있지 않습니다. Error : ' + e);
            }
        };
        reader.readAsText(file);
    }
}

// ==================================
// 블록을 선택했을 때 
//=================================== 
function whenSelected(event) {
    
	// 블록을 눌렀을 때 클릭 이벤트로 각종 메소드 작동
	if (event.type == Blockly.Events.UI && event.element === "click") {
        var b = workspaceCheck();   // 선택된 워크스페이스 값 가져옴
		let block = b.getBlockById(event.blockId);

		// 판다스에서 쓰이는 csv불러와서 데이터 프레임 만들어주는거
		if ('csv2' == block.type) {
			openTextFile(event.blockId);
		}

		// 기태 수정(로컬 파일 열기) 21.01.01 ==============================================
		//판다스의 파일열기
		if ('fileopen' == block.type) {
			console.log("파일 열기");
			localFileOpen(event.blockId);         
		}
		//사이파이의 미디어불러오기
		if ('fileopen2' == block.type) {
			console.log("미디어 파일 열기");
			localFileOpen2(event.blockId);         
		}
		// 기태 수정(로컬 파일 열기) 지금은 사용되지 않음 ========================================================
		
		// 폴더 단위 업로드 - 2021.08.19 이정윤
		if ('folderopen' == block.type) {
			console.log("폴더 열기");
			localFolderOpen(event.blockId);         
		}

		if ('data_csv_read' == block.type) {
			Show_csv();
		}
		// 다운로드 블록 창 열기
		if ('os_data_download'  == block.type) {
			fileDownload();
		}
		// croll_url_load
		if('croll_url_load' == block.type){
			_requestsURL(event.blockId);
		}
	}
}

function xmlSave() {
    let xml = Blockly.Xml.workspaceToDom(workspace);  // 워크스페이스를 돔(xml)로 만듬
    let p_xml = Blockly.Xml.domToPrettyText(xml);         // 돔(xml)을 깔끔하게 만드는 부분

    let pyCode = pyEditor.getValue(); // 파이썬 코드를 가져옴

    let filename = prompt("다른 이름으로 저장");           // 다른이름으로 저장
    if (filename == null) {
        return false;
    } else if (filename == "") {
        filename = 'no_named';
    }

    let fileObject = new File([p_xml], filename + ".xml");  // 파일 객체 생성 (data,name+확장자)

    saveAs(fileObject);
}