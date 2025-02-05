import { LaunchOptions } from '@playwright/test';
import { config as dotenvConfig } from 'dotenv';

import 'module-alias/register'; // 👈 add this one

dotenvConfig({ path: '.env' });

const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

export const config = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  BASE_URL: process.env.BASE_URL || 'https://dev.elsie-intranet.fr/',
  IMG_THRESHOLD: { threshold: 0.4 },
  timeout: 10000,
};
