//==================================
// 결과 지우기 2020.10.04 남지원 수정

//===================================
function resetConsole() {
    // 콘솔 지우기
    $("#exeArea").empty();
}

// ==================================
// 블록 지우기
//=================================== 
function resetWorkspace() {
    var b = workspaceCheck();   // 선택된 워크스페이스 값 가져옴
    b.clear();                  // 워크스페이스 초기화
    resetConsole();             // 콘솔창 결과 초기화
}

/**
 * condition: spring
 * des: 프로젝트 초기화 버튼 클릭 시, 초기 불러온 프로젝트의 상태로 롤백시킨다.
 */
function resetProject() {
    let tab = document.getElementsByClassName('tab-link current'); 
	let tab_id = tab[0].id;

    if(tab_id == 'tab_1') {
        Workspace1.clear(); 

        // 서버에서 가져온 프로젝트 XML을 Workspace에 출력
        let dom = Blockly.Xml.textToDom(projectXmlForTabFirst);
        Blockly.Xml.appendDomToWorkspace(dom, Workspace1);

    } else if(tab_id == 'tab_2') {
        Workspace2.clear(); 

        // 서버에서 가져온 프로젝트 XML을 Workspace에 출력
        let dom = Blockly.Xml.textToDom(projectXmlForTabSecond);
        Blockly.Xml.appendDomToWorkspace(dom, Workspace2);

    } else if(tab_id == 'tab_3') {
        Workspace3.clear(); 
    
        // 서버에서 가져온 프로젝트 XML을 Workspace에 출력
        let dom = Blockly.Xml.textToDom(projectXmlForTabThird);
        Blockly.Xml.appendDomToWorkspace(dom, Workspace3);
    }


    // var b = workspaceCheck();
    // b.clear(); 

    // console.log(b);

    // // 서버에서 가져온 프로젝트 XML을 Workspace에 출력
    // let dom = Blockly.Xml.textToDom(projectXml);
    // Blockly.Xml.appendDomToWorkspace(dom, b);
}

/**
 * condition: spring
 * des: 서버에 텍스트, 블록 코드를 저장한다.
 */
// FIXME: 현재 프로젝트 저장 시 usedLibs도 함께 저장할 수 있도록 수정할 것.
async function saveCodesToServer(bol) {
    let b = workspaceCheck();
    let xml = Blockly.Xml.workspaceToDom(b); // 워크스페이스를 돔(xml)으로 변환
    let p_xml = Blockly.Xml.domToPrettyText(xml); // 돔(xml) 형태 깔끔하게 정제
    let block_xml = JSON.stringify(p_xml); // json 형태로 정제

    // 각 Workspace에 대한 XML 생성
    let xmlForWs1 = Blockly.Xml.workspaceToDom(Workspace1);
    let xmlForWs2 = Blockly.Xml.workspaceToDom(Workspace2);
    let xmlForWs3 = Blockly.Xml.workspaceToDom(Workspace3);

    let pXmlForWs1 = Blockly.Xml.domToPrettyText(xmlForWs1);
    let pXmlForWs2 = Blockly.Xml.domToPrettyText(xmlForWs2);
    let pXmlForWs3 = Blockly.Xml.domToPrettyText(xmlForWs3);

    // 서버로 보내기 용이한 형태로 XML을 정제한다.
    let blockXmlForWs1 = JSON.stringify(pXmlForWs1);
    let blockXmlForWs2 = JSON.stringify(pXmlForWs2);
    let blockXmlForWs3 = JSON.stringify(pXmlForWs3);

    let blockXmlArr = [];
    blockXmlArr.push(blockXmlForWs1);
    blockXmlArr.push(blockXmlForWs2);
    blockXmlArr.push(blockXmlForWs3);

    /**
     * 기존 projectXml 변수를 새로 저장된 xml로 대체한다.
     * 프로젝트 초기화 시 사용하기 위함이다.
     */
    projectXmlForTabFirst = blockXmlForWs1;
    projectXmlForTabSecond = blockXmlForWs2;
    projectXmlForTabThird = blockXmlForWs3;

    let pyCode;
    // 코드로 저장 시, BlockCode의 On/Off 상태에 따라 가져오는 파이썬 코드를 분기화한다.
    flagBlockCode == 1 ? pyCode = pyEditor.getValue() : pyCode = asyncEditor.getValue();

    // 각 탭에 대한 이름을 저장한다.
    let tabNameList = Array();
    tabNameList.push(document.getElementById("tab_1_name").value);
    tabNameList.push(document.getElementById("tab_2_name").value);
    tabNameList.push(document.getElementById("tab_3_name").value);

    /**
     * 프로젝트 저장 여부를 체크하기 위한 Flag이다.
     * 0일 경우 서버에 저장하지 않은 상태, 1일 경우 프로젝트를 서버에 저장한 상태를 나타낸다.
     */
    let projectSaveFlag = 0;

    // 새 프로젝트일 경우 저장을 위한 모달창
    if (bol) {
        // 최초 저장한 프로젝트가 새 프로젝트일 경우
        if (isSaved == 0) {
            // 새 프로젝트 저장 후 "프로젝트 초기화" 드롭다운 DOM에 추가
            let resetPrjDropdownItem = document.createElement('span');
            resetPrjDropdownItem.setAttribute('class', 'dropdown-item codebBtnDropdown');
            resetPrjDropdownItem.setAttribute('onclick', 'resetProject();');

            let resetPrjDropdownItemIcon = document.createElement('i');
            resetPrjDropdownItemIcon.setAttribute('class', 'undo icon');

            // 아이콘 태그 추가
            resetPrjDropdownItem.appendChild(resetPrjDropdownItemIcon);

            // 텍스트 추가
            let resetPrjText = document.createElement('span');
            resetPrjText.innerText = '프로젝트 초기화';
            resetPrjDropdownItem.appendChild(resetPrjText);

            // 초기화 Dropdown에 Append
            let resetPrjDropdownMenu = document.getElementById('dropdown_reset_menu');
            resetPrjDropdownMenu.appendChild(resetPrjDropdownItem);
        }

        isSaved = 1;

        // 서버에 새 프로젝트 저장 시, 나타나는 모달창
        let steps = ['1', '2']
        let swalTitle = ["제목", "설명"];

        const swalQueueStep = Swal.mixin({
            confirmButtonText: '다음 &rarr;',
            cancelButtonText: '이전',
            progressSteps: steps,
            input: 'text',
            inputAttributes: {
                required: true
            },
            reverseButtons: true,
            validationMessage: 'This field is required'
        })

        const answers = ['', ''];
        let currentStep;

        for (currentStep = 0; currentStep < steps.length;) {
            const result = await swalQueueStep.fire({
                title: swalTitle[currentStep],
                inputValue: answers[currentStep],
                showCancelButton: currentStep > 0,
                currentProgressStep: currentStep,
                inputPlaceholder: '내용을 입력하세요',
                inputValue: answers[currentStep],
                input: (currentStep == 0) ? 'text' : 'textarea',
                html: (currentStep == 0) ? '저장할 제목을 설정하세요! <div id="test_cnt">(0 / 20)</div>' : '코드에 대한 설명을 작성하세요! <div id="test_cnt1">(0 / 65)</div>',
                didOpen: (currentStep == 0) ? function () { inputEvent() } : function () { textareaevent() },
                inputValidator: (value) => {
                    if (!value) {
                        if (currentStep == 0) {
                            return "제목을 입력해주세요.";
                        } else {
                            return "설명을 입력해주세요.";
                        }
                    }
                }
            })

            if (result.value) {
                answers[currentStep] = result.value
                currentStep++
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                currentStep--
            } else {
                break
            }
        }

        if (currentStep == steps.length) {
            await Swal.fire({
                title: '완료',
                text: "프로젝트 생성 및 저장이 완료 되었습니다.",
                icon: "success",
                confirmButtonText: '확인'
            }).then(() => {
                try {
                    if(projectType === 1) {
                        console.log("===> 블록 프로젝트 전송")
                        parent.postMessage({
                            "from": "saveCodesToServer_newProject",
                            "url": "/project/projectInsert.do",
                            "method": "POST",
                            "data": {
                                "title": answers[0],
                                "description": answers[1],
                                "blockXmls":blockXmlArr,
                                "pType": projectType,
                                "usedLibs": addedLibs,
                                "tabNameList": tabNameList,
                            }
                        }, parentUrl);   
                    } else {
                        console.log("===> 코드 프로젝트 전송")
                        parent.postMessage({
                            "from": "saveCodesToServer_newProject",
                            "url": "/project/projectInsert.do",
                            "method": "POST",
                            "data": {
                                "title": answers[0],
                                "description": answers[1],
                                "pyCode": JSON.stringify(pyCode),
                                "pType": projectType,
                                "usedLibs": addedLibs
                            }
                        }, parentUrl);
                    }
                } catch (err) {
                    console.log(err);
                }
            })
        }

        projectSaveFlag = 1;
    }

    // let filename = prompt("다른이름으로 저장.");           // 다른이름으로 저장
    // let fileObject = new File([p_xml], filename + ".xml");  // 파일 객체 생성 (data,name+확장자)

    // 저장된 프로젝트 DB에 전송
    try {
        // 프로젝트 ID가 있을 때 저장 시
        if (projectSaveFlag == 0) {
            if(projectType === 1) {
                console.log("===> 블록 프로젝트 전송")
                parent.postMessage({
                    "from": "saveCodesToServer_existProject",
                    "url": "/editor/sendFile.do",
                    "data": {
                        "blockXmls":blockXmlArr,
                        "pid": projectId,
                        "pType": projectType,
                        "usedLibs": addedLibs,
                        "tabNameList": tabNameList
                    }
                }, parentUrl);   
            } else {
                console.log("===> 코드 프로젝트 전송")
                parent.postMessage({
                    "from": "saveCodesToServer_existProject",
                    "url": "/editor/sendFile.do",
                    "data": {
                        "pyCode": JSON.stringify(pyCode),
                        "pid": projectId,
                        "pType": projectType,
                        "usedLibs": addedLibs
                    }
                }, parentUrl);
            }

            // parent.postMessage({
            //     "from": "saveCodesToServer_existProject",
            //     "url": "/editor/sendFile.do", 
            //     "data": {
            //         "block_xml": (projectType == 1 ? block_xml : JSON.stringify(pyCode)), 
            //         "member_seq": memberSeq, 
            //         "pid": projectId,
            //         "pType": projectType 
            //     }
            // }, parentUrl);
            Swal.fire({
                title: '성공!',
                text: "프로젝트가 저장되었습니다.",
                icon: 'success',
                confirmButtonText: '확인'
            })
        }
    } catch (err) {
        console.log(err);
    }

    //saveAs(fileObject); // 로컬 저장

}

//==================================
// 로컬 코드(텍스트, 블록) 저장하기
//===================================
function saveCodesToLocal() {

    // 각 Workspace에 대한 XML 생성
    xmlForWs1 = Blockly.Xml.workspaceToDom(Workspace1);
    xmlForWs2 = Blockly.Xml.workspaceToDom(Workspace2);
    xmlForWs3 = Blockly.Xml.workspaceToDom(Workspace3);

    pXmlForWs1 = Blockly.Xml.domToPrettyText(xmlForWs1);
    pXmlForWs2 = Blockly.Xml.domToPrettyText(xmlForWs2);
    pXmlForWs3 = Blockly.Xml.domToPrettyText(xmlForWs3);

    pyForWs1 = Blockly.Python.workspaceToCode(Workspace1);
    pyForWs2 = Blockly.Python.workspaceToCode(Workspace2);
    pyForWs3 = Blockly.Python.workspaceToCode(Workspace3);

    let zip = JSZip();

    prompt2(
        projectType == 1 ? "블록 저장하기" : "코드 저장하기",
        checkCookie("download_block"),
        "저장",
        "취소"
    ).then((filename) => {
        if (filename != null) {
            setCookie("download_block", filename, "1"); // 사용자가 정한 파일명을 다시 쿠키에 저장
            let tab1Name = document.getElementById("tab_1_name").value;
            let tab2Name = document.getElementById("tab_2_name").value;
            let tab3Name = document.getElementById("tab_3_name").value;

            if(projectType == 1) {

                // XML 압축
                zip.file(tab1Name + "_1" + ".xml", pXmlForWs1);
                zip.file(tab2Name + "_2" + ".xml", pXmlForWs2);
                zip.file(tab3Name + "_3" + ".xml", pXmlForWs3);

                // Py 압축
                zip.file(tab1Name + "_1" + ".py", pyForWs1);
                zip.file(tab2Name + "_2" + ".py", pyForWs2);
                zip.file(tab3Name + "_3" + ".py", pyForWs3);
    
                zip.generateAsync({ type: "blob" })
                    .then(function (blob) {
                        saveAs(blob, filename + ".zip"); // 은선 - 확장자 추가
                    });
            } else if(projectType == 2) {
                flagBlockCode == 1 ? py = pyEditor.getValue() : py = asyncEditor.getValue();
                let fileObject = new File([py], filename + ".py"); // 파일 객체 생성 (data,name+확장자)
                saveAs(fileObject); // 로컬 저장
            }
        }
    });
}

/**
 * condition: node / spring
 * des: 로컬에 블록 코드(XML)를 저장한다.
 */
async function saveCodeAsXML() {
    let b = workspaceCheck();
    let xml = Blockly.Xml.workspaceToDom(b); // 워크스페이스를 돔(xml)으로 변환
    let p_xml = Blockly.Xml.domToPrettyText(xml); // 돔(xml) 형태 깔끔하게 정제

    let filename = prompt("블록 파일을 저장할 이름을 입력하세요.");           // 다른이름으로 저장
    if (filename == null) {
        return false;
    } else if (filename == "") {
        filename = 'no_named';
    }

    let fileObject = new File([p_xml], filename + ".xml");  // 파일 객체 생성 (data,name+확장자)

    saveAs(fileObject); // 로컬 저장
}

/**
 * condition: node / spring
 * des: 로컬에 텍스트 코드(Py)를 저장한다.
 */
function saveCodeAsPy() {
    // 블록 코드 On/Off에 따른 코드 불러오기 로직 분기 
    let code;
    flagBlockCode == 1 ? code = pyEditor.getValue() : code = asyncEditor.getValue();

    let filename = prompt("코드 파일을 저장할 이름을 입력하세요."); // 다른이름으로 저장
    if (filename == null) {
        return false;
    } else if (filename == "") {
        filename = 'no_named';
    }

    let fileObject = new File([code], filename + ".py");  // 파일 객체 생성 (data,name+확장자)
    // setCookie("download_block", filename, 1);
    // saveAs(blobObject, filename + ".py");
    saveAs(fileObject); // 로컬 저장
}

//===================================
// 블록 불러오기 
//===================================   
let testZip;
function loadBlock() {
    let reader = new FileReader();  // FileReader객체 생성
    let files = document.getElementById("file").files; // 로컬에 있는 파일의 id값 얻기
    let file = files[0];

    let fileExtStartIdx = file.name.lastIndexOf('.');
    let fileExtEndIdx = file.name.length + 1;
    let fileExt = file.name.substring(fileExtStartIdx, fileExtEndIdx);

    /**
     * modifier: 정지현
     * date: 2021.10.05.
     * des: XML이 Zip(프로젝트)일 경우 압축 해제 후 각 Workspace에 임포트
     */
    if(fileExt === ".zip") {
        JSZip.loadAsync(file).then(function (zip) {
    
            // Zip 파일 내의 파일 데이터를 가져온다.
            zip.forEach(function(filename) {
                let fileInZip = zip.file(filename);

                let fileInZipExtStartIdx = fileInZip.name.lastIndexOf('.');
                let fileInZipExtEndIdx = fileInZip.name.length + 1;
                let fileInZipExt = fileInZip.name.substring(fileInZipExtStartIdx, fileInZipExtEndIdx);

                if(fileInZipExt === ".py") {
                    return;
                }

                // 탭이 시작되는 위치 인덱스 식별 후 파일의 탭 정보를 가져온다.
                let tabIdStartIdx = fileInZip.name.lastIndexOf('_');
                let tabId = fileInZip.name.substring(tabIdStartIdx, fileInZipExtStartIdx);
                let tabName = fileInZip.name.substring(0, tabIdStartIdx);
    
                // 각 압축 파일의 XML 데이터를 String 형태로 가져온다.
                fileInZip.async("string")
                    .then((content) => {
                        // XML 내 블록에 파일 경로가 들어있는 경우, "경로"로 재변경한다.
                        for (var i = 0; i < content.length;) {
                            // console.log(xml.indexOf('field name="file_path', i));
                            if (content.indexOf('field name="file_path', i) == -1) {
                                i++; // 일치하는 값이 없을 시 증가
                            } else {
                                i = content.indexOf('field name="file_path', i) + 1; // 중복 값 출력 방지용
                                var b = content.indexOf('</field>', i)
                                var q = content.substring(i + 22, b)
                                content = content.replace(q, '경로')
                            }
                        }

                        // 추출한 탭 정보에 알맞은 Workspace에 XML을 삽입한다.
                        // 또한, tabName의 이름에 맞게 코드비 내 탭 이름을 변경해준다.
                        if(tabId === "_1") {
                            Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(content), Workspace1);
                            document.getElementById("tab_1_name").value = tabName
                        } else if(tabId === "_2") {
                            Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(content), Workspace2);
                            document.getElementById("tab_2_name").value = tabName
                        } else if(tabId === "_3") {
                            Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(content), Workspace3);
                            document.getElementById("tab_3_name").value = tabName
                        }
                    }).catch((err) => {
                        console.log("===>압축 해제 실패..");
                        console.log(err);
                    })
            })
        }); 
    } else if(fileExt === ".xml") {
        let fileName = "";
        if (file) {
            reader.onload = function (e) {          // 
                //파일읽기 성공한 경우
                var xml = reader.result;              // 읽어들인 파일 내용
    
                // XML 내 블록에 파일 경로가 들어있는 경우, "경로"로 재변경한다.
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

/**
 * condition: spring
 * des: 사용자의 블록 로그(생성 및 삭제)를 저장한다.
 */
// FIXME: recordBlockStatusEvent 이벤트 각 Workspace에 적용될 수 있도록 로직 수정해야 함.

// 현재 블록의 상태를 저장할 전역 배열 및 변수
let recordCreatedArr = [];
let recordDeletedArr = [];

// 에러를 기록하기 위한 전역 배열
let recordErrorNameArr = [];
let recordErrorMsgArr = [];

let recordCreatedBlock = null;
let recordSelectedBlock = null;
let currentBlockType = null;

function recordBlockStatusEvent(event) {
    var blockRecordJSON = null;

    if (event.type == "create") {
        recordCreatedBlock = workspace.getBlockById(event.blockId); // 현재 생성된 블록을 기록.
        currentBlockType = recordCreatedBlock.type; // 블록의 type(이름)을 기록
        // console.log("Created block : " + currentBlockType);
        recordCreatedArr.push(currentBlockType); // 사용자가 생성한 블록을 버퍼에 추가
    } else if (event.element == "click") {
        // 선택된 블록 기록
        recordSelectedBlock = workspace.getBlockById(event.blockId);
        currentBlockType = recordSelectedBlock.type;
        // console.log("Clicked block : " + currentBlockType);
    } else if (event.type == "delete") {
        recordDeletedArr.push(currentBlockType);
    }
    //console.log(recordDeletedArr);
    blockRecordJSON = JSON.stringify({ "create": recordCreatedArr, "delete": recordDeletedArr });
    sendToSession(blockRecordJSON, "block_data");
}

/**
 * condition: spring
 * des: 사용자의 블록 로그 및 발생한 에러 로그를 서버로 전송한다.
 */
// FIXME: 현재 사용자 로그가 전송되지 않음. 체크 필요함. 
function sendDataToServer() {
    let blockData = JSON.parse(sessionStorage.getItem('block_data'));
    let errorData = JSON.parse(sessionStorage.getItem('error_data'));

    parent.postMessage({
        "from": "sendDataToServer",
        "url": "/editor/logsInsert.do",
        "method": "POST",
        "data": {
            allData: JSON.stringify({ 
                "m_seq": memberSeq, 
                "block_data": blockData, 
                "error_data": errorData })
        }
    }, parentUrl)

    // 데이터 전송 후 로그 저장을 위한 배열들 초기화.
    recordCreatedArr = [];
    recordDeletedArr = [];
    recordErrorNameArr = [];
    recordErrorMsgArr = [];
    sessionStorage.clear();
    //console.log("Ajax를 통해 Spring으로 데이터 전달됨, Session Clear!");
}

/**
 *  condition: spring
 *  des: 사용자 로그(블록 생성 및 삭제, 에러 등)를 세션 스토리지에 저장한다.
 */
function sendToSession(JSON, nameJSON) {
try {
    sessionStorage.setItem(nameJSON, JSON);
    console.log("JSON이 저장되었습니다. 이름 : " + nameJSON);
} catch (e) {
    console.log("[Session Storage] 에러가 발생하였습니다.");
    console.log(e);
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