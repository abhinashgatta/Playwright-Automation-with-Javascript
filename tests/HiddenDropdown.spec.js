import {test, expect} from '@playwright/test'

test('Bootstrap Dropdown', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(3000)

    //Navigate to PIM tab
    await page.locator('//span[text()="PIM"]').click()
    await page.locator('//h5[text()="Employee Information"]/parent::div/following-sibling::div//button[@type="button"]').click()
    




})