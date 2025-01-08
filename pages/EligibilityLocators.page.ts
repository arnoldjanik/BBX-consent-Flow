import { Page } from '@playwright/test';

export const eligibilityLocators = {
  headerText: `text = Just a few more Questions`,
  logo: `text = Logo Hippo`,
  phoneNumber: `text = 1-877-838-8866`,
  agentId: `text = Your Agent`,
  disclaimer: `text = Hippo Insurance Services`,
  continueButton: `text = Continue`,
  checkoutHeader: `text = Confirm Your`,

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
  hasTrampolineYes: `[data-testId = 'hasTrampoline-Yes']`,
  hasDogsYe: `[data-testId = 'hasDogs-Yes']`,
  hasExoticPetsYes: `[data-testId = 'hasExoticPets-Yes']`,
};
