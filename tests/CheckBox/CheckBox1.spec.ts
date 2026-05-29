import {test, expect} from '@playwright/test'

test("Test case on Keybooard Actions", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Country Check box.html");

    await page.waitForTimeout(1000);

    const L = page.locator("//input[4]");

    await L.check();
    
    await page.waitForTimeout(3000);


} )