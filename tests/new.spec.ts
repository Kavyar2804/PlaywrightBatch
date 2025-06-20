import{test,expect} from '@playwright/test';



test('first script', async({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("#name").fill("hjjhgk")
    await page.locator("#email").fill("vhjjhghjv@example.com")
    await page.locator("//input[@id='password']").fill("1234567890")
    await page.locator("//button[text()='Register']").click()
    await page.waitForTimeout(2000)//wait for 2 seconds
    await page.locator("//section[.='Button']").click()
    await page.locator("//button[.='Yes']").click() //clicking on button using xpath
    let text = await page.locator("[class='text-green-600 p-1 px-2 ms-2 rounded-md']").textContent()
    console.log(text);
    await expect(text).toContain('Yes')
    await page.getByText("Email").click() //checking the checkbox
    //await expect(page.locator("#domain_a")).toBeChecked() //assertion to check if checkbox is checked
    await page.getByText('UPI').click()

    
    //xpath syntax
    //tagname[@attributename='attributevalue']
    //await page.locator("//input[@id='name']").fill("1234567890")
    
});