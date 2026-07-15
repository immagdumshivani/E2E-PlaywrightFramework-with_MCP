import { test as setup, expect } from "@playwright/test";

import { LoginPage } from "../../src/pages/auth/LoginPage";

import { ENV_CONFIG } from "../../src/config/env.config";

import { CONSTANTS } from "../../src/config/constants";

const authFile = CONSTANTS.AUTH_FILE;

// setup("authenticate user", async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   // Navigate to login page

//   await page.goto(`${ENV_CONFIG.BASE_URL}/login`);

//   // Login

//   await loginPage.login(ENV_CONFIG.LOGIN_USERNAME, ENV_CONFIG.LOGIN_PASSWORD);

//   // Verify login success

//   await expect(page.locator("text=Logout")).toBeVisible();

//   // Save session

//   await page.context().storageState({
//     path: authFile,
//   });
// });
