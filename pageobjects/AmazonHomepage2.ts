import{expect, type Locator, type Page} from "@playwright/test"

export class Homepage2
{
    readonly page :Page
    readonly cartbtn : Locator

constructor(page:Page)
{
this.page= page
this.cartbtn= page.getByText('Go to Cart',{exact: true})

}

async gotocart()
{
    await this.cartbtn.click()
    await this.page.waitForTimeout(5000)
}

}
