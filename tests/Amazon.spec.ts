import {test, expect} from '@playwright/test';
import { HomePage } from "../pageobjects/AmazonHomePage"
import tdata from "../testdata.json"
import { Homepage2 } from '../pageobjects/AmazonHomepage2';

test('amazon', async({browser})=>
{ 
const context = await browser.newContext()
const page= await context.newPage()

let hp = new HomePage(page)

await page.goto(tdata.url)
await hp.searchProduct(tdata.prdtname)
let pagepromise = context.waitForEvent('page')
await hp.Appleprodlink.nth(1).click()
let newpage = await pagepromise

let hp1=new Homepage2(newpage)
await hp1.gotocart()

})


