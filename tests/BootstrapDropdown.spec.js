import {test, expect} from '@playwright/test'

test('Bootstrap Dropwdown Test', async ({page}) => {

    await page.goto('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html#')
    await page.click('//button[@id="menu1"]')

    //1. Get all the options
    const options = page.locator('//button[@id="menu1"]/following-sibling::ul/li/a')
    await expect(options).toHaveCount(4)

    //2.
    const optionCount = await page.$$('//button[@id="menu1"]/following-sibling::ul/li/a')
    await expect(optionCount.length).toBe(4)

    



})