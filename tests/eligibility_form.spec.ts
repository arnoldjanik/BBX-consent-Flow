import { test, expect } from '@playwright/test';
import {
  EligibilityPageAnswers,
  EligibilityPageVerification,
} from '../pages/Eligibility.page';

test.describe('Eligibility page form options verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://bbx-consent-flow.dev.hippo-private.com/eligibility'
    );
  });
  test('Non-owner occupied Yes, 1st opt No, 2nd opt No', async ({ page }) => {
    //Arrange
    const formOption = new EligibilityPageAnswers(page);
    const pageTransition = new EligibilityPageVerification(page);
    //Act
    await formOption.hasNonOwnerOccupantsYes.click();
    await formOption.secondHomeNo.click();
    await formOption.vacantNo.click();
    await pageTransition.continueButton.click();

    //Assert
    await expect(pageTransition.checkoutHeader).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('non-owner occupied Yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
    //Arrange
    //Act
    //Assert
  });
});
