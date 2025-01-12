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
  exoticPet,
  anotherPet,
  petRequired,
} from '../pages/Eligibility.page.js';
const checkoutText = 'Confirm your insurance application';

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
    await assertCheckoutHeader(page, checkoutText);
  });
  test('non-owner occupied Yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: true, vacant: false });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('non-owner occupied Yes, 1st opt Yes, 2nd opt Yes', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: true, vacant: true });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('non-owner occupied Yes, 1st opt No, 2nd opt Yes', async ({ page }) => {
    //Act
    await nonOwnerOccupants({ page: page, secondHome: false, vacant: true });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has Swimming Pool Yes, 1st opt No, 2nd opt No', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fence: false, divingBoard: false });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has Swimming Pool yes, 1st opt Yes, 2nd opt No', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fence: true, divingBoard: false });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has Swimming Pool yes, 1st opt Yes, 2nd opt Yes', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fence: true, divingBoard: true });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has Swimming Pool yes, 1st opt No, 2nd opt Yes', async ({ page }) => {
    //Act
    await swimmingPool({ page: page, fence: false, divingBoard: true });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('is business Yes', async ({ page }) => {
    //Act
    await isBusinessYes({ page });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has trampoline Yes', async ({ page }) => {
    //Act
    await hasTrampolineYes({ page });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has Dogs Yes Pure breed bite yes ', async ({ page }) => {
    //Act
    await dogBreed({ page: page, pureBreed: true, bite: true });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has Dogs Yes Pure breed bite no ', async ({ page }) => {
    //Act
    await dogBreed({ page: page, pureBreed: true, bite: false });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has Dog Yes Mixed breed bite yes ', async ({ page }) => {
    //Act
    await dogBreed({ page: page, pureBreed: false, bite: true });

    // Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has Dog yes mixed breed no bite', async ({ page }) => {
    //Act
    await dogBreed({ page: page, pureBreed: false, bite: false });
    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('has 2nd Dog', async ({ page }) => {
    //Act
    await anotherDog({ page: page, otherDog: true });

    // Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('2nd dog row removal', async ({ page }) => {
    //Act
    await anotherDog({ page: page, otherDog: false });

    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('breed required error', async ({ page }) => {
    //Act
    await dogRequired({ page });
    // Assert
    await expect(page.locator(eligibilityLocators.dogError)).toHaveText(
      'Info Required'
    );
  });
  test('exotic pet no bite', async ({ page }) => {
    //Act
    await exoticPet({ page: page, bite: false });
    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('exotic pet bite', async ({ page }) => {
    //Act
    await exoticPet({ page: page, bite: true });
    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('2nd exotic pet', async ({ page }) => {
    //Act
    await anotherPet({ page: page, otherPet: true });
    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('2nd exotic pet removal', async ({ page }) => {
    // Act
    await anotherPet({ page: page, otherPet: false });
    //Assert
    await assertCheckoutHeader(page, checkoutText);
  });
  test('pet required', async ({ page }) => {
    //Act
    await petRequired({ page });
    //Assert
    await expect(page.locator(eligibilityLocators.petError)).toHaveText(
      'Info Required'
    );
  });
});
