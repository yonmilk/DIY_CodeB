'use strict';

/**
 * modifer: 정지현
 * date: 2021-09-24
 * des: 서버 파일 재정의 
 */

const express = require('express');
const app = express();
const port = 18090;
const path = require('path');

// POST request 파싱을 위한 메소드를 정의한다.
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// 정적 파일 라우팅을 설정한다.
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public')));

// 세션 처리 로직을 작성한다.
const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}))

// 서버를 실행한다.
const server = app.listen(port, () => {
  console.log(`Server is running at ${port}`);
})

/**
 * 브라우저와 서버 간 데이터 통신을 실시간으로
 * 처리할 수 있는 socket.io를 설정한다.
 */
const io = require('socket.io')(server);

// connection이 수립되면 event handler function의 인자로 socket인 들어온다
io.on('connection', function (socket) { 
  let get_html; 

  socket.on('Scripts_Get_URL', function (data) {
    console.log(data.S_option); 
    get_html = scripts(data.S_option); 
  });   

  socket.emit('Scripts_Get_URL', get_html);  
});

// Routing
const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);

const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

const utilsRouter = require('./routes/utilsRouter');
app.use('/utils', utilsRouter);