'use strict';

const cp = require('child_process');
const httpProxy = require('http-proxy');
const path = require('path');
const config = require('./development');

const env = 'development';
const options = {
    router: {
        'localhost/api': config.api.url,
        'localhost/store': config.store.url
    }
};

var router = new httpProxy.RoutingProxy(options);

const api = cp.fork(`${config.api.path}\\server.js`, []);
const store = cp.fork(`${config.store.path}\\server.js`, []);

const proxy = httpProxy.createServer((req, res) => {
    router.proxyRequest(req, res);
});

proxy.listen(config.proxy.port, () => {
    console.log(`Routing proxy listening on ${proxy.address().port}`);
});