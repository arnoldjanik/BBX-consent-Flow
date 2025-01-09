import { Page } from '@playwright/test';
import { eligibilityLocators } from './EligibilityLocators.page';

const pure = 'Bulldog';
const mixed = 'Golden Retriver';

export const nonOwnerOccupants = async ({
  page,
  secondHome,
  vacant,
}: {
  page: Page;
  secondHome: boolean;
  vacant: boolean;
}): Promise<void> => {
  await page.locator(eligibilityLocators.hasNonOwnerOccupantsYes).click();
  if (secondHome) {
    await page.locator(eligibilityLocators.secondHomeYes).click();
  } else {
    await page.locator(eligibilityLocators.secondHomeNo).click();
  }

  if (vacant) {
    await page.locator(eligibilityLocators.vacantYes).click();
  } else {
    await page.locator(eligibilityLocators.vacantNo).click();
  }
  await page.locator(eligibilityLocators.continueButton).click();
};
export const swimmingPool = async ({
  page,
  fenced,
  divingBoard,
}: {
  page: Page;
  fenced: boolean;
  divingBoard: boolean;
}): Promise<void> => {
  await page.locator(eligibilityLocators.hasSwimmingPoolYes).click();
  if (fenced) {
    await page.locator(eligibilityLocators.FencedYes).click();
  } else {
    await page.locator(eligibilityLocators.FencedNo).click();
  }

  if (divingBoard) {
    await page.locator(eligibilityLocators.DivingBoardYes).click();
  } else {
    await page.locator(eligibilityLocators.DivingBoardNo).click();
  }
  await page.locator(eligibilityLocators.continueButton).click();
};
export const isBusinessYes = async ({ page }): Promise<void> => {
  await page.locator(eligibilityLocators.isBusinessYes).click();
  await page.locator(eligibilityLocators.continueButton).click();
};
export const hasTrampolineYes = async ({ page }): Promise<void> => {
  await page.locator(eligibilityLocators.hasTrampolineYes).click();
  await page.locator(eligibilityLocators.continueButton).click();
};

export const dogBreed = async ({
  page,
  pureBreed,
  bite,
}: {
  page: Page;
  pureBreed: boolean;
  bite: boolean;
}): Promise<void> => {
  await page.locator(eligibilityLocators.hasDogsYes).click();
  if (pureBreed) {
    await page.locator(eligibilityLocators.breed).fill(pure);
  } else {
    await page.locator(eligibilityLocators.breed).fill(pure);
    await page.locator(eligibilityLocators.breedMixed).fill(mixed);
  }
  if (bite) {
    await page.locator(eligibilityLocators.dogBiteYes).click();
  } else {
    await page.locator(eligibilityLocators.dogBiteNo).click();
  }

  await page.locator(eligibilityLocators.continueButton).click();
};
// export const pureBreed = async ({ page }): Promise<void> => {
//   await page.locator(eligibilityLocators.hasDogsYes).click();
//   await page.locator(eligibilityLocators.breed).fill(dogBreed);
//   await page.locator(eligibilityLocators.continueButton).click();
// };
// export const mixedBreed = async ({ page }): Promise<void> => {
//   await page.locator(eligibilityLocators.hasDogsYes).click();
//   await page.locator(eligibilityLocators.breed).fill(dogBreed);
//   await page.locator(eligibilityLocators.breedMixed).fill(dogMixed);
//   await page.locator(eligibilityLocators.continueButton).click();
// };
