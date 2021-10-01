
/**
 * condition: spring
 * des: 기존 스프링과의 직접적인 데이터 송수신(ajax)을 대체하기 위한 핸들러 정의
 *      이는 spring 환경인 경우, Spring View에 Iframe으로 코드비가 삽입되기 때문.
 * 
 * ★USAGE: 서버로 데이터를 전송할 때에는 다음과 같은 규격을 따른다.
 *              from: 데이터 전송을 요청하는 함수명 (ex. sendCodesToServer)
 *                    단, 함수명의 괄호는 포함하지 않는다.
 *              url: 기존 Ajax에서 Spring에 요청하기 위한 URL 정의
 *              method: 요청 Method, 없을 경우 Default로 GET을 사용한다.
 *              data: JSON으로 요청하는 것이 권장된다.
 *            
 */

function springDataListener(event) {
    if(event.origin !== "http://dev.inhatc.co.kr:8110") {
        return;
    }

    console.log("----전달받은 데이터 in Node.js----");
    console.log(event.data);

    // DO: 스프링에서 전달받은 응답에 대한 처리 분기
    switch (event.data.to) {
        case "saveCodesToServer_newProject":
            if(event.data.success) {
                isFirstProject = 0;

                // 빈페이지에서 새로운 프로젝트로 생성하였을때
                projectId = event.data.response;
                $(".thisProjectBtn").css('display', 'block')
                if (projectType == 1) {
                    $(".btn-group .codebBtn").eq(2).remove()
    
                } else {
                    $(".btn-group").remove();
                }
                // location.href = "/editor/main.do?pid=" + jqXHR
            } else {
                console.log("요청 실패");
            }
            break;

        case "saveCodesToServer_existProject":
            if(event.data.success) {
                isFirstProject = 0;
            } else {
                console.log("요청 실패")
            }
            break;

        // 요청 함수가 없는 단독적인 요청
        case "saveProjectList":
            if(event.data.success) {
                projectLists = event.data.response.projectList;
                reloadTableData()
            } else {
                console.log("요청 실패")
            }
            break;

        // 요청 함수가 없는 단독적인 요청
        case "getIsFirstProject":
            console.log("===>isFirstProject: " + event.data.isFirstProject);
            isFirstProject = event.data.isFirstProject;
            break;

        // TODO: 이하 로직 작성
        case "sendDataToServer":
            break;
    
        default:
            break;
    }
}

window.addEventListener("message", springDataListener, false);