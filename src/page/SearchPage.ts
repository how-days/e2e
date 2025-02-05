import { type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly locators: Record<string, string>;

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      'page-title': 'h1#firstHeading > span.mw-page-title-main',
    };
  }

  getTitle(): Locator {
    return this.page.locator(this.locators['page-title']);
  }
}
