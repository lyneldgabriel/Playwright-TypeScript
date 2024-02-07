import {  expect, type Locator } from "@playwright/test"

export class pageObject_Login{

    page: any
    EMailAddress: Locator
    Password: Locator
    Login: Locator

    constructor(page) {

        this.page = page

        this.EMailAddress = page.locator('xpath=//input[@id="input-email"]')
        this.Password = page.locator('xpath=//input[@id="input-password"]')
        this.Login = page.locator('xpath=//input[@value="Login"]')

    }

    navigateToLAMBDATest = async () => {

        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    }

    login = async () => {

        await this.EMailAddress.fill('')
        await this.Password.fill('')
        await this.Login.click()

    }
}