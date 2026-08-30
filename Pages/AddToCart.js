import {test} from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshotUtil.js';

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


    async addProduct(productName) {

        await test.step(`Add Product:  ${productName}`, async() => {
            //Find the product by its name
        const product = this.product.filter({hasText: productName});
        //Find Add to cart button inside that product
        const addToCartButton = product.getByRole('button', {
            name: 'Add to cart'
        });

        await addToCartButton.click();

        await attachStepScreenshot(this.page, `Added - ${productName}`);
        }); 
    }

    async removeProduct(productName) {

        await test.step(`Remove Product: ${productName}`, async() => {
            //Find the product by its name
        const product = this.product.filter({hasText: productName});
        //Find Remove button inside that product
        const removeButton = product.locator('button.btn_inventory');

        await removeButton.click(); 

        await attachStepScreenshot(this.page, `Removed - ${productName}`);
        });
       
    }

    async openCart() {
        await test.step(`Open Cart`, async() => {
            await this.cartButton.click();

            await attachStepScreenshot(this.page, 'Cart Opened');
        });
        
    }

    async getCartCount() {
        return await this.cartBadge.textContent();
    }

    async checkoutButton(){
        await test.step('Open checkout page by clicking on checkout button', async() => {
            await this.checkoutBtn.click();

            await attachStepScreenshot(this.page, 'Checkout Page Opened')
        })
        
    }

    async continueShoppingButton(){
        await test.step('Click on Continue Button', async() => {
            await this.continueShoppingBtn.click();

            await attachStepScreenshot(this.page, 'Product Page opened.');
        })
        
    }


}

export default addToCart;