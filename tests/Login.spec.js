import {test, expect} from '@playwright/test';
import loginData from '../testdata/loginData.json';
import loginPage from '../Pages/loginPage';


   //Valid username and valid password
    test(`Login Test Case`, async ({page}) => {

    const login = new loginPage(page);
    const data = loginData.ValidUsers[0];

    await login.gotoURL();
    await login.Login(data.username, data.password);
    await expect((login.message)).toHaveText(data.ExpectedMsg);
    
}); 
