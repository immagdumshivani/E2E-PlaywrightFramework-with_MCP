# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\signup.spec.ts >> Create new user
- Location: tests\regression\signup.spec.ts:5:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('a[href=\'/delete_account\']')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Automation Exercise website" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e40]:
    - heading "Account Created!" [level=2] [ref=e41]
    - paragraph [ref=e42]: Congratulations! Your new account has been successfully created!
    - paragraph [ref=e43]: You can now take advantage of member privileges to enhance your online shopping experience with us.
    - link "Continue" [ref=e45] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=e46]:
    - generic [ref=e51]:
      - heading "Subscription" [level=2] [ref=e52]
      - generic [ref=e53]:
        - textbox "Your email address" [ref=e54]
        - button "" [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: 
        - paragraph [ref=e57]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e61]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export class BasePage {
  4  |   constructor(protected page: Page) {}
  5  | 
  6  |   async goto(url: string) {
  7  |     await this.page.goto(url);
  8  |   }
  9  | 
  10 |   async click(locator: string) {
> 11 |     await this.page.locator(locator).click();
     |                                      ^ Error: locator.click: Test timeout of 60000ms exceeded.
  12 |   }
  13 | 
  14 |   async fill(locator: string, value: string) {
  15 |     await this.page.locator(locator).fill(value);
  16 |   }
  17 | 
  18 |   async isVisible(locator: string) {
  19 |     return await this.page.locator(locator).isVisible();
  20 |   }
  21 | 
  22 |   async waitForLoadState() {
  23 |     await this.page.waitForLoadState();
  24 |   }
  25 | 
  26 |   async checkBox(locator: string) {
  27 |     await this.page.locator(locator).check();
  28 |   }
  29 | 
  30 |   async selectdropdown(locator: string, value: string) {
  31 |     await this.page.selectOption(locator, value);
  32 |   }
  33 | }
  34 | 
```