# CodeB Tool (구 DIY)

## DIY와 CodeB 병합
코드비 Node.js 버전입니다. Spring와 연동이 필요한 환경일 때와 Node.js로 독립적으로 서버를 동작하는 환경일 때를 제어할 수 있도록 변형한 버전입니다.

Node.js 환경으로 동작할 경우, Spring을 동작하는데에 불필요한 로직(불필요 태그, 로직 등)은 로딩되지 않도록 하였으며(단, 함수 제외), Node.js에 최적화된 화면 구성을 보여줍니다.

Spring 환경으로 동작할 경우, 데이터 송수신 및 연동에 관한 로직이 로딩되며, 서버와의 상호작용이 필요한 기능(서버에 저장, 나가기 버튼 등)이 표현된 화면 구성을 보여줍니다.

※ Spring 환경으로 동작할 경우, 코드비 도메인으로 접근할 시 401 접근 오류를 출력합니다. (서버로부터 세션 데이터를 전달 받았는지 체크하기 때문)

## Installation
1. NPM 모듈 설치
```
npm install
```

2. 하단의 커맨드로 서버 실행
```
# Node.js 단독 실행 환경일 시
npm run for-node

# Spring 연동 실행 환경일 시
npm run for-spring
```

## 데이터 송수신 Usage
### Spring 내 View에 내장된 코드비 IFrame(Node.js)와의 데이터 송수신을 위한 규격을 새로 정의하였습니다.

기존에는 Spring 자체에 내장된 코드비가 Ajax를 통해 직접적으로 서버와 통신하였으나, 현재는 독립 서버인 Node.js의 코드비 Endpoint가 Spring View의 IFrame으로 내장되었습니다.

이에 따라 기존 직접적인 데이터 송수신 방법을 간접적으로 변경하였으며, 이에 대한 내용은 하단과 같습니다.

- 직접적으로 서버와 통신하기 위해 Ajax를 사용하지 않습니다.

- 배포 서버에서는 다른 도메인에서 IFrame으로 메인 서버(Spring)과 통신을 해야하므로 CORS 오류를 방지하고자 postMessage를 통해 각 허용 URL을 지정하고, 데이터를 주고 받습니다.

- Before use:
    
        Spring 환경일 경우 실제 사용 전 서버의 editorView.jsp 내 childUrl 변수와 코드비 내 BlockExport_Editor.ejs의 parentUrl이 제대로 작성되어있는지 확인할 것.

        해당 변수는 두 도메인 간 CORS Origin을 허용하기 위해 사용하는 값임.

- When to use: 

        코드비 내 변경 데이터(블록 저장, 로그 전송 등)를 서버 측으로 전송해야하거나, 서버로부터 특정 상태를 전달받아야 할 때.

- Where to use: 

        Spring - editorView.jsp
        Node.js - serverDataHandler.js, 그리고 데이터를 전송하기 위한 함수가 정의된 기타 JS 혹은 HTML

- How to use:

    - Node.js 내 BlockEditorExport.ejs에서 Spring으로 데이터를 전송하는 경우

            IFrame을 내포하고 있는 부모 View에 데이터를 전송한다.
            ex.) parent.postMessage(데이터, 부모 URL)

            단, postMessage()의 "데이터" 인자는 이하의 규격을 따른다.

            from: 데이터 전송을 요청하는 함수명 또는 태그 ID 등 (ex. sendCodesToServer)
                  단, 함수명의 괄호는 포함하지 않는다.
                  예외적으로 한 함수 안에 Ajax가 두 개 이상 포함된 경우, 함수명_작업명으로 작성한다.
                        ex) sendCodesToServer_newPrj, sendCodesToServer_existPrj
                  ★어떤 함수 스코프에도 속하지 않은 단독적인 요청일 경우, 작업명으로 작성한다. 
                        ex) getParentUrl
            url: 기존 Ajax에서 Spring에 요청하기 위한 URL 정의
            method: 요청 Method, 없을 경우 Default로 GET을 사용한다.
            data: JSON으로 요청하는 것이 권장된다.

            USAGE: 
                // 허용 부모 Origin
                let parentUrl: "http://test.com";

                // 상위 부모(Spring View)로 데이터를 전송한다.
                parent.postMessage({
                    "from": "saveCodesToServer",
                    "url": "/post/test.do",
                    "method": "POST",
                    "data": {
                        "title": "Example Title",
                        "description": "Example Contents",
                        "block_xml": (projectType == 1 ? block_xml : JSON.stringify(pyCode)),
                        "pType": projectType,
                        "usedLibs": addedLibs
                    }
                }, parentUrl);

            RETURN: 
                실행 결과로 스프링측으로부터 이하의 데이터를 serverDataHanlder가 전달받는다.

                <성공하였을 때>
                    to: serverDataHanlder가 결과를 응답 받은 후 로직 분기에서 적절하게 처리하기 위해 전달받는 Key값.
                    success: 성공 여부 (True / False)
                    response: Spring 서버에서 요청 처리 후 반환하는 데이터

                <실패하였을 때>
                    to: serverDataHanlder가 결과를 응답 받은 후 로직 분기에서 적절하게 처리하기 위해 전달받는 Key값.
                    success: 성공 여부 (True / False)
                    mse: 에러 메세지
    - Spring에서 BlockEditorExport.ejs로 데이터를 전송하는 경우
        
            // 허용 자식 Origin
            let childUrl: "http://childtest.com";

            // 자식 View에 데이터를 전송한다.
            let childWindow = document.getElementById("IFrame 아이디").contentWindow;

            childWindow.postMessage(데이터, 자식 URL)



## Block manual
[Code 블록 생성 방법](manual/BLOCK.md)

## ChangeLog
### 2021.09.31. - 서버 관련
- 서버 분리 로직 프로토타입을 완성하였습니다. (보여지는 화면에서 사용에 문제가 없도록 구성함.)

- 에디터 내 "코드" 환경에서 로컬 파일 저장 시 "블록코드 On/Off"에 따라 저장되는 파이썬 파일이 달라지도록 처리하였습니다.

### 2021.09.30. - 서버 관련
- 기존 JSTL 로직을 EJS 형식으로 변경하였습니다.

- 기존 Spring 코드비 고유의 내부 로직(파이썬 정답 체크 RestAPI 요청, 블록 및 에러 로그 기록 및 전송, 서버에 파일 저장 등)을 현재 Repo.의 코드비 `npm run for-spring` 실행 환경에 한하여 동작할 수 있도록 하였습니다.

- Spring과 Node.js의 데이터 송수신을 위하여 허용된 도메인에 한하여 CORS를 수행합니다.

- Spring 내 View에 내장된 코드비 IFrame(Node.js)와의 데이터를 주고 받기 위한 송수신 규격을 작성하였습니다. **상단 데이터 송수신 Usage 참고**

- 자바스크립트 내 함수명을 직관적으로 변경하였습니다. (ex. saveCodesToServer, clearConsole 등)

### 2021.09.28. - 서버 관련
- 기존 HTML Views를 EJS로 변경하였습니다. (Node.js에서 전달받은 데이터에 따라 View를 동적으로 구성하기 위함.)

### 2021.09.27. - 서버 관련
- [BlockExport_Editor] 루트 디렉토리에 위치하던 HTML을 views 디렉토리로 이동하였습니다.

- [BlockExport_Editor] 브라우저 윈도우 종료 시 세션 파일을 서버 상에서 제거하도록 처리하였습니다. (TODO: 뒤로가기 및 새로고침 시에도 동작할 수 있도록 정교화 필요.)

- [public_bk] 기존 불필요한 public_bk 폴더를 제거하였습니다.

- [.gitignore] 세션 파일을 담는 sessions 디렉토리가 Git에 반영되지 않도록 하였습니다. 

- [croll.js] 기존 Endpoint를 /test2 -> /utils/crawling으로 변경하였습니다.

- [서버] server.js의 전체적인 로직을 간소화 및 분리하였습니다. (서버 생성 명령은 app.listen()으로 변경되었습니다.)

- [서버] 기존 서버 실행 시, 개발/배포 서버로 동작하도록 로직을 변경하였습니다. (추후 미림 스프링 LMS와의 연동 가능성을 위해)

- [서버] 개발/배포 환경으로 분리시킴에 따라, 배포 환경에서 서버 실행 후 페이지 접근 시 401 접근 에러 페이지가 출력됩니다. (개발 서버는 출력되지 않음.)

- [서버] 불필요한 Node Packages를 제거하였습니다. (Tensorflow-Vis, Cheerio, Cheerio-httpcli, ejs, socket-io 1.0.0)

- [서버] 세션 관리 및 개발 환경 설정을 위한 일부 Node Packages를 설치하였습니다. (express-session, session-file-store, cross-env)

- [서버] server.js 내의 기존 엔드포인트가 라우팅 될 수 있도록 하였습니다. (라우팅 모듈은 routes 디렉토리 내에 위치)

- [서버] 사용자 접근 시, 세션 파일(만료 3시간)을 서버 내에 생성하며, 해당 세션 파일은 사용자의 아이디와 스프링 세션 정보를 지닙니다.

- [서버] 세션 만료 시, 서버에서 10초 단위로 자동으로 무효화된 세션 파일을 제거합니다.

- [서버] server.js 내에 위치하였던 기존 크롤링 로직은 utilsRouter.js로 이동되었습니다.

## TODO
- 함수명 및 변수명 등 다듬기 <br>
(ex. Snake Case로 작성된 함수명 및 변수명 into Camel Case,<br>
의미를 알 수 없는 함수/변수명 등 다듬기)
- DIY와 완전히 동일한 파일 트리를 갖도록 수정 (ex. Custom_blocks Directiory)
- BlockExport_Editor.html 내의 각 태그들의 ID명 다듬기
- CSS 정리

> **처리해야할 목록**
> <br>
> **※ 공통: 동작 방식(for-node, for-spring)에 따라서 보여지는 로직이 다르도록 할 것.** 
> 1. 전달받은 프로젝트 ID 저장하기 - 기존 55행 ==> [완료]
> 2. ProjectType에 따른 로컬 스코프 projectType 지정 - 기존 78행 ==> [완료]
> 3. 프로젝트 저장 기능 자바스크립트로 재구현 필요성 고려 - 기존 138행, 265행 ==> [완료]
> 4. 프로젝트 초기화 버튼 자바스크립트로 재구현 필요성 고려 - 기존 243행 ==> [완료]
> 5. 도전과제 시 문제 보기 프로토 재구현 - 기존 333행
> 6. 나가기 버튼 구현 및 onClick 재작성 - 기존 360행, 기존 1128행 ==> [완료]
> 7. 도전과제 시 문제 삽입에 대한 로직 재구현 - 기존 370행
> 8. isChallenge에 따른 Workspace 영역 정의 재구현 - 기존 391행
> 9. 프로젝트 초기 XML 삽입을 위한 XML 데이터를 담는 변수 선언 및 초기화 - 기존 469행  ==> [완료]
> 10. InitPage() 내 스프링 연동 로직들 재작성 - 기존 592행
> 11. 코드 타입 체크 로직 재작성 - 기존 990행 ==> [완료]
> 12. 프로젝트 저장 로직 재작성 - 기존 1311행, 기존 1350행 ==> [완료]
> 13. 블록 및 에러 로그 기록 및 서버 전송 로직 재작성 - 기존 1592행
> 14. 도전과제 정답체크 로직 재작성 - 기존 1657행
> 15. 도전과제 RestAPI 데이터 전송 로직 재작성 - 기존 1704행
> 16. runCode() 내 스프링 관련 로직 전체 재작성 - 기존 1823행
> 17. <h2>아 ㄹㅇ 이거 언제 다 하냐 진자;;</h2>
> 
> 
> 
> 
