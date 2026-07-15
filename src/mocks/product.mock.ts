import { Page } from "@playwright/test";
export async function mockProductApi(page: Page) {
  await page.route("**/api/prodcutsList", async (route) => {
    console.log("✅ Route intercepted");
    const response = await route.fetch();
    console.log("response", response);

    const body = await response.json();

    body.products.push({
      id: 999,
      name: "shivanis  Dress",
      price: "Rs. 30000",
      brand: "Madame",
      category: {
        usertype: {
          usertype: "Women",
        },
        category: "Dress",
      },
    });

    await route.fulfill({
      response,
      body: body,
    });
  });
}
