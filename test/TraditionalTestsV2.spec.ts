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

    it('Black shoes filter results have 2 products', function () {
        const numberOfBLackShoes = productListingPage.filterBlackShoes();
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.productsList.selector.toString(), numberOfBLackShoes === 2, true));
    });

    if(isLaptop) {
        it('Black shoes filter results, all product tiles DO NOT have heart, cart, control shuffle icons displayed', function () {
            productListingPage.filterBlackShoes();
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.productTileHeartCartControlShuffleIcons.selector.toString(), productListingPage.allProductTilesDoNotHaveIcons(), true));
        });
    }
    if(isMobile || isTablet) {
        it('Black shoes filter results, all product tiles have heart, cart, control shuffle icons displayed', function () {
            productListingPage.filterBlackShoes();
            assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productListingPage.productTileHeartCartControlShuffleIcons.selector.toString(), productListingPage.allProductTilesHaveIcons(), true));
        });
    }
});

describe('Task 3 - Product Details Test', () => {
    let reporter;

    beforeEach(() => {
        const productListingPage = new ProductListingPage();
        productListingPage.open()
            .clickOnFirstProduct();
        reporter = new HackathonReporter();
    });

    const productDetailPage = new ProductDetailPage();
    const taskNumber = 3;

    // NOTE:
    // could not do in traditional way checks of elements alignments
    // e.g. alignment of "Add to Cart" button,
    // alignment of reviews stars and reviews text,
    // alignment of top user icon, heart icon and basket icon

    it('Product image is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.productImage.selector, productDetailPage.isProductImageDisplayed(), true));
    });

    it('Product SKU is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.productSKULabel.selector, productDetailPage.isProductSKULabelDisplayed(), true));
    });

    it('Product SKU value is MTKRY-001', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.productSKULabel.selector, productDetailPage.checkProductSKU('SKU: MTKRY-001'), true));
    });

    it('Product size is small', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.productSize.selector, productDetailPage.checkProductSize('Small (S)'), true));
    });

    it('Product price with discount is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.priceWithDiscount.selector, productDetailPage.priceWithDiscount.isDisplayed(), true));
    });

    it('Product price with discount is $33.00', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.priceWithDiscount.selector, productDetailPage.checkPriceWithDiscount('$33.00'), true));
    });

    it('Product price with discount is displayed in blue color', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.priceWithDiscount.selector, productDetailPage.isColorOfPriceWithDiscountBlue(), true));
    });

    it('Product price without discount is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.priceWithoutDiscount.selector, productDetailPage.priceWithoutDiscount.isDisplayed(), true));
    });

    it('Product price without discount is $48.00', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.priceWithoutDiscount.selector, productDetailPage.checkPriceWithoutDiscount('$48.00'), true));
    });

    it('Product price without discount is displayed in grey colour', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.priceWithoutDiscount.selector, productDetailPage.isColorOfPriceWithoutDiscountGray(), true));
    });

    it('Product price without discount is strikethrough', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.priceWithoutDiscount.selector, productDetailPage.isPriceWithoutDiscountStrikethrough(), true));
    });

    it('Product discount is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.discount.selector, productDetailPage.discount.isDisplayed(), true));
    });

    it('Product discount is correct', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.discount.selector, productDetailPage.checkDiscount('-30% discount'), true));
    });

    it('Product review stars are displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.stars.selector.toString(), productDetailPage.isReviewStarsDisplayed(), true));
    });

    it('Product rating is 4 stars', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.stars.selector.toString(), productDetailPage.checkRating(4), true));
    });

    it('Product number of reviews label is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.nmbrOfReviewsLabel.selector, productDetailPage.nmbrOfReviewsLabel.isDisplayed(), true));
    });

    it('Product number of reviews label displays 4 reviews', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.nmbrOfReviewsLabel.selector, productDetailPage.checkNumberOfReviewsLabel('4 reviews'), true));
    });

    it('Product title is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.title.selector, productDetailPage.title.isDisplayed(), true));
    });

    it('Product title is Appli Air x Night', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.title.selector, productDetailPage.checkTitle('Appli Air x Night'), true));
    });

    it('Add to cart button is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.addToCartButton.selector, productDetailPage.addToCartButton.isDisplayed(), true));
    });

    it('Quantity field is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.qtyField.selector, productDetailPage.qtyField.isDisplayed(), true));
    });

    it('Quantity field default value is 1', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.qtyFieldValue.selector, productDetailPage.checkQtyFieldValue('1'), true));
    });

    it('Quantity field minus button is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.qtyMinusButton.selector, productDetailPage.qtyMinusButton.isDisplayed(), true));
    });

    it('Quantity field plus button is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.qtyPlusButton.selector, productDetailPage.qtyPlusButton.isDisplayed(), true));
    });

    it('Product description is displayed', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.productDescription.selector, productDetailPage.productDescription.isDisplayed(), true));
    });

    it('Product description text is correct', function () {
        assert.isTrue(reporter.writeRecord(taskNumber, this.test!.title, productDetailPage.productDescription.selector, productDetailPage.checkProductDescriptionText(), true));
    });
});