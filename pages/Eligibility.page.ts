import { Page, expect } from '@playwright/test';
import { eligibilityLocators } from './EligibilityLocators.page';

const pure = 'Bulldog';
const mixed = 'Golden Retriver';
const exotic = 'Beagle';
const checkoutText = 'Confirm your insurance application';

export const clickContinue = async (page: Page): Promise<void> => {
  await page.locator(eligibilityLocators.continueButton).click();
};
export const assertCheckoutHeader = async (
  page: Page,
  expectedText: string
): Promise<void> => {
  await expect(page.locator(eligibilityLocators.checkoutHeader)).toHaveText(
    checkoutText
  );
};
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
  await clickContinue(page);
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
  await clickContinue(page);
};
export const isBusinessYes = async ({ page }): Promise<void> => {
  await page.locator(eligibilityLocators.isBusinessYes).click();
  await clickContinue(page);
};
export const hasTrampolineYes = async ({ page }): Promise<void> => {
  await page.locator(eligibilityLocators.hasTrampolineYes).click();
  await clickContinue(page);
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
  await clickContinue(page);
};

export const anotherDog = async ({
  page,
  otherDog,
}: {
  page: Page;
  otherDog: boolean;
}): Promise<void> => {
  await page.locator(eligibilityLocators.hasDogsYes).click();
  await page.locator(eligibilityLocators.anotherDog).click();

  const breeds = otherDog ? [0, 1] : [0]; // Choose indices based on `otherDog`

  for (const index of breeds) {
    await page.locator(eligibilityLocators.breed).nth(index).fill(pure);
  }
  if (!otherDog) {
    await page.locator(eligibilityLocators.dogRemoval).nth(1).click();
  }
  await clickContinue(page);
};
export const dogRequired = async ({ page }): Promise<void> => {
  await page.locator(eligibilityLocators.hasDogsYes).click();
  await clickContinue(page);
};
export const exoticPet = async ({
  page,
  bite,
}: {
  page: Page;
  bite: boolean;
}): Promise<void> => {
  await page.locator(eligibilityLocators.hasExoticPetsYes).click();
  await page.locator(eligibilityLocators.exoticPetType).fill(exotic);
  await page.locator(eligibilityLocators.exoticBite(bite)).click();
  await clickContinue(page);
};
export const anotherPet = async ({
  page,
  otherPet,
}: {
  page: Page;
  otherPet: boolean;
}): Promise<void> => {
  await page.locator(eligibilityLocators.hasExoticPetsYes).click();
  await page.locator(eligibilityLocators.anotherPet).click();

  const breeds = otherPet ? [0, 1] : [0]; // Choose indices based on `otherDog`

  for (const index of breeds) {
    await page
      .locator(eligibilityLocators.exoticPetType)
      .nth(index)
      .fill(exotic);
  }
  if (!otherPet) {
    await page.locator(eligibilityLocators.dogRemoval).nth(1).click();
  }
  await clickContinue(page);
};
export const petRequired = async ({ page }): Promise<void> => {
  await page.locator(eligibilityLocators.hasExoticPetsYes).click();
  await clickContinue(page);
};
