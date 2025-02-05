import { defineConfig, devices } from '@playwright/test';
import { setDefaultOptions } from 'date-fns';
import { fr } from 'date-fns/locale/fr';
import { config as dotenvConfig } from 'dotenv';
import { defineBddConfig } from 'playwright-bdd';

dotenvConfig({ path: '.env' });
setDefaultOptions({ locale: fr });

const testDir = defineBddConfig({
  features: 'src/tests/features/**/*.feature',
  steps: 'src/tests/steps/**/*.steps.ts',
  tags: process.env.PLAYWRIGHT_TAGS ?? '',
  language: 'fr',
});

export default defineConfig({
  testDir,
  reporter: [
    ['html', { open: process.env.CI ? 'never' : 'always', outputFolder: 'playwright-report' }],
    ['./CustomReporter.ts'],
  ],
  workers: process.env.PLAYWRIGHT_WORKERS ? parseInt(process.env.PLAYWRIGHT_WORKERS) : 2,
  retries: process.env.PLAYWRIGHT_RETRIES ? parseInt(process.env.PLAYWRIGHT_RETRIES) : 0,
  projects: [
    {
      name: 'chromium',
      fullyParallel: true,
    },
  ],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'retain-on-failure',
    viewport: { width: 1280, height: process.env.ENABLE_SCREENSHOT === 'true' ? 3000 : 800 },
  },
  snapshotPathTemplate: 'screenshots/{testFileDir}/{testFileName}-snapshots/{arg}{ext}',
  timeout: 60000,
});
