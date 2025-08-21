import {expect, test} from '@playwright/test'

test('Multiselect dropown Tests', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Selecting multiple options in a multiselect dropdown
    // await page.selectOption('#colors', ['Red', 'Green'])

    //Assertions
    //1) Check number of options in multiselect dropdown
    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(7)

    //2)check number of options in multiselect dropdown using JS Array- Approach 2
    // const options = await page.$$('#colors option')
    // console.log(options.length)
    // expect(options.length).toBe(7)
    
    //3) Check presence of value in multiselect dropdown
   const content  = await page.locator('#colors').textContent()
   expect(content.includes('Black')).toBeTruthy()
   


    await page.waitForTimeout(5000)

    
})