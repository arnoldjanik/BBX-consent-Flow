import { Page } from '@playwright/test';
import { eligibilityLocators } from './EligibilityLocators.page';

//   async nonOwner1(): Promise<void> {
//     await eligibilityLocators.hasNonOwnerOccupantsYes.click();
//     await eligibilityLocators.secondHomeNo.click();
//     await eligibilityLocators.vacantNo.click();
//     await eligibilityLocators.continueButton.click();
//   }

//  export const selectOptions = async ({
//   secondHome,
//   vacant,
// }: {
//   secondHome: boolean;
//   vacant: boolean;
// }): Promise<void> => {
//   await eligibilityLocators.hasNonOwnerOccupantsYes.click();
//   if (secondHome) {
//     await eligibilityLocators.secondHomeYes.click();
//   } else {
//     await eligibilityLocators.secondHomeNo.click();
//   }

//   if (vacant) {
//     await eligibilityLocators.vacantYes.click();
//   } else {
//     await eligibilityLocators.vacantNo.click();
//   }

//   await eligibilityLocators.continueButton.click();
// };
//  export const isBusinessYes = async ({ page }): Promise<void> => {
//   await page.locator(eligibilityLocators.isBusinessYes).click();
//   await page.locator(eligibilityLocators.continueButton).click();
//  };
export const hasTrampolineYes = async ({ page }): Promise<void> => {
  await page.locator(eligibilityLocators.hasTrampolineYes).click();
  await page.locator(eligibilityLocators.continueButton).click();
};
