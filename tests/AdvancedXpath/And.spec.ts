import{test, expect} from '@playwright/test'

test("Test Case on And Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(2000); 

    const UN = page.locator("//input[@class='loginText' and @tabindex='1']");
    await UN.fill("selenium");

    const PWD = page.locator("//input[@class='loginText' and @tabindex='2']");
    await PWD.fill("cypress");

    const SUB = page.locator("//input[contains(@type , 'bm')]");
    await SUB.click();

    await page.waitForTimeout(3000); 

})