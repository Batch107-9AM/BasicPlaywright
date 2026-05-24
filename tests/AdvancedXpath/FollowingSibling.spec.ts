import{test, expect} from '@playwright/test'

test("Test Case on Following Sibling Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(2000); 

    const UN = page.locator("//table[@cellpadding='3']//following-sibling::input");
    await UN.fill("selenium");

    const PWD = page.locator("//table[@cellpadding='3']//following-sibling::input//following::input[1]");
    await PWD.fill("cypress");

    const SUB = page.locator("//table[@cellpadding='3']//following-sibling::input//following::input[2]");
    await SUB.click();

    await page.waitForTimeout(3000); 

})