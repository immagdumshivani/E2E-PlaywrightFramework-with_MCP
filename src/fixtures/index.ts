import { test as base } from "@playwright/test";

import { LoginPage } from "../pages/auth/LoginPage";

import { SignupPage } from "../pages/auth/SignupPage";

import { ProductPage } from "../pages/products/ProductPage";

import { RouteManager } from "../core/RouteManager";

import { ApiBasePage } from "../core/ApiBasePage";

import { SchemaValidator } from "../core/SchemaValidator";

type Pages = {
  loginPage: LoginPage;

  signupPage: SignupPage;

  productPage: ProductPage;

  apiBasePage: ApiBasePage;
  schemaValidator: SchemaValidator;
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

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  apiBasePage: async ({ request }, use) => {
    await use(new ApiBasePage(request));
  },

  schemaValidator: async ({ request }, use) => {
    await use(new SchemaValidator());
  },
});

export { expect } from "@playwright/test";
