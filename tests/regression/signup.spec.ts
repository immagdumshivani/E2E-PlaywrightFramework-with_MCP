import { test, expect } from "../../src/fixtures/index";

import { UserData } from "../../src/data/TestData";

test("Create new user", async ({ page, signupPage }) => {
  await page.goto("/signup");

  await signupPage.signup(UserData);

  await signupPage.deleteAccount();

  expect(await signupPage.verifyDeleted()).toBeTruthy();
});
