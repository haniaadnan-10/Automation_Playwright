import {test, expect} from '@playwright/test';

const BASE_URL = 'https://api-testing-postman.vercel.app/api/v1';

const timeStamp = Date.now();

const registerUserData = {
    "fullname": 'Hania',
    "email": `hania${timeStamp}@gmail.com`,
    "username": `hania_${timeStamp}`,
    "password": '12345'
};

const loginData = {
    "username": 'hania23',
    "email": 'hania14@gmail.com',
    "password": 'hania123'
};

async function getAuthToken(request) {
    const response = await request.post(`${BASE_URL}/users/login`,
        {
            data: loginData
        }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log('Response Login: ', responseBody);

    return responseBody.token;

}

//REGISTER A NEW USER
test('POST - Register a new User', async ({request}) => {
    const response = await request.post(`${BASE_URL}/users/register`, 
        {
        data: registerUserData
        }   
    );

    const responeBody = await response.json();

    console.log('Status: ', response.status());
    console.log('Response: ', responeBody);

    expect(response.status()).toBe(201);
});

//LOGIN USER
test('POST - Login User', async ({request}) => {
    const response = await request.post(`${BASE_URL}/users/login`,
        {
            data: loginData
        }
    );

    const responseBody = await response.json();

    console.log('Status: ', response.status());
    console.log('Response: ', responseBody);

    expect(response.status()).toBe(200);
});

//REPLACE USER 
/*
test('PUT - Replace User', async ({request}) => {
    const token = await getAuthToken(request);

    const respone = await request.put(`${BASE_URL}/users/replace-account`,
        {
            headers: 
            {
                Authorization: `Bearer ${token}`
            },
        
            data : 
            {
                "fullname": "Hania",
                "email": "hania20@gmail.com",
                "username": "hania20"
            }
        }  
    );

    const responseBody = await respone.json();

    console.log('Status: ', respone.status());
    console.log('Response: ', responseBody);

    expect(respone.status()).toBe(200);
})*/

//GET ALL USERS
test('GET - All Users', async ({request}) => {
    const response = await request.get(`${BASE_URL}/users/all-users`);

    console.log(await response.json());
    expect(response.status()).toBe(200);

});

//GET USER BY USERNAME
test('GET - User by username', async ({request}) => {
    const response = await request.get(`${BASE_URL}/users/user/hania20`);

    console.log(await response.json());
    expect(response.status()).toBe(200);
});

//DELETE USER
test('DELETE - Delete User', async ({request}) => {
    const token = await getAuthToken(request);

    const response = await request.delete(`${BASE_URL}/users/delete-account`,
        {
            headers:
            {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const responseBody = await response.json();

    console.log('Status: ', response.status());
    console.log('Response: ', responseBody);

    expect(response.status()).toBe(200);
})