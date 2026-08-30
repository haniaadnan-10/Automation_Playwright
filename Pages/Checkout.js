import {test} from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshotUtil';

class checkout{
    
    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');

        //if fields are missing locators
        this.firstNameReqMsg = page.locator('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]');
        this.lastNameReqMsg = page.locator('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]');
        this.postalCodeReqMsg = page.locator('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]');
        this.allFieldsEmptyMsg = page.locator('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]');

        //Checkout overview page
        this.checkoutOverviewPageTitle = page.locator('.title');
        this.checkoutOverviewTitle = 'Checkout: Overview';
        this.productName = page.locator('.inventory_item_name');
        this.productDescription = page.locator('.inventory_item_desc');
        this.productPrice = page.locator('.inventory_item_price');
        this.quantity = page.locator('.cart_quantity');

        this.paymentInformation = page.locator('.summary_info_label').nth(0);
        this.shippingInformation = page.locator('.summary_info_label').nth(1);
        this.priceTotal = page.locator('.summary_subtotal_label');
        this.tax = page.locator('.summary_tax_label');
        this.total = page.locator('.summary_total_label');

        this.finishBtn = page.locator('#finish');
        this.cancelBtn = page.locator('.cart_cancel_link');

        this.thankyouOrder = page.locator('.complete-header');
        this.backHomeBtn = page.locator('#back-to-products')
    }

    async EnterInformation(firstName, lastName, postalCode){

        await test.step(`Enter Information`, async() => {
            await this.firstName.fill(firstName);
            await this.lastName.fill(lastName);
            await this.postalCode.fill(postalCode);

            await attachStepScreenshot(this.page, 'Information entered');
        });  
    }

    async continueButton(){
        await test.step('Click on Continue Button', async() => {
            await this.continueBtn.click();

            await attachStepScreenshot(this.page, 'Continue Button');
        });   
    }


     async verifyOverview(product) {

        await test.step('Verify Overview Page Contains Correct Information', async() => {
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

            await attachStepScreenshot(this.page, 'Overview.');
        });
    }

        async finishButton(){
            await test.step('Click on Finish Button', async() => {
                await this.finishBtn.click();

                await attachStepScreenshot(this.page, 'Finish Button');
            }); 
        }

        async cancelButton(){
            await test.step('Cancel Button', async() => {
                await this.cancelBtn.click();

                await attachStepScreenshot(this.page, 'Cancel Button');
            });   
        }

        async backHomeButton(){
            await test.step('Back Home Button', async() => {
                await this.backHomeBtn.click();

                await attachStepScreenshot(this.page, 'Back Home Button');
            });
        }


}

export default checkout;