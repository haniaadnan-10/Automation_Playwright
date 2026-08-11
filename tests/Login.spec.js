import {test, expect} from '@playwright/test';
import LoginData from '../testdata/loginData.json';

LoginData.ValidUsers.forEach((data) => {

   //Valid username and valid password
    test(`Login Test Case ${data.username}`, async ({page}) => {

    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', data.username);
    await page.fill('#password', data.password);
    await page.click('#login-button');
    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toHaveText("Products");
    
}); 
});

LoginData.Users.forEach((dataofHotel) => {

   //Valid username and valid password for hotel app
    test(`Login Test Case for Acadetin hotel ${dataofHotel.username}`, async ({page}) => {

    await page.goto('https://adactinhotelapp.com/');
    await page.fill('#username', dataofHotel.Username);
    await page.fill('#password', dataofHotel.Password);
    await page.click('#login');
    await expect(page.locator('.welcome_menu').first()).toHaveText("Welcome to Adactin Group of Hotels");
    
}); 
});
