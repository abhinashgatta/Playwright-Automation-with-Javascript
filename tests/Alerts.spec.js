import {test, expect} from '@playwright/test'

test('Simple Alert with OK button', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling or //Dialog window handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept(); //click on ok button

    })

    await page.locator('//button[text()="Simple Alert"]').click()
    await page.waitForTimeout(10000)

})


test('Confirmation Dialog Alert with OK and CANCEL button', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling or //Dialog window handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); //close by using ok button
        // await dialog.dismiss(); //close by using cancel button

    })

    await page.locator('//button[text()="Confirmation Alert"]').click()
    await page.waitForTimeout(5000)

    await expect(page.locator('#demo')).toHaveText('You pressed OK!')

})

test('Prompt dialog', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling or //Dialog window handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Test'); //close by using ok button
        // await dialog.dismiss(); //close by using cancel button

    })

    await page.locator('//button[text()="Prompt Alert"]').click()
   
    await expect(page.locator('#demo')).toHaveText('Hello Test! How are you today?')
    await page.waitForTimeout(5000)

})