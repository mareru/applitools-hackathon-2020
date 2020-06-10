import * as fs from 'fs';

export default class HackathonReporter {
    browser;
    viewport;
    device;

    constructor() {
        this.browser = browser.capabilities.browserName;
        this.viewport = browser.getViewportSize();
        this.device = this.calculateDeviceName(this.viewport);
    }

    calculateDeviceName(viewport) {
        let deviceName: string;

        switch (viewport.width) {
            case 1200:
                deviceName = 'Laptop';
                break;
            case 768:
                deviceName = 'Tablet';
                break;
            default:
                deviceName = 'Unknown';
        }
        return deviceName;
    }

    writeRecord(task, testName, domId, comparisonResult) {
        fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${this.browser}, Viewport: ${this.viewport.width} x ${this.viewport.height}, Device: ${this.device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
        return comparisonResult;
    }

}