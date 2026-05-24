
import{test, expect, chromium} from '@playwright/test'

test("Open My Browser", async()=>
{
    const bEngine = await chromium.launch();
    const bContext = await bEngine.newContext();
    const mypage = await bContext.newPage();
    await mypage.setViewportSize({width : 1680, height : 1050});
    await mypage.goto('https://www.amazon.in/');

    await mypage.waitForTimeout(3000);
})

