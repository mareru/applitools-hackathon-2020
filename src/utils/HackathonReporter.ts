import * as fs from 'fs';

export default class HackathonReporter {
    browser;
    viewport;
    device;
    isLaptop: boolean;
    isTablet: boolean;
    isMobile: boolean;

    constructor() {
        this.browser = browser.capabilities.browserName;
        this.isLaptop = process.env.LAPTOP === 'true';
        this.isTablet = process.env.TABLET === 'true';
        this.isMobile = process.env.MOBILE === 'true';
        this.setViewportSize();
        this.viewport = browser.getViewportSize();
        this.device = this.calculateDeviceName();
    }

    setViewportSize() {
        if (this.isLaptop) {
            browser.setViewportSize(1200, 530);
        }
        if (this.isTablet) {
            browser.setViewportSize(768, 530);
        }
        if(this.isMobile) {
            browser.setViewportSize(500, 530);
        }
    }

    calculateDeviceName() {
        let deviceName: string = 'Unknown';

        if(this.isLaptop) {
            deviceName = 'Laptop';
        }
        if(this.isTablet) {
            deviceName = 'Tablet';
        }
        if(this.isMobile) {
            deviceName = 'Mobile';
        }
        return deviceName;
    }

    writeRecord(task, testName, domId, comparisonResult) {
        fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${this.browser}, Viewport: ${this.viewport.width} x ${this.viewport.height}, Device: ${this.device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
        return comparisonResult;
    }

}