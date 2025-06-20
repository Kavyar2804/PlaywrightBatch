import {test,expect} from "@playwright/test"
test('locating eleents', async({page}) => {

    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveURL('https://www.amazon.in/'); //assertion to check if the page is loaded
    // //await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon'); //assertion for title
    // await page.getByPlaceholder('Search Amazon.in').fill('mobile'); //locating by placeholder
    // await page.locator('#nav-search-submit-button').click() //locating by id & performing click action
    // await page.waitForTimeout(2000); //pause for 2 seconds
    // await page.getByRole('link' ,{name : 'Home Improvement'}).click(); //locating by role
    //await page.waitForTimeout(2000); //pause for 2 seconds

    //getByLable is used to locate the element by its text & can be used
    //  to locate the text field
    
    await page.getByLabel('Search Amazon.in').fill('laptop'); //locating by label
    await page.waitForTimeout(2000); 

//locate by alttext for images
await page.getByAltText('Cleaning', {exact:true}).click() 
await page.waitForTimeout(2000); 

//locate by text
await page.getByText('Fresh', {exact:true}).click()
    await page.waitForTimeout(2000); 




    
    


});