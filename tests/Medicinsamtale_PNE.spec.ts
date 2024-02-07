// import { test } from "@playwright/test"
// import {pageObject_Login} from "../page_objects/pageObject_Login"
// import {pageObject_MedicineConversation} from "../page_objects/pageObject_MedicineConversation"

// test ("Medicine Conversation", async ({page}) => {

//     const pageobject_login = new pageObject_Login(page)
//     const login = pageobject_login

//     const pageObject_medicinconversation = new pageObject_MedicineConversation(page)
//     const medicineConversation = pageObject_medicinconversation

//     await login.navigateToPNE_DEVTEST()
//     await login.login('AAN','password1','804/0','3')
//     await login.validateHomepage()
//     await medicineConversation.medicinsamtale('0606969686')

// })

// //npx playwright test Medicinsamtale_PNE.spec.ts --headed
// // Department.toHaveText('804/0')
// // Terminal.toHaveText('3')