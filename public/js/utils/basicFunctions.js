// 2020 - 12- 05 양승국 언어 변경
$("#language").change(function () {
    var selectName = $(this).find(":selected").val();

    if (selectName == "kor") {
        $("#lan").remove();
        var script = document.createElement("script");
        script.id = "lan";
        script.src = "/js/blockly/msg/js/ko.js"; // script url.
        document.body.appendChild(script);
    } else if (selectName == "eng") {
        $("#lan").remove();
        var script = document.createElement("script");
        script.id = "lan";
        script.src = "/js/blockly/msg/js/en.js"; // script url.
        document.body.appendChild(script);
    }
});

function Check_matplotlib_user_input(a, b) {
    if (a == 1 && b == 1) {
        DL_Gra = "graph_both_1";
    } else if (a == 1 || b == 1) {
        DL_Gra = "graph_or_1";
    } else {
        DL_Gra = 0;
    }
}

// 화면에 찍기 프린트
// function printc(x) {
//     var savetext = $("#exeArea").val();
//     $("#exeArea").val(savetext + x + "\n");
// }

// 상단 플마 로직 - 다른 곳으로 옮길 것
function workspaceFocusEvent() {
    // var b = workspace;
    var b = workspaceCheck();
    b.markFocused();
    b.setScale(b.options.zoomOptions.startScale);
    b.beginCanvasTransition();
    b.scrollCenter();
    setTimeout(b.endCanvasTransition.bind(b), 500);
    Blockly.Touch.clearTouchIdentifier();
}

function workspacePlusEvent() {
    var b = workspaceCheck();
    b.markFocused();
    b.zoomCenter(-1);
    Blockly.Touch.clearTouchIdentifier();
}
function workspaceMinusEvent() {
    var b = workspaceCheck();
    b.markFocused();
    b.zoomCenter(1);
    Blockly.Touch.clearTouchIdentifier();
}

// 탭 workspace 확인용 
function workspaceCheck() {
    let tab = document.getElementsByClassName('tab-link current'); 
	let tab_id = tab[0].firstElementChild.id;

    if(tab_id == 'tab_1') {
        return Workspace1;

    } else if(tab_id == 'tab_2') {
        return Workspace2;

    } else if(tab_id == 'tab_3') {
        return Workspace3;

    }
}

/**
 * condition: spring
 * des: 도전과제 문제 출력 사이드바에 따라서 페이지 크기를 조절한다.
 */
let openTime;
let opentt;
function setPageSize(sidebarFlag) {
    var b = workspaceCheck();
    if (sidebarFlag == 0) {
        $(".sidebarData").css({
            'left': '-20%',
        })
        $(".row").css({
            'left': '0%',
            'width': '100%'
        })
    } else {
        $(".sidebarData").css({
            'left': '0%',
        })
        $(".row").css({
            'left': '20%',
            'width': '80%'
        })
        $(".row").width("80%");
    }
    opentt = setInterval(function () {
        Blockly.svgResize(b);
    }, 1);
    clearTimeout(openTime);
    openTime = setTimeout(function () {
        clearInterval(opentt)
    }, 400)
}

/**
 * condition: spring
 * des: 도전과제 문제 출력 사이드바를 닫는다.
 */
function closeSideBar() {
    $(".ui.labeled.icon.sidebar").sidebar("hide");
}

/**
 * condition: spring
 * des: 사용자가 처음 에디터에 접근 후 튜토리얼 열람 Y 일 때 튜토리얼을 출력한다.
 */
