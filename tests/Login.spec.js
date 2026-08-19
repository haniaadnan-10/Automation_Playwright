import {test, expect} from '@playwright/test';
import loginData from '../testdata/loginData.json';
import loginPage from '../Pages/loginPage';
import logout from '../Pages/logout';

test.describe('Login with valid credentials', ()=> {
   //Valid username and valid password
    test(`Login Test Case`, async ({page}) => {

    const login = new loginPage(page);
    const data = loginData.ValidUsers[0];

    await test.step('Open Login Page', async() => {
        await login.gotoURL();
    });

    await test.step('Enter credentials and Login', async() => {
    await login.Login(data.username, data.password);
    });

    await test.step('Welcome Verfiy Message', async() => {
    await expect((login.message)).toHaveText(data.ExpectedMsg);
    await login.attachScreenshot('05 - Welcome msg should be displayed')
    });
    

    //const logOut = new logout(page);
    //await logOut.logout();
    
}); 
});
