import {test,expect} from '@playwright/test'

test('Mouse Right Click Test', async ({page})=>{


    await page.goto('https://gotranscript.com/text-compare')
    const leftTextBox =  await page.getByPlaceholder('Paste one version of the text here.').fill("Welcome to Automation")
    const rightTextBox = page.getByPlaceholder('Paste another version of the text here.')

    //For Mac OS use 'Meta' key instead of 'Control' key
    //For Windows use 'Control' key instead of 'Meta' key
    
    //Perform Ctrl +A operation to select all the text in the left text box
    await page.keyboard.press('Meta+A')
    
    //Perform Ctrl +C operation to copy the selected text from the left text box
    await page.keyboard.press('Meta+C')
    
    //Perform Tab operation to move the focus to the right text box
    await page.keyboard.press('Tab')

    await rightTextBox.click()
    
    //Perform Ctrl +V operation to paste the copied text in the right text box
    await page.keyboard.press('Meta+V')

    await page.waitForTimeout(5000)

})