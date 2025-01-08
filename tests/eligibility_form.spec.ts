import { test, expect } from '@playwright/test';
import { EligibilityLocators } from '../pages/EligibilityLocators.page';
import { EligibilityPageAnswers } from '../pages/Eligibility.page';

test.describe('Eligibility page form options verification', () => {
  let formOption: EligibilityPageAnswers;
  let pageTransition: EligibilityLocators;
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://bbx-consent-flow.dev.hippo-private.com/eligibility'
    );
    formOption = new EligibilityPageAnswers(page);
    pageTransition = new EligibilityLocators(page);
  });

  test('Non-owner occupied Yes, 1st opt No, 2nd opt No', async ({ page }) => {
    //Act
    await formOption.nonOwner1();

    //Assert
    await expect(pageTransition.checkoutHeader).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Non-owner occupied Yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
    //Act
    await formOption.nonOwner2();

    //Assert
    await expect(pageTransition.checkoutHeader).toHaveText(
      'Confirm your insurance application'
    );
  });
});
