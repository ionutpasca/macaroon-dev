'use strict';

const config = {
    api: {
        url: '127.0.0.1:8080',
        path: '<path-to-macaroon-api>'
    },
    store: {
        url: '127.0.0.1:8081',
        path: '<path-to-macaroon-store>'
    },
    proxy: {
        port: 3000,
        hostname: 'localhost'
    }
};

module.exports = config;