import {test, expect} from '@playwright/test'

test("Test case on Mouse Hover", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(1000);

    const U = page.locator("//input[@type='text']");
    await U.fill("selenium");
    const P = page.locator("//input[@type='password']");
    await P.fill("cypress");
    const L = page.locator("//input[@type='Submit']");
    await L.click();        
    
    await page.waitForTimeout(1000);

    const ti = page.locator("//li[@id='time']");
    await ti.hover();

    await page.waitForTimeout(3000);




} )