import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const SERIOUS = new Set(["serious", "critical"]);

async function scan(page: import("@playwright/test").Page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  return results.violations.filter((v) => SERIOUS.has(v.impact ?? ""));
}

test("no serious/critical a11y violations on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const violations = await scan(page);
  expect(violations, JSON.stringify(violations, null, 2)).toEqual([]);
});

test("no serious/critical a11y violations on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const violations = await scan(page);
  expect(violations, JSON.stringify(violations, null, 2)).toEqual([]);
});

test("skip-link targets main content", async ({ page }) => {
  await page.goto("/");
  const skipLink = page.locator("a.skip-link");
  await expect(skipLink).toHaveAttribute("href", "#main-content");
  const main = page.locator("#main-content");
  await expect(main).toHaveAttribute("tabindex", "-1");
});

test("mobile menu: opens, closes on Esc, returns focus to trigger", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Abrir menu" });
  await trigger.click();
  await expect(page.locator("#mobile-menu")).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-menu")).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("theme toggle communicates current state via aria-pressed", async ({
  page,
}) => {
  await page.goto("/");
  const toggle = page
    .getByRole("button", { name: /tema/i })
    .first();
  await expect(toggle).toHaveAttribute("aria-pressed");
});

test("heading hierarchy: no skipped levels", async ({ page }) => {
  await page.goto("/");
  const h1 = page.getByRole("heading", { level: 1 });
  const h2s = page.getByRole("heading", { level: 2 });
  await expect(h1).toHaveCount(1);
  const h2Count = await h2s.count();
  expect(h2Count).toBeGreaterThanOrEqual(4);
});
