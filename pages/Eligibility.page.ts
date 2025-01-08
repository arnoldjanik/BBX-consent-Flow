import { Page } from '@playwright/test';
import { EligibilityLocators } from './EligibilityLocators.page';

export class EligibilityPageAnswers {
  private eligibilityLocators: EligibilityLocators;
  constructor(private page: Page) {
    this.eligibilityLocators = new EligibilityLocators(page);
  }

  async nonOwner1(): Promise<void> {
    await this.eligibilityLocators.hasNonOwnerOccupantsYes.click();
    await this.eligibilityLocators.secondHomeNo.click();
    await this.eligibilityLocators.vacantNo.click();
    await this.eligibilityLocators.continueButton.click();
  }

  async nonOwner2(): Promise<void> {
    await this.eligibilityLocators.hasNonOwnerOccupantsYes.click();
    await this.eligibilityLocators.secondHomeYes.click();
    await this.eligibilityLocators.vacantNo.click();
    await this.eligibilityLocators.continueButton.click();
  }
}
