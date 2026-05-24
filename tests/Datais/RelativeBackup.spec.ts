import{test, expect} from '@playwright/test'

test("Test Case on Absolute Xpath", async({page})=>
{
    test.setTimeout(900000);
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(2000); 

    const UN = page.locator("//input[@type = 'text']");
    await UN.fill("selenium");

    const PWD = page.locator("//input[@name = 'txtPassword']");
    await PWD.fill("cypress");

    const SUB = page.locator("//input[@value = 'Login']");
    await SUB.click();
    console.log("The Title after Login page is : " +(await page.title()));

    await page.waitForTimeout(10000); 

})