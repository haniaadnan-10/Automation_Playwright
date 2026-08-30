import { test, expect } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshotUtil.js';
import LoginData from '../testdata/loginData.json';
import LoginPage from '../Pages/loginPage';
import HomePage from '../Pages/homePage';
import homePageData from '../testdata/homePage.json';

test.describe('Home Page - Positive Test Cases', () => {
    
    for (const sort of homePageData.sortOption) {

        test(`Verify Product Sorting - ${sort.name}`, async ({ page }) => {

            const login = new LoginPage(page);
            const data = LoginData.ValidUsers[0];

            await test.step('Enter credentials and Login', async () => {
                await login.Login(data.username, data.password);
            });

            const homePage = new HomePage(page);

            await test.step('Verify Home Page', async () => {
                await expect(homePage.pageTitle).toHaveText('Products');
                await expect(homePage.products.first()).toBeVisible();
                await expect(homePage.cartIcon).toBeVisible();
            });

            await test.step(`Verify ${sort.name}`, async () => {
                await homePage.sortProducts(sort.value);
                await homePage.verifySorting(sort.value);

                await attachStepScreenshot(page, `${sort.name} sorting verified`);
            });
        });
    }
})

test.describe('Home Page - Negaive Test Cases', () => {
    test('Access Home Page Without Login', async ({ page }) => {

        const homePage = new HomePage(page);

        await test.step('Access Products Page Without Login', async () => {
            await page.goto('https://www.saucedemo.com/inventory.html');

            await attachStepScreenshot(page, 'Cannot Access Home Page Without Login');
        });

        await test.step('Verify User is Redirected to Login Page', async () => {
            await expect(page).toHaveURL('https://www.saucedemo.com/');

            await attachStepScreenshot(page, 'Redirected to Login Page');
        });
    });

    test('Access Products Page After Logout', async ({ page }) => {

        const login = new LoginPage(page);
        const data = LoginData.ValidUsers[0];

        await test.step('Login', async () => {
            await login.Login(data.username, data.password);
        });

        const homePage = new HomePage(page);

        await test.step('Logout', async () => {
            await homePage.clickMenuBtn();
            await homePage.logoutBtn.click();
        });

        await test.step('Access Products Page After Logout', async () => {
            await page.goto('https://www.saucedemo.com/inventory.html');
            await attachStepScreenshot(page, 'Cannot access Home Page without Login.');
        });

        await test.step('Verify User is Redirected to Login', async () => {
            await expect(page).toHaveURL('https://www.saucedemo.com/');
            await attachStepScreenshot(page, 'Redirected to Login Page');
        });
    });
})