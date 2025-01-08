import { test, expect } from '@playwright/test';
import { eligibilityLocators } from '../pages/EligibilityLocators.page';

test.describe('Default Eligibility page verification ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://bbx-consent-flow.dev.hippo-private.com/eligibility'
    );
  });

  test('Eligibility page verification', async ({ page }) => {
    //Arrange
    const welcomeText = 'Just a few more Questions';
    const button = 'Continue';
    const number = '1-877-838-8866';
    const logo = 'Logo Hippo';

    //Assert
    await expect(page.locator(eligibilityLocators.headerText)).toHaveText(
      welcomeText
    );
    await expect(page.locator(eligibilityLocators.logo)).toHaveText(logo);
    await expect(page.locator(eligibilityLocators.phoneNumber)).toHaveText(
      number
    );
    await expect(page.locator(eligibilityLocators.agentId)).toBeVisible();
    await expect(page.locator(eligibilityLocators.disclaimer)).toHaveText(
      'Hippo Insurance Services (“Hippo”) is a general agent for affiliated and non-affiliated insurance companies. Hippo is licensed as a property casualty insurance agency in all states in which products are offered.'
    );
    await expect(page.locator(eligibilityLocators.continueButton)).toHaveText(
      button
    );
  });

  test('Eligibility page default answers verification ', async ({ page }) => {
    // Assert
    await expect
      .soft(page.locator(eligibilityLocators.hasNonOwnerOccupantsNo))
      .toBeChecked();
    await expect
      .soft(page.locator(eligibilityLocators.isBusinessNo))
      .toBeChecked();
    await expect
      .soft(page.locator(eligibilityLocators.hasSwimmingPoolNo))
      .toBeChecked();
    await expect
      .soft(page.locator(eligibilityLocators.hasTrampolineNo))
      .toBeChecked();
    await expect
      .soft(page.locator(eligibilityLocators.hasDogsNo))
      .toBeChecked();
    await expect
      .soft(page.locator(eligibilityLocators.hasExoticPetsNo))
      .toBeChecked();
  });

  test('Eligibility page transition verification', async ({ page }) => {
    //Act
    await page.locator(eligibilityLocators.continueButton).click();

    //Assert
    await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
      'Confirm your insurance application'
    );
  });
});
