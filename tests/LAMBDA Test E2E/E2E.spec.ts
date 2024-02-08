import { test } from "@playwright/test"
import {pageObject_Login} from "../../page_objects/LAMBDA Test Page Object/pageObject_Login"
import {pageObject_Navigation} from "../../page_objects/LAMBDA Test Page Object/pageObject_Navigation"
import {pageObject_Register} from "../../page_objects/LAMBDA Test Page Object/pageObject_Register"

test.skip ("LAMBDA Test Account Registration", async ({page}) => {

    const navigation = new pageObject_Navigation(page)
    const register = new pageObject_Register(page)

    await navigation.navigateToLAMBDATest()
    await register.registerAccount('Generic','Credential','GenCred@email.com','1234567890','GenCredP@ss!','GenCredP@ss!')

    //await page.pause()
    
})

test ("LAMBDA Test Account Login", async ({page}) => {

    const navigation = new pageObject_Navigation(page)
    const login = new pageObject_Login(page)

    await navigation.navigateToLAMBDATest()
    await login.loginAccount('GenCred@email.com','GenCredP@ss!')
    
})

//npx playwright test E2E.spec.ts --headed