import { test, expect } from '@playwright/test';
 
test('Get All Books API Test', async ({request}) => {
    const respone = await request.get('https://demoqa.com/BookStore/v1/Books');
    console.log(await respone.json());
    expect(respone.status()).toBe(200);
});