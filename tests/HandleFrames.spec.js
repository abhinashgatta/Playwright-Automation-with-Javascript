import {test, expect} from '@playwright/test'

test('Handle Frames Test', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Total Frames
    const TotalFrames =  page.frames()
    console.log('No. of Frames are : '+TotalFrames.length)

    //Approach 1 : Using Frame Object (name or url)
    
    // If u want to use name attribute
    // const frameName = await page.frame('name') 

    // If u want to use url attribute
    // const frame1 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'}) 
    // await frame1.fill("[name='mytext1']",'Hello Frame1')
    // await page.waitForTimeout(5000)

    //Approach 2: Using Frame Locator
    await page.frameLocator('//frame[@src="frame_1.html"]').locator("[name='mytext1']").fill('Hello Frame1 using Frame Locator')    
    await page.waitForTimeout(5000)

})