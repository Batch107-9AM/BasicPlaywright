
import{test, expect} from '@playwright/test'

test("Test case on Role", async({page})=>
{
  
    await page.goto('http://127.0.0.1/orangehrm-2.5.0.2/login.php');

    await page.waitForTimeout(3000);

   const U = page.locator("//input[@type='text']");
   await U.fill("hello");
   const P = page.locator("//input[@type='password']");
   await P.fill("hai");

   const L = page.getByRole("button" , {name : "Login"});
   await L.click();



   await page.waitForTimeout(4000);

})

