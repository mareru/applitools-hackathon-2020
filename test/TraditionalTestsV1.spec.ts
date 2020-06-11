import ProductListingPage from "src/pages/ProductListingPage";
import HackathonReporter from "src/utils/HackathonReporter";

declare let assert;
declare let isLaptop;
declare let isTablet;
declare let isMobile;

describe('Task 1 - Cross Device Elements Test', () => {
    let reporter;

    beforeEach(() => {
        new ProductListingPage().open();
        reporter = new HackathonReporter();
    });

    const productListingPage = new ProductListingPage();

    it('Search field displayed', function() {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop || isTablet) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.searchField.selector, productListingPage.searchField.isDisplayed()));
        }
        if(isMobile) {
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.searchField.selector, productListingPage.searchField.isDisplayed()));
        }
    });

    it('Search icon displayed', function() {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop || isTablet) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.searchIcon.selector, productListingPage.searchIcon.isDisplayed()));
        }
        if(isMobile) {
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.searchIcon.selector, productListingPage.searchIcon.isDisplayed()));
        }
    });

    it('Magnifying glass icon displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop || isTablet) {
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.magnifyingGlassIcon.selector, productListingPage.magnifyingGlassIcon.isDisplayed()));
        }
        if(isMobile) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.magnifyingGlassIcon.selector, productListingPage.magnifyingGlassIcon.isDisplayed()));
        }
    });

    it('Main menu displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.mainMenu.selector, productListingPage.mainMenu.isDisplayed()));
        }
        if(isMobile || isTablet) {
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.mainMenu.selector, productListingPage.mainMenu.isDisplayed()));
        }
    });
});