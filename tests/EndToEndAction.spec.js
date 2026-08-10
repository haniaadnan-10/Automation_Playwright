import {test, expect} from '@playwright/test'

test('End To End Action', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toHaveText("Products");

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.click('//*[@id="add-to-cart-sauce-labs-backpack"]');

    await expect(page.locator('//*[@id="remove-sauce-labs-backpack"]')).toHaveText("Remove");

    await page.click('//*[@id="add-to-cart-sauce-labs-fleece-jacket"]');

    await expect(page.locator('//*[@id="remove-sauce-labs-fleece-jacket"]')).toHaveText("Remove")

    await page.click('//*[@id="shopping_cart_container"]/a');

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    await expect(page.locator('//*[@id="item_4_title_link"]/div')).toHaveText("Sauce Labs Backpack");

    await expect(page.locator('//*[@id="item_5_title_link"]/div')).toHaveText("Sauce Labs Fleece Jacket");

    await page.click('//*[@id="checkout"]');

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    await page.fill('#first-name', 'Hania');
    await page.fill('#last-name', 'Adnan');
    await page.fill('#postal-code', '0000');
    await page.click('#continue');

    //Chceckout overview page
    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toHaveText("Checkout: Overview");

    await expect(page.locator('//*[@id="item_4_title_link"]/div')).toHaveText("Sauce Labs Backpack");

    await expect(page.locator('//*[@id="item_5_title_link"]/div')).toHaveText("Sauce Labs Fleece Jacket");

    await page.click('#finish');

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('//*[@id="checkout_complete_container"]/h2')).toHaveText("Thank you for your order!");

    await page.click('#back-to-products');

    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toHaveText("Products");

    await page.click('//*[@id="react-burger-menu-btn"]');

    await expect(page.locator('//*[@id="logout_sidebar_link"]')).toHaveText("Logout");

    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/');

});

