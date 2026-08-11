class productPage {

    constructor(page){
        this.page = page;

        this.pageTitle = page.getByText("Products");
        this.products = page.locator(".inventory_item");
        this.productName = page.locator('#inventory_item_name');
        this.productDescription = page.locator('#inventory_item_desc');
        this.productPrice = page.locator('#inventory_item_price');

        this.addToCartButton = page.locator('#btn btn_primary btn_small btn_inventory ');
        this.removeButton = page.locator('#btn btn_secondary btn_small btn_inventory');

        this.cartButton = page.locator('#shopping-cart-link');
        this.cartBadge = page.locator('#shopping_cart_badge');
        
    }

    async gotoURLProductPage(){
        await this.page.goto('https://www.saucedemo.com/inventory.html')
    }

    async addProduct(productName){
        const product = this.products.filter({hasText: productName});
        await product.getByRole("button", {name: "Add to cart"}).click();

    }

    async removeProduct(productName){
        const product = this.products.filter({hasText: productName});
        await product.getByRole("button", {name: "Remove"}).click();

    }

    async openCart(){
        await this.cartButton.click();

    }
}

export default productPage;
