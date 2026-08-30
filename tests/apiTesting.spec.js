import { test, expect } from '@playwright/test';
 
/*
test('Get All Books API Test', async ({request}) => {
    const respone = await request.get('https://demoqa.com/BookStore/v1/Books');
    console.log(await respone.json());
    expect(respone.status()).toBe(200);
});
*/
const baseURL = 'https://demoqa.com/BookStore/v1';


// ==================== GET ====================

test('GET - 200 - Get All Books', async ({ request }) => {

    const response = await request.get(`${baseURL}/Books`);

    console.log('Status:', response.status());
    console.log('Response:', await response.json());

    expect(response.status()).toBe(200);
});


test('GET - 400 - Bad Request', async ({ request }) => {

    const response = await request.get(`${baseURL}/Books`, {
        headers: {
            'Authorization': 'Invalid Token'
        }
    });

    console.log('Status:', response.status());
    console.log('Response:', await response.text());

    expect(response.status()).toBe(400);
});


test('GET - 500 - Internal Server Error', async ({ request }) => {

    const response = await request.get(
        'https://httpbin.org/status/500'
    );

    console.log('Status:', response.status());

    expect(response.status()).toBe(500);
});


// ==================== POST ====================

test('POST - 200 - Create Book', async ({ request }) => {

    const response = await request.post(`${baseURL}/Books`, {
        data: {
            userId: '5f5c6b3c1c9d440000000000',
            collectionOfIsbns: [
                {
                    isbn: '9781449325862'
                }
            ]
        }
    });

    console.log('Status:', response.status());
    console.log('Response:', await response.text());

    expect(response.status()).toBe(201);
});


test('POST - 400 - Bad Request', async ({ request }) => {

    const response = await request.post(`${baseURL}/Books`, {
        data: {
            userId: '',
            collectionOfIsbns: []
        }
    });

    console.log('Status:', response.status());
    console.log('Response:', await response.text());

    expect(response.status()).toBe(400);
});


test('POST - 500 - Internal Server Error', async ({ request }) => {

    const response = await request.post(
        'https://httpbin.org/status/500'
    );

    console.log('Status:', response.status());

    expect(response.status()).toBe(500);
});