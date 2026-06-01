import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.E2E_PORT ?? "3100";
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: "list",
  timeout: 60_000,
  expect: { timeout: 15_000 },
  use: {
    baseURL: BASE_URL,
    trace: "retain-on-failure",
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `npm run build && npm run start -- --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
