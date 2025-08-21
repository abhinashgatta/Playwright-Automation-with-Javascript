const {expect, test} = require('@playwright/test')

test('Dropdown Tests', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    /* Selecting dropdown options in multiple ways */

    // await page.locator('#country').selectOption({label:'India'}) //by using label keword
    // await page.locator('#country').selectOption({value:'india'}) //by using value keyword
    // await page.locator('#country').selectOption({index:8}) //by using index keyword
    // await page.locator('#country').selectOption('India') //by visible text directly
    // await page.selectOption('#country', 'Brazil') //by visible text
    
    /* Assertions */
    //1. Check number of options in dropdown - Approach 1
    // const options = await page.$$('//select[@id="country"]/option')
    // console.log('Number of options in dropdown:', options.length)
    //  expect(options.length).toBe(10)

    //2. Check number of options in dropdown - Approach 2
    // const option = await page.locator('//select[@id="country"]/option')
    // await expect(option).toHaveCount(10)

    //3. Check presence of value in dropdown - Approach 1
    // const content = await page.locator('//select[@id="country"]/option').allTextContents()
    //  expect(content.includes('India')).toBeTruthy()


     //4. Check presence of value in the dropdown - using loop statement - Approach 2
/*
    const optionsText = await page.$$('//select[@id="country"]/option')
    let status = false
    for (const option of optionsText){

        const text = await option.textContent()
        // console.log("Option Text Contents:", text)

        if(text.includes('China')){

            status = true
            break;
        }
    }

    expect(status).toBeTruthy()
    */


    //5) Select the dropwdown option by using loop statement

     const optionsText = await page.$$('//select[@id="country"]/option')
     for (const option of optionsText){

        const value = await option.textContent()
        // console.log("Option Text Contents:", text)

        if(value.includes('China')){
            const valueToSelect = await option.getAttribute('value')
            await page.selectOption('#country', valueToSelect)
            break;
        }
    }
    
    await page.waitForTimeout(5000)


})