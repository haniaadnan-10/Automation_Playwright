import { test, expect } from '@playwright/test';
import LoginData from '../testdata/loginData.json';
import LoginPage from '../Pages/LoginPage';
import AddToCart from '../Pages/addToCart';
import addToCartData from '../testdata/addToCart.json';
import addToCart from '../Pages/addToCart';


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

});