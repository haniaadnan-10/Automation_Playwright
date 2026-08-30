// fixtures/testSetup.j

import { test as base } from '@playwright/test';
import BasePage from '../Pages/BasePage';
import { attachScreenshotAfterEach } from '../utilities/screenshotUtil';

const APP_URL = 'https://www.saucedemo.com/';

export const test = base.extend({
    pageSetup: [
        async ({ page }, use, testInfo) => {
            const basePage = new BasePage(page);
            await basePage.navigate(APP_URL);
            
            // Execute test body
            await use(page);

            // Guaranteed afterEach screenshot attachment
            await attachScreenshotAfterEach(page, testInfo);
        },
        { auto: true },
    ],
});

export { expect } from '@playwright/test';
/*
const APP_URL = 'https://www.saucedemo.com/';

export const test = base.extend ({
    pageSetup: [
        async ({page}, use) => {
            const basePage = new BasePage(page);
            await basePage.navigate(APP_URL);
            await use();
        },
        {auto: true},
    ],
});

test.afterEach(async ({page}, testInfo) => {
    await attachScreenshotAfterEach(page, testInfo);
})

export {expect} from '@playwright/test';
*/