import { Page } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  async isVisible(locator: string) {
    return await this.page.locator(locator).isVisible();
  }

  async waitForLoadState() {
    await this.page.waitForLoadState();
  }

  async checkBox(locator: string) {
    await this.page.locator(locator).check();
  }

  async selectdropdown(locator: string, value: string) {
    await this.page.selectOption(locator, value);
  }
}
