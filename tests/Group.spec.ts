import {test,expect} from '@playwright/test'

test.describe('Smoke test @smoke ',()=>{ 
   
      test.use({ viewport: { width: 1280, height: 720 } },) //setting viewport size
      test.use({ colorScheme: 'dark' }); //setting color scheme to dark


   test('checkbox', async({page}) => {
      //checkbox
    
     await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await page.getByText('Check Box').click() //clicking on checkbox
    await page.locator('#domain_a').check()//checking the checkbox 
    await page.locator('#domain_b').check()//checking the checkbox 
    await page.locator('#domain_c').check()//checking the checkbox 
    await page.locator('#domain_d').check()//checking the checkbox 
     await page.waitForTimeout(2000) //wait for 2 seconds
    
})

test('dropdown', async({page}) => {
    //dropdown
     await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
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