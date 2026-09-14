import { test, expect } from "@playwright/test";

// axe-core injected from CDN rather than added as an npm dependency -- this
// fixture repo has zero runtime dependencies on purpose (see package.json),
// and this keeps it that way. The sandbox this runs in already needs
// outbound network access for `npm install`, so this adds no new
// requirement. Tagged @a11y so the `ui` category's own Playwright run
// (app.js/index.html behavior, not accessibility) can exclude this file
// via `--grep-invert "@a11y"` without the two categories double-counting
// the same failure under two different names.
test("page exposes an accessible name for every interactive control @a11y", async ({ page }) => {
  await page.goto("/");
  await page.addScriptTag({
    url: "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js",
  });

  const results = await page.evaluate(async () => {
    return await (window as any).axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] },
    });
  });

  const serious = results.violations.filter(
    (v: any) => v.impact === "serious" || v.impact === "critical"
  );

  expect(
    serious,
    JSON.stringify(
      serious.map((v: any) => ({ id: v.id, help: v.help, nodes: v.nodes.length })),
      null,
      2
    )
  ).toEqual([]);
});
