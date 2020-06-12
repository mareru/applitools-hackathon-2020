import Page from "src/pages/Page";

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
}