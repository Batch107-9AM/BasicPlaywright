import {test, expect} from '@playwright/test'

test("Test case on Mouse Double Click", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Doubleclick.html");

    await page.waitForTimeout(1000);

    const L = page.locator("//p[2]");

    await L.dblclick();

     await page.waitForTimeout(3000);



} )