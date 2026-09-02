import { test, expect } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshotUtil.js';
import LoginData from '../testdata/LoginData.json';
import LoginPage from '../Pages/LoginPage.js';
import AddToCart from '../Pages/AddToCart.js';
import addToCartData from '../testdata/AddToCart.json';
import checkoutData from '../testdata/Checkout.json'
import checkout from '../Pages/Checkout.js';

test.describe('Checkout Functionality - Positive Test Cases', () => {

    test("Checkout with Valid Information", async ({page}) => {

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
        
        await test.step('Verify Product added to cart', async() => {
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

        await attachStepScreenshot(page, 'Thankyou Page');  
    });

    test("Checkout with One Product", async ({page}) => {

        const login = new LoginPage(page);
        const data = LoginData.ValidUsers[0];

        await test.step('Enter credentials and Login', async() => {
            await login.Login(data.username, data.password); 
        });

        const addToCart = new AddToCart(page);
        const product = addToCartData.products[3];

        await test.step(`Add Product - ${product.productName}`, async() => {
            await addToCart.addProduct(product.productName);
        });
        
        await test.step('Verify Cart Badge', async() => {
             await expect(addToCart.cartBadge).toHaveText('1');
        });
       
        await test.step('Open Cart Page', async() => {
            await addToCart.openCart();
        });
        
        await test.step('Verify Product added to cart', async() => {
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

        await attachStepScreenshot(page, 'Thankyou Page'); 
    });

    test("Checkout with All Products", async ({page}) => {

        const login = new LoginPage(page);
        const data = LoginData.ValidUsers[0];

        await test.step('Enter credentials and Login', async() => {
            await login.Login(data.username, data.password); 
        });

        const addToCart = new AddToCart(page);

        await test.step('Add All Products', async () => {
        for (const product of addToCartData.products) {
            await addToCart.addProduct(product.productName);
        }
        });

        await test.step('Verify Cart Badge', async () => {
            await expect(addToCart.cartBadge)
            .toHaveText(String(addToCartData.products.length));
        });
       
        await test.step('Open Cart Page', async() => {
            await addToCart.openCart();
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

            for (let i = 0; i < addToCartData.products.length; i++) {

                const product = addToCartData.products[i];

                await expect(checkOut.productName.nth(i))
                .toHaveText(product.productName);

                await expect(checkOut.productDescription.nth(i))
                .toHaveText(product.productDescription);

                await expect(checkOut.productPrice.nth(i))
                .toHaveText(product.productPrice);

                await expect(checkOut.quantity.nth(i))
                .toHaveText('1');
            }
    
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

        await attachStepScreenshot(page, 'Thankyou Page');  
    });

    test("Cancel Checkout Without Entering Information", async ({page}) => {

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
        
        await test.step('Verify Product added to cart', async() => {
            await expect(addToCart.cartProductName).toHaveText(product.productName);
        });
        
        await test.step('Checkout Button', async() => {
            await addToCart.checkoutButton();
        });

        const checkOut = new checkout(page);
        
        await test.step('Click on Cancel Button without adding any information', async() => {
            await checkOut.cancelButton();

            await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
        });
    });

    test("Verify Final Total", async ({ page }) => {

        const login = new LoginPage(page);
        const data = LoginData.ValidUsers[0];

        await test.step('Enter credentials and Login', async () => {
            await login.Login(data.username, data.password);
        });

        const addToCart = new AddToCart(page);
        const products = addToCartData.products.slice(0, 3);

        await test.step('Add Multiple Products', async() => {
            for (const product of products) {
                await addToCart.addProduct(product.productName);
            };
        });

        await test.step('Open Cart Page', async () => {
            await addToCart.openCart();
        });

        await test.step('Proceed to Checkout', async () => {
            await addToCart.checkoutButton();
        });

        const checkOut = new checkout(page);
        const info = checkoutData.validInformation[0];

        await test.step('Enter Checkout Information', async () => {
            await checkOut.EnterInformation(
                info.firstName,
                info.lastName,
                info.postalCode
            );
        });

        await test.step('Continue to Checkout Overview', async () => {
            await checkOut.continueButton();
        });

        await test.step('Verify Final Total', async () => {
        //Calculate total of all products
            let expectedItemTotal = 0;

            for (const product of products) {
                expectedItemTotal += parseFloat(
                    product.productPrice.replace('$', '')
                );
}

            // Get tax from checkout page
            const taxText = await checkOut.tax.textContent();
            const tax = parseFloat(taxText.replace('Tax: $', ''));

            // Get final total from checkout page
            const totalText = await checkOut.total.textContent();
            const actualFinalTotal = parseFloat(
                totalText.replace('Total: $', '')
            );

            const expectedFinalTotal = expectedItemTotal + tax;

            expect(actualFinalTotal).toBeCloseTo(expectedFinalTotal, 2);
        });
    });
});

test.describe('Checkout Functionality - Negative Test Cases',() => {

    test("Checkout with Empty First Name", async ({page}) => {

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
        
        await test.step('Verify Product added to cart', async() => {
            await expect(addToCart.cartProductName).toHaveText(product.productName);
        });
        
        await test.step('Checkout Button', async() => {
            await addToCart.checkoutButton();
        });

        const checkOut = new checkout(page);
        const info = checkoutData.validInformation[0];

        await test.step('Enter Valid Information', async() => {
            await checkOut.EnterInformation('', info.lastName, info.postalCode);
        });
        
        await test.step('Continue Button', async() => {
            await checkOut.continueButton();
        });

        await test.step('First Name required', async() => {
            await expect(checkOut.firstNameReqMsg).toHaveText('Error: First Name is required');
        });   
    });

    test("Checkout with Empty Last Name", async ({page}) => {

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
        
        await test.step('Verify Product added to cart', async() => {
            await expect(addToCart.cartProductName).toHaveText(product.productName);
        });
        
        await test.step('Checkout Button', async() => {
            await addToCart.checkoutButton();
        });

        const checkOut = new checkout(page);
        const info = checkoutData.validInformation[0];

        await test.step('Enter Valid Information', async() => {
            await checkOut.EnterInformation(info.firstName, '' , info.postalCode);
        });
        
        await test.step('Continue Button', async() => {
            await checkOut.continueButton();
        });

        await test.step('Last Name required', async() => {
            await expect(checkOut.lastNameReqMsg).toHaveText('Error: Last Name is required');
        });   
    });

    test("Checkout with Empty Postal Code", async ({page}) => {

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
        
        await test.step('Verify Product added to cart', async() => {
            await expect(addToCart.cartProductName).toHaveText(product.productName);
        });
        
        await test.step('Checkout Button', async() => {
            await addToCart.checkoutButton();
        });

        const checkOut = new checkout(page);
        const info = checkoutData.validInformation[0];

        await test.step('Enter Valid Information', async() => {
            await checkOut.EnterInformation(info.firstName, info.lastName, '');
        });
        
        await test.step('Continue Button', async() => {
            await checkOut.continueButton();
        });

        await test.step('Postal Code required', async() => {
            await expect(checkOut.postalCodeReqMsg).toHaveText('Error: Postal Code is required');
        });   
    });

    test("Enter Alphabets in Postal Code", async ({page}) => {

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
        
        await test.step('Verify Product added to cart', async() => {
            await expect(addToCart.cartProductName).toHaveText(product.productName);
        });
        
        await test.step('Checkout Button', async() => {
            await addToCart.checkoutButton();
        });

        const checkOut = new checkout(page);
        const info = checkoutData.invalidInformation[0];

        await test.step('Enter Valid Information', async() => {
            await checkOut.EnterInformation(info.firstName, info.lastName, info.postalCode);
        });
        
        await test.step('Continue Button', async() => {
            await checkOut.continueButton();
        });

        await test.step('Verify Checkout Overview Page', async() => {
            await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

            await attachStepScreenshot(page, 'It should not have redirected to Overview Page but still it does.')
        }); 
    });

    test("Checkout with all fields empty", async ({page}) => {

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
        
        await test.step('Verify Product added to cart', async() => {
            await expect(addToCart.cartProductName).toHaveText(product.productName);
        });
        
        await test.step('Checkout Button', async() => {
            await addToCart.checkoutButton();
        });

        const checkOut = new checkout(page);
        const info = checkoutData.validInformation[0];

        await test.step('Enter Valid Information', async() => {
            await checkOut.EnterInformation('', '', '');
        });
        
        await test.step('Continue Button', async() => {
            await checkOut.continueButton();
        });

        await test.step('PAll Fields Required', async() => {
            await expect(checkOut.allFieldsEmptyMsg).toHaveText('Error: First Name is required');
        });   
    });

})
