import {test,expect} from '@playwright/test'

test('Assertions Test', async ({page}) => {

    await page.goto('https://www.myntra.com/')

    //Check Page has URL

    await expect(page).toHaveURL('https://www.myntra.com/')

    //Check Page has Title
    const title ='Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra'
    await expect(page).toHaveTitle(title)

    //Check Element is Visible or not
    await expect(page.locator('(//a[text()="Men"])[1]')).toBeVisible()

    //Check Element is Enabled or not 
    //Check Element is Disabled or not 
    // await expect(page.locator('(//a[text()="Men"])[1]')).toBeEnabled()
    // await expect(page.locator('(//a[text()="Men"])[1]')).toBeDisabled()

     //Mouse hover on Men link
    await page.hover('(//a[@href="/shop/men"])[1]')
    await page.locator('(//a[@href="/men-tshirts"])[1]').click()
    await page.waitForTimeout(2000)
    //Check Radio/Checkbox is Selected or Checked or not
    await (page.locator('//*[@value="Tshirts"]/following-sibling::div')).click()
    await page.waitForTimeout(2000)
    await expect(page.locator('//*[@value="Tshirts"]/following-sibling::div')).toBeChecked()


    //expect(locator).toHaveAttribute('') Check Element has Attribute or not
    await expect(await page.locator('//li[contains(text(),"Next")]')).toHaveAttribute('class','pagination-next')

    //expect(locator).toHaveText('') Check Element has exact Text value or not
    await expect(await page.locator('//span[text()="Home"]')).toHaveText('Home')

    //expect(locator).toContainText('') Check Element has Partial Text or not
    await expect(await page.locator('//span[text()="Home"]')).toContainText('Hom')

    //expect(locator).toHaveValue('') Check Input value after entering in the input box
    // await page.locator('//span[text()="Home"]').fill('test')
    // await expect(await page.locator('//span[text()="Home"]')).toHaveValue('test')   

    //Check Element has Count or not
    const images = await page.locator('img')
    await expect(images).toHaveCount(54)

    // Negative Assertions
    await expect(page).not.toHaveURL('https://www.myntra.com/')


})