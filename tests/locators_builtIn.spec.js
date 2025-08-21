import {test,expect} from '@playwright/test'

test('Built In Locators',async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //if there is any logo in the webpage and we can locate it by alt text attribute value
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //if there is any input field in the webpage and we can locate it by placeholder attribute value
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123')

    //if there is any button in the webpage and we can locate it by role and name
    await page.getByRole('button',{type:'submit'}).click();


    const text = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    console.log(text);
    await expect(page.getByText(text).toBeVisible());

    //page.getByTestId is used to locate elements by their data-testid attribute    
    //await page.getByTestId('test-id').click(); // Example usage, replace 'test-id' with actual test ID
    // Note: Ensure that the element with the specified test ID exists on the page
    // await page.getByTestId('test-id')

    // If you want to locate an element by its label, you can use the following:
    // await page.getByLabel('label-text').click(); // Example usage, replace 'label-text' with actual label text
    // Note: Ensure that the element with the specified label exists on the page
    // await page.getByLabel('label-text')  
   
    


})