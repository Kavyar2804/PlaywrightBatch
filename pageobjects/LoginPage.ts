import {expect, type Locator, type Page} from "@playwright/test"

export class Loginpage{

    readonly page:Page   
    readonly emailtf : Locator // defining the type of locator
    readonly passwordtf : Locator
    readonly lgnbtn: Locator

    constructor(page:Page)
    {
        this.page =page;
        this.emailtf= page.locator('#email')
        this.passwordtf=page.locator('#password')
        this.lgnbtn= page.locator('//button[@type="submit"]') // using getByText to locate the button
    }

    //login  business logic/ method

async loginaction(email:string, password:string)
{
    await this.emailtf.fill(email)
    await expect(this.emailtf).toBeEditable()
    await this.passwordtf.fill(password)
    await this.lgnbtn.click()
}

}

