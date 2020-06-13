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
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.searchField.selector, productListingPage.searchField.isDisplayed(), false));
        });

        it('Search icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.searchIcon.selector, productListingPage.searchIcon.isDisplayed(), false));
        });

        it('Magnifying glass icon displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.magnifyingGlassIcon.selector, productListingPage.magnifyingGlassIcon.isDisplayed(), true));
        });

        it('Shopping cart quantity NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.shoppingCartQty.selector, productListingPage.shoppingCartQty.isDisplayed(), false));
        });
    }

    if (isLaptop) {
        it('Main menu displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.mainMenu.selector, productListingPage.mainMenu.isDisplayed(), true));
        });

        it('Wishlist icon displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.wishlistIcon.selector, productListingPage.wishlistIcon.isDisplayed(), true));
        });

        it('Filters displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.filters.selector, productListingPage.filters.isDisplayed(), true));
        });

        it('Grid view icon displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.gridViewIcon.selector, productListingPage.gridViewIcon.isDisplayed(), true));
        });

        it('List view icon displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.listViewIcon.selector, productListingPage.listViewIcon.isDisplayed(), true));
        });

        it('All product tiles DO NOT have heart, cart, control shuffle icons displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.productTileHeartCartControlShuffleIcons.selector, productListingPage.allProductTilesDoNotHaveIcons(), true));
        });
    }

    if (isTablet) {
        it('Filters label displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.filtersLabel.selector, productListingPage.filtersLabel.isDisplayed(), true));
        });
    }

    if (isMobile || isTablet) {
        it('Main menu NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.mainMenu.selector, productListingPage.mainMenu.isDisplayed(), false));
        });

        it('Wishlist icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.wishlistIcon.selector, productListingPage.wishlistIcon.isDisplayed(), false));
        });

        it('Filters NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.filters.selector, productListingPage.filters.isDisplayed(), false));
        });

        it('Grid view icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.gridViewIcon.selector, productListingPage.gridViewIcon.isDisplayed(), false));
        });

        it('List view icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.listViewIcon.selector, productListingPage.listViewIcon.isDisplayed(), false));
        });

        it('All product tiles have heart, cart, control shuffle icons displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.productTileHeartCartControlShuffleIcons.selector, productListingPage.allProductTilesHaveIcons(), true));
        });
    }

    if (isLaptop || isTablet) {
        it('Search field displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.searchField.selector, productListingPage.searchField.isDisplayed(), true));
        });

        it('Search icon displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.searchIcon.selector, productListingPage.searchIcon.isDisplayed(), true));
        });

        it('Magnifying glass icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.magnifyingGlassIcon.selector, productListingPage.magnifyingGlassIcon.isDisplayed(), false));
        });

        it('Shopping cart quantity displayed', function () {
            assert.isTrue(reporter.writeRecord(1, this.test!.title, productListingPage.shoppingCartQty.selector, productListingPage.shoppingCartQty.isDisplayed(), true));
        });
    }

    if (isMobile || isLaptop) {
        it('Filters label NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(1, this.test!.title, productListingPage.filtersLabel.selector, productListingPage.filtersLabel.isDisplayed(), false));
        });
    }
});