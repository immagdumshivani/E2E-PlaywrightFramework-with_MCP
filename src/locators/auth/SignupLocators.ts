import { title } from "node:process";

export const SignupLocators = {
  title: "//div[@id='uniform-id_gender2']",
  name: "input[data-qa='signup-name']",

  email: "input[data-qa='signup-email']",

  signupButton: "button[data-qa='signup-button']",

  password: "input[data-qa='password']",

  selectDays: "//select[@id='days']",

  selectMonth: "//select[@id='months']",

  selectYear: "//select[@id='years']",

  firstName: "input[data-qa='first_name']",

  lastName: "input[data-qa='last_name']",

  company: "//input[@id='company']",

  address: "input[data-qa='address']",

  country: "//select[@data-qa='country']",

  state: '//input[@data-qa="state"]',

  city: '//input[@data-qa="city"]',

  zipcode: '//input[@data-qa="zipcode"]',

  mobileNo: '//input[@data-qa="mobile_number"]',

  createAccount: "button[data-qa='create-account']",

  accountCreated: "h2[data-qa='account-created']",

  submitBtn: "//button[@data-qa='create-account']",

  continueAccountbtn: "//div/a[@data-qa='continue-button']",
};
export const AccountLocators = {
  deleteAccount: "a[href='/delete_account']",

  accountDeleted: "h2[data-qa='account-deleted']",
};
