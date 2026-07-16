import { test, expect } from "playwright/test";
import path from "path";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  await page.waitForLoadState();
  await expect(page).toHaveTitle(
    "Automation Testing Practice: PlaywrightPractice",
  );
});

test("Visit the URL and check the title of the page", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  await page.waitForLoadState();
  await expect(page).toHaveTitle(
    "Automation Testing Practice: PlaywrightPractice",
  );
});

test("GetbyRole preactice", async ({ page }) => {
  // Get the button element by its role and name
  await page.getByRole("button", { name: "Primary Action" }).click();
  await page.getByRole("button", { name: "Toggle Button" }).click();
});

test("Dynamic Button", async ({ page }) => {
  await page.getByRole("button", { name: "START" }).click();
  await expect(page.getByRole("button", { name: "STOP" })).toBeVisible();
});

test.describe("ALERTS AND PROMPTS", () => {
  test("SIMPLE ALERT", async ({ page }) => {
    await page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await page.getByRole("button", { name: "Simple Alert" }).click();
  });

  test("Confirmation Alert", async ({ page }) => {
    await page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.accept();
    });
    await page.getByRole("button", { name: "Confirmation Alert" }).click();
  });

  test("Prompt Alert", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      console.log(dialog.defaultValue());
      await expect(dialog.defaultValue()).toBe("Harry Potter");
      await dialog.accept("Shivani");
    });

    await page.getByRole("button", { name: "Prompt Alert" }).click();

    await expect(page.locator("#demo")).toContainText(
      " Hello Shivani! How are you today",
    );
  });
});

// this test will search for tshirts and check if i got 5 search results the this will click on first element and check if new page opens or not
test("SEARCH ON WIKIPEDIA", async ({ page }) => {
  await page.locator("#Wikipedia1_wikipedia-search-input").fill("Tshirt");
  await page.locator(".wikipedia-search-button").click({ trial: true });
  console.log("Element is clickable");
  await page.locator(".wikipedia-search-button").click();
  const searchresults = await page.locator("#wikipedia-search-result-link a");
  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    searchresults.first().click(),
  ]);

  newPage.waitForLoadState();
  await expect(newPage).toHaveURL("https://en.wikipedia.org/wiki/T-shirt");
});

// 1 . search for tshirt and get the new page and check if new page has search box and searhced text is visible
// capture the dropdown results

test("Search on new page and validate dynamic dropdown results", async ({
  page,
}) => {
  const searchValue = "Tshirt";
  await page.locator("#Wikipedia1_wikipedia-search-input").fill(searchValue);
  await page.locator(".wikipedia-search-button").click({ trial: true });
  console.log("Element is clickable");
  await page.locator(".wikipedia-search-button").click();

  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    page.locator("#Wikipedia1_wikipedia-search-more a").click(),
  ]);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle("Tshirt - Search results - Wikipedia");
  const newpagesearchValue = await page
    .locator("#searchText input")
    .getAttribute("value");

  await expect(searchValue).toBe(newpagesearchValue);
  await page.locator("#searchText input").click();
  await expect(page.locator("#ooui-31;")).toBeVisible();
  const dynamicalues = await page.locator("#ooui-31;").allTextContents();
  await expect(dynamicalues).toHaveLength(10);
});

test("MOUSE HOVER ACTION AND VALIDATE THE DROPDOWN TEXTS", async ({ page }) => {
  await page.locator(".dropdown button").hover();
  const count = await page.locator(".dropdown-content >a").count();
  await expect(count).toBe(2);

  const dropdownItems = await page
    .locator(".dropdown-content > a")
    .allTextContents();

  const dropdowns = ["Mobiles", "Laptops"];
  for (const item of dropdownItems) {
    expect(dropdowns).toContain(item);
  }
});

test("double click and verify the copied test in input field 2 ", async ({
  page,
}) => {
  const text = await page.locator("#field1").textContent();

  await page.getByRole("button", { name: "copy Text" }).dblclick();

  const text2 = await page.locator("#field2").textContent();
  await expect(text2).toBe(text);
});

test("FILE CHOOSER UPLOAD FILE", async ({ page }) => {
  console.log(__dirname);
  page
    .locator("#singleFileInput")
    .setInputFiles(path.join("C:/Users/manda/Downloads/1.png"));
  await page.getByRole("button", { name: "Upload Single File" }).click();

  await expect(page.locator("#singleFileStatus")).toContainText("1.png");
});
