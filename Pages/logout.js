class logout{

    constructor(page){
        this.page = page;

        this.menuBtn = page.locator('#react-burger-menu-btn');
        this.logoutBtn = page.locator('#logout_sidebar_link');
        this.allItemsBtn = page.locator('#inventory_sidebar_link');
        this.aboutBtn = page.locator('#about_sidebar_link');
        this.resetBtn = page.locator('#reset_sidebar_link');

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button');

    }

    async logout() {
        await this.menuBtn.click();
        await this.logoutBtn.click();
    }

    async allItemsButton(){
        await this.menuBtn.click();
        await this.allItemsBtn.click();
    }

    async aboutButton(){
        await this.menuBtn.click();
        await this.aboutBtnBtn.click();
    }

    async resetButton(){
        await this.menuBtn.click();
        await this.resetBtnBtn.click();
    }
}

export default logout;