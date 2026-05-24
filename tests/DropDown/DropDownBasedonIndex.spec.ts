import{test, expect} from '@playwright/test'

test("Test Case on DropDown Handling - Based on Index", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(2000); 

    const UN = page.locator("//input[@type = 'text']");
    await UN.fill("selenium");

    const PWD = page.locator("//input[@name = 'txtPassword']");
    await PWD.fill("cypress");

    const SUB = page.locator("//input[@value = 'Login']");
    await SUB.click();

    const F = page.frameLocator("//iframe[@id='rightMenu']");   //identified the frame

    await expect(F.locator("//select[@id='loc_code']")).toBeVisible();  //identified the element inside of the frame

    await page.waitForTimeout(2000); 

    const DD = F.locator("//select[@id='loc_code']");  //dropdownlocator

    await DD.selectOption({index : 3});
    

    await page.waitForTimeout(3000); 

})