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
    await formOption.selectOptions({ secondHome: false, vacant: false });

    //Assert
    await expect(pageTransition.checkoutHeader).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Non-owner occupied Yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
    //Act
    await formOption.selectOptions({ secondHome: true, vacant: false });

    //Assert
    await expect(pageTransition.checkoutHeader).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Non-owner occupied Yes, 1st opt Yes, 2nd opt Yes', async ({ page }) => {
    //Act
    await formOption.selectOptions({ secondHome: true, vacant: true });

    //Assert
    await expect(pageTransition.checkoutHeader).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Non-owner occupied Yes, 1st opt No, 2nd opt Yes', async ({ page }) => {
    //Act
    await formOption.selectOptions({ secondHome: false, vacant: true });

    //Assert
    await expect(pageTransition.checkoutHeader).toHaveText(
      'Confirm your insurance application'
    );
  });
});
