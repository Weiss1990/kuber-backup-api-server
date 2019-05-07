const https = require("https");
const process = require('process');
const express = require('express');
const fs = require('fs');

const app = express();

const options  = {
  host: '116.203.159.56',
  port: '6443',
  path: '/apis/velero.io/v1/namespaces/velero/',
  method: 'GET',
};

fs.readFile("token.txt", function(err, buf) {
    const TOKEN = buf.toString();
    options.headers = {
        'Authorization': `Bearer ${TOKEN}`
    };
});

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.listen(3000, function() {
   console.log('server listen on 3000');
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/', function(req, res) {
  console.log(options);
  res.send('kuber api is running');
});

app.get('/backups', function(req, res) {

  console.log(options);

  const requestOptions = {...options};
  requestOptions.path += 'backups';

  https.request(requestOptions, function(response) {
    response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
    console.log(e);
  }).end();
});

app.get('/schedules', function(req, res) {

  const requestOptions = {...options};
  requestOptions.path += 'schedules';

  https.request(requestOptions, function(response) {
    const result = response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
    console.log(e);
  }).end();
});

app.get('/restores', function(req, res) {

  const requestOptions = {...options};
  requestOptions.path += 'restores';

  https.request(requestOptions, function(response) {
    const result = response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
    console.log(e);
  }).end();
});