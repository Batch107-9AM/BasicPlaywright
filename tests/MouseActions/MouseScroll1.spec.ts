import {test, expect} from '@playwright/test'

test("Test case on Mouse Scroll", async({page})=>
{
    await page.goto("https://www.amazon.in/");

    await page.waitForTimeout(6000);

    await page.mouse.wheel(56, 4412);

    await page.waitForTimeout(1000);

    const U = page.locator("//a[text()='Sell under Amazon Accelerator']");
    await U.click();        
    
   



    await page.waitForTimeout(3000);




} )