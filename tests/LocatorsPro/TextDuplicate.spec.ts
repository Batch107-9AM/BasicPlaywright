
import{test, expect} from '@playwright/test'

test("Test case on Text Locator", async({page})=>
{
  
    await page.goto('file:///C:/My Personal/Batches/PlayWright WebElements/ByTextFileDuplicate.html');

    await page.waitForTimeout(3000);

   const S = page.getByText("Login").nth(0);  //click on first text 
   await S.click();

   await page.waitForTimeout(2000);

   await page.goBack();   //comes to intial page

   await page.waitForTimeout(2000);

    const I = page.getByText("Login").nth(1); //click on second text 
   await I.click();
   await page.waitForTimeout(2000);

   await page.goBack();   //comes to intial page

   await page.waitForTimeout(2000);

   const H = page.getByText("Go to HDFC");  //click on HDFC text 
   await H.click();

    await page.waitForTimeout(3000);
})

