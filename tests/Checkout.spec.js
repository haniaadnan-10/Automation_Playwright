import { test, expect } from '@playwright/test';
import LoginData from '../testdata/loginData.json';
import LoginPage from '../Pages/LoginPage';
import AddToCart from '../Pages/addToCart';
import addToCartData from '../testdata/addToCart.json';
import checkoutData from '../testdata/checkout.json'
import checkout from '../Pages/checkout';
import logout from '../Pages/logout';

test("Checkout testcase", async ({page}) => {
    const login = new LoginPage(page);
    const data = LoginData.ValidUsers[0];

    await login.gotoURL();
    await login.Login(data.username, data.password);
    await expect(login.message).toHaveText(data.ExpectedMsg);

    const addToCart = new AddToCart(page);
    const product = addToCartData.products[0];

    await addToCart.gotoURLProduct();
    await addToCart.addProduct(product.productName);
    await expect(addToCart.cartBadge).toHaveText('1');

    await addToCart.openCart();

    await expect(addToCart.cartProductName).toHaveText(product.productName);

    await addToCart.checkoutButton();

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

    const logOut = new logout(page);
    await logOut.logout();


});