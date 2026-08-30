import {test} from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshotUtil';

class logout{

    constructor(page){
        this.page = page;

        this.menuBtn = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');

        this.loginBtn = page.locator('#login-button');

    }

    async clickMenuBtn() {
        await test.step('Menu Button', async() => {
            await this.menuBtn.click();

            //await expect(this.logoutBtn).toBeVisible();


            await attachStepScreenshot(this.page, 'Sidebar Menu Opened.');
        });
    }

    async logout() {
        await test.step('Logout Functionality', async() => {
            await this.logoutBtn.click();

            await attachStepScreenshot(this.page, 'Logout Successful');
        });  
    }

}

export default logout;