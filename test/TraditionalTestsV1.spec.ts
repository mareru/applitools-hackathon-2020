import ProductListingPage from "src/pages/ProductListingPage";
import HackathonReporter from "src/utils/HackathonReporter";

declare let assert;

describe('Task 1 - Cross Device Elements Test', () => {
    beforeEach(() => new ProductListingPage().open());
    const productListingPage = new ProductListingPage();

    it('Search field should be displayed', function() {
        const reporter = new HackathonReporter();
        if(reporter.isLaptop || reporter.isTablet) {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.searchField.selector, productListingPage.searchField.isDisplayed()));
        }
    });

    it('Search icon should be displayed', function() {
        const reporter = new HackathonReporter();
        if(reporter.isLaptop || reporter.isTablet) {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.searchIcon.selector, productListingPage.searchIcon.isDisplayed()));
        }
    });
});