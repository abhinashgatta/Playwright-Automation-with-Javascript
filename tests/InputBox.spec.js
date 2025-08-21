import {expect, test} from '@playwright/test'

test('Handle Input Box', async ({page}) => {

    await page.goto('https://demoqa.com/text-box')

    await expect(page.getByPlaceholder('Full Name')).toBeVisible()
    await expect(page.getByPlaceholder('Full Name')).toBeEmpty()
    await expect(page.getByPlaceholder('Full Name')).toBeEnabled()
    await expect(page.getByPlaceholder('Full Name')).toBeEditable()
    
    await page.fill('//input[@id="userName"]','Abhinash')

    await page.waitForTimeout(2000)
    

})