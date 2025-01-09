import { Page } from '@playwright/test';

export const eligibilityLocators = {
  headerText: `h1:has-text('Just a few more Questions')`,
  logo: `svg:has-text('Logo Hippo')`,
  phoneNumber: `span:has-text('1-877-838-8866')`,
  agentId: `span:has-text('Your Agent')`,
  disclaimer: `footer:has-text('Hippo Insurance Services')`,
  continueButton: `button[type='submit']:has-text('Continue')`,
  checkoutHeader: `text = Confirm your insurance application`,

  hasNonOwnerOccupantsNo: `[data-testId = 'hasNonOwnerOccupants-No']`,
  isBusinessNo: `[data-testId = 'isBusiness-No']`,
  hasSwimmingPoolNo: `[data-testId = 'hasSwimmingPool-No']`,
  hasTrampolineNo: `[data-testId='hasTrampoline-No']`,
  hasDogsNo: `[data-testId = 'hasDogs-No']`,
  hasExoticPetsNo: `[data-testId = 'hasExoticPets-No']`,

  hasNonOwnerOccupantsYes: `[data-testId = 'hasNonOwnerOccupants-Yes']`,
  secondHome: (condition: boolean) =>
    `[data-testId = 'isSecondHome-${condition ? 'Yes' : 'No'}']`,
  vacant: (condition: boolean) =>
    `[data-testId = 'isVacantOrRented-${condition ? 'Yes' : 'No'}']`,

  isBusinessYes: `[data-testId = 'isBusiness-Yes']`,

  hasSwimmingPoolYes: `[data-testId = 'hasSwimmingPool-Yes']`,
  fence: (condition: boolean) =>
    `[data-testId = 'isSwimmingPoolFenced-${condition ? 'Yes' : 'No'}']`,
  divingBoard: (condtion: boolean) =>
    `[data-testId = 'hasSwimmingPoolDivingBoard-${condtion ? 'Yes' : 'No'}']`,

  hasTrampolineYes: `[data-testId = 'hasTrampoline-Yes']`,

  hasDogsYes: `[data-testId = 'hasDogs-Yes']`,
  // pureBreed: (condtion: boolean) =>
  // `label:has-text("${condtion ? 'Breed' : 'Mixed with (optional)'}") + input`,
  breed: `label:has-text("Breed") + input`,
  breedMixed: `label:has-text("Mixed with(optional)") + input`,
  dogBite: (condtion: boolean) =>
    `[data-testId = 'dogs.0.biteHistory-${condtion ? 'Yes' : 'No'}']`,
  anotherDog: `button:has-text('Plus Add another dog')`,

  // await page.getByRole('option', { name: 'Beagle' }).click();
  // await page.getByTestId('dogs.0.biteHistory-No').click();
  // await page.getByTestId('dogs.0.biteHistory-Yes').click();
  // await page.getByLabel('').nth(1).click();
  // await page.getByRole('option', { name: 'Dalmatian' }).click();
  // await page.getByRole('button', { name: 'Plus Add another dog' }).click();
  // await page.getByRole('button', { name: 'Trash' }).nth(1).click();

  hasExoticPetsYes: `[data-testId = 'hasExoticPets-Yes']`,
};
