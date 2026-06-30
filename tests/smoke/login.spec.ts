import { test, expect } from "../../src/fixtures/index";

test("Verify user login", async ({ page, loginPage }) => {
  await page.goto("/");

  expect(await loginPage.verifyLogin()).toBeTruthy();
});
