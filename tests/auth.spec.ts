
import {test,expect} from '@playwright/test';

test('authh', async({browser}) => {

    let context = await browser.newContext({
        httpCredentials:{
            username: 'admin',
            password: 'admin'
        } 
    })
    let page = await context.newPage();
    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    await page.waitForTimeout(3000);
    
    
});

test('notification', async({browser}) => {
let context = await browser.newContext({
    permissions :['notifications', 'geolocation',]
 
})
   
    let page = await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.locator('#browNotButton').click()
    await page.waitForTimeout(3000);

    page
})