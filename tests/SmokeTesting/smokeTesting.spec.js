import { test, expect } from '../../fixtures/testSetup.js';
import { attachStepScreenshot } from '../../utilities/screenshotUtil.js';
import LoginData from '../../testdata/LoginData.json';
import LoginPage from '../../Pages/LoginPage.js';
import HomePage from '../../Pages/HomePage.js';
import AddToCart from '../../Pages/AddToCart.js';
import addToCartData from '../../testdata/AddToCart.json';
import checkout from '../../Pages/Checkout.js';
import checkoutData from '../../testdata/Checkout.json'
import logout from '../../Pages/Logout.js';

test.describe('Smoke Testing', () => {
    test('Smoke Testing', async ({page}) => {

    const login = new LoginPage(page);
        const data = LoginData.ValidUsers[0];

        await test.step('Enter credentials and Login', async() => {
            await login.Login(data.username, data.password); 
        });

        const addToCart = new AddToCart(page);
        const product = addToCartData.products[0];

        await test.step(`Add Product - ${product.productName}`, async() => {
            await addToCart.addProduct(product.productName);
        });
        
        await test.step('Verify Cart Badge', async() => {
             await expect(addToCart.cartBadge).toHaveText('1');
        });
       
        await test.step('Open Cart Page', async() => {
            await addToCart.openCart();
        });
        
        test.step('Verify Product added to cart', async() => {
            await expect(addToCart.cartProductName).toHaveText(product.productName);
        });
        
        await test.step('Checkout Button', async() => {
            await addToCart.checkoutButton();
        });

        const checkOut = new checkout(page);
        const info = checkoutData.validInformation[0];

        await test.step('Enter Valid Information', async() => {
            await checkOut.EnterInformation(info.firstName, info.lastName, info.postalCode);
        });
        
        await test.step('Continue Button', async() => {
            await checkOut.continueButton();
        });
        

        await test.step('Verify Checkout Overview Page', async() => {
            //Checkout Page
            await expect(checkOut.checkoutOverviewPageTitle).toHaveText(checkOut.checkoutOverviewTitle);

            await expect(checkOut.pageTitle).toHaveText('Checkout: Overview');
            await expect(checkOut.productName).toHaveText(product.productName);
            await expect(checkOut.productDescription).toHaveText(product.productDescription);
            await expect(checkOut.productPrice).toHaveText(product.productPrice);
            await expect(checkOut.quantity).toHaveText('1');
            await expect(checkOut.paymentInformation).toBeVisible();
            await expect(checkOut.shippingInformation).toBeVisible();;
            await expect(checkOut.tax).toBeVisible();
            await expect(checkOut.total).toBeVisible();
        });
    
        await test.step('Finish Button', async() => {
            await checkOut.finishButton();
        });

        await test.step('Thankyou Page', async() => {
            await expect(checkOut.thankyouOrder).toHaveText('Thank you for your order!');
        });

        //LogOut functionality
        const logOut = new logout(page);
        await logOut.clickMenuBtn();
    
        await test.step('Click Logout Button', async() => {
            await logOut.logout();
        });
        
        await expect(logOut.loginBtn).toBeVisible();
    
        await attachStepScreenshot(page, 'Login Page Visible after Logging Out.');
    
});
})
