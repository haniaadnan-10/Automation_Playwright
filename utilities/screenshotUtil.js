import {test} from '@playwright/test';

export async function attachStepScreenshot(page, name) {
    if (!page.isClosed()) {
        await test.info().attach(name, {
            body: await page.screenshot(),
            contentType: 'image/png',
        });
    }
}

export async function attachScreenshotAfterEach(page, testInfo) {
    if (!page.isClosed()) {
        await testInfo.attach('Final Screenshot', {
            body: await page.screenshot(),
            contentType: 'image/png',
        });

        if (testInfo.status !== testInfo.expectedStatus) {
            await testInfo.attach('Failure Screenshot', {
                body: await page.screenshot(),
                contentType: 'image/png',
            });
        }
    }
}
/*
export async function attachStepScreenshot(page, testInfo, name) {
    if (!page.isClosed()) {
        await testInfo.attach(name, {
            body: await page.screenshot(),
            contentType: 'image/png',
        });
    }
}

export async function attachScreenshotAfterEach(page, testInfo) {
    if (!page.isClosed()) {
        await testInfo.attach('Final Screenshot', {
            body: await page.screenshot(),
            contentType: 'image/png',
        });

        if (testInfo.status !== testInfo.expectedStatus) {
            await testInfo.attach('Failure Screenshot', {
                body: await page.screenshot(),
                contentType: 'image/png',
            });
        }
    }
}

/*
export async function attachStepScreenshot(page, name){
    await test.info().attach(name, {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
}

export async function attachScreenshotAfterEach(page, testInfo){
    await testInfo.attach('Final Screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });

    if(testInfo.status !== testInfo.expectedStatus) {
        await testInfo.attach('Failure Screenshot', {
            body: await page.screenshot(),
            contentType: 'image/png',
        });
    }
}*/