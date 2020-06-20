import { Target } from '@applitools/eyes-webdriverio';
import ProductListingPage from "src/pages/ProductListingPage";
declare let eyes: any;
declare let configuration: any;

describe('Task 1', () => {
    it('Cross-Device Elements Test', () => {
        new ProductListingPage().open();
        browser.call(() => eyes.open(browser, configuration.getAppName(), 'Task 1', {width: 800, height: 600}));
        browser.call(() => eyes.check('Cross-Device Elements Test', Target.window().fully()));
        browser.call(() => eyes.close());
    });

    after(() => {
        browser.call(() => eyes.abortIfNotClosed());
    });
});

describe('Task 2', () => {
    it('Filter Results', () => {
        let productListingPage = new ProductListingPage();
        productListingPage.open();
        productListingPage.filterBlackShoes(true);
        browser.call(() => eyes.open(browser, configuration.getAppName(), 'Task 2', {width: 800, height: 600}));
        browser.call(() => eyes.check('Filter Results', Target.region('#product_grid')));
        browser.call(() => eyes.close());
    });

    after(() => {
        browser.call(() => eyes.abortIfNotClosed());
    });
});

describe('Task 3', () => {
    it('Product Details Test', () => {
        let productListingPage = new ProductListingPage();
        productListingPage.open();
        productListingPage.clickOnFirstProduct();
        browser.call(() => eyes.open(browser, configuration.getAppName(), 'Task 3', {width: 800, height: 600}));
        browser.call(() => eyes.check('Product Details Test', Target.window().fully()));
        browser.call(() => eyes.close());
    });

    after(() => {
        browser.call(() => eyes.abortIfNotClosed());
    });
});