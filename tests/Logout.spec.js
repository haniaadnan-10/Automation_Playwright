import { test, expect } from '@playwright/test';
import LoginData from '../testdata/loginData.json';
import LoginPage from '../Pages/LoginPage';
import logout from '../Pages/logout';


test("Checkout testcase", async ({ page }) => {

    const login = new LoginPage(page);
    const data = LoginData.ValidUsers[0];

    await login.gotoURL();
    await login.Login(data.username,data.password);
    await expect(login.message).toHaveText(data.ExpectedMsg);

    const logOut = new logout(page);

    await logOut.logout();

    await expect(logOut.loginBtn).toBeVisible();

});