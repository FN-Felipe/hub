import { expect, test } from "@playwright/test";

test.describe("Hub — home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders the hero headline", async ({ page }) => {
    await expect(page).toHaveTitle(/Felipe Assis/);
    const h1 = page.getByRole("heading", { level: 1 });
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Produtos full-stack");
    await expect(h1).toContainText("inteligência");
  });

  test("has all main sections", async ({ page }) => {
    for (const id of ["#topo", "#sobre", "#stack", "#projetos", "#contato"]) {
      await expect(page.locator(id)).toBeVisible();
    }
  });

  test("featured project shows Second Brain with live demo and repo", async ({
    page,
  }) => {
    const featured = page.locator("#projetos");
    await expect(
      featured.getByRole("heading", { name: "Segundo Cérebro" }),
    ).toBeVisible();

    const demo = featured.getByRole("link", { name: /demo ao vivo/i });
    await expect(demo).toHaveAttribute(
      "href",
      "https://second-brain-2026.vercel.app",
    );
    await expect(demo).toHaveAttribute("target", "_blank");

    await expect(
      featured.getByRole("link", { name: /repositório/i }),
    ).toHaveAttribute("href", /github\.com\/FN-Felipe/);
  });

  test("shows four upcoming projects", async ({ page }) => {
    const soon = page.locator("#projetos").getByText("Em breve");
    await expect(soon).toHaveCount(4);
  });

  test("external profile links are correct", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: "GitHub" }).first(),
    ).toHaveAttribute("href", "https://github.com/FN-Felipe");
    await expect(
      page.getByRole("link", { name: "LinkedIn" }).first(),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/felipe-assis-ls/");
    await expect(
      page.getByRole("link", { name: /felipe\.assis@ucred\.com\.br/ }),
    ).toHaveAttribute("href", "mailto:felipe.assis@ucred.com.br");
  });

  test("anchor navigation points to sections", async ({ page }) => {
    await page
      .getByRole("navigation", { name: "Principal" })
      .getByRole("link", { name: "Projetos" })
      .click();
    await expect(page).toHaveURL(/#projetos$/);
  });
});
