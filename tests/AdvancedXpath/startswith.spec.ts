import{test, expect} from '@playwright/test'

test("Test Case on Starts With", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(2000); 

    const UN = page.locator("//input[starts-with(@name , 'txtU')]");
    await UN.fill("selenium");

    const PWD = page.locator("//input[starts-with(@type , 'pa')]");
    await PWD.fill("cypress");

    const SUB = page.locator("//input[starts-with(@type , 'S')]");
    await SUB.click();

    await page.waitForTimeout(3000); 

})