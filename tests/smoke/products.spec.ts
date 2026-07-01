import { test, expect } from "../../src/fixtures/index";

test("Validate product list on the Products page", async ({
  page,
  productPage,
}) => {
  await page.goto("/products");
  await productPage.openProductsPage();

  expect(await productPage.isProductsPageVisible()).toBeTruthy();

  expect(await productPage.validateProductList()).toBeTruthy();
});
