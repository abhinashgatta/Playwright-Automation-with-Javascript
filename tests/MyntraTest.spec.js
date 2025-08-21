import {expect, test} from '@playwright/test'

test('Flipkart Login Test', async ({page}) => {

    await page.goto('https://www.myntra.com/')

    //Mouse hover on Men link
    await page.hover('(//a[@href="/shop/men"])[1]')

    await page.locator('(//a[@href="/men-tshirts"])[1]').click()
    await page.waitForTimeout(2000)

    const results = await page.$$('//ul[@class="results-base"]/li//img')
    for(const result of results){
        const title = await result.getAttribute('title')
        console.log(title)
    }
})
