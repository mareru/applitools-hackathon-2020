import { Target } from '@applitools/eyes-webdriverio';
import ProductListingPage from "src/pages/ProductListingPage";
declare let eyes: any;

describe('Task 1', () => {
    it('Cross-Device Elements Test', () => {
        new ProductListingPage().open();
        browser.call(() => eyes.open(browser, 'Applitools Hackathon 2020', 'Cross-Device Elements Test', {width: 800, height: 600}));
        browser.call(() => eyes.check('Product Listing Page', Target.window().fully()));
        browser.call(() => eyes.close());
    });

    after(() => {
        browser.call(() => eyes.abortIfNotClosed());
    });
});