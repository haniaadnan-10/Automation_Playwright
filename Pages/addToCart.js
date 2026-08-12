class addToCart {

    constructor(page) {
        this.page = page;

        this.product = page.locator('.inventory_item');

        this.cartButton = page.locator('#shopping_cart_container a');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartProductName = page.locator('.cart_item .inventory_item_name');

        this.checkoutBtn = page.locator('#checkout');
        this.continueShoppingBtn = page.locator('#continue-shopping');
    }

    async gotoURLProduct() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async addProduct(productName) {
        //Find the product by its name
        const product = this.product.filter({hasText: productName});
        //Find Add to cart button inside that product
        const addToCartButton = product.locator('button.btn_inventory');

        await addToCartButton.click();
    }

    async removeProduct(productName) {
        //Find the product by its name
        const product = this.product.filter({hasText: productName});
        //Find Remove button inside that product
        const removeButton = product.locator('button.btn_inventory');

        await removeButton.click();
    }

    async openCart() {
        await this.cartButton.click();
    }

    async getCartCount() {
        return await this.cartBadge.textContent();
    }

    async checkoutButton(){
        await this.checkoutBtn.click();
    }

    async continueShoppingButton(){
        await this.continueShoppingBtn.click();
    }


}

export default addToCart;