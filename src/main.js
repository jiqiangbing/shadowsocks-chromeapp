'use strict';
var ss = require('shadowsocks'),
  storage = chrome.storage.local;

storage.SERVER = '128.199.243.158';
storage.REMOTE_PORT = 10000;
storage.PORT = 1082;
storage.KEY = '.nmd!';
storage.METHOD = 'table';
storage.timeout = 600;
storage.localAddress = '127.0.0.1';
var s = ss.createServer(storage.SERVER, storage.REMOTE_PORT, storage.PORT,
  storage.KEY, storage.METHOD, storage.timeout, storage.localAddress);
console.info('start shadowsocks');
s.on('error', function(e) {
  console.info(e);
});