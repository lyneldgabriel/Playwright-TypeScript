import { test } from "@playwright/test"
import {pageObject_Navigation} from "../../page_objects/LAMBDA Test Page Object/pageObject_Navigation"
import {pageObject_Register} from "../../page_objects/LAMBDA Test Page Object/pageObject_Register"

test ("Medicine Conversation", async ({page}) => {

    const pageObject_navigation = new pageObject_Navigation(page)
    const pageobject_register = new pageObject_Register(page)

    await pageObject_navigation.navigateToLAMBDATest()
    await pageobject_register.register('Generic','Credential','GenCred@email.com','1234567890','GenCredP@ss!','GenCredP@ss!')

    await page.pause()
    
})

//npx playwright test E2E.spec.ts --headed