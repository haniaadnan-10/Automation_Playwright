import { test, expect } from '@playwright/test';
import LoginData from '../testdata/loginData.json';
import LoginPage from '../Pages/LoginPage';
import homePage from '../Pages/homePage';


test('Verify Home Page', async ({ page }) => {

    const login = new LoginPage(page);
    const data = LoginData.ValidUsers[0];

    await login.gotoURL();

    await login.Login(data.username,data.password);

    await expect(login.message).toHaveText(data.ExpectedMsg);

    const HomePage = new homePage(page);

    await expect(HomePage.pageTitle).toHaveText('Products');
    await expect(HomePage.products.first()).toBeVisible();
    await expect(HomePage.cartIcon).toBeVisible();

});