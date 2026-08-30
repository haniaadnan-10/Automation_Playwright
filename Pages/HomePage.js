import { test, expect } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshotUtil';

class homePage {

    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');

        this.products = page.locator('.inventory_item');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');

        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');

        this.sortBtn = page.locator('.product_sort_container');

        this.menuBtn = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');

        this.allItemsBtn = page.locator('#inventory_sidebar_link');
        this.aboutBtn = page.locator('#about_sidebar_link');
        this.resetBtn = page.locator('#reset_sidebar_link');
    }

    async sortProducts(option){

        await test.step(`Sort products by option ${option}`, async() => {
            await this.sortBtn.selectOption(option);

            await attachStepScreenshot(this.page, `Product sorted by ${option}`);
        });
    }

    async verifySorting(option) {

        await test.step(`Verify sorting: ${option}`, async() => {
            if (option === 'az') {
                const names = await this.productNames.allTextContents();

                const expected = [...names].sort();

                expect(names).toEqual(expected);
        }

            else if (option === 'za') {
                const names = await this.productNames.allTextContents();

                const expected = [...names].sort().reverse();

                expect(names).toEqual(expected);
        }

        else if (option === 'lohi') {
                const prices = await this.productPrices.allTextContents();

                const actualPrices = prices.map(price =>
                parseFloat(price.replace('$', ''))
            );

                const expected = [...actualPrices].sort((a, b) => a - b);

                expect(actualPrices).toEqual(expected);
        }

        else if (option === 'hilo') {
                const prices = await this.productPrices.allTextContents();

                const actualPrices = prices.map(price =>
                parseFloat(price.replace('$', ''))
            );

                const expected = [...actualPrices].sort((a, b) => b - a);

                expect(actualPrices).toEqual(expected);
             }

                await attachStepScreenshot(this.page, `Sorting Verified - ${option}`)
        });
        
    }

    async clickMenuBtn() {
        await test.step('Menu Button', async() => {
            await this.menuBtn.click();

            //await expect(this.logoutBtn).toBeVisible();


            await attachStepScreenshot(this.page, 'Sidebar Menu Opened.');
        });
    }

    async logout() {
        await test.step('Logout Functionality', async() => {
            await this.logoutBtn.click();

            await attachStepScreenshot(this.page, 'Logout Successful');
        });  
    }

    async allItemsButton(){
        await test.step('All Item Button', async() => {
            await this.clickMenuBtn();
            await this.allItemsBtn.click();

            await attachStepScreenshot(this.page, 'All Items displayed');
        });  
    }

    async aboutButton(){
        await test.step('About Button', async() => {
            await this.clickMenuBtn();
            await this.aboutBtn.click();

            await attachStepScreenshot(this.page, 'About Page Opened');
        }); 
    }

    async resetButton(){
        await test.step('Reset Button', async() => {
            await this.clickMenuBtn();
            await this.resetBtn.click();

            await attachStepScreenshot(this.page, 'Reset App State');
        });
    }

    

}

export default homePage;