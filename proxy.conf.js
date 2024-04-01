const fs = require('fs');

let proxyConfig = {};
try {
    proxyConfig = JSON.parse(fs.readFileSync('proxy-config.json'));
} catch (err) {
    console.error('Error reading proxy configuration:', err);
}

proxyConfig['/api/*'] = {
    "target": "...",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": { "^/api": "" }
};

fs.writeFileSync('proxy-config.json', JSON.stringify(proxyConfig, null, 2));