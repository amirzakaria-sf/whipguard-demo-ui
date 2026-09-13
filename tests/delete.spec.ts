import { test, expect } from "@playwright/test";

test("deleting the middle item removes exactly that item", async ({ page }) => {
  await page.goto("/");

  for (const text of ["Buy milk", "Walk dog", "Write report"]) {
    await page.fill("#new-item", text);
    await page.click("#add-form button[type=submit]");
  }

  await expect(page.locator("#list li")).toHaveCount(3);

  // Delete "Walk dog" (the middle item).
  await page.locator("#list li", { hasText: "Walk dog" }).locator("button.delete").click();

  await expect(page.locator("#list li")).toHaveCount(2);
  const remaining = await page.locator("#list li span").allTextContents();
  expect(remaining).toEqual(["Buy milk", "Write report"]);
});
