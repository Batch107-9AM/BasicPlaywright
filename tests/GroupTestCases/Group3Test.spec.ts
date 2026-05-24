import{test, expect} from '@playwright/test'

test("Group 3 - Test Case1", async()=>
{
    console.log("Hai I am Test Case1 - Group3");
})

test("Group 3 - Test Case2", async()=>
{
    console.log("Hai I am Test Case2 - Group3");
})

test.skip("Group 3 - Test Case3", async()=>
{
    console.log("Hai I am Test Case3 - Group3");
})

test("Group 3 - Test Case4", async()=>
{
    console.log("Hai I am Test Case4 - Group3");
})

test("Group 3 - Test Case5", async()=>
{
    console.log("Hai I am Test Case5 - Group3");
})

test("Group 3 - Test Case6", async()=>
{
    console.log("Hai I am Test Case6 - Group3");
})

test("Group 3 - Test Case7", async()=>
{
    console.log("Hai I am Test Case7 - Group3");
})

test.fail("Group 3 - Test Case8", async()=>
{
  //  console.log("Hai I am Test Case8 - Group3");
  expect(5).toBe(15);
})

test("Group 3 - Test Case9", async()=>
{
    console.log("Hai I am Test Case9 - Group3");
})

test("Group 3 - Test Case10", async()=>
{
    console.log("Hai I am Test Case10 - Group3");
})


test.fixme("Group 3 - Test Case11", async()=>
{
    console.log("Hai I am Test Case11 - Group3");
})

test("Group 3 - Test Case12", async()=>
{
    console.log("Hai I am Test Case12 - Group3");
})


test("Group 3 - Test Case13", async()=>
{
    console.log("Hai I am Test Case13 - Group3");
})

