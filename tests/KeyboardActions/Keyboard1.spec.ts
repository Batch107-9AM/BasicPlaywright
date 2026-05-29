import {test, expect} from '@playwright/test'

test("Test case on Keybooard Actions", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(1000);

    const U = page.locator("//input[@type='text']");
    await U.fill("selenium");

    await page.waitForTimeout(2000);

    await page.keyboard.press('Tab');

    await page.waitForTimeout(2000);

    const P = page.locator("//input[@type='password']");
    await P.fill("cypress");

     await page.waitForTimeout(2000);

    await page.keyboard.press('Tab');

    await page.waitForTimeout(2000);

    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);




} )