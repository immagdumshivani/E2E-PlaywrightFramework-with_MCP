import { BasePage } from "../../core/BasePage";

import {
  SignupLocators,
  AccountLocators,
} from "../../locators/auth/SignupLocators";
export class SignupPage extends BasePage {
  async signup(user: any) {
    await this.fill(SignupLocators.name, user.name);

    await this.fill(SignupLocators.email, user.email);

    await this.click(SignupLocators.signupButton);

    await this.page.waitForLoadState();

    await this.checkBox(SignupLocators.title);

    await this.fill(SignupLocators.password, user.password);

    //dob
    await this.selectdropdown(SignupLocators.selectDays, "7");
    await this.selectdropdown(SignupLocators.selectMonth, "March");
    await this.selectdropdown(SignupLocators.selectYear, "2000");

    await this.fill(SignupLocators.firstName, user.firstName);

    await this.fill(SignupLocators.lastName, user.lastName);
    await this.fill(SignupLocators.company, user.company);

    await this.fill(SignupLocators.address, user.address);

    await this.selectdropdown(SignupLocators.country, "India");
    await this.fill(SignupLocators.state, user.state);
    await this.fill(SignupLocators.city, user.city);

    await this.fill(SignupLocators.zipcode, user.zipcode);

    await this.fill(SignupLocators.mobileNo, user.mobileNo);
    await this.click(SignupLocators.createAccount);
    await this.page.locator(SignupLocators.accountCreated).isVisible();
    await this.click(SignupLocators.continueAccountbtn);
    await this.waitForLoadState();
  }

  async deleteAccount() {
    await this.click(AccountLocators.deleteAccount);
  }

  async verifyDeleted() {
    return await this.page.locator(AccountLocators.accountDeleted).isVisible();
  }
}
