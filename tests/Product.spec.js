import {test, expect} from '@playwright/test';
import loginData from '../testdata/loginData.json';
import LoginPage from '../Pages/LoginPage';
import productData from '../testdata/productData.json';
import productPage from '../Pages/productPageroductPage';

test('Product page test cases', async ({page}) => {

    const LoginPage = new loginPage(page);
    const logindata = loginData.ValidUsers[0];

    await LoginPage.gotoURL();
    await LoginPage.Login(logindata.username, logindata.password);

    const ProductPage = new productPage(page);
    const ProductData = productData.Products[0];

    await ProductPage.gotoURLProductPage();
    await expect(ProductPage.pageTitle).toHaveText("Products");

    await ProductPage.addProduct(ProductData.ProductName);
    await ProductPage.removeProduct(ProductData.ProductName);


});