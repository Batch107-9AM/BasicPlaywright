import {test, expect} from '@playwright/test'

test("Test case on Mouse Drag and Drop", async({page})=>
{
    await page.goto("file:///C:/My Personal/Batches/Selenium Elements/Drag and Drop.html");

    await page.waitForTimeout(1000);

   // const S = page.locator("//img");
   // const T = page.locator("//div");  
    
    await page.dragAndDrop("//img" , "//div");
    //await page.dragAndDrop()
    await page.waitForTimeout(3000);




} )