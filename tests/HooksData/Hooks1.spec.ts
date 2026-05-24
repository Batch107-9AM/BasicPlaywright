
import{test, expect} from '@playwright/test'

test.beforeAll("Running Before All Before Running all Test Cases", async()=>
{
        console.log("--------Hai I am Before All------------");
})

test.beforeEach("Running Before Each for Every Test Cases", async()=>
{
        console.log("--------Hai I am Before Each------------");
})

test.afterEach("Running After Each for Every Test Cases", async()=>
{
        console.log("--------Hai I am After Each------------");
})

test.afterAll("Running After All After Running all Test Cases", async()=>
{
        console.log("--------Hai I am After All------------");
})

test("Test Case 1 ", async()=>
{
    console.log("Hai I am Test Case1");
})

test("Test Case 2 ", async()=>
{
    console.log("Hai I am Test Case2");
})

test("Test Case 3 ", async()=>
{
    console.log("Hai I am Test Case3");
})

test("Test Case 4 ", async()=>
{
    console.log("Hai I am Test Case4");
})

test("Test Case 5 ", async()=>
{
    console.log("Hai I am Test Case5");
})

test("Test Case 6 ", async()=>
{
    console.log("Hai I am Test Case6");
})

test("Test Case 7 ", async()=>
{
    console.log("Hai I am Test Case7");
})
