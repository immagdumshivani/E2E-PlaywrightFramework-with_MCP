import { test, expect } from "@playwright/test";
import { mockProductApi } from "../../src/mocks/product.mock";
test.fixme(" @api Verify Mocked Product", async ({ page }) => {
  await mockProductApi(page);
  await page.goto("https://automationexercise.com/products");
  await expect(page.getByText("shivanis Dress")).toBeVisible();
});
