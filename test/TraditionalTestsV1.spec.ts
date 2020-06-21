import ProductListingPage from "src/pages/ProductListingPage";
import HackathonReporter from "src/utils/HackathonReporter";
import ProductDetailPage from "src/pages/ProductDetailPage";

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
    const taskNumber = 1;

    if (isMobile) {
        it('Search field NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.searchField.selector, productListingPage.searchField.isDisplayed(), false));
        });

        it('Search icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.searchIcon.selector, productListingPage.searchIcon.isDisplayed(), false));
        });

        it('Magnifying glass icon displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.magnifyingGlassIcon.selector, productListingPage.magnifyingGlassIcon.isDisplayed(), true));
        });

        it('Shopping cart quantity NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.shoppingCartQty.selector, productListingPage.shoppingCartQty.isDisplayed(), false));
        });
    }

    if (isLaptop) {
        it('Main menu displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.mainMenu.selector, productListingPage.mainMenu.isDisplayed(), true));
        });

        it('Wishlist icon displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.wishlistIcon.selector, productListingPage.wishlistIcon.isDisplayed(), true));
        });

        it('Filters displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.filters.selector, productListingPage.filters.isDisplayed(), true));
        });

        it('Grid view icon displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.gridViewIcon.selector, productListingPage.gridViewIcon.isDisplayed(), true));
        });

        it('List view icon displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.listViewIcon.selector, productListingPage.listViewIcon.isDisplayed(), true));
        });

        it('All product tiles DO NOT have heart, cart, control shuffle icons displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.productTileHeartCartControlShuffleIcons.selector.toString(), productListingPage.allProductTilesDoNotHaveIcons(), true));
        });
    }

    if (isTablet) {
        it('Filters label displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.filtersLabel.selector, productListingPage.filtersLabel.isDisplayed(), true));
        });
    }

    if (isMobile || isTablet) {
        it('Main menu NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.mainMenu.selector, productListingPage.mainMenu.isDisplayed(), false));
        });

        it('Wishlist icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.wishlistIcon.selector, productListingPage.wishlistIcon.isDisplayed(), false));
        });

        it('Filters NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.filters.selector, productListingPage.filters.isDisplayed(), false));
        });

        it('Grid view icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.gridViewIcon.selector, productListingPage.gridViewIcon.isDisplayed(), false));
        });

        it('List view icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.listViewIcon.selector, productListingPage.listViewIcon.isDisplayed(), false));
        });

        it('All product tiles have heart, cart, control shuffle icons displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.productTileHeartCartControlShuffleIcons.selector.toString(), productListingPage.allProductTilesHaveIcons(), true));
        });
    }

    if (isLaptop || isTablet) {
        it('Search field displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.searchField.selector, productListingPage.searchField.isDisplayed(), true));
        });

        it('Search icon displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.searchIcon.selector, productListingPage.searchIcon.isDisplayed(), true));
        });

        it('Magnifying glass icon NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.magnifyingGlassIcon.selector, productListingPage.magnifyingGlassIcon.isDisplayed(), false));
        });

        it('Shopping cart quantity displayed', function () {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.shoppingCartQty.selector, productListingPage.shoppingCartQty.isDisplayed(), true));
        });
    }

    if (isMobile || isLaptop) {
        it('Filters label NOT displayed', function () {
            assert.isFalse(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.filtersLabel.selector, productListingPage.filtersLabel.isDisplayed(), false));
        });
    }
});

describe('Task 2 - Filter Results', () => {
    let reporter;

    beforeEach(() => {
        new ProductListingPage().open();
        reporter = new HackathonReporter();
    });

    const productListingPage = new ProductListingPage();
    const taskNumber = 2;

    it('Black shoes filter results', function () {
        const numberOfBLackShoes = productListingPage.filterBlackShoes();

        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.productsList.selector.toString(), numberOfBLackShoes === 2, true));
        if(isLaptop) {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.productTileHeartCartControlShuffleIcons.selector.toString(), productListingPage.allProductTilesDoNotHaveIcons(), true));
        }
        if(isMobile || isTablet) {
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.productTileHeartCartControlShuffleIcons.selector.toString(), productListingPage.allProductTilesHaveIcons(), true));
        }
    });
});

describe.only('Task 3 - Product Details Test', () => {
    let reporter;

    beforeEach(() => {
        const productListingPage = new ProductListingPage();
        productListingPage.open()
                          .clickOnFirstProduct();
        reporter = new HackathonReporter();
    });

    const productDetailPage = new ProductDetailPage();
    const taskNumber = 3;

    it('Product image is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.productImage.selector, productDetailPage.productImageDisplayed(), true));
    });

    it('Product SKU is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.productSKULabel.selector, productDetailPage.productSKULabelDisplayed(), true));
    });

    it('Product size is small', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.productSize.selector, productDetailPage.isProductSizeSmall(), true));
    });

    it.only('Product price with discount is correct', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.priceWithDiscount.selector, productDetailPage.isPriceWithDiscountCorrect(), true));
    });

    it.only('Product price without discount is correct', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.priceWithoutDiscount.selector, productDetailPage.isPriceWithoutDiscountCorrect(), true));
    });

    it.only('Product discount is correct', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.discount.selector, productDetailPage.isDiscountCorrect(), true));
    });
});