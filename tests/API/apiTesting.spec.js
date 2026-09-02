import { test } from '@playwright/test';
import { UserAPI } from '../../Pages/userAPI.js';


//REGISTER
test('POST - Register a New User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    userAPI.generateUser();

    await userAPI.registerUser();
});


//LOGIN
test('POST - Login User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    userAPI.generateUser();

    await userAPI.registerUser();

    await userAPI.loginUser();
});


//GET ALL USERS
test('GET - All Users', async ({ request }) => {

    const userAPI = new UserAPI(request);

    await userAPI.getAllUsers();
});


//GET USER BY USERNAME
test('GET - User By Username', async ({ request }) => {

    const userAPI = new UserAPI(request);

    userAPI.generateUser();

    await userAPI.registerUser();

    await userAPI.getUserByUsername();
});


//PUT
test('PUT - Replace User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    userAPI.generateUser();

    await userAPI.registerUser();

    await userAPI.loginUser();

    await userAPI.replaceUser();
});


//PATCH
test('PATCH - Update User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    userAPI.generateUser();

    await userAPI.registerUser();

    await userAPI.loginUser();

    await userAPI.patchUser();
});


//DELETE
test('DELETE - Delete User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    userAPI.generateUser();

    await userAPI.registerUser();

    await userAPI.loginUser();

    await userAPI.deleteUser();
});
