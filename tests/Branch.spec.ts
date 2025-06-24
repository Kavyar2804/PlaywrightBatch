import{test,expect}from'@playwright/test';
test('branch', async({page}) => {
    await page.goto('http://localhost:3000/branch');
    await expect(page).toHaveTitle('Branch');
    
});