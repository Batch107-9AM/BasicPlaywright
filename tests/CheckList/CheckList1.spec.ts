import {test, expect} from '@playwright/test'

test("Test case on Keybooard Actions", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Country Name.Htm");

    await page.waitForTimeout(1000);

    const A = page.locator("//select/option");
    const countrycount = await A.count();

    console.log("The Number of Countries in the given check list is : " +countrycount);

    


    await page.waitForTimeout(3000);


} )