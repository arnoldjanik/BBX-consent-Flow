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
  await page.locator(eligibilityLocators.secondHome(secondHome)).click();
  await page.locator(eligibilityLocators.vacant(vacant)).click();

  await page.locator(eligibilityLocators.continueButton).click();
};
export const swimmingPool = async ({
  page,
  fence,
  divingBoard,
}: {
  page: Page;
  fence: boolean;
  divingBoard: boolean;
}): Promise<void> => {
  await page.locator(eligibilityLocators.hasSwimmingPoolYes).click();
  await page.locator(eligibilityLocators.fence(fence)).click();
  await page.locator(eligibilityLocators.divingBoard(divingBoard)).click();

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

  // await page.locator(eligibilityLocators.pureBreed(pureBreed)).click();

  if (pureBreed) {
    await page.locator(eligibilityLocators.breed).fill(pure);
  } else {
    await page.locator(eligibilityLocators.breed).fill(pure);
    await page.locator(eligibilityLocators.breedMixed).fill(mixed);
  }
  await page.locator(eligibilityLocators.dogBite(bite)).click();

  await page.locator(eligibilityLocators.continueButton).click();
};
export const anotherDog = async ({ page }): Promise<void> => {
  await page.locator(eligibilityLocators.hasDogsYes).click();
  await page.locator(eligibilityLocators.anotherDog).click();
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
