import {test, expect} from '@playwright/test'

test("Test case on Mouse Right Click", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(1000);

    const L = page.locator("//a");

    await L.click({button :  "right"});

     await page.waitForTimeout(3000);



} )