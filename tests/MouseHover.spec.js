import {test, expect} from '@playwright/test'

test('Mousehover test', async ({page}) =>{

    await page.goto('https://testsigma.com/blog/mouse-hover-in-selenium/')

    const Products = await page.locator('//p[text()="Products"]')
    await Products.hover()
    await page.waitForTimeout(5000)




})