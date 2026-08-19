import {test} from '@playwright/test';

class loginPage{

    constructor(page)
    {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.LoginButton = page.locator('#login-button');
        this.message = page.locator('//*[@id="header_container"]/div[2]/span');

    }

    async attachScreenshot(name){
        await test.info().attach(name, {
            body: await this.page.screenshot(),
            contentType: 'image/png',
        });
    }

    async gotoURL(){
        await this.page.goto('https://www.saucedemo.com/');
        await this.attachScreenshot('01 - Login Page Opened');
    }
    

    async Login(username, password){
        await this.username.fill(username);
        await this.attachScreenshot('02 - Enter Username');

        await this.password.fill(password);
        await this.attachScreenshot('02 - Enter Password');

        await this.LoginButton.click();
        await this.attachScreenshot('03 - Click Login');
        
    }

    
}

export default loginPage;