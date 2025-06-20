import{test,expect} from "@playwright/test"
import path from "path";

test.describe('Upload files',()=>{
    test('Single Upload file', async({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/")
//await page.locator('#singleFileInput').setInputFiles("C:/Users/User/OneDrive/Desktop/pwrtts/Playwright.docx")
await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, '../Playwright.docx'))

await page.locator("//button[.='Upload Single File']").click()
await page.waitForTimeout(3000)
await expect(page.locator("#singleFileStatus")).toContainText('Playwright')
    
});

test('Multiplefile', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
//await page.locator('#singleFileInput').setInputFiles("C:/Users/User/OneDrive/Desktop/pwrtts/Playwright.docx")
await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname, '../Playwright.docx'), 
    path.join(__dirname,'../npm error.txt')])

await page.locator("//button[.='Upload Multiple Files']").click()
await page.waitForTimeout(3000)
await expect(page.locator("#multipleFilesStatus")).toContainText('error')
    
    
});

})
