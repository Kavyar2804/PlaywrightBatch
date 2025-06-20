import {test, expect} from '@playwright/test';

test('switching window', async({browser}) => {

    let context = await browser.newContext()
    let page= await context.newPage()

    await page.goto("https://www.amazon.in")
    await page.getByPlaceholder('Search Amazon.in').fill('laptop')
     await page.waitForTimeout(2000)
    await page.locator('#nav-search-submit-button').click()
    const pagepromise = context.waitForEvent('page') //this will eventlistner for new page
    await page.locator("//div[@role='listitem']//span[contains(.,'Apple')]").nth(1).click()
    let newpage =await pagepromise //this will wait for new page to open
    await newpage.getByTitle('Add to Shopping Cart' , {exact: true}).nth(1).click()
    //await newpage.locator("//a[@aria-label='Exit this panel and return to the product page']").click()
    await newpage.getByText('Go to Cart',{exact: true}).click()
    await newpage.waitForTimeout(2000)
    
   
context.pages()
    


    
});