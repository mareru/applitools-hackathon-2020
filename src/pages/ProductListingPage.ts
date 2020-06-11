import Page from "src/pages/Page";

export default class ProductListingPage extends Page{

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
}