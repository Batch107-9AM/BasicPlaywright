
import{test, expect} from '@playwright/test'

test("Open My Browser", async({page})=>
{
  
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(3000);
})

