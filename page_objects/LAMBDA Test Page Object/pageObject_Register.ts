import {  expect, type Locator } from "@playwright/test"

export class pageObject_Register{

    page: any
    NewCustomer:Locator
    RegisterAccount:Locator
    Continue:Locator
    FirstName:Locator
    LastName:Locator
    EMail:Locator
    Telephone:Locator
    Password:Locator
    PasswordConfirm:Locator
    ContinueRegistration:Locator
    SubscribeNo:Locator
    PrivacyPolicy:Locator
    AccountRegistered:Locator
    ContinueNewAccount:Locator

    constructor(page) {

        this.page = page

        this.NewCustomer = page.locator('xpath=//h2[text()="New Customer"]')
        this.RegisterAccount = page.locator('xpath=//strong[text()="Register Account"]')
        this.Continue = page.locator('xpath=//a[text()="Continue"]')
        this.FirstName = page.locator('xpath=//input[@id="input-firstname"]')
        this.LastName = page.locator('xpath=//input[@id="input-lastname"]')
        this.EMail = page.locator('xpath=//input[@id="input-email"]')
        this.Telephone = page.locator('xpath=//input[@id="input-telephone"]')
        this.Password = page.locator('xpath=//input[@id="input-password"]')
        this.PasswordConfirm = page.locator('xpath=//input[@id="input-confirm"]')
        this.SubscribeNo = page.getByText('No', { exact: true })
        this.PrivacyPolicy = page.getByText('I have read and agree to the')
        this.ContinueRegistration = page.locator('xpath=//input[@value="Continue"]')
        this.AccountRegistered = page.locator('xpath=//h1[text()=" Your Account Has Been Created!"]')
        this.ContinueNewAccount = page.locator('xpath=//a[text()="Continue"]')

    }

    register = async (FirstName,LastName,EMail,Telephone,Password,PasswordConfirm) => {

        await this.NewCustomer.waitFor()
        await expect(this.NewCustomer).toBeVisible()

        await this.RegisterAccount.waitFor()
        await expect( this.RegisterAccount).toBeVisible()

        await this.Continue.click()

        await this.FirstName.fill(FirstName)
        await this.LastName.fill(LastName)
        await this.EMail.fill(EMail)
        await this.Telephone.fill(Telephone)
        await this.Password.fill(Password)
        await this.PasswordConfirm.fill(PasswordConfirm)
        await this.SubscribeNo.check()
        await this.PrivacyPolicy.check()
        await this.ContinueRegistration.click()

        await this.AccountRegistered.waitFor()
        await expect(this.AccountRegistered).toBeVisible()

        await this.ContinueNewAccount.click()



        





        // this.FirstName = page.locator('xpath=//input[@id=""]')
        // this.LastName = page.locator('xpath=//input[@id=""]')
        // this.EMail = page.locator('xpath=//input[@id=""]')
        // this.Telephone = page.locator('xpath=//input[@id=""]')
        // this.Password = page.locator('xpath=//input[@id=""]')
        // this.PasswordConfirm = page.locator('xpath=//input[@id=""]')

    }
}