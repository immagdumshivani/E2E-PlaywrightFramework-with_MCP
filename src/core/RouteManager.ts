import { Page } from "@playwright/test";

export class RouteManager {
  static async blockPopups(page: Page) {
    page.on("dialog", async (dialog) => {
      console.log("Popup:", dialog.message());

      await dialog.dismiss();
    });
  }
  static async blockAds(page: Page) {
    await page.route("**/*", async (route) => {
      const url = route.request().url();

      const blockedDomains = [
        "doubleclick.net",

        "googlesyndication.com",

        "googleadservices.com",

        "adservice.google.com",

        "facebook.net",

        "facebook.com",

        "analytics.google.com",

        "googletagmanager.com",

        "hotjar.com",

        "clarity.ms",

        "adsystem.com",
      ];

      if (blockedDomains.some((domain) => url.includes(domain))) {
        console.log("Blocked:", url);

        await route.abort();
      } else {
        await route.continue();
      }
    });
  }
}
