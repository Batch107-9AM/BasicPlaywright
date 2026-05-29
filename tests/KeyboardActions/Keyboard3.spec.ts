import {test, expect} from '@playwright/test'

test("Test case on Keybooard Actions", async({page})=>
{
    await page.goto("https://www.google.com/");

    await page.waitForTimeout(1000);

    const U = page.locator("//textarea[@role='combobox']");
    await U.fill("today weather report in hyderabad");

    await page.waitForTimeout(2000);

    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(1000);
    await page.keyboard.press('Backspace');


    await page.waitForTimeout(3000);

    await page.keyboard.press('Control+A');

    await page.waitForTimeout(3000);

    await page.keyboard.press('Delete');

     await page.waitForTimeout(3000);

    await page.keyboard.press('Shift+a');


    await page.waitForTimeout(3000);


} )