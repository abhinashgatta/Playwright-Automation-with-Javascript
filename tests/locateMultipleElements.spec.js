import {test,expect} from '@playwright/test'

test('Locating Multiple Web Elements', async ({page}) => {

    //specify the URL to navigate to
    await page.goto('https://demoblaze.com/index.html');
    const links = await page.$$('a');
   
    for(const link of links){

        const linkText = await link.textContent();
        console.log('Link Text:'+linkText);
    }
})

test('Printing Product Label Names', async({page}) => {

    await page.goto('https://demoblaze.com/index.html');
    await page.waitForSelector("//div[@id='tbodyid']//h4//a")
    const products =await page.$$("//div[@id='tbodyid']//h4//a");

    for(const product of products){

        const productText = await product.textContent();
        console.log(productText);

    }
})