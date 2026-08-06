import {test, expect} from '@playwright/test';

//Valid username and valid password
test('Login Test Case', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toHaveText("Products");
    
});

//invalid username and valid password
test('Login Test Case With Invalid Username & valid password', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'abs');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText("Epic sadface: Username and password do not match any user in this service");
});

//Valid username and invalid passwoerd
test('Login Test Case with valid username & invalid password', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'abc');
    await page.click('#login-button');
    await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText("Epic sadface: Username and password do not match any user in this service");
});

//Invalid username and invalid password
test('Login test case with invalid username & password', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'hania');
    await page.fill('#password', '12345');
    await page.click('#login-button');
    await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText("Epic sadface: Username and password do not match any user in this service");
});

//Empty username and empty password
test('Login test case with empty username & password', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', '');
    await page.fill('#password', '');
    await page.click('#login-button');
    await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText("Epic sadface: Username is required");
});