import {  expect, type Locator } from "@playwright/test"

export class pageObject_MedicineConversation{
    page: any

    Ekspeditioner_Text: Locator
    Ekspedition_Text: Locator
    Medicinsamtale_Text: Locator
    SogFMK_Text: Locator
    CPR_Textbox: Locator
    Ja_Button: Locator
    ServerError: Locator
    FMKOrdinationer_Text: Locator
    Medicinsamtale_Button: Locator
    Forstesamtale_Text: Locator
    Visiteretaf_Textbox: Locator
    Visiteretdato_Textbox: Locator
    Visiteretdato_Text: Locator
    Samtaletype1_Checkbox: Locator
    Samtaletype2_Checkbox: Locator
    Radgivning_Switch: Locator
    AndensamtaleDato_Textbox: Locator
    AndensamtaleDato_Text: Locator
    AndensamtaleKl_Textbox: Locator
    Fortryd_Button: Locator
    Journaliser_Button: Locator
    Sundhedsydelser_Text: Locator

    constructor(page) {

        this.page = page

        //Ekspeditioner
        this.Ekspeditioner_Text = page.locator('xpath=//span[text()="Ekspeditioner"]')

        //Sundhedsydelser
        this.Sundhedsydelser_Text = page.locator('xpath=//span[text()="Sundhedsydelser"]')

        //Ekspedition
        this.Ekspedition_Text = page.locator('xpath=//span[text()="Ekspedition"]')

        //Sundhedsydelser
        this.Ekspeditioner_Text = page.locator('xpath=//span[text()="Sundhedsydelser"]')

        //Medicinsamtale
        this.Medicinsamtale_Text = page.locator('xpath=//span[text()="Medicinsamtale"]')
 
        //Medicinsamtale
        this.SogFMK_Text = page.locator('xpath=//span[text()="Søg FMK"]')
        this.CPR_Textbox = page.locator('xpath=//input[@type="search"]')
        this.Ja_Button = page.locator('xpath=//button//span[text()="Ja"]')
        this.ServerError = page.locator('xpath=//div[text()="Der opstod en fejl grundet lange svartider til serveren"]')
        this.FMKOrdinationer_Text = page.locator('xpath=//span[text()="FMK ordinationer"]')
        this.Medicinsamtale_Button = page.locator('xpath=//button[@type="button"]//span[text()="Medicinsamtale"]')
        this.Forstesamtale_Text = page.locator('xpath=//span[text()="Første samtale"]')

        this.Visiteretaf_Textbox = page.locator('xpath=//input[@id="b6-b5-Input_VisitedBy"]')

        //DD-MM-YYYY
        this.Visiteretdato_Textbox = page.locator('xpath=//input[@id="b6-b5-input_VisitedDate"]')
        this.Visiteretdato_Text = page.locator('xpath=//span[text()="Visiteret dato "]')
        this.Samtaletype1_Checkbox = page.locator('xpath=//input[@id="b6-b5-NewDiagnosedCheckbox"]')
        this.Samtaletype2_Checkbox = page.locator('xpath=//input[@id="b6-b5-MedicineComplianceCheckbox"]')
        this.Radgivning_Switch = page.locator('xpath=//input[@id="b6-b5-ConsentSwitch"]')

        //DD-MM-YYYY
        this.AndensamtaleDato_Textbox = page.locator('xpath=//input[@id="b6-b5-input_SecondConvDate"]')
        this.AndensamtaleDato_Text = page.locator('xpath=//span[text()="Dato "]')
        this.AndensamtaleKl_Textbox = page.locator('xpath=//input[@id="b6-b5-Input_SecondConvTime"]')
        this.Fortryd_Button = page.locator('xpath=//button//span[text()="Fortryd"]')
        this.Journaliser_Button = page.locator('xpath=//button//span[text()="Journalisér"]')

    }

    medicinsamtale = async (cprCustomerNumber) => {

        const Ekspeditioner = this.Ekspeditioner_Text
        const MedicinsamtaleText = this.Medicinsamtale_Text
        const SogFMK = this.SogFMK_Text
        const CPR = this.CPR_Textbox
        const Ja = this.Ja_Button

        await Ekspeditioner.click()
        await MedicinsamtaleText.click()
        await SogFMK.waitFor()
        await expect(SogFMK).toBeVisible()
        await CPR.fill(cprCustomerNumber)
        await Ja.click()

        
        await this.FMKOrdinationer_Text.waitFor()
        await expect(this.FMKOrdinationer_Text).toBeVisible()

        await this.Medicinsamtale_Button.click()

        await this.Forstesamtale_Text.waitFor()
        await expect(this.Forstesamtale_Text).toBeVisible()

        await this.Visiteretaf_Textbox.fill('AAN')

        await this.Visiteretdato_Textbox.fill('05-02-2024')
        await this.Visiteretdato_Text.click()

        await this.Samtaletype1_Checkbox.check()

        await this.Radgivning_Switch.click()

        await this.AndensamtaleDato_Textbox.fill('05-03-2024')
        await this.AndensamtaleDato_Text.click()

        await this.AndensamtaleKl_Textbox.fill('1500')

        await this.Fortryd_Button.click()

    }

}