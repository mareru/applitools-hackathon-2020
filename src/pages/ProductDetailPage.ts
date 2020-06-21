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

    get stars() {
        return $$('#SPAN__rating__76 .icon-star');
    }

    get nmbrOfReviewsLabel() {
        return $('#SPAN__rating__76 em');
    }

    get title() {
        return $('#shoe_name');
    }

    isProductImageDisplayed(): boolean {
        // this will catch if a image is displayed on Product Detail Page,
        // but will not detect if the correct image is displayed for the product
        const styleAttribute = this.productImage.getAttribute('style');
        return styleAttribute !== null && styleAttribute !== undefined;
    }

    isProductSKULabelDisplayed(): boolean {
        let productSKULabel = this.productSKULabel;
        const colorParsed = productSKULabel.getCSSProperty('color').parsed;
        const color = colorParsed ? colorParsed.hex : '';
        const whiteColor = color === '#ffffff';
        return productSKULabel.isDisplayed() && !whiteColor;
    }

    checkProductSKU(text: string): boolean {
        return this.isProductSKULabelDisplayed() && this.productSKULabel.getText() === text;
    }

    checkProductSize(text: string): boolean {
        let productSize = this.productSize;
        return this.productSize.isDisplayed() && productSize.getText() === text;
    }

    checkPriceWithDiscount(text: string): boolean {
        let priceWithDiscount = this.priceWithDiscount;
        return priceWithDiscount.isDisplayed() && priceWithDiscount.getText() === text;
    }

    checkPriceWithoutDiscount(text: string): boolean {
        let priceWithoutDiscount = this.priceWithoutDiscount;
        return priceWithoutDiscount.isDisplayed() && priceWithoutDiscount.getText() === text;
    }

    isColorOfPriceWithoutDiscountGray(): boolean {
        const colorParsed = this.priceWithoutDiscount.getCSSProperty('color').parsed;
        const color = colorParsed ? colorParsed.hex : '';
        return color === '#999999';
    }

    isPriceWithoutDiscountStrikethrough(): boolean {
        const textDecoration =  this.priceWithoutDiscount.getCSSProperty('text-decoration').value;
        return textDecoration.includes('line-through');
    }

    checkDiscount(discountText: string): boolean {
        let discount = this.discount;
        return discount.isDisplayed() && discount.getText() === discountText;
    }

    isReviewStarsDisplayed(): boolean {
        return this.stars.length === 5 && this.allStarsDisplayed(this.stars);
    }

    checkRating(rating: number) : boolean {
        return this.calculateRating(this.stars) === rating;
    }

    allStarsDisplayed(stars: WebdriverIO.ElementArray): boolean {
        const nmbrOfDisplayedStars = stars.filter(star => star.isDisplayed()).length;
        return nmbrOfDisplayedStars === 5;
    }

    calculateRating(stars: WebdriverIO.ElementArray): number {
        return stars.filter(star => star.getAttribute('class').includes('voted')).length;
    }

    checkNumberOfReviewsLabel(text: string) {
        let nmbrOfReviewsLabel = this.nmbrOfReviewsLabel;
        return nmbrOfReviewsLabel.isDisplayed() && nmbrOfReviewsLabel.getText() === text;
    }

    checkTitle(title: string): boolean {
        let titleElem = this.title;
        return titleElem.isDisplayed() && titleElem.getText() === title;
    }
}