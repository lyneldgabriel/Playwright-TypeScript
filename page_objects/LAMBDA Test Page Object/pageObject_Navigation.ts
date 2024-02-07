import {  expect, type Locator } from "@playwright/test"

export class pageObject_Navigation{

    page: any

    constructor(page) {

        this.page = page

    }

    navigateToLAMBDATest = async () => {

        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

    }
}