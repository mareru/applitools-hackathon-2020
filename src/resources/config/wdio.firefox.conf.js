const wdioConfig = require('../../../wdio.conf.js');

wdioConfig.config.capabilities = [
    {
        browserName: 'firefox',
        browserVersion: '77.0.1',
    },
];

exports.config = wdioConfig.config;