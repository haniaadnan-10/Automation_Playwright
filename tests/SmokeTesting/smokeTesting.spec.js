import { test, expect } from '@playwright/test';
import LoginData from '../../testdata/loginData.json';
import LoginPage from '../../Pages/loginPage';
import HomePage from '../../Pages/homePage';
import homePageData from '../../testdata/homePage.json';
import AddToCart from '../../Pages/addToCart';
import addToCartData from '../../testdata/addToCart.json';
import checkout from '../../Pages/checkout';
import checkoutData from '../../testdata/checkout.json'
import logout from '../../Pages/logout';

test('End to End Action Test Case', async ({page}) => {

    //Login
    const loginPage = new LoginPage(page);
    const data = LoginData.ValidUsers[0];

    await loginPage.gotoURL();
    await loginPage.Login(data.username, data.password);
    await expect(loginPage.message).toHaveText(data.ExpectedMsg);

    //Home Page
    const homePage = new HomePage(page);

    await expect(homePage.pageTitle).toHaveText('Products');
    await expect(homePage.products.first()).toBeVisible();
    await expect(homePage.cartIcon).toBeVisible();

    for (const sort of homePageData.sortOption){
        await homePage.sortProducts(sort.value); //sort product, check every option one by one
        await homePage.verifySorting(sort.value); //verify those sort orders
    }

    //Add to cart functionality
    const addToCart = new AddToCart(page);
    const product = addToCartData.products[0];

    await addToCart.gotoURLProduct();
    await addToCart.addProduct(product.productName);
    await expect(addToCart.cartBadge).toHaveText('1');

    await addToCart.openCart();
    await expect(addToCart.cartProductName).toHaveText(product.productName);

    await addToCart.checkoutButton();

    //Checkout page
    const checkOut = new checkout(page);
    const info = checkoutData.validInformation[0];

    await checkOut.EnterInformation(info.firstName, info.lastName, info.postalCode);
    await checkOut.continueButton();

    //Checkout Page
    await checkOut.gotoCheckoutOverivew();
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

    await checkOut.finishButton();

    //Thanyou page
    await expect(checkOut.thankyouOrder).toHaveText('Thank you for your order!');

    //LogOut functionality
    const logOut = new logout(page);
    await logOut.logout();

    await expect(logOut.username).toBeVisible();
    await expect(logOut.password).toBeVisible(); 
    await expect(logOut.loginBtn).toBeVisible();
    
});