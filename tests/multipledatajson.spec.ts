import {test, expect} from '@playwright/test'
import tdata from '../tdata2.json'
//import { type } from 'node:os';


tdata.forEach(({username,password,url},index)=>{

test(`loginwithcredential #${index+1}`, async({page}) => {

await page.goto(url)
await page.locator('#username').fill(username)

await page.locator('#password').fill(password)
await page.locator("#submit").click()
await page.waitForTimeout(3000)
});

})

