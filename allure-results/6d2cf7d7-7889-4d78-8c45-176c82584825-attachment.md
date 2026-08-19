# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SmokeTesting\smokeTesting.spec.js >> Smoke Test - Complete Critical Flow
- Location: tests\SmokeTesting\smokeTesting.spec.js:11:5

# Error details

```
TypeError: login.login is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import LoginData from '../../testdata/loginData.json';
  3  | import LoginPage from '../../Pages/loginPage';
  4  | import AddToCart from '../../Pages/addToCart';
  5  | import AddToCartData from '../../testdata/addToCart.json';
  6  | import CheckoutData from '../../testdata/checkout.json';
  7  | import Checkout from '../../Pages/checkout';
  8  | import Logout from '../../Pages/logout';
  9  |  
  10 |  
  11 | test('Smoke Test - Complete Critical Flow', async ({ page }) => {
  12 |  
  13 |     //login
  14 |     const login = new LoginPage(page);
  15 |     const loginData = LoginData.ValidUsers[0];
  16 |  
  17 |     await login.gotoURL();
> 18 |     await login.login(loginData.username, loginData.password);
     |                 ^ TypeError: login.login is not a function
  19 |     await expect(login.message).toHaveText(loginData.expectedMsg);
  20 |  
  21 |     //add to cart functionality
  22 |     const addToCart = new AddToCart(page);
  23 |     const product = AddToCartData.products[0];
  24 |  
  25 |     await addToCart.gotoURLProduct();
  26 |     await addToCart.addProduct(product.productName);
  27 |     await expect(addToCart.cartBadge).toHaveText('1');
  28 |  
  29 |     await addToCart.openCart();
  30 |     await expect(addToCart.cartProductName).toHaveText(product.productName);
  31 |     await addToCart.checkoutButton();
  32 |  
  33 |     //checkout page
  34 |     const checkOut = new Checkout(page);
  35 |     const info = CheckoutData.validInformation[0];
  36 |  
  37 |     await expect(checkOut.pageTitle).toHaveText('Checkout: Your Information');
  38 |     await checkOut.enterInformation(info.firstName, info.lastName, info.postalCode);
  39 |     await checkOut.continueButton();
  40 |  
  41 |     await checkOut.verifyOverview(product);
  42 |     await checkOut.finishButton();
  43 |     await checkOut.verifyOrderComplete();
  44 |  
  45 |     //logout
  46 |     const logout = new Logout(page); 
  47 |     await logout.logout(); 
  48 | });
```