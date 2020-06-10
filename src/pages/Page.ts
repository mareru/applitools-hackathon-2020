export default class Page {
    open() {
        browser.url('/gridHackathon' + process.env.APP_VERSION + '.html');
        $('#page').waitForDisplayed();
    }

}