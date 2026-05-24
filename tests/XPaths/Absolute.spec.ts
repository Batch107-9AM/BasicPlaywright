import{test, expect} from '@playwright/test'

test("Test Case on Absolute Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(2000); 

    const UN = page.locator("xpath = /html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[2]/td[2]/input");
    await UN.fill("selenium");

    const PWD = page.locator("xpath = /html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/input");
    await PWD.fill("cypress");

    const SUB = page.locator("xpath = /html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td[1]/input");
    await SUB.click();




    await page.waitForTimeout(3000); 

})