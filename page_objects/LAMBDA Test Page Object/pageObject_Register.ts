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


    constructor(page) {

        this.page = page

        this.NewCustomer = page.locator('xpath=//h2[text()="New Customer"]')
        this.RegisterAccount = page.locator('xpath=//strong[text()="Register Account"]')
        this.Continue = page.locator('xpath=//a[text()="Continue"]')
        this.FirstName = page.locator('xpath=//input[@id=""]')
        this.LastName = page.locator('xpath=//input[@id=""]')
        this.EMail = page.locator('xpath=//input[@id=""]')
        this.Telephone = page.locator('xpath=//input[@id=""]')
        this.Password = page.locator('xpath=//input[@id=""]')
        this.PasswordConfirm = page.locator('xpath=//input[@id=""]')


    }

    navigateToLAMBDATest = async () => {

        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    }

    register = async (FirstName,LastName,EMail,Telephone,Password) => {

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

        





        // this.FirstName = page.locator('xpath=//input[@id=""]')
        // this.LastName = page.locator('xpath=//input[@id=""]')
        // this.EMail = page.locator('xpath=//input[@id=""]')
        // this.Telephone = page.locator('xpath=//input[@id=""]')
        // this.Password = page.locator('xpath=//input[@id=""]')
        // this.PasswordConfirm = page.locator('xpath=//input[@id=""]')

    }
}