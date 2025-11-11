import {test, expect} from '@playwright/test'

test('Date Picker Test', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const year = "2025"
    const month = "March"
    const date = "15"

    await page.click('#datepicker')
    // Wait for the datepicker popup to appear
    await page.waitForSelector('.ui-datepicker-month')
    await page.waitForSelector('.ui-datepicker-year')

    while(true){
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        
        if(currentYear === year && currentMonth === month){
            break;
        }
        if(Number(currentYear) > Number(year) || 
           (currentYear === year && 
            new Date(`${currentMonth} 1, 2000`).getMonth() > new Date(`${month} 1, 2000`).getMonth())){
            await page.locator("//a[@title='Prev']").click()
        }
        else{
            await page.locator("//a[@title='Next']").click()
        }
    }

    await page.locator(`//a[@class="ui-state-default" and text()="${date}"]`).click()
    await page.waitForTimeout(2000)
})