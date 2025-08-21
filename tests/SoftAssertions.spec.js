import {expect, test} from '@playwright/test'

test('Soft Assertions Test', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html')

    //Hard Assertions
    // await expect(page).toHaveTitle('STORE')
    // await expect(page).toHaveURL('https://demoblaze.com/index.html')
    // await expect(page.locator('//a[contains(text(),"PRODUCT STORE")]')).toBeVisible()

    //Soft Assertions
    await expect.soft(page).toHaveTitle('STORE1212')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(page.locator('//a[contains(text(),"PRODUCT STORE")]')).toBeVisible()

    

})