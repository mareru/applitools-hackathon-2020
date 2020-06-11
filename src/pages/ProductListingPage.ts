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

    get productHeartsList() {
        return $$('div.grid_item i.ti-heart');
    }

    get controlShuffleList() {
        return $$('div.grid_item i.ti-control-shuffle');
    }

    get shoppingCartsList() {
        return $$('div.grid_item i.ti-shopping-cart');
    }

    allProductsHaveHearts() : boolean {
        return this.productsList.length === this.productHeartsList.length;
    }

    allProductsHaveControlShuffles(): boolean {
        return this.productsList.length === this.controlShuffleList.length;
    }

    allProductsHaveCarts(): boolean {
        return  this.productsList.length === this.shoppingCartsList.length;
    }

    noneOfProductsHaveHearts(): boolean {
        return this.productHeartsList === undefined || this.productHeartsList.length == 0;
    }

    noneOfProductsHaveControlShuffles(): boolean {
        return this.controlShuffleList === undefined || this.controlShuffleList.length == 0;
    }

    noneOfProductsHaveCarts(): boolean {
        return this.shoppingCartsList === undefined || this.shoppingCartsList.length == 0;
    }
}