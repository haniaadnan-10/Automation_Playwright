class homePage {

    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');

        this.products = page.locator('.inventory_item');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');

        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');

        this.menuBtn = page.locator('#react-burger-menu-btn');
    }
}

export default homePage;