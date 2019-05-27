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

  /*https.request(requestOptions, function(response) {
    response.pipe(res);
  }).on('error', function(e) {
    res.sendStatus(500);
    console.log(e);
  }).end();*/
  res.json({
      items: [ {
          metadata: {
            name: 'fsdsdfsdfsd',
            namespace: 'velero',
            labels: {'aa1': 123, 'aa2': 444,'aa3': 555}
          },
          status: {
            phase: 'Completed',
            completionTimestamp: '2019-6-20',
              expiration: '2019-6-21',
              version: '1.0',
              startTimestamp: '2019-4-19',
              validationErrors: '',
              volumeSnapshotsAttempted: '',
              volumeSnapshotsCompleted: ''
          },
          spec: {
            includedNamespaces: ['velero', 'velero1'],
              excludedNamespaces: '',
              includedResourses: '*',
              excludedResourses: '<none>',
              includedClusterResourses: '',
              labelSelector: {
                 matchLabels: {
                   app: 'app'
                 }
              },
              storageLocation: 's3',
              volumeSnapshotLocations: 'abc',
              ttl: '123',
              hooks: {
                 resources: '12345'
              }
          }
      }, {
          metadata: {
              name: 'sdfsdfsdfsdfsd',
              namespace: 'velero',
              labels: {'aa1': 123, 'aa2': 444,'aa3': 555}
          },
          status: {
              phase: 'Failed',
              completionTimestamp: '2019-6-20',
              expiration: '2019-6-21',
              version: '1.0',
              startTimestamp: '2019-4-19',
              validationErrors: '',
              volumeSnapshotsAttempted: '',
              volumeSnapshotsCompleted: ''
          },
          spec: {
              includedNamespaces: ['velero', 'velero1'],
              excludedNamespaces: '',
              includedResourses: '*',
              excludedResourses: '<none>',
              includedClusterResourses: '',
              labelSelector: {
                  matchLabels: {
                      app: 'app'
                  }
              },
              storageLocation: 's3',
              volumeSnapshotLocations: 'abc',
              ttl: '123',
              hooks: {
                  resources: '12345'
              }
          }
      }, {
          metadata: {
              name: 'dtdreterter',
              namespace: 'velero',
              labels: {'aa1': 123, 'aa2': 444,'aa3': 555}
          },
          status: {
              phase: 'Completed',
              completionTimestamp: '2019-6-20',
              expiration: '2019-6-21',
              version: '1.0',
              startTimestamp: '2019-4-19',
              validationErrors: '',
              volumeSnapshotsAttempted: '',
              volumeSnapshotsCompleted: ''
          },
          spec: {
              includedNamespaces: ['velero', 'velero1'],
              excludedNamespaces: '',
              includedResourses: '*',
              excludedResourses: '<none>',
              includedClusterResourses: '',
              labelSelector: {
                  matchLabels: {
                      app: 'app'
                  }
              },
              storageLocation: 's3',
              volumeSnapshotLocations: 'abc',
              ttl: '123',
              hooks: {
                  resources: '12345'
              }
          }
      },
          {
              metadata: {
                  name: '111',
                  namespace: 'velero',
                  labels: {'aa1': 123, 'aa2': 444,'aa3': 555}
              },
              status: {
                  phase: 'InProgress',
                  completionTimestamp: '2019-6-20',
                  expiration: '2019-6-21',
                  version: '1.0',
                  startTimestamp: '2019-4-19',
                  validationErrors: '',
                  volumeSnapshotsAttempted: '',
                  volumeSnapshotsCompleted: ''
              },
              spec: {
                  includedNamespaces: ['velero', 'velero1'],
                  excludedNamespaces: '',
                  includedResourses: '*',
                  excludedResourses: '<none>',
                  includedClusterResourses: '',
                  labelSelector: {
                      matchLabels: {
                          app: 'app'
                      }
                  },
                  storageLocation: 's3',
                  volumeSnapshotLocations: 'abc',
                  ttl: '123',
                  hooks: {
                      resources: '12345'
                  }
              }
          }, {
              metadata: {
                  name: 'yiyuiyuiyu',
                  namespace: 'velero',
                  labels: {'aa1': 123, 'aa2': 444,'aa3': 555}
              },
              status: {
                  phase: 'Completed',
                  completionTimestamp: '2019-6-20',
                  expiration: '2019-6-21',
                  version: '1.0',
                  startTimestamp: '2019-4-19',
                  validationErrors: '',
                  volumeSnapshotsAttempted: '',
                  volumeSnapshotsCompleted: ''
              },
              spec: {
                  includedNamespaces: ['velero', 'velero1'],
                  excludedNamespaces: '',
                  includedResourses: '*',
                  excludedResourses: '<none>',
                  includedClusterResourses: '',
                  labelSelector: {
                      matchLabels: {
                          app: 'app'
                      }
                  },
                  storageLocation: 's3',
                  volumeSnapshotLocations: 'abc',
                  ttl: '123',
                  hooks: {
                      resources: '12345'
                  }
              }
          }, {
              metadata: {
                  name: 'rtytrytr',
                  namespace: 'velero',
                  labels: {'aa1': 123, 'aa2': 444,'aa3': 555}
              },
              status: {
                  phase: 'Pending',
                  completionTimestamp: '2019-6-20',
                  expiration: '2019-6-21',
                  version: '1.0',
                  startTimestamp: '2019-4-19',
                  validationErrors: '',
                  volumeSnapshotsAttempted: '',
                  volumeSnapshotsCompleted: ''
              },
              spec: {
                  includedNamespaces: ['velero', 'velero1'],
                  excludedNamespaces: '',
                  includedResourses: '*',
                  excludedResourses: '<none>',
                  includedClusterResourses: '',
                  labelSelector: {
                      matchLabels: {
                          app: 'app'
                      }
                  },
                  storageLocation: 's3',
                  volumeSnapshotLocations: 'abc',
                  ttl: '123',
                  hooks: {
                      resources: '12345'
                  }
              }
          }, {
              metadata: {
                  name: 'uytuyuytuyt',
                  namespace: 'velero',
                  labels: {'aa1': 123, 'aa2': 444,'aa3': 555}
              },
              status: {
                  phase: 'Completed',
                  completionTimestamp: '2019-6-20',
                  expiration: '2019-6-21',
                  version: '1.0',
                  startTimestamp: '2019-4-19',
                  validationErrors: '',
                  volumeSnapshotsAttempted: '',
                  volumeSnapshotsCompleted: ''
              },
              spec: {
                  includedNamespaces: ['velero', 'velero1'],
                  excludedNamespaces: '',
                  includedResourses: '*',
                  excludedResourses: '<none>',
                  includedClusterResourses: '',
                  labelSelector: {
                      matchLabels: {
                          app: 'app'
                      }
                  },
                  storageLocation: 's3',
                  volumeSnapshotLocations: 'abc',
                  ttl: '123',
                  hooks: {
                      resources: '12345'
                  }
              }
          }, {
              metadata: {
                  name: 'csaccsw',
                  namespace: 'velero',
                  labels: {'aa1': 123, 'aa2': 444,'aa3': 555}
              },
              status: {
                  phase: 'Completed',
                  completionTimestamp: '2019-6-20',
                  expiration: '2019-6-21',
                  version: '1.0',
                  startTimestamp: '2019-4-19',
                  validationErrors: '',
                  volumeSnapshotsAttempted: '',
                  volumeSnapshotsCompleted: ''
              },
              spec: {
                  includedNamespaces: ['velero', 'velero1'],
                  excludedNamespaces: '',
                  includedResourses: '*',
                  excludedResourses: '<none>',
                  includedClusterResourses: '',
                  labelSelector: {
                      matchLabels: {
                          app: 'app'
                      }
                  },
                  storageLocation: 's3',
                  volumeSnapshotLocations: 'abc',
                  ttl: '123',
                  hooks: {
                      resources: '12345'
                  }
              }
          }
      ]
  });
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
