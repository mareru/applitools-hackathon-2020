import Page from "src/pages/Page";

export default class ProductDetailPage extends Page {

    get productImage() {
        return $('#shoe_img');
    }

    get productSKULabel() {
        return $('#SMALL____84');
    }

    get productSize() {
        return $('.nice-select .current');
    }

    get priceWithoutDiscount() {
        return $('#old_price');
    }

    get priceWithDiscount() {
        return $('#new_price');
    }

    get discount() {
        return $('#discount');
    }

    productImageDisplayed(): boolean {
        // this will catch if a image is displayed on Product Detail Page,
        // but will not detect if the correct image is displayed for the product
        const styleAttribute = this.productImage.getAttribute('style');
        return styleAttribute !== null && styleAttribute !== undefined;
    }

    productSKULabelDisplayed(): boolean {
        const colorParsed = this.productSKULabel.getCSSProperty('color').parsed;
        const color = colorParsed ? colorParsed.hex : '';
        const whiteColor = color === '#ffffff';
        return this.productSKULabel.isDisplayed() && !whiteColor;
    }

    isProductSizeSmall(): boolean {
        return this.productSize.getText() === 'Small (S)';
    }

    isPriceWithDiscountCorrect(): boolean {
        return this.priceWithDiscount.getText() === '$33.00';
    }

    isPriceWithoutDiscountCorrect(): boolean {
        const colorParsed = this.priceWithoutDiscount.getCSSProperty('color').parsed;
        const color = colorParsed ? colorParsed.hex : '';
        const greyColor = color === '#999999';

        const textDecoration =  this.priceWithoutDiscount.getCSSProperty('text-decoration').value;
        const strikethrough = textDecoration.includes('line-through');

        return this.priceWithoutDiscount.getText() === '$48.00' && greyColor && strikethrough;
    }

    isDiscountCorrect(): boolean {
        return this.discount.getText() === '-30% discount';
    }
}