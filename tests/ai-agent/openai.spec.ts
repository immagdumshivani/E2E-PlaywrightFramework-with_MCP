import { test, expect } from "@playwright/test";
import { GeminiProvider } from "../../src/ai/llm";

test("Gemini Connection", async () => {
  const llm = new GeminiProvider();

  const response = await llm.generate(
    "Reply with exactly: Hello Playwright AI",
  );

  console.log(response);

  expect(response.trim()).toContain("Hello Playwright AI");
});
