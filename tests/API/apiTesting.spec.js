import { test } from '@playwright/test';
import { UserAPI } from '../../Pages/UserApi.js';
import userData from '../../testdata/userData.json';


test('Complete User Flow - Register, Login, Get, PUT, PATCH and Delete', async ({ request }) => {

    const userAPI = new UserAPI(request);

    //Generate User
    userAPI.generateUser();


    //Register
    await userAPI.registerUser();


    //Login
    await userAPI.loginUser();


    //Get All Users
    //await userAPI.getAllUsers();


    //Get User By Username
    await userAPI.getUserByUsername();


    //PUT - Replace User
    await userAPI.replaceUser();


    //PATCH - Update User
    await userAPI.patchUser();


    //DELETE User
    await userAPI.deleteUser();

});