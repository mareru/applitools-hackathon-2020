import Page from "src/pages/Page";

export default class ProductListingPage extends Page{

    get searchField() {
        return $('#INPUTtext____42');
    }

    get searchIcon() {
        return $('#I__headericon__44');
    }
}