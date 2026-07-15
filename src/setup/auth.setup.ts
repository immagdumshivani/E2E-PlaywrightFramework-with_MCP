import { test as setup, expect } from "@playwright/test";

import { LoginPage } from "../../src/pages/auth/LoginPage";

import { ENV_CONFIG } from "../../src/config/env.config";

import { CONSTANTS } from "../../src/config/constants";

// setup("authenticate user", async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await page.goto(`${ENV_CONFIG.BASE_URL}/login`);

//   await loginPage.login(ENV_CONFIG.LOGIN_USERNAME, ENV_CONFIG.LOGIN_PASSWORD);

//   await expect(page.locator("a:has-text('Logged in as')")).toBeVisible();

//   await page.context().storageState({
//     path: "storage\auth.json",
//   });
// });
