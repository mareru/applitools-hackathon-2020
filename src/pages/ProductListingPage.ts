import Page from "src/pages/Page";

declare let isTablet;
declare let isMobile;

export default class ProductListingPage extends Page {

    get searchField() {
        return $('#INPUTtext____42');
    }

    get searchIcon() {
        return $('#I__headericon__44');
    }

    get magnifyingGlassIcon() {
        return $('a.btn_search_mob');
    }

    get mainMenu() {
        return $('#DIV__mainmenu__15');
    }

    get wishlistIcon() {
        return $('#A__wishlist__52');
    }

    get filters() {
        return $('#filter_col');
    }

    get filtersLabel() {
        return $('a.open_filters span');
    }

    get gridViewIcon() {
        return $('i.ti-view-grid');
    }

    get listViewIcon() {
        return $('i.ti-view-list');
    }

    get productsList() {
        return $$('.grid_item');
    }

    get productTileHeartCartControlShuffleIcons() {
        return $$('.grid_item ul li');
    }

    get shoppingCartQty() {
        return $('#STRONG____50');
    }

    get blackFilterLabel() {
        return $('#LABEL__containerc__104');
    }

    get filterButton() {
        return $('#filterBtn');
    }

    get funnelButton() {
        return $('.container ul.clearfix .open_filters');
    }

    get firstProductLink() {
        return $('#product_1');
    }

    get footerItems() {
        return $$('footer h3');
    }

    open() {
        super.open();
        return this;
    }

    allProductTilesHaveIcons(): boolean {
        const allIconsDisplayed = this.productTileHeartCartControlShuffleIcons.every(el =>
            el.isDisplayed()
        );
        return allIconsDisplayed;
    }

    allProductTilesDoNotHaveIcons(): boolean {
        const allIconsNotDisplayed = this.productTileHeartCartControlShuffleIcons.every(el =>
            !el.isDisplayed()
        );
        return allIconsNotDisplayed;
    }

    allFooterItemsAreCollapsed(): boolean {
        const nmbrOfCollapsedItems = this.footerItems.filter(item => item.getAttribute('aria-expanded') === null).length;
        return nmbrOfCollapsedItems === this.footerItems.length;
    }

    filterBlackShoes(isApplitoolsTest = false): number {
        if(isApplitoolsTest) {
            this.funnelButton.click();
        } else {
            if(isTablet || isMobile) {
                this.funnelButton.click();
            }
        }

        this.blackFilterLabel.waitForDisplayed();
        this.blackFilterLabel.waitForClickable();
        this.blackFilterLabel.click();

        this.filterButton.waitForDisplayed();
        this.filterButton.waitForEnabled();
        this.filterButton.waitForClickable();
        this.filterButton.click();
        return this.productsList.length;
    }

    clickOnFirstProduct(): void {
        this.firstProductLink.click();
    }
}