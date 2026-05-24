
import{test, expect} from '@playwright/test'

test("Test case on Text Locator", async({page})=>
{
  
    await page.goto('file:///C:/My Personal/Batches/PlayWright WebElements/ByTextFile.html');

    await page.waitForTimeout(3000);

   const G = page.getByText("MyGoogle");
   await G.click();

   await page.waitForTimeout(2000);

   await page.goBack();   //comes to intial page

   await page.waitForTimeout(2000);

   const M = page.getByText("Go to TheMask");
   await M.click();
   await page.waitForTimeout(2000);

   await page.goBack();   //comes to intial page

   await page.waitForTimeout(2000);

   await page.goForward();   //comes to mask page

    await page.waitForTimeout(3000);
})

