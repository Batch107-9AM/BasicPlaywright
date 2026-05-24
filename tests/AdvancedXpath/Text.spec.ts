import{test, expect} from '@playwright/test'

test("Test Case on Text Xpath", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(2000); 

    const Olink = page.locator("//a[text()='OrangeHRM']");
    await Olink.click();



    await page.waitForTimeout(8000); 

})