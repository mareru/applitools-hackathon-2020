import * as fs from 'fs';

declare let isLaptop;
declare let isTablet;
declare let  isMobile;

export default class HackathonReporter {
    browser;
    viewport;
    device;

    constructor() {
        this.browser = browser.capabilities.browserName;
        this.viewport = browser.getViewportSize();
        this.device = this.calculateDeviceName();
    }

    calculateDeviceName() {
        let deviceName: string = 'Unknown';

        if(isLaptop) {
            deviceName = 'Laptop';
        }
        if(isTablet) {
            deviceName = 'Tablet';
        }
        if(isMobile) {
            deviceName = 'Mobile';
        }
        return deviceName;
    }

    writeRecord(task, testName, domId, comparisonResult, assertTrue) {
        let status: string;
        if (assertTrue) {
            status = comparisonResult ? "Pass" : "Fail";
        } else {
            status = comparisonResult ? "Fail" : "Pass";
        }
        fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${this.browser}, Viewport: ${this.viewport.width} x ${this.viewport.height}, Device: ${this.device}, Status: ${status}\n`);
        return comparisonResult;
    }

}