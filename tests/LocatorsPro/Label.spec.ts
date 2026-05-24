
import{test, expect} from '@playwright/test'

test("Test case on Label", async({page})=>
{
  
    await page.goto('file:///C:/My Personal/Batches/PlayWright WebElements/ByLabel.html');

    await page.waitForTimeout(3000);

   const UN = page.getByLabel("Username");
   await UN.fill("Raj is still sleeping");

    await page.waitForTimeout(3000);
})

