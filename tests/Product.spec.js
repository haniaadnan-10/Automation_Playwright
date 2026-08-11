import {test, expect} from '@playwright/test';
import loginData from '../testdata/loginData.json';
import LoginPage from '../Pages/loginPage';
import productData from '../testdata/productData.json';
import productPage from '../Pages/productPage';;

test('Product page test cases', async ({page}) => {

    const LoginPage = new loginPage(page);
    const LoginData = loginData.ValidUsers[0];

    await LoginPage.gotoURL();
    await LoginPage.Login(LoginData.username, LoginData.password);

    const ProductPage = new productPage(page);
    const ProductData = productData.Products[0];

    await ProductPage.gotoURLProductPage();
    await expect(ProductPage.pageTitle).toHaveText("Products");

    await ProductPage.addProduct(ProductData.ProductName);
    await ProductPage.removeProduct(ProductData.ProductName);


});