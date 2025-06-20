import {test,expect} from '@playwright/test';

test('handlepopup', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

     page.on('dialog', async (dialog)=>{
        console.log(dialog.message()); // Log the message of the dialog
        console.log(dialog.type());
        await dialog.accept(); // Accept the dialog
        dialog
    })
    
     await page.locator('#confirmBtn').click()   

    await page.waitForTimeout(2000); // Wait for the popup to appear
    
     await page.waitForTimeout(2000);

});

test('prompt', async({page}) => {

     await page.goto('https://testautomationpractice.blogspot.com/')
    // Handle the prompt dialog
      page.on('dialog', async(dialog)=>{
    
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept('playwright'); // Accept the dialog
    })
        await page.locator('#promptBtn').click() // Click the button to trigger the prompt dialog
    
     await page.waitForTimeout(2000); 

    
});

test('keyboard', async({page}) => {

    await page.keyboard.type('vvvj')
    await page.keyboard.press('Enter')
    await page.keyboard.press('ArrowUp')
});