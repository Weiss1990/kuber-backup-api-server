const https = require("https");
const process = require('process');
const express = require('express');

const app = express();

const TOKEN ='eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJ2ZWxlcm8iLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlY3JldC5uYW1lIjoidmVsZXJvLXRva2VuLTJ0OHJuIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6InZlbGVybyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImFjNjc4YWViLTVmNmYtMTFlOS04MWU4LTk2MDAwMDI0MDk1YyIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDp2ZWxlcm86dmVsZXJvIn0.EmyJb9wM6_gGGqy5oUDGFZytOTVWdxD3sQXaG6xUFIHh5qtcozYr4EYN0QJc3ja36H57RiaR6NoOfX6Ij9dYeMM_z20GvHOP99s1WezIoHd8MnepjFJNgpm7kHPeB93nJM03yk8Rp7i0_6L-HnuXZXHScLOt7C1wkQ5CUy0NYcYrHz0J6dMTIKAasLtb_Js0c95126OCeVvCuHMOE3ZtAsMrXrTw3fjei8S0h5QPhc5iUpAxddFF_QtIaGbtAjYQB2THLmNrC3RmzE6QHEBu60iEdunkK-r0_JS_nX-Y8YjaI2GpzQpquUF4jIj62NohnIXo7jwdLeySLWRDUA-gyg';

const options  = {
  host: '116.203.159.56',
  port: '6443',
  path: '/apis/velero.io/v1/namespaces/velero/',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${TOKEN}`
  }
};

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
  res.send('kuber api is running');
});

app.get('/backups', function(req, res) {

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