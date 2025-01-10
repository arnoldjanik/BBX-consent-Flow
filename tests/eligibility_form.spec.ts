import { test, expect } from '@playwright/test';
import { eligibilityLocators } from '../pages/EligibilityLocators.page.js';
import {
  nonOwnerOccupants,
  isBusinessYes,
  hasTrampolineYes,
  swimmingPool,
  dogBreed,
  anotherDog,
  assertCheckoutHeader,
  dogRequired,
} from '../pages/Eligibility.page.js';

test.describe('Eligibility page form options verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://bbx-consent-flow.dev.hippo-private.com/eligibility'
    );
  });

  test('non-owner occupied Yes, 1st opt No, 2nd opt No', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: false, vacant: false });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('non-owner occupied Yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: true, vacant: false });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('non-owner occupied Yes, 1st opt Yes, 2nd opt Yes', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: true, vacant: true });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('non-owner occupied Yes, 1st opt No, 2nd opt Yes', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: false, vacant: true });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has Swimming Pool Yes, 1st opt No, 2nd opt No', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fence: false, divingBoard: false });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has Swimming Pool yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fence: true, divingBoard: false });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has Swimming Pool yes, 1st opt Yes, 2nd opt Yes', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fence: true, divingBoard: true });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has Swimming Pool yes, 1st opt No, 2nd opt Yes', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fence: false, divingBoard: true });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });

  test('is business Yes', async ({ page }) => {
    //Act
    await isBusinessYes({ page });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has trampoline Yes', async ({ page }) => {
    //Act
    await hasTrampolineYes({ page });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has Dogs Yes Pure breed bite yes ', async ({ page }) => {
    //Act
    await dogBreed({ page: page, pureBreed: true, bite: true });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has Dogs Yes Pure breed bite no ', async ({ page }) => {
    //Act
    await dogBreed({ page: page, pureBreed: true, bite: false });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has Dog Yes Mixed breed bite yes ', async ({ page }) => {
    //Act
    await dogBreed({ page: page, pureBreed: false, bite: true });

    // Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has Dog yes mixed breed no bite', async ({ page }) => {
    //Act
    await dogBreed({ page: page, pureBreed: false, bite: false });
    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('has 2nd Dog', async ({ page }) => {
    //Act
    await anotherDog({ page: page, otherDog: true });

    // Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('2nd dog row removal', async ({ page }) => {
    //Act
    await anotherDog({ page: page, otherDog: false });

    //Assert
    await assertCheckoutHeader(page, 'Confirm your insurance application');
  });
  test('breed required error', async ({ page }) => {
    //Act
    await dogRequired({ page });
    // Assert
    await expect(page.locator(eligibilityLocators.dogError)).toHaveText(
      'Info Required'
    );
  });
});
