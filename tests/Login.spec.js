import { test, expect } from '../fixtures/testSetup.js';
import loginData from '../testdata/loginData.json';
import loginPage from '../Pages/loginPage';

test.describe('Login Test Case - Positive Test Cases', ()=> {
   //Valid username and valid password
   loginData.ValidUsers.forEach((users) => {
        test(`Login with Valid Username: ${users.username}`, async({page}) => {

            const login = new loginPage(page);
            const data = users;

            await test.step(`'Enter Username: ${users.username} and Password: ${users.password}`, async() => {
                await login.Login(
                    data.username, 
                    data.password);
            });

            await test.step('Login Successful', async() => {
                await expect((login.message)).toHaveText(data.ExpectedMsg);
            });
        })
   })
}); 

test.describe('Login Test Case - Negative Test Cases', ()=> {
   //Valid username and valid password

   loginData.InvalidUser.forEach((user) => {
    test(`Login with Invalid Username: ${user.username} and Password: ${user.password}`, async ({page}) => {

        const login = new loginPage(page);
        const data = user;

        await test.step(`Login credentials`, async() => {
            await login.Login(
                data.username,
                data.password
            );
        });

        await test.step('Login not Successful', async() => {
            await expect((login.errormsg)).toHaveText(data.ExpectedMsg);
        })
    });
   });
   
   test("Enter only spaces in username", async ({page}) => {

        const login = new loginPage(page);
        const data = loginData.InvalidUser[2];

        await test.step('Enter credentials and Login', async() => {
            await login.Login(data.username, data.password); 
        });

        await test.step('Error Message', async() => {
            await expect((login.errormsg)).toHaveText(data.ExpectedMsg);
        });

    });

    test("Enter only spaces in password", async ({page}) => {

        const login = new loginPage(page);
        const data = loginData.InvalidUser[3];

        await test.step('Enter credentials and Login', async() => {
            await login.Login(data.username, data.password); 
        });

        await test.step('Error Message', async() => {
            await expect((login.errormsg)).toHaveText(data.ExpectedMsg);
        });
    });
}); 
