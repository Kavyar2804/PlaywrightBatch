import{expect, type Locator, type Page} from "@playwright/test"


export class HomePage

{
    readonly page:Page
    readonly searchTf : Locator
    readonly searchBtn : Locator
    readonly Appleprodlink : Locator
    readonly user: Locator

    constructor(page:Page)
    {
        this.page=page
        this.searchTf= page.getByPlaceholder('Search Amazon.in')
        this.searchBtn = page.locator('#nav-search-submit-button')
        this.Appleprodlink= page.locator("//div[@role='listitem']//span[contains(.,'Apple')]")
        
    }

    async searchProduct(productName:string)
    {
        await this.searchTf.fill(productName)
        await this.searchBtn.click()
        await this.page.waitForTimeout(5000)
    }

}



//Json file.. 
// { "usernameInput": "#username", 
// "passwordInput": "#password", 
// "loginButton": "button[type='submit']" }
//import { Page, Locator } from '@playwright/test';
//  import locators from './login.loc.json';
//  export class LoginPage { 
// readonly page: Page;
// readonly usernameInput: Locator; 
// readonly passwordInput: Locator; 
// readonly loginButton: Locator; 
// constructor(page: Page) {
//  this.page = page;
//  this.usernameInput = page.locator(locators.usernameInput); 
// this.passwordInput = page.locator(locators.passwordInput); 
// this.loginButton = page.locator(locators.loginButton); } } 
// Navigate to the login page 
// async goto() 
// { await this.page.goto('https://example.com/login'); } // Fill in username and password 
// async fillCredentials(username: string, password: string) 
// { await this.usernameInput.fill(username);
//  await this.passwordInput.fill(password); }
