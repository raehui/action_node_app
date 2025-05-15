/*
    app.js 파일
    - 간단한 node.js 기반의 웹서버 application
    - dependency 설치 : npm install
    - 실행방법 : node app.js 
*/
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8888, ()=>{
  console.log("WebServer is running at 8888 port!");
});