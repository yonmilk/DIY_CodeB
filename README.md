# CodeB Tool (구 DIY)

### DIY와 CodeB 병합

## Installation
1. NPM 모듈 설치
```
npm install
```

2. 하단의 커맨드로 서버 실행
```
# 하단 환경은 세션 유/무에 따른 접근 제어일 뿐, 그 외에 특별한 기능은 없음.

# 개발 환경일 시
npm run dev
# 배포 환경일 시
npm run prod
```

## Block manual
[Code 블록 생성 방법](manual/BLOCK.md)

## ChangeLog
### 2021.09.27.
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
