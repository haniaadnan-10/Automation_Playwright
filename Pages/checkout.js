class checkout{
    
    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');

        //Checkout overview page
        this.checkoutOverviewPageTitle = page.locator('.title');
        this.checkoutOverviewTitle = 'Checkout: Overview';
        this.productName = page.locator('.inventory_item_name');
        this.productDescription = page.locator('.inventory_item_desc');
        this.productPrice = page.locator('.inventory_item_price');
        this.quantity = page.locator('.cart_quantity');

        this.paymentInformation = page.locator('.summary_info_label').nth(0);
        this.shippingInformation = page.locator('.summary_info_label').nth(1);
        this.priceTotal = page.locator('.total-info-label');
        this.tax = page.locator('.summary_tax_label');
        this.total = page.locator('.summary_total_label');

        this.finishBtn = page.locator('#finish');
        this.cancelBtn = page.locator('.btn btn_secondary back btn_medium cart_cancel_link');

        this.thankyouOrder = page.locator('.complete-header');
        this.backHomeBtn = page.locator('#back-to-products')
    }

    async EnterInformation(firstName, lastName, postalCode){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postalCode);
    }

    async continueButton(){
        await this.continueBtn.click();
    }

     async gotoCheckoutOverivew(){
        await this.page.goto('https://www.saucedemo.com/checkout-step-two.html');
     }

     async verifyOverview(product) {
        // Page title
        await expect(this.checkoutOverviewPageTitle).toHaveText('Checkout: Overview');
        // Product details
        await expect(this.productName).toHaveText(product.productName);
        await expect(this.productDescription).toHaveText(product.description);
        await expect(this.productPrice).toHaveText(product.price);
        // Quantity
        await expect(this.quantity).toHaveText('1');

        // Payment & Shipping
        await expect(this.paymentInformation).toBeVisible();
        await expect(this.shippingInformation).toBeVisible();
        await expect(this.priceTotal).toBeVisible();
        await expect(this.tax).toBeVisible();
        await expect(this.total).toBeVisible();
        }

        async finishButton(){
            await this.finishBtn.click();
        }

        async cancelButton(){
            await this.cancelBtn.click();
        }

        async backHomeButton(){
            await this.backHomeBtn.click();
        }


}

export default checkout;