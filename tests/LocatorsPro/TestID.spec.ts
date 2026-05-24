
import{test, expect} from '@playwright/test'

test("Test case on Test ID", async({page})=>
{
  
    await page.goto('file:///C:/My Personal/Batches/PlayWright WebElements/ByTestID.html');

    await page.waitForTimeout(3000);

   const G = page.getByTestId("login-button");
   await G.click();

   await page.waitForTimeout(2000);

})

