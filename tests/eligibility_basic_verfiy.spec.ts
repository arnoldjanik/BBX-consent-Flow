import { test, expect } from '@playwright/test';
import { EligibilityLocators } from '../pages/EligibilityLocators.page';

test.describe('Default Eligibility page verification ', () => {
  let consentPage: EligibilityLocators;
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://bbx-consent-flow.dev.hippo-private.com/eligibility'
    );

    consentPage = new EligibilityLocators(page);
  });

  test('Eligibility page verification', async ({ page }) => {
    //Arrange
    const welcomeText = 'Just a few more Questions';
    const button = 'Continue';
    const number = 'Phone 1-877-838-8866';

    //Assert
    await expect(consentPage.headerText).toHaveText(welcomeText);
    await expect(consentPage.logo).toBeVisible();
    await expect(consentPage.phoneNumber).toHaveText(number);
    await expect(consentPage.agentId).toBeVisible();
    await expect(consentPage.disclaimer).toHaveText(
      'Hippo Insurance Services (“Hippo”) is a general agent for affiliated and non-affiliated insurance companies. Hippo is licensed as a property casualty insurance agency in all states in which products are offered.'
    );
    await expect(consentPage.continueButton).toHaveText(button);
  });

  test('Eligibility page default answers verification ', async ({ page }) => {
    // Assert
    await expect.soft(consentPage.hasNonOwnerOccupantsNo).toBeChecked();
    await expect.soft(consentPage.isBusinessNo).toBeChecked();
    await expect.soft(consentPage.hasSwimmingPoolNo).toBeChecked();
    await expect.soft(consentPage.hasTrampolineNo).toBeChecked();
    await expect.soft(consentPage.hasDogsNo).toBeChecked();
    await expect.soft(consentPage.hasExoticPetsNo).toBeChecked();
  });

  test('Eligibility page transition verification', async ({ page }) => {
    //Act
    await consentPage.continueButton.click();

    //Assert
    await expect(consentPage.checkoutHeader).toHaveText(
      'Confirm your insurance application'
    );
  });
});
