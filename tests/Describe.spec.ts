import {test, expect } from '@playwright/test';

test.describe('Smoke suite',()=>{

    test.beforeAll('Before all tests', async() => {   //hooks for providng preconditions & postconditions
        console.log('Before all tests executed'); //database connection before all tests
    });

    test.beforeEach('Before each test', async({page})=>{

        await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //login to the application before each test
        console.log('Before each test executed'); //login before each test
          
    })

    test.afterEach('After each test', async({page})=>{

        console.log('After each test executed'); //logout after each test
       
    })

    test.afterAll('After all tests', async() => {
        console.log('After all tests executed')}) //database cleanup after all tests
    
    test('checkbox', async({page}) => {
      //checkbox
    
     //await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await page.getByText('Check Box').click() //clicking on checkbox
    await page.locator('#domain_a').check()//checking the checkbox 
    await page.locator('#domain_b').check()//checking the checkbox 
    await page.locator('#domain_c').check()//checking the checkbox 
    await page.locator('#domain_d').check()//checking the checkbox 
     await page.waitForTimeout(2000) //wait for 2 seconds
    
})

test('dropdown', async({page}) => {
    //dropdown
    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
      await page.getByText('Dropdown').click() //clicking on dropdown
     await page.waitForTimeout(2000) //wait for 2 second
     await page.locator('#country_code').selectOption('+44') //selecting option from dropdown
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator("#select3").selectOption('India')
    await page.locator("#select5").selectOption('Karnataka')
     await page.locator("//label[.='City']/../select").selectOption('Chikkamagaluru') //selecting option from dropdown using xpath
     await page.waitForTimeout(2000) //wait for 2 seconds
    
})


})



