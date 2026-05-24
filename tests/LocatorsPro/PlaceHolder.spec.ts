
import{test, expect} from '@playwright/test'

test("Test case on PlaceHolder", async({page})=>
{
  
    await page.goto('file:///C:/My Personal/Batches/PlayWright WebElements/PlaceHolderPro.html');

    await page.waitForTimeout(3000);

   const UN = page.getByPlaceholder("Username");
   await UN.fill("Good Morning");

    await page.waitForTimeout(1000);

   const PWD = page.getByPlaceholder("Password");
   await PWD.fill("my data");
    await page.waitForTimeout(1000);

   const EMAIL = page.getByPlaceholder("Email address");
   await EMAIL.fill("pratice@happy.com");
    await page.waitForTimeout(1000);

    const mycomments = page.getByPlaceholder("Enter your comments");
   await mycomments.fill("Do programs on daily basis");


  

    await page.waitForTimeout(3000);
})

