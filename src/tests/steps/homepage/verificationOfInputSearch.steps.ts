import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given("l'utilisateur peut se connecter à wikipedia", async ({ page }) => {
  await page.goto('/');
});

When(
  "l'utilisateur recherche {string} dans l'input de recherche",
  async ({ page }, text: string) => {
    const searchContainer = page.locator('div.search-container');
    const input = searchContainer.locator('input#searchInput');
    await input.fill(text);
    await searchContainer.locator('button').click();

    const title = page.getByRole('heading', { name: text, exact: true }).locator('span');
    await title.waitFor({ state: 'visible' });
  },
);

Then(
  "l'utilisateur doit voir un titre {string} dans la page de recherche",
  async ({ page }, text: string) => {
    const title = page.getByRole('heading', { name: text, exact: true }).locator('span');
    await expect(title).toHaveText(text);
  },
);
