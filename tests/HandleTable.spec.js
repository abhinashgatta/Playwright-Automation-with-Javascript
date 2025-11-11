import {test,expect} from '@playwright/test'

test('Handle Table Test', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
   
    const table = page.locator('#productTable')
    await table.scrollIntoViewIfNeeded()
    
    //Get rows and columns
    const columns =  table.locator('thead tr th')
    const rows = table.locator('tbody tr')
    console.log('No. of columsn are : '+await columns.count())
    console.log('No. of rows are : '+await rows.count())

    expect(await columns.count()).toBe(4)

    expect(await rows.count()).toBe(5)


    //2.Select Checkbox  Smartwatch
    // const matchedRow = await rows.filter({
    //     has:page.locator('td'),
    //     hasText:'Smartwatch'
    // })

    // matchedRow.locator('input').check()
    // await page.waitForTimeout(5000)

    //3.Select multiple checkbox
    // await selectCheckBox(rows,page,'Smartphone')
    // await selectCheckBox(rows,page,'Laptop')
    // await page.waitForTimeout(5000)

    //4.Read and Print all product details
    // for(let i=0;i<await rows.count();i++){

    //     const row = rows.nth(i);
    //     const tds = row.locator('td');
    //     for(let j=0;j<await tds.count();j++){

    //         console.log(await tds.nth(j).textContent());
    //     }
    // }

    //5. Read data from all the Pages in the table
    const pages =  page.locator('.pagination li a')
    console.log('No.of Pages are : ', await pages.count())
    for(let p=0;p<await pages.count();p++){

        if(p>0){
            await pages.nth(p).click()
            await page.waitForTimeout(3000)
        }
        for(let i=0;i<await rows.count();i++){

        const row = rows.nth(i);
        const tds = row.locator('td');
        for(let j=0;j<await tds.count();j++){

            console.log(await tds.nth(j).textContent());
        }
    }
    }
})

// Function t0 Select multiple Checkbox  
async function selectCheckBox(row,page, name){

    const matchedRow = await row.filter({
        has:page.locator('td'),
        hasText:name
    })
await matchedRow.locator('input').check()
}