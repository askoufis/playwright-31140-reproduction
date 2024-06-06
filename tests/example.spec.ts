import { test, expect } from "@playwright/test";
import { getFoo } from "./module1.cjs";

test("should work", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const foo = await getFoo();

  expect(foo).toBe("foo");
});
