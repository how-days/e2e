import { createBdd } from 'playwright-bdd';
import { DefaultPage } from 'src/page/DefaultPage';
import { HomePage } from 'src/page/HomePage';
import { SearchPage } from 'src/page/SearchPage';

const { Given, When, Then } = createBdd();

Given("l'utilisateur peut se connecter à wikipedia", async ({ page }) => {
  await page.goto('/');
});

When(
  "l'utilisateur recherche {string} dans l'input de recherche",
  async ({ page }, text: string) => {
    const homePage = new HomePage(page);

    await homePage.fillInputSearch(text);
    await homePage.searchInputSearch();
  },
);

Then(
  "l'utilisateur doit voir un titre {string} dans la page de recherche",
  async ({ page }, text: string) => {
    const searchPage = new SearchPage(page);
    const defaultPage = new DefaultPage(page);

    const locator = searchPage.getTitle();
    await defaultPage.assertText(text, locator);
  },
);
