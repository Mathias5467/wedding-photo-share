const Service = require('node-windows').Service;
const path = require('path');

const svc = new Service({
  name: 'Wedding Photo Share',
  description: 'Self-hosted wedding photo sharing server.',
  script: path.join(__dirname, 'server.js'),
  env: [{
    name: "PORT",
    value: 3000
  }]
});
svc.on('install', function() {
  console.log('Service installed successfully!');
  svc.start();
});

svc.install();