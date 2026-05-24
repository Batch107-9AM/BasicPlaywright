import{test, expect} from '@playwright/test'

test("Test Case on Following Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(2000); 

    const UN = page.locator("//input[@name='txtUserName']");
    await UN.fill("selenium");

    const PWD = page.locator("//input[@name='txtUserName']//following::input[1]");
    await PWD.fill("cypress");

    const SUB = page.locator("//input[@name='txtUserName']//following::input[2]");
    await SUB.click();

    await page.waitForTimeout(3000); 

})