import {test,expect} from "@playwright/test"

test('Downloadfile', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/download')
    const dowloadpromise= page.waitForEvent('download')
    await page.locator('//a[.="db.json"]').click()
    const download = await dowloadpromise

    let savedpath = 'download/db.json'

    await download.saveAs(savedpath)

    expect(download.suggestedFilename()).toBe('db.json')    




    
});