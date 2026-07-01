import { defineConfig, devices } from "@playwright/test";
import { CONSTANTS } from "./src/config/constants";
import { ENV_CONFIG } from "./src/config/env.config";
export default defineConfig({
  testDir: "./tests",

  timeout: 60000,
  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [["html"], ["allure-playwright"]],

  use: {
    baseURL: process.env.BASE_URL,

    storageState: CONSTANTS.AUTH_FILE,

    trace: "retain-on-failure",

    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",

      use: {
        ...devices["Desktop Chrome"],

        storageState: CONSTANTS.AUTH_FILE,
      },

      dependencies: ["setup"],
    },
    {
      name: "setup",
      testMatch: "auth.setup.ts",
    },

    {
      name: "authenticated",
      dependencies: ["setup"],
      testMatch: "**/*.auth.spec.ts",
      use: {
        ...devices["Desktop Chrome"],

        baseURL: ENV_CONFIG.BASE_URL,

        storageState: CONSTANTS.AUTH_FILE,
        viewport: {
          width: 1920,
          height: 1080,
        },
      },
    },

    {
      name: "guest",
      testMatch: "**/signup.spec.ts",
      use: {
        ...devices["Desktop Chrome"],

        baseURL: ENV_CONFIG.BASE_URL,

        storageState: undefined,
        viewport: {
          width: 1920,
          height: 1080,
        },
      },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
