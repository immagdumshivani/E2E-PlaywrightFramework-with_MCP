import { test as base } from "@playwright/test";

import { LoginPage } from "../pages/auth/LoginPage";

import { SignupPage } from "../pages/auth/SignupPage";

import { RouteManager } from "../core/RouteManager";

type Pages = {
  loginPage: LoginPage;

  signupPage: SignupPage;
};

export const test = base.extend<Pages>({
  page: async ({ page }, use) => {
    await RouteManager.blockAds(page);

    await use(page);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
});

export { expect } from "@playwright/test";
