import { expect } from '@playwright/test';

export class UserAPI {

    constructor(request) {
        this.request = request;

        this.baseURL = 'https://api-testing-postman.vercel.app/api/v1';

        this.userData = null;
        this.token = null;
    }


    //Generate dynamic user
    generateUser() {

        const timestamp = Date.now();

        this.userData = {
            fullname: `Hania ${timestamp}`,
            email: `hania${timestamp}@gmail.com`,
            username: `hania_${timestamp}`,
            password: '12345'
        };

        console.log('Initial User:', this.userData);

        return this.userData;
    }


    //REGISTER
    async registerUser() {

        const response = await this.request.post(
            `${this.baseURL}/users/register`,
            {
                data: this.userData
            }
        );

        const responseBody = await response.json();

        console.log('REGISTER STATUS:', response.status());
        console.log('REGISTER RESPONSE:', responseBody);

        expect(response.status()).toBe(201);

        return responseBody;
    }


    //LOGIN
    async loginUser() {

        const response = await this.request.post(
            `${this.baseURL}/users/login`,
            {
                data: {
                    username: this.userData.username,
                    email: this.userData.email,
                    password: this.userData.password
                }
            }
        );

        const responseBody = await response.json();

        console.log('LOGIN STATUS:', response.status());
        console.log('LOGIN RESPONSE:', responseBody);

        expect(response.status()).toBe(200);

        this.token = responseBody.data.accessToken;

        expect(this.token).toBeTruthy();

        console.log('TOKEN:', this.token);

        return responseBody;
    }


    //GET ALL USERS
    async getAllUsers() {

        const response = await this.request.get(
            `${this.baseURL}/users/all-users`
        );

        const responseBody = await response.json();

        console.log('GET ALL USERS STATUS:', response.status());
        console.log('GET ALL USERS RESPONSE:', responseBody);

        expect(response.status()).toBe(200);

        return responseBody;
    }


    //GET USER BY USERNAME
    async getUserByUsername() {

        const response = await this.request.get(
            `${this.baseURL}/users/user/${this.userData.username}`
        );

        const responseBody = await response.json();

        console.log('GET USER STATUS:', response.status());
        console.log('GET USER RESPONSE:', responseBody);

        expect(response.status()).toBe(200);

        return responseBody;
    }


    //PUT - REPLACE USER
    async replaceUser() {

        const timestamp = Date.now();

        const updatedUser = {
            fullname: `Hania Updated ${timestamp}`,
            email: `haniaUpdated${timestamp}@gmail.com`,
            username: `haniaUpdated_${timestamp}`
        };

        const response = await this.request.put(
            `${this.baseURL}/users/replace-account`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`
                },

                data: updatedUser
            }
        );

        const responseBody = await response.json();

        console.log('PUT STATUS:', response.status());
        console.log('PUT RESPONSE:', responseBody);

        expect(response.status()).toBe(200);


        // Update current user data

        this.userData = {
            ...this.userData,
            ...updatedUser
        };

        console.log('User After PUT:', this.userData);

        return responseBody;
    }


    //PATCH - UPDATE USER
    async patchUser() {

        const patchData = {
            fullname: `Hania Patched ${Date.now()}`,
            email: this.userData.email,
            username: this.userData.username
        };

        const response = await this.request.patch(
            `${this.baseURL}/users/update-account`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`
                },

                data: patchData
            }
        );

        const responseBody = await response.json();

        console.log('PATCH STATUS:', response.status());
        console.log('PATCH RESPONSE:', responseBody);

        expect(response.status()).toBe(200);


        //Update current user data

        this.userData = {
            ...this.userData,
            ...patchData
        };

        console.log('User After PATCH:', this.userData);

        return responseBody;
    }


    //DELETE
    async deleteUser() {

        const response = await this.request.delete(
            `${this.baseURL}/users/delete-account`,
            {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }
        );

        const responseBody = await response.json();

        console.log('DELETE STATUS:', response.status());
        console.log('DELETE RESPONSE:', responseBody);

        expect(response.status()).toBe(200);

        return responseBody;
    }
}