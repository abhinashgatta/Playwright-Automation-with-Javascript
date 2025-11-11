import {test,expect} from '@playwright/test'

test('Mouse double click event test', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const copyText = page.locator('//button[text()="Copy Text"]');
// to perform normal doubtle click
    copyText.dblclick();

// to perform normal doubtle click with right click
    copyText.dblclick({button: 'right', delay: 100});

    const f2 = await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)

})