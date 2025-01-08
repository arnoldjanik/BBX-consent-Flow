import { test, expect } from '@playwright/test';
import { eligibilityLocators } from '../pages/EligibilityLocators.page.js';
import {
  selectOptions,
  isBusinessYes,
  hasTrampolineYes,
} from '../pages/Eligibility.page.js';

test.describe('Eligibility page form options verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://bbx-consent-flow.dev.hippo-private.com/eligibility'
    );
  });

  //   test('Non-owner occupied Yes, 1st opt No, 2nd opt No', async ({ page }) => {
  //     //Act
  //     await selectOptions({ secondHome: false, vacant: false });

  //     //Assert
  //     expect(eligibilityLocators.checkoutHeader).toHaveText(
  //       'Confirm your insurance application'
  //     );
  //   });
  //   test('Non-owner occupied Yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
  //     //Act
  //     await selectOptions({ secondHome: true, vacant: false });

  //     //Assert
  //     await expect(eligibilityLocators.checkoutHeader).toHaveText(
  //       'Confirm your insurance application'
  //     );
  //   });
  //   test('Non-owner occupied Yes, 1st opt Yes, 2nd opt Yes', async ({ page }) => {
  //     //Act
  //     await formOption.selectOptions({ secondHome: true, vacant: true });

  //     //Assert
  //     await expect(pageTransition.checkoutHeader).toHaveText(
  //       'Confirm your insurance application'
  //     );
  //   });
  //   test('Non-owner occupied Yes, 1st opt No, 2nd opt Yes', async ({ page }) => {
  //     //Act
  //     await formOption.selectOptions({ secondHome: false, vacant: true });

  //     //Assert
  //     await expect(pageTransition.checkoutHeader).toHaveText(
  //       'Confirm your insurance application'
  //     );
  //   });
  test('Is business Yes', async ({ page }) => {
    //Act
    await isBusinessYes ({ page });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('has trampoline Yes', async ({ page }) => {
    //Act
    await hasTrampolineYes ({ page });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
});
