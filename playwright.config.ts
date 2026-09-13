import { defineConfig } from "@playwright/test";

// When PLAYWRIGHT_BASE_URL is set (the post-deploy oracle re-checking a real
// Cloudflare Pages URL), test against that directly and skip spinning up a
// local server. Local runs (detection/verification, against the worktree on
// disk) fall back to serving the checked-out files themselves.
const liveUrl = process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: "./tests",
  ...(liveUrl
    ? {}
    : {
        webServer: {
          command: "npx serve -l 4173 .",
          port: 4173,
          reuseExistingServer: !process.env.CI,
        },
      }),
  use: {
    baseURL: liveUrl || "http://localhost:4173",
  },
});
