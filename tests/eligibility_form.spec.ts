import { test, expect } from '@playwright/test';
import { eligibilityLocators } from '../pages/EligibilityLocators.page.js';
import {
  nonOwnerOccupants,
  isBusinessYes,
  hasTrampolineYes,
  swimmingPool,
} from '../pages/Eligibility.page.js';

test.describe('Eligibility page form options verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://bbx-consent-flow.dev.hippo-private.com/eligibility'
    );
  });

  test('Non-owner occupied Yes, 1st opt No, 2nd opt No', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: false, vacant: false });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Non-owner occupied Yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: true, vacant: false });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Non-owner occupied Yes, 1st opt Yes, 2nd opt Yes', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: true, vacant: true });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Non-owner occupied Yes, 1st opt No, 2nd opt Yes', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: false, vacant: true });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Has Swimming Pool Yes, 1st opt No, 2nd opt No', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fenced: false, divingBoard: false });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Has Swimming Pool yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fenced: true, divingBoard: false });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Has Swimming Pool yes, 1st opt Yes, 2nd opt Yes', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fenced: true, divingBoard: true });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('Has Swimming Pool yes, 1st opt No, 2nd opt Yes', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fenced: false, divingBoard: true });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });

  test('Is business Yes', async ({ page }) => {
    //Act
    await isBusinessYes({ page });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
  test('has trampoline Yes', async ({ page }) => {
    //Act
    await hasTrampolineYes({ page });

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
});
