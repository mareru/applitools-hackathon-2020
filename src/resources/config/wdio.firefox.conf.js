const wdioConfig = require('../../../wdio.conf.js');

wdioConfig.config.capabilities = [
    {
        maxInstances: 3,
        browserName: 'firefox',
        browserVersion: '77.0.1',
        'moz:firefoxOptions': {
            args: ['--headless', '--no-sandbox']
        },
    },
];

exports.config = wdioConfig.config;