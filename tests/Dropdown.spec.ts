import{test,expect}from'@playwright/test';

test('Evaluating dropdown', async({page}) => {
    await page.goto('https://www.facebook.com/r.php?locale=en_GB&display=page')
    let months = await page.locator("//select[@id='month']/option").allInnerTexts()
    console.log(months);
    

    await expect(months).toHaveLength(12)

    await expect(months).toContain('Dec') //only comparing sub string

    await expect(months).toEqual(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])

//negative assertion
    await expect(months).not.toHaveLength(10)

    
});