import {test, expect} from "@playwright/test"


test('iframe', async({page}) => {
    //test.setTimeout()

    await page.goto('https://demoapps.qspiders.com/ui/frames') 
    await page.waitForTimeout(2000)
    let frame= page.frameLocator("//iframe[@class='w-full h-96']")
    await frame.locator("#username").fill('fghjl')
    await page.waitForTimeout(2000)  
});

test('nestediframe', async({page}) => {
    
    await page.goto('https://demoapps.qspiders.com/ui/frames')
    await page.waitForTimeout(2000)
    await page.getByText('Nested iframe').click()
    let mainframe= page.frameLocator("//iframe[@class='w-full h-96']") //parent frame 
    let childframe = mainframe.locator('iframe').contentFrame() //childframe
    await childframe.locator('#email').fill('hvfhfhjvhj@juguyg')
     await page.waitForTimeout(2000)
    
});