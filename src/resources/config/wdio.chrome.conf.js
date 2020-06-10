const wdioConfig = require('../../../wdio.conf.js');

wdioConfig.config.capabilities = [
      {
      browserName: 'chrome',
      // 'goog:chromeOptions': {
      //   args: ['--window-size=1213,630', '--no-sandbox']
      // }
    },
];

exports.config = wdioConfig.config;