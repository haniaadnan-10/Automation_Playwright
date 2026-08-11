import {test, expect} from '@playwright/test';
import loginData from '../testdata/loginData.json';
import loginPage from '../Pages/loginPage';
import productData from '../testdata/productData.json';
import productPage from '../Pages/productPage';

productData.Products.forEach((products) => {

test(`Add ${products.ProductName} test cases`, async ({page}) => {

    const LoginPage = new loginPage(page);
    const LoginData = loginData.ValidUsers[0];

    await LoginPage.gotoURL();
    await LoginPage.Login(LoginData.username, LoginData.password);

    const ProductPage = new productPage(page);

    await ProductPage.gotoURLProductPage();
    await expect(ProductPage.pageTitle).toHaveText("Products");

    await ProductPage.addProduct(products.ProductName);
  
});
});