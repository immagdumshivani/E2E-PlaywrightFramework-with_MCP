import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.ENV || "qa"}`,
  override: true,
});

export const ENV_CONFIG = {
  ENV: process.env.ENV,

  BASE_URL: process.env.BASE_URL!,

  LOGIN_USERNAME: process.env.TEST_USERNAME!,

  LOGIN_PASSWORD: process.env.TEST_PASSWORD!,
};
