import{test, expect} from '@playwright/test'

test("Test Case on Title Checks", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.waitForTimeout(2000); 

    //title check

    const htitle = await page.title();

    await expect(page).toHaveTitle("Orange HRM - New Level of HR Management");   //asserations

    //console.log("The Home Page Title is : " + htitle);

    const UN = page.locator("//input[@type = 'text']");
    await UN.fill("selenium");

    const PWD = page.locator("//input[@name = 'txtPassword']");
    await PWD.fill("cypress");

    const SUB = page.locator("//input[@value = 'Login']");
    await SUB.click();

    await page.waitForTimeout(3000); 

    //title check

    const aftertitle = await page.title()

    // console.log("The After Login Page Title is : " + aftertitle);

})