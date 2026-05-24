import{test, expect} from '@playwright/test'

test("Test Case on DropDown Handling", async({page})=>
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

    const DD = F.locator("//select[@id='loc_code']");  //dropdownlocator

    const NoofDDs = DD.locator("//option");  //dd count elements

    const DDCount = await NoofDDs.count();
    
    console.log("The Number of Elements in the drop down : " +DDCount);  //based on elements printing count

   const DDVALUES =  await NoofDDs.allTextContents();   //stores elemtns in an array
   console.log(DDVALUES);

    

    await page.waitForTimeout(3000); 

})