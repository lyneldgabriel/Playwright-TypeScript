import {  expect, type Locator } from "@playwright/test"

export class pageObject_Login{

    page: any
    EMailAddress: Locator
    Password: Locator
    Login: Locator
    MyAccount: Locator
    MyOrders: Locator
    MyAffiliateAccount: Locator

    constructor(page: any) {

        this.page = page

        this.EMailAddress = page.locator('xpath=//input[@id="input-email"]')
        this.Password = page.locator('xpath=//input[@id="input-password"]')
        this.Login = page.locator('xpath=//input[@value="Login"]')
        this.MyAccount = page.locator('xpath=//h2[text()="My Account"]')
        this.MyOrders = page.locator('xpath=//h2[text()="My Orders"]')
        this.MyAffiliateAccount = page.locator('xpath=//h2[text()="My Affiliate Account"]')


    }

    // login = async () => {

    //     await this.EMailAddress.fill('')
    //     await this.Password.fill('')
    //     await this.Login.click()

    // }

    async loginAccount (EMail,Password) {

        await this.EMailAddress.fill(EMail)
        await this.Password.fill(Password)
        await this.Login.click()

    }

    async validateHomepage () {

        await this.MyAccount.waitFor()
        await expect(this.MyAccount).toBeVisible()

        await this.MyOrders.waitFor()
        await expect(this.MyOrders).toBeVisible()

        await this.MyAffiliateAccount.waitFor()
        await expect(this.MyAffiliateAccount).toBeVisible()

    }

}

//Email:GenCred@email.com
//Password:GenCredP@ss!