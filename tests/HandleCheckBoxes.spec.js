import {expect, test} from '@playwright/test'

test('Handle CheckBoxes', async ({page}) => {


    await page.goto('https://formstone.it/components/checkbox/')
    // Maximize window (simulate by setting a large viewport)
    await page.setViewportSize({ width: 1366, height: 768 });

    //Single Checkbox

    //1st approach
    // await page.locator('//input[@id="checkbox-2"]').check()
    await page.locator('//label[@for="checkbox-2"]').check()
    await page.waitForTimeout(2000)
    //2nd approach
    // await page.check('//input[@id="checkbox-2"]')

    /* 
    In most testing scenarios where you simply need to verify the checked state, 
    await expect(locator).toBeChecked() is the preferred and 
    more idiomatic Playwright approach. Use isChecked() 
    when you need to retrieve the boolean state for custom logic or conditional actions. 
    */
    await expect(page.locator('//input[@id="checkbox-2"]')).toBeChecked()
    expect(await page.locator('//input[@id="checkbox-2"]').isChecked()).toBeTruthy()

    //This will check whether the element is enabled or disabled and return true or false
    //1st approach
    // expect(await page.locator('//input[@id="checkbox-3"]').isDisabled()).toBeTruthy()
    
    //2nd approach
    expect(await page.locator('//input[@id="checkbox-3"]')).toBeDisabled()


    //Multiple Checkboxes

    const checkBoxes = [
        '//input[@id="checkbox-2"]',
        // '//input[@id="checkbox-4"]' 
        // '//label[@class="fs-checkbox-label fs-light"]'
        ]

    //For loop to check multiple checkboxes    
    for(const checkBox of checkBoxes){

       await page.locator(checkBox).check()
    
    }

    await page.waitForTimeout(2000)
    
    //For loop to uncheck multiple checkboxes if selected
    for(const checkBox of checkBoxes){

       if(await page.locator(checkBox).isChecked()) 
        {
            await page.locator(checkBox).uncheck()
        } 
    }


})