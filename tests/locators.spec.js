// const {expect,test} = require('@playwright/test');

import {expect,test} from '@playwright/test';

test('Locators Test', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');

    //Click on the Login button Property
    // await page.locator('#login2').click();

    await page.click('#login2');

    //provide login username and password
    await page.fill('#loginusername','pavanol');
    // await page.type('#loginusername','pavanol');

    await page.fill("//input[@id='loginpassword']",'test@123')

    //Click on Login button
    await page.click("//button[contains(text(),'Log in')]")

    //Verfiy logout link present or not
    const logoutLink = await page.locator("//a[contains(text(),'Log out')]")

    await expect(logoutLink).toBeVisible();

    await page.close();
    

})
