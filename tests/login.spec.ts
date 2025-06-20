import {expect, test} from '@playwright/test';

import { Loginpage } from '../pageobjects/LoginPage'; //path of the LoginPage class

test('login', async({page}) => {
    
   const lgn = new Loginpage(page) //object of Loginpage class

await page.goto('/ui/login')
expect(lgn.emailtf).toBeEditable() // checking if the email text field is visible
await lgn.loginaction('fffhhgk@gmail.com','vhg121241')   
await page.waitForTimeout(2000) // wait for 2 seconds to see the result

});