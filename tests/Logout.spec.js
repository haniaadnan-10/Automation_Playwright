import { test, expect } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshotUtil.js';
import LoginData from '../testdata/LoginData.json';
import LoginPage from '../Pages/LoginPage.js';
import logout from '../Pages/Logout.js';


test.describe('Logout Functionality', () => {
    test("Logout Testcase", async ({ page }) => {

    const login = new LoginPage(page);
    const data = LoginData.ValidUsers[0];

    await test.step('Enter credentials and Login', async() => {
        await login.Login(data.username, data.password); 
    });

    const logOut = new logout(page);

    await logOut.clickMenuBtn();

    await test.step('Click Logout Button', async() => {
        await logOut.logout();
    });
    
    await expect(logOut.loginBtn).toBeVisible();

    await attachStepScreenshot(page, 'Login Page Visible after Logging Out.');

});
})
