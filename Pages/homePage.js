import { expect } from '@playwright/test';

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
    }

    async sortProducts(option){
        await this.sortBtn.selectOption(option);
    }

    async verifySorting(option) {

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
    }

}

export default homePage;