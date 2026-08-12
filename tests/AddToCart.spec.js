import { test, expect } from '@playwright/test';
import LoginData from '../testdata/loginData.json';
import LoginPage from '../Pages/LoginPage';
import AddToCart from '../Pages/addToCart';
import addToCartData from '../testdata/addToCart.json';
import addToCart from '../Pages/addToCart';
import logout from '../Pages/logout';

/*
//All products tested separately
addToCartData.products.forEach((product) => {

    test(`Add ${product.productName} test case`, async ({ page }) => {

        const login = new LoginPage(page);
        const data = LoginData.ValidUsers[0];
        await login.gotoURL();
        await login.Login(data.username, data.password);
        await expect(login.message).toHaveText(data.ExpectedMsg);


        const AddToCart = new addToCart(page);

        await AddToCart.gotoURLProduct();
        await AddToCart.addProduct(product.productName);

        await expect(AddToCart.cartBadge).toHaveText('1');
        await AddToCart.openCart();

        await expect(AddToCart.cartProductName).toHaveText(product.productName);

        await AddToCart.checkoutButton();

    });

});*/

//multiple products added at once
test('Multiple products added', async ({page}) => {

    const loginPage = new LoginPage(page);
    const data = LoginData.ValidUsers[0];

    await loginPage.gotoURL();
    await loginPage.Login(data.username, data.password);
    await expect(loginPage.message).toHaveText(data.ExpectedMsg);

    const Addtocart = new addToCart(page);

    for(const product of addToCartData.products){
        await Addtocart.addProduct(product.productName);
    }

    //verfiy cart badge
    await expect(Addtocart.cartBadge).toHaveText(String(addToCartData.products.length));
    await Addtocart.openCart();

    const logOut = new logout(page);
    await logOut.logout();
})