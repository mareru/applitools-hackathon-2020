const wdioConfig = require('../../../wdio.conf.js');
// const {ConsoleLogHandler} = require('@applitools/eyes-sdk-core');
const {
    Eyes,
    VisualGridRunner,
    Configuration,
    BatchInfo,
    BrowserType,
    DeviceName,
    ScreenOrientation
} = require('@applitools/eyes-webdriverio');

wdioConfig.config.capabilities = [
    {
        browserName: 'chrome',
    },
];
wdioConfig.config.path = '/';

wdioConfig.config.services = ['chromedriver'];

wdioConfig.config.seleniumArgs = {};

wdioConfig.config.beforeSession = [
function beforeSession (config, capabilities, specs) {
    config.enableEyesLogs = true;

    const runner = new VisualGridRunner(10);
    global.eyes = new Eyes(runner);
   // eyes.setLogHandler(new ConsoleLogHandler(false));

    global.configuration = new Configuration();

    configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
    configuration.setAppName('Applitools Hackathon 2020');
    configuration.setBatch(new BatchInfo('UFG Hackathon'));

    configuration.addBrowser(1200, 700, BrowserType.CHROME);
    configuration.addBrowser(1200, 700, BrowserType.FIREFOX);
    configuration.addBrowser(1200, 700, BrowserType.EDGE_CHROMIUM);
    configuration.addBrowser(768, 700, BrowserType.CHROME);
    configuration.addBrowser(768, 700, BrowserType.FIREFOX);
    configuration.addBrowser(768, 700, BrowserType.EDGE_CHROMIUM);
    configuration.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);

    eyes.setConfiguration(configuration);
}
];
wdioConfig.config.before = [
    function before (capabilities, specs) {
        require('ts-node').register({files: true});
    }
];

wdioConfig.config.beforeTest = [
    function beforeTest (test) {
        configuration.setTestName(test.fullTitle);
    }
];

exports.config = wdioConfig.config;