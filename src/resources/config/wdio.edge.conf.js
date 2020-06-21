const wdioConfig = require('../../../wdio.conf.js');

wdioConfig.config.capabilities = [
    {
        maxInstances: 3,
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
            args: ['--headless', '--no-sandbox']
        }
    },
];

exports.config = wdioConfig.config;