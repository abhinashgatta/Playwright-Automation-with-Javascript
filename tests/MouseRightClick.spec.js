import {test,expect} from '@playwright/test'

test('Mouse Right Click Test', async ({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const rightclickbtn = page.locator('//span[text()="right click me"]')
    await rightclickbtn.click({button : 'right'})
    await page.waitForTimeout(5000)

    const liTexts = await page.$$('//ul[@class="context-menu-list context-menu-root"]/li')
    for(const liText of liTexts) {

        console.log(await liText.textContent());
    }
})