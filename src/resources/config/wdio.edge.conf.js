const wdioConfig = require('../../../wdio.conf.js');

wdioConfig.config.capabilities = [
    {
        browserName: 'MicrosoftEdge',
    },
];

exports.config = wdioConfig.config;