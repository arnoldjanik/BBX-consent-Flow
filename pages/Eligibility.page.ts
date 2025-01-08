import { Page } from '@playwright/test';
import { EligibilityLocators } from './EligibilityLocators.page';

export class EligibilityPageAnswers {
  private eligibilityLocators: EligibilityLocators;
  constructor(private page: Page) {
    this.eligibilityLocators = new EligibilityLocators(page);
  }

  //   async nonOwner1(): Promise<void> {
  //     await this.eligibilityLocators.hasNonOwnerOccupantsYes.click();
  //     await this.eligibilityLocators.secondHomeNo.click();
  //     await this.eligibilityLocators.vacantNo.click();
  //     await this.eligibilityLocators.continueButton.click();
  //   }

  async selectOptions({
    secondHome,
    vacant,
  }: {
    secondHome: boolean;
    vacant: boolean;
  }): Promise<void> {
    await this.eligibilityLocators.hasNonOwnerOccupantsYes.click();
    if (secondHome) {
      await this.eligibilityLocators.secondHomeYes.click();
    } else {
      await this.eligibilityLocators.secondHomeNo.click();
    }

    if (vacant) {
      await this.eligibilityLocators.vacantYes.click();
    } else {
      await this.eligibilityLocators.vacantNo.click();
    }

    await this.eligibilityLocators.continueButton.click();
  }
}
