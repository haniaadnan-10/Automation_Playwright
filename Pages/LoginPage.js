import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshotUtil.js';

class loginPage{

    constructor(page)
    {
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.LoginButton = page.locator('#login-button');
        this.message = page.locator('//*[@id="header_container"]/div[2]/span');
        this.errormsg = page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')

    }
    
    async Login(username, password){
        await test.step('After URL open', async() => {
            await attachStepScreenshot(this.page, '01- After URL open');
        });

        await test.step('Enter username', async() => {
            await this.username.fill(username);
            await attachStepScreenshot(this.page, '02 - After username');
        });

        await test.step('Enter Password', async() => {
            await this.password.fill(password);
            await attachStepScreenshot(this.page, '03 - After password');
        });

        await test.step('Click Login', async() => {
            await this.LoginButton.click();
            await attachStepScreenshot(this.page, '04 - After login click');
        });

    }
    
}

export default loginPage;