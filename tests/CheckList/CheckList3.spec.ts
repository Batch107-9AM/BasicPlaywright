import {test, expect} from '@playwright/test'

test("Test case on Keybooard Actions", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Country Name.Htm");

    await page.waitForTimeout(1000);

    const L = page.locator("option");

    await L.nth(1).click();
     await page.waitForTimeout(3000);
    await L.nth(7).click();
     await page.waitForTimeout(3000);
    await page.keyboard.press('Control'); 
    await L.nth(9).click();
    await page.keyboard.press('Control'); 
    await L.nth(15).click();
    await page.keyboard.press('Control'); 
    await L.nth(16).click();
    await page.keyboard.press('Control'); 
    await L.nth(20).click();
    


    await page.waitForTimeout(3000);


} )