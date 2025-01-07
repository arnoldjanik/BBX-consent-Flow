import { test, expect } from '@playwright/test';

test.describe('Eligibility page form options verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://bbx-consent-flow.dev.hippo-private.com/eligibility'
    );
    test();
  });
});
