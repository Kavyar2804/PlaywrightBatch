import {test,expect} from "@playwright/test"


test('first test',async({page})=>{
    test.setTimeout(60000) //setting timeout for 60 seconds

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await expect(page).toHaveTitle('DemoApps | Qspiders | Text Box')  //assertion for title
        //comparision of actual and expected title
        
    await page.locator('#name').fill('xyz123') //filling the name
    await page.fill('#name', 'fghhjgku' ) //filling with different syntax
    await page.locator('#email').fill('xyz1234@gmnail.com') //filling the email

    //type method it is deprecated
    await page.locator('#password').fill('xyz12345') //filling the password
    await page.waitForTimeout(2000)
    await page.locator("//button[.='Register']").click() //clicking on register button
    await page.waitForTimeout(2000) //wait for 2 seconds

    //tag[text()='value'] //locating xpath by text

    //button
    await page.locator("//section[.='Button']").click()
    await page.locator('#btn').click() //yes
    await page.waitForTimeout(2000) //wait for 2 seconds
    let v1 = await page.locator("//span[@class='text-green-600 p-1 px-2 ms-2 rounded-md']").textContent() //to get the text from eleements
    console.log(v1) 

    //assertion
    expect(v1).toContain('Yes') //contain method  is case sensitive

    //link
    await page.getByText('Link').click() //clicking on link
    await page.getByText('Men' , {exact:true}).click() //clicking on men link
    await page.waitForTimeout(2000) //wait for 2 seconds

     //toggle
    //  await page.getByText('Toggle').click() //clicking on toggle
    //  let tog1 = page.locator("//span[@class='relative bg-gray-300 rounded-full w-9 h-4 transition duration-300 ease-in-out']/input[@id='tog']")
    //  //await expect(tog1).toBeVisible()//assertion to check if toggle is visible
    //  await page.locator("//span[@class='relative bg-gray-300 rounded-full w-9 h-4 transition duration-300 ease-in-out']/input[@id='tog']").click({force:true}) //clicking on toggle
                  
})
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

test('radio button', async({page}) => {
      //radio button
       await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
     await page.getByText('Radio Button').click() //clicking on radio button    
     await page.locator('#attended_e').check() //checking the radio button
     await page.locator('#willin_b').check() //checking the radio button
     await page.waitForTimeout(2000) //wait for 2 seconds
    
})

test('slider', async({page}) => {
    

     //slider
      await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
     await page.getByText('Slider').click()
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator('#slide').click()
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator('#slide').click()
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator('#slide').click()
     await page.waitForTimeout(2000) //wait for 2 seconds
     await page.locator('#slide').click()
     await page.waitForTimeout(2000) //wait for 2 second
    
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

test('multiselect', async({page}) => {
    
 //multiselect
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await page.getByText('Dropdown').click() //clicking on dropdown
    await page.waitForTimeout(2000) //wait for 2 second
    await page.getByText('Multi Select', {exact:true}).click() //clicking on multiselect
     await page.waitForTimeout(2000) //wait for 2 seconds
    await page.locator('#select-multiple-native').selectOption(['Mens Cotton Jacket...', "John Hardy Women's L...", 'White Gold Plated Pr...']) //selecting multiple options from dropdown
    await page.getByRole('button', {name: 'Add'}).click() //clicking on submit button
    await page.waitForTimeout(2000) //wait for 2 seconds

    //get text for single element 

    let text= await page.locator("//td[@title='Mens Cotton Jacket']").textContent()
    console.log(text) //printing the text of the element;

    //findelements in table multiple elements
    let all = await page.locator("//tbody/tr/td[1]").allInnerTexts()
    console.log(all.length) //geting the count
    console.log(all)
    //assertion 
    expect(all).toContain('Mens Cotton Jacket...') //assertion to check if the text is present in the array
    expect(all).toHaveLength(3) //assertion to check the length of the array

});
test('webtable', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await page.getByText('Web Table').click() //clicking on web table
    await page.waitForTimeout(2000) //wait for 2 seconds
    await page.getByText('Dynamic Web Table').click()
    await page.waitForTimeout(2000) //wait for 2 seconds

    let itemname = await page.locator('//tbody/tr/th').allInnerTexts()
    
   let price = await page.locator("//tbody/tr/td[@class='px-6 py-4 font-bold text-black']").allInnerTexts()

   console.log(`Item Names: ${itemname} Prices: ${price}`); //printing the item names
    
   for (let i = 0; i < itemname.length; i++) {
        console.log(`Item: ${itemname[i]} - Price: ${price[i]}`); //printing the item names and prices
    }

});

 test('mousehover', async({page}) => {
        await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
         await page.getByText('Mouse Actions').click() //clicking on mouse hover
        await page.getByText('Mouse Hover').click() //clicking on mouse hover
         await page.locator("//P[.='Actions']/..//li/a").nth(3).click() //clicking on tab
        await page.waitForTimeout(2000) //wait for 2 seconds
        await page.locator("//div[@class='bg-slate-800 h-10']/ul/li[@class='kids p-4 relative']").hover() //hovering on the element
        await page.waitForTimeout(2000) //wait for 2 seconds
        let list = await page.locator("//section[@class='kids_List']/ul/li").allInnerTexts()
        console.log(list) //printing the list of elements;
        expect(list).toContain('Girls Dresses') //assertion to check if the text is present in the array
        expect(list).toHaveLength(7) //assertion to check the length of the array   
    });

    test('doubleclick', async({page}) => {

        await page.goto('https://qa-practice.netlify.app/double-click')
        await page.waitForTimeout(2000) //wait for 2 seconds
        await page.locator("#double-click-btn").dblclick() //double clicking on the button
        await page.waitForTimeout(2000) //wait for 2 seconds

    });

    test('drag and drop', async({page}) => {
        await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
         await page.getByText('Mouse Actions').click() //clicking on mouse hover
        await page.getByText('Drag & Drop').click() //clicking on drag and drop
        await page.waitForTimeout(2000) //wait for 2 seconds
        await page.getByText('Drag Position').click() //clicking on drag position
        await page.waitForTimeout(2000) //wait for 2 seconds
        await page.getByText('Mobile Charger').dragTo(page.getByText('Mobile Accessories'))
        //inside dragTo method we can pass the locator to where we want to drop the element
        await page.getByText('Laptop Charger').dragTo(page.getByText('Laptop Accessories'))
        await page.waitForTimeout(2000) //wait for 2 seconds   
})


test('Rightclick', async({page}) => {

    await page.goto('https://www.google.co.in/')//navigating to url
    await page.getByText('ಕನ್ನಡ').click({button : 'right'}) //right clicking on the element
    await page.waitForTimeout(2000) //wait for 2 seconds
    
});

test('scrollintoview', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical') //navigating to url
  await page.getByText("I have read all the terms and conditions").scrollIntoViewIfNeeded() //scrolling to the checkbox element
  await page.waitForTimeout(2000) //wait for 2 seconds
    
});

test('scroll', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabHorizontal') //navigating to url
    // await page.mouse.wheel(1000, 0) 
    await page.evaluate(() => {
        window.scrollTo(1000,0)}) //scrolling the page by 1000 pixels horizontally
    await page.waitForTimeout(5000) //wait for 2 seconds
});

test('screenshot', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1') //navigating to url
    await page.waitForTimeout(2000) //wait for 2 seconds
    await page.screenshot({path: './screenshots/screen1.png'}) //taking screenshot of the page
    await page.locator('#name').screenshot({path: './screenshots/name.png'}) //taking screenshot of the name field   
});










  

        

