import { expect, Locator, Page } from '@playwright/test';

export class DefaultPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertText(text: string, locator: Locator) {
    await expect(locator).toHaveText(text);
  }
}
