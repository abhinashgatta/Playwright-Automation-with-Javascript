import {expect,test} from '@playwright/test'

test('HandleInnerFrame Test', async ({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'})
    const childFrames = frame3.childFrames()
    console.log('No. of Child Frames are : '+childFrames.length)

    childFrames[0].locator('#i6').check()
    await page.waitForTimeout(5000)

})