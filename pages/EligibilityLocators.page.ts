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
  secondHomeNo: `[data-testId = 'isSecondHome-No']`,
  secondHomeYes: `[data-testId = 'isSecondHome-Yes']`,
  vacantNo: `[data-testId = 'isVacantOrRented-No']`,
  vacantYes: `[data-testId = 'isVacantOrRented-Yes']`,

  isBusinessYes: `[data-testId = 'isBusiness-Yes']`,

  hasSwimmingPoolYes: `[data-testId = 'hasSwimmingPool-Yes']`,
  FencedNo: `[data-testId ='isSwimmingPoolFenced-No']`,
  DivingBoardNo: `[data-testId = 'hasSwimmingPoolDivingBoard-No']`,
  FencedYes: `[data-testId = 'isSwimmingPoolFenced-Yes']`,
  DivingBoardYes: `[data-testId ='hasSwimmingPoolDivingBoard-Yes']`,

  hasTrampolineYes: `[data-testId = 'hasTrampoline-Yes']`,

  hasDogsYe: `[data-testId = 'hasDogs-Yes']`,
  hasExoticPetsYes: `[data-testId = 'hasExoticPets-Yes']`,
};
