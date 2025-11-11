import {test,expect} from '@playwright/test'

test('Drag and Drop Test', async ({page}) => {

    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')

    const frm = page.frameLocator('(//iframe[@class="demo-frame"])[1]')
    const src = frm.getByAltText('The peaks of High Tatras')
    const dest = frm.locator('//div[@class="ui-widget-content ui-state-default ui-droppable"]')

    //Approach 1
    /* await src.hover()
       await page.mouse.down()
       await dest.hover()
       await page.mouse.up()
       await page.waitForTimeout(5000)
    */

    //Approach 2
    await src.dragTo(dest)
    await page.waitForTimeout(5000) 





})