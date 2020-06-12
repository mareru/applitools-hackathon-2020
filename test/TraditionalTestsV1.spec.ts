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

    if (isMobile) {
        it('Search field NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.searchField.selector, productListingPage.searchField.isDisplayed(), false));
        });

        it('Search icon NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.searchIcon.selector, productListingPage.searchIcon.isDisplayed(), false));
        });

        it('Magnifying glass icon displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.magnifyingGlassIcon.selector, productListingPage.magnifyingGlassIcon.isDisplayed(), true));
        });

        it('Shopping cart quantity NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.shoppingCartQty.selector, productListingPage.shoppingCartQty.isDisplayed(), false));
        });
    }

    if (isLaptop) {
        it('Main menu displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.mainMenu.selector, productListingPage.mainMenu.isDisplayed(), true));
        });

        it('Wishlist icon displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.wishlistIcon.selector, productListingPage.wishlistIcon.isDisplayed(), true));
        });

        it('Filters displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.filters.selector, productListingPage.filters.isDisplayed(), true));
        });

        it('Grid view icon displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.gridViewIcon.selector, productListingPage.gridViewIcon.isDisplayed(), true));
        });

        it('List view icon displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.listViewIcon.selector, productListingPage.listViewIcon.isDisplayed(), true));
        });

        it('All product tiles DO NOT have heart, cart, control shuffle icons displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.productTileHeartCartControlShuffleIcons.selector, productListingPage.allProductTilesDoNotHaveIcons(), true));
        });
    }

    if (isTablet) {
        it('Filters label displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.filtersLabel.selector, productListingPage.filtersLabel.isDisplayed(), true));
        });
    }

    if (isMobile || isTablet) {
        it('Main menu NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.mainMenu.selector, productListingPage.mainMenu.isDisplayed(), false));
        });

        it('Wishlist icon NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.wishlistIcon.selector, productListingPage.wishlistIcon.isDisplayed(), false));
        });

        it('Filters NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.filters.selector, productListingPage.filters.isDisplayed(), false));
        });

        it('Grid view icon NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.gridViewIcon.selector, productListingPage.gridViewIcon.isDisplayed(), false));
        });

        it('List view icon NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.listViewIcon.selector, productListingPage.listViewIcon.isDisplayed(), false));
        });

        it('All product tiles have heart, cart, control shuffle icons displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.productTileHeartCartControlShuffleIcons.selector, productListingPage.allProductTilesHaveIcons(), true));
        });
    }

    if (isLaptop || isTablet) {
        it('Search field displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.searchField.selector, productListingPage.searchField.isDisplayed(), true));
        });

        it('Search icon displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.searchIcon.selector, productListingPage.searchIcon.isDisplayed(), true));
        });

        it('Magnifying glass icon NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.magnifyingGlassIcon.selector, productListingPage.magnifyingGlassIcon.isDisplayed(), false));
        });

        it('Shopping cart quantity displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isTrue(reporter.writeRecord(1, testName, productListingPage.shoppingCartQty.selector, productListingPage.shoppingCartQty.isDisplayed(), true));
        });
    }

    if (isMobile || isLaptop) {
        it('Filters label NOT displayed', function () {
            const testName = this.test !== undefined ? this.test.title : 'Undefined test name';
            assert.isFalse(reporter.writeRecord(1, testName, productListingPage.filtersLabel.selector, productListingPage.filtersLabel.isDisplayed(), false));
        });
    }
});