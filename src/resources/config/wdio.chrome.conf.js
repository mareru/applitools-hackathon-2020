const wdioConfig = require('../../../wdio.conf.js');

wdioConfig.config.capabilities = [
    {
        maxInstances: 3,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--no-sandbox']
        }
    },
];

exports.config = wdioConfig.config;