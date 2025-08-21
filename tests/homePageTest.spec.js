const {test,expect}=require('@playwright/test');

test('Home Page Test', async({page})=>{

    //Navigate to the demo blaze url
   await page.goto('https://demoblaze.com/index.html');
 
   //Print the Title of the Page

   const pageTitle = page.title();
   console.log('Page Title is: '+pageTitle);

   //Verify the Title of the Page

   await expect(page).toHaveTitle('STORE');

   const pageUrl = page.url();
   console.log('Page URL is :'+pageUrl);

   await expect(page).toHaveURL('https://demoblaze.com/index.html');

    await page.close();
    console.log('Page closed successfully')

})
