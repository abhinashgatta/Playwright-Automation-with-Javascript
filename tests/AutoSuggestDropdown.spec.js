import { test, expect } from '@playwright/test'

test('Autosuggest Dropdwon Test', async ({ page }) => {

    await page.goto('https://www.redbus.in/')
    //Maximize window (simulate by setting a large viewport)        
    await page.setViewportSize({ width: 1366, height: 768 });

    // await page.locator("(//div[contains(@class,'srcDestWrapper') and @role='button'])[1]").focus()
    await page.waitForTimeout(2000)
    await page.locator("(//div[contains(@class,'srcDestWrapper') and @role='button'])[1]").click()
    await page.waitForTimeout(2000)

    await page.keyboard.type('Hyderabad')
    await page.waitForTimeout(2000)
    await page.waitForSelector('//div[contains(@class,"searchCategory")]/div[@role="option"]//div[contains(@class,"listHeader")]')
    const fromCityOptions = await page.$$('//div[contains(@class,"searchCategory")]/div[@role="option"]//div[contains(@class,"listHeader")]')

    //div[contains(@class,'searchCategory')]/div[@role='option']//div[contains(@class,'listHeader')]


    const options = page.locator('//div[contains(@class,"searchCategory")]/div[@role="option"]//div[contains(@class,"listHeader")]');
    const count = await options.count();
    for (let i = 0; i < count; i++) {
        const value = await options.nth(i).textContent();
        console.log(value);
        if (value && value.includes('Hyderabad')) {
            await options.nth(i).click();
            break;
        }
    }

    await page.waitForTimeout(2000)
})