import { test, expect } from '@playwright/test';
import LoginData from '../testdata/loginData.json';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/homePage';
import homePageData from '../testdata/homePage.json';
import logout from '../Pages/logout';


test('Verify Home Page', async ({ page }) => {

    const login = new LoginPage(page);
    const data = LoginData.ValidUsers[0];

    await login.gotoURL();
    await login.Login(data.username, data.password);

    await expect(login.message).toHaveText(data.ExpectedMsg);

    const homePage = new HomePage(page);

    await expect(homePage.pageTitle).toHaveText('Products');
    await expect(homePage.products.first()).toBeVisible();
    await expect(homePage.cartIcon).toBeVisible();

    for (const sort of homePageData.sortOption) {
        await homePage.sortProducts(sort.value);
    }

    const logOut = new logout(page);
    await logOut.logout();

});
