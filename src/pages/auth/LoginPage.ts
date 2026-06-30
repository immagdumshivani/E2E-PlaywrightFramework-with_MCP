import { BasePage } from "../../core/BasePage";
import { LoginLocators } from "../../locators/auth/LoginLocators";

export class LoginPage extends BasePage {
  async login(email: string, password: string) {
    await this.fill(LoginLocators.email, email);

    await this.fill(LoginLocators.password, password);

    await this.click(LoginLocators.loginButton);

    await this.page.waitForLoadState("networkidle");
  }

  async verifyLogin() {
    return await this.page.locator(LoginLocators.loggedInUser).isVisible();
  }
}