async function showTutorial() {
    // 튜토리얼 Step에 따른 내용
    const TUTORIAL_CONTENT = ['<b>코드비에 오신 것을 환영합니다!</b>', '좌측은 블록 카테고리입니다.<br>이곳에서 코딩을 위한<br>다양한 명령어들을 사용할 수 있습니다.',
        '해당 칸은 코드창입니다.<br>블록 코딩에 대한 결과를<br>실시간으로 Python 코드로 변환하여 보여줍니다.',
        '해당 칸은 콘솔창입니다.<br>작성한 로직에 대한 실행 결과를<br>직접 확인할 수 있습니다.'
    ];
    const TUTORIAL_POPUP = ['tutoricalDefaultPopup', 'tutorialCategoryPopup', 'tutorialCodeAreaPopup', 'tutorialConsolePopup'];
    const TUTORIAL_WIDTH = [310, 400, 420, 304]

    // 튜토리얼 Dialog 껍데기 생성
    const tutorialSteps = Swal.mixin({
        reverseButtons: true,
    });

    let currentStep; // 현재 Step 기록할 변수

    // 반복문을 통해 currentStep 내용 출력
    for (currentStep = 0; currentStep < TUTORIAL_CONTENT.length;) {
        // currentStep에 따라 하이라이트 변경
        if (currentStep == 0) {
            document.getElementsByClassName('blocklyToolboxDiv blocklyNonSelectable')[0].style.zIndex = 70;
        } else if (currentStep == 1) {
            document.getElementsByClassName('blocklyToolboxDiv blocklyNonSelectable')[0].style.zIndex = 1070;
        } else if (currentStep == 2) {
            document.getElementById('codeDiv1').style.zIndex = 1070;
        } else if (currentStep == 3) {
            document.getElementById('codeDiv2').style.zIndex = 1070;
        }

        // currentStep에 알맞는 내용 출력
        const result = await tutorialSteps.fire({
            //title: '[' + (currentStep + 1) + '/3] ' + STEPS_TITLE[currentStep], 
            imageUrl: "/tutorial.png",
            imageWidth: '38',
            imageHeight: '38',
            html: TUTORIAL_CONTENT[currentStep],
            showCancelButton: currentStep > 0,
            currentProgressStep: currentStep,
            customClass: {
                // container를 통해 출력창 위치 고정
                container: 'tutorialDefaultContainer',// TUTORIAL_CSS[currentStep]
                // popup의 위치 수정
                popup: TUTORIAL_POPUP[currentStep]
            },
            width: TUTORIAL_WIDTH[currentStep],
            target: document.querySelector('.row'), // div의 row 클래스를 타겟으로 설정 (창이 작아져도 위치는 고정되기 위함)
            backdrop: `rgba(0,0,0, 0.5)`,
            position: 'center',
            confirmButtonText: currentStep == TUTORIAL_CONTENT.length - 1 ? '완료 [' + (currentStep + 1) + '/' + TUTORIAL_CONTENT.length + ']' :
                '다음 [' + (currentStep + 1) + '/' + TUTORIAL_CONTENT.length + ']',
            cancelButtonText: '이전',
        })
        if (result.isConfirmed) {
            currentStep++;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            currentStep--;
        } else {
            break;
        }

        // for문이 새로 갱신되기 직전 z-index 초기화
        document.getElementsByClassName('blocklyToolboxDiv blocklyNonSelectable')[0].style.zIndex = 70;
        document.getElementById('codeDiv1').style.zIndex = 70;
        document.getElementById('codeDiv2').style.zIndex = 70;
    }
}

/**
 * condition: spring
 * des: 도전과제일 때 실행 시 파이썬 RestAPI 서버로 정답 체크를 수행한다.
 */
// FIXME: 도전과제 정답체크 스프링 로직과 이하 Ajax 로직 수정할 것.
let answerResJson; // 파이썬 서버로부터 전달받는 응답을 담을 변수
let answerErr; // 에러 발생 여부 Flag
function checkAnswer(userCode) {
    //console.log("정답 요청 전송")
    $.ajax({
        url: "/challenge/checkAnswer.do",
        method: "POST",
        data: { userCode: JSON.stringify(userCode), challengeId: "${challengeId}" },
        dataType: "json",
        async: false,
        success: function (answerRes) {
            answerResJson = answerRes;
            answerErr = 0;
        },
        error: function (err) {
            console.log(err)
            answerErr = 1;
        }
    })
}

/**
 * condition: spring
 * des: 코드비에서 나가기 버튼 클릭 시 프로젝트 View로 이동한다. 단, 첫 번째 프로젝트일 경우 메인 페이지로 이동한다.
 */
function checkExit() {
    Swal.fire({
        icon: 'question',
        title: "나가기",
        html: "저장하지 않은 내용은 복구가 불가능합니다.",
        showCancelButton: true,
        confirmButtonText: "나가기",
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
            parent.postMessage({
                "from": "changePage",
                "isFirstProject": isFirstProject
            }, parentUrl)
        }
    })
}