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

    get addToCartButton() {
        return $('#A__btn__114');
    }

    get qtyField() {
        return $('#DIV__numbersrow__102');
    }

    get qtyFieldValue() {
        return $('#quantity_1');
    }

    get qtyMinusButton() {
        return $('#DIV__decbuttoni__105');
    }

    get qtyPlusButton() {
        return $('#DIV__incbuttoni__104');
    }

    get productDescription() {
        return $('#P____83');
    }

    isProductImageDisplayed(): boolean {
        // this will catch if a image is displayed on Product Detail Page,
        // but will not detect if the correct image is displayed for the product
        const styleAttribute = this.productImage.getAttribute('style');
        return styleAttribute !== undefined && styleAttribute !== null && styleAttribute.includes('background-image');
    }

    isProductSKULabelDisplayed(): boolean {
        const black = '#444444';
        let productSKULabel = this.productSKULabel;
        return productSKULabel.isDisplayed() && this.checkColor(productSKULabel, black);
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

    isColorOfPriceWithDiscountBlue(): boolean {
        const blue = '#004dda';
        return this.checkColor(this.priceWithDiscount, blue);
    }

    checkPriceWithoutDiscount(text: string): boolean {
        let priceWithoutDiscount = this.priceWithoutDiscount;
        return priceWithoutDiscount.isDisplayed() && priceWithoutDiscount.getText() === text;
    }

    isColorOfPriceWithoutDiscountGray(): boolean {
        const grey = '#999999';
        return this.checkColor(this.priceWithoutDiscount, grey);
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

    checkNumberOfReviewsLabel(text: string) {
        let nmbrOfReviewsLabel = this.nmbrOfReviewsLabel;
        return nmbrOfReviewsLabel.isDisplayed() && nmbrOfReviewsLabel.getText() === text;
    }

    checkTitle(title: string): boolean {
        let titleElem = this.title;
        return titleElem.isDisplayed() && titleElem.getText() === title;
    }

    checkQtyFieldValue(qty: string): boolean {
        return this.qtyFieldValue.getValue() === qty;
    }

    checkProductDescriptionText(): boolean {
        const text = this.productSKULabel.getText() + '\nThese boots are comfortable enough to wear all day. Well made. I love the “look”. Best Used For Casual Everyday Walk fearlessly into the cooler months in the Sorel Joan Of Arctic Wedge II Chelsea Boot. Boasting the iconic wedge platform that\'s as comfortable as it is stylish, this boot features a waterproof upper';
        return this.productDescription.getText() === text;
    }

    allStarsDisplayed(stars: WebdriverIO.ElementArray): boolean {
        const nmbrOfDisplayedStars = stars.filter(star => star.isDisplayed()).length;
        return nmbrOfDisplayedStars === 5;
    }

    calculateRating(stars: WebdriverIO.ElementArray): number {
        return stars.filter(star => star.getAttribute('class').includes('voted')).length;
    }

    checkColor(element: WebdriverIO.Element, colorHex: string): boolean {
        const colorParsed = element.getCSSProperty('color').parsed;
        const color = colorParsed ? colorParsed.hex : '';
        return color === colorHex;
    }
}