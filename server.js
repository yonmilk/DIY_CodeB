'use strict';
// server.js가 node에서 사용하는 통상적인 app.js임

// express를 활용한 서버 만들기
const express = require('express'); // 익스프레스 모듈 require 및 app 설정 (해당 방식은 express 에서 사용하도록 한 규약? 같은 방식)
const fs = require('fs'); // 파일 시스템 

var app = express();

const options = {
  key: fs.readFileSync('./keys/private.pem'),
  cert: fs.readFileSync('./keys/public.pem')
};

const port = 18090

var server = require('http').createServer(options, app).listen(port, function(){
    console.log(`Server is running at ${port}`);
});


// 명성이형이 하던 크롤링
const cheerio = require("cheerio")
const client = require('cheerio-httpcli');  
const bodyParser = require('body-parser'); 
const url = require('url');   
const request = require('request'); 

// 크롤링 
const axios = require("axios")

var io = require('socket.io')(server);// http server를 socket.io server로 upgrade 
app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended: false})); // URL 인코딩 안함
app.use(bodyParser.json()); // json 타입으로 파싱하게 설정

// js & css  
app.use('/js', express.static(__dirname + '/public/js')); 
app.use(express.static(__dirname + '/public')); 

// Routing
//const indexRouter = require('./routes/indexRouter.js')
//app.use('/', indexRouter);

//index 
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/BlockExport_Editor.html");
}); 

app.get('/cnn', function (req, res) {
    res.sendFile(__dirname + "/cnnTest.html");
});

app.get("/test", function (req, res) { // postTest라는 주소로 POST요청이 들어오면 실행
    res.render(__dirname + "/test.ejs");
}); 

app.get('/datasets_load_lms', function (req, res) {  //csv 파일 읽기 
  res.sendFile(__dirname + "/datasets_load_lms.html"); 
});       

app.get('/show_chart', function (req, res) {  //차트 보기  
  res.sendFile(__dirname + "/show_chart.html");
});   
// POST Test 
app.post("/postTest", function (req, res) { // postTest라는 주소로 POST요청이 들어오면 실행

    console.log(req.body); // body에 있는 정보를 콘솔창에 출력.  
    res.json({ok: true}); // 클라이언트에 성공했다고 신호를 보냄.

});  

//socket io 부분 
// connection이 수립되면 event handler function의 인자로 socket인 들어온다
io.on('connection', function (socket) { 
    var get_html; 

    socket.on('Scripts_Get_URL', function (data) {
      console.log(data.S_option); 
      get_html = scripts(data.S_option); 
    });   

    socket.emit('Scripts_Get_URL', get_html);  
});

// express라우팅 : 엔드포인트(URI)의 정의, 그리고 URI가 클라잉너트 요청에 응답하는 방식
app.post("/test2", function (req, res) { 
  console.log("페이지 정보 가져오기");
  let url = req.body.url // 클라이언트로 받은 url 정보
  console.log(req.body.url); // url 한번 콘솔에 찍어봄
  let result = ""; //getHTML(); 
  async function getForum() {
    try {
      let response = await axios.get(
        url         // url을 가지고 axios.get을 통해 html dom을 가져옴
      );
      res.json({data: response.data}); // 클라이언트에 값을 보냄.
    } catch (error) {
      console.error(error);
    }
  }
  result = getForum();  
}); 
