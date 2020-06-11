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

    it('Wishlist icon displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.wishlistIcon.selector, productListingPage.wishlistIcon.isDisplayed()));
        }
        if(isMobile || isTablet) {
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.wishlistIcon.selector, productListingPage.wishlistIcon.isDisplayed()));
        }
    });

    it('Filters displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.filters.selector, productListingPage.filters.isDisplayed()));
        }
        if(isMobile || isTablet) {
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.filters.selector, productListingPage.filters.isDisplayed()));
        }
    });

    it('Filters label displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isTablet) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.filtersLabel.selector, productListingPage.filtersLabel.isDisplayed()));
        }
        if(isMobile || isLaptop) {
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.filtersLabel.selector, productListingPage.filtersLabel.isDisplayed()));
        }
    });

    it('Grid view icon displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.gridViewIcon.selector, productListingPage.gridViewIcon.isDisplayed()));
        }
        if(isMobile || isTablet) {
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.gridViewIcon.selector, productListingPage.gridViewIcon.isDisplayed()));
        }
    });

    it('List view icon displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.listViewIcon.selector, productListingPage.listViewIcon.isDisplayed()));
        }
        if(isMobile || isTablet) {
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.listViewIcon.selector, productListingPage.listViewIcon.isDisplayed()));
        }
    });

    it('All product tiles have heart icons displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isMobile || isTablet) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.productHeartsList.selector, productListingPage.allProductsHaveHearts()));
        }
    });

    it('All product tiles have control shuffle icons displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isMobile || isTablet) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.controlShuffleList.selector, productListingPage.allProductsHaveControlShuffles()));
        }
    });

    it('All product tiles have cart icons displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isMobile || isTablet) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.shoppingCartsList.selector, productListingPage.allProductsHaveCarts()));
        }
    });

    it('All product tiles DO NOT have heart icons displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.productHeartsList.selector, productListingPage.noneOfProductsHaveHearts()));
        }
    });

    it('All product tiles DO NOT have control shuffle icons displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.controlShuffleList.selector, productListingPage.noneOfProductsHaveControlShuffles()));
        }
    });

    it('All product tiles DO NOT have cart icons displayed', function () {
        const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
        if(isLaptop) {
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.shoppingCartsList.selector, productListingPage.noneOfProductsHaveCarts()));
        }
    });
});