import { test, expect } from '@playwright/test';
import { EligibilityPageAnswers } from '../pages/Eligibility.page';
import { EligibilityLocators } from '../pages/EligibilityLocators.page';

test.describe('Default Eligibility page verification ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://bbx-consent-flow.dev.hippo-private.com/eligibility'
    );
  });

  test('Eligibility page verification', async ({ page }) => {
    //Arrange
    const consentPage = new EligibilityLocators(page);
    const welcomeText = 'Just a few more Questions';
    const button = 'Continue';
    const number = 'Phone 1-877-838-8866';
    //Act

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
    // Arrange
    const consentPageAnswers = new EligibilityLocators(page);

    // Act

    // Assert
    await expect.soft(consentPageAnswers.hasNonOwnerOccupantsNo).toBeChecked();
    await expect.soft(consentPageAnswers.isBusinessNo).toBeChecked();
    await expect.soft(consentPageAnswers.hasSwimmingPoolNo).toBeChecked();
    await expect.soft(consentPageAnswers.hasTrampolineNo).toBeChecked();
    await expect.soft(consentPageAnswers.hasDogsNo).toBeChecked();
    await expect.soft(consentPageAnswers.hasExoticPetsNo).toBeChecked();
  });

  test('Eligibility page transition verification', async ({ page }) => {
    //Arrange
    const pageTransition = new EligibilityLocators(page);

    //Act
    await pageTransition.continueButton.click();

    //Assert
    await expect(pageTransition.checkoutHeader).toHaveText(
      'Confirm your insurance application'
    );
  });
});
