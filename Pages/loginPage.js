class LoginPage{

    constructor(page)
    {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.LoginButton = page.locator('#login-button');
        this.message = page.locator('//*[@id="header_container"]/div[2]/span');

    }

    async gotoURL(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async Login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.LoginButton.click();
    }
}

export default LoginPage;