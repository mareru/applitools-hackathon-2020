import * as fs from 'fs';

declare let isLaptop;
declare let isTablet;
declare let isMobile;

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

        if (isLaptop) {
            deviceName = 'Laptop';
        }
        if (isTablet) {
            deviceName = 'Tablet';
        }
        if (isMobile) {
            deviceName = 'Mobile';
        }
        return deviceName;
    }

    calculateStatus(comparisonResult: boolean, assert: boolean): string {
        let status: string;
        if (assert) {
            status = comparisonResult ? "Pass" : "Fail";
        } else {
            status = comparisonResult ? "Fail" : "Pass";
        }
        return status;
    }

    calculateFileName(): string {
        if (process.env.APP_VERSION === 'V1') {
            return 'Traditional-V1-TestResults.txt';
        } else {
            return 'Traditional-V2-TestResults.txt'
        }
    }

    writeRecord(task: number, testName: string, domId: string, comparisonResult: boolean, assert: boolean) {
        fs.appendFileSync(this.calculateFileName(), `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${this.browser}, Viewport: ${this.viewport.width} x ${this.viewport.height}, Device: ${this.device}, Status: ${this.calculateStatus(comparisonResult, assert)}\n`);
        return comparisonResult;
    }

}