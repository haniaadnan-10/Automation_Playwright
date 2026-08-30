import { test, expect } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshotUtil.js';
import LoginData from '../testdata/loginData.json';
import LoginPage from '../Pages/loginPage.js';
import addToCartData from '../testdata/addToCart.json';
import addToCart from '../Pages/addToCart';


test.describe('Add to Cart - Positive Test Cases', () => {
    //All products tested separately
    addToCartData.products.forEach((product) => {

    test(`Add ${product.productName} test case`, async ({ page }) => {

        const login = new LoginPage(page);
        const data = LoginData.ValidUsers[0];

        await test.step('Enter credentials and Login', async() => {
            await login.Login(data.username, data.password); 
        });

        const AddToCart = new addToCart(page);

        await test.step(`Product - ${product.productName}`, async() => {
            await AddToCart.addProduct(product.productName);
        });
        
        await test.step('Verify Cart Badge', async() => {
            await expect(AddToCart.cartBadge).toHaveText('1');
        });

        await test.step('Open Cart Page', async() => {
            await AddToCart.openCart();
        });
        
        test.step('Verify Product added to cart', async() => {
            await expect(AddToCart.cartProductName).toHaveText(product.productName);
        });

        await test.step('Checkout Button', async() => {
            await AddToCart.checkoutButton();
        });  
    });
});

    test('Multiple products added at once', async ({page}) => {

        const loginPage = new LoginPage(page);
        const data = LoginData.ValidUsers[0];
        
        await test.step('Enter credentials and Login', async() => {
            await loginPage.Login(data.username, data.password);
        });
        
        const Addtocart = new addToCart(page);

        await test.step('Add Products', async() => {
            for(const product of addToCartData.products){
            await Addtocart.addProduct(product.productName);
            };
        });

        await test.step('Verfiy Cart Bage', async() => {
            //verfiy cart badge
            await expect(Addtocart.cartBadge).toHaveText(String(addToCartData.products.length));
        });

        await Addtocart.openCart();

        await attachStepScreenshot(page,'Checkout Page should be visible and all the product added to the cart.');
    });
});

test.describe('Add to Cart - Negative Test Cases', () => {

    test('Open cart without adding products', async ({ page }) => {

        const login = new LoginPage(page);
        const data = LoginData.ValidUsers[0];

        await test.step('Enter credentials and Login', async () => {
            await login.Login(data.username, data.password);
        });

        const AddToCart = new addToCart(page);

        await test.step('Open Cart Page', async () => {
            await AddToCart.openCart();
        });

        await test.step('Verify Cart Page is Opened', async () => {
            await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
        });
    });


    test('Access cart without login', async ({ page }) => {

        await test.step('Access Cart Without Login', async () => {
            await page.goto('https://www.saucedemo.com/cart.html');
        });

        await test.step('Verify User is Redirected to Login', async () => {
            await expect(page).toHaveURL('https://www.saucedemo.com/');
            await attachStepScreenshot(page, 'Redirected to Login Page');
        });
    });

    test("Attempt to add the same product twice", async ({page}) => {

        const login = new LoginPage(page);
        const data = LoginData.ValidUsers[0];

        await test.step('Enter credentials and Login', async() => {
            await login.Login(data.username, data.password);
        });

        const AddToCart = new addToCart(page);
        const product = addToCartData.products[1];

        await test.step(`Add Product - ${product.productName}`, async() => {
            await AddToCart.addProduct(product.productName);
        });

        await test.step('Verify Product Added', async() => {
            await expect(AddToCart.cartBadge).toHaveText('1');
        });

        await test.step(`Attempt to Add Same Product Again - ${product.productName}`, async() => {
            const productLocator = AddToCart.product
                .filter({hasText: product.productName});
            const button = productLocator.locator('button.btn_inventory');
            await attachStepScreenshot(page, 'Same Product');

            //After first addition, SauceDemo changes the button to "Remove"
            await expect(button).toHaveText('Remove');

            //Second click attempts to interact with the same product again
            await button.click();
        });

        await test.step('Verify Product Was Not Duplicated', async() => {
            await expect(AddToCart.cartBadge).toHaveCount(0);
            await attachStepScreenshot(page, 'Product to have Add to cart button.');
        });

    });
});



