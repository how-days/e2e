import { type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly locators: Record<string, string>;

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      'homepage-search-container': 'div.search-container',
      'homepage-search-input': 'input#searchInput',
      button: 'button',
    };
  }

  async fillInputSearch(text: string) {
    const searchContainer = this.page.locator(this.locators['homepage-search-container']);
    const input = searchContainer.locator(this.locators['homepage-search-input']);
    await input.fill(text);
  }

  async searchInputSearch() {
    const searchContainer = this.page.locator(this.locators['homepage-search-container']);
    await searchContainer.locator(this.locators['button']).click();
  }
}
