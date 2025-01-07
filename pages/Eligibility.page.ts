import { Page } from '@playwright/test';

export class EligibilityPageVerification {
  constructor(private page: Page) {}

  headerText = this.page.getByRole('heading', {
    name: 'Just a few more Questions',
  });
  logo = this.page.getByRole('img', { name: 'Logo Hippo' });
  phoneNumber = this.page.getByRole('link', { name: 'Phone 1-877-838-' });
  agentId = this.page.getByText('Your Agent • Reference ID:');
  disclaimer = this.page.getByText('Hippo Insurance Services (“');
  continueButton = this.page.getByRole('button', { name: 'Continue' });
  checkoutHeader = this.page.getByRole('heading', {
    name: 'Confirm your insurance',
  });
}
export class EligibilityPageAnswers {
  constructor(private page: Page) {}

  hasNonOwnerOccupantsNo = this.page.getByTestId('hasNonOwnerOccupants-No');
  isBusinessNo = this.page.getByTestId('isBusiness-No');
  hasSwimmingPoolNo = this.page.getByTestId('hasSwimmingPool-No');
  hasTrampolineNo = this.page.getByTestId('hasTrampoline-No');
  hasDogsNo = this.page.getByTestId('hasDogs-No');
  hasExoticPetsNo = this.page.getByTestId('hasExoticPets-No');

  hasNonOwnerOccupantsYes = this.page.getByTestId('hasNonOwnerOccupants-Yes');
  isBusinessYes = this.page.getByTestId('isBusiness-Yes');
  hasSwimmingPoolYes = this.page.getByTestId('hasSwimmingPool-Yes');
  hasTrampolineYes = this.page.getByTestId('hasTrampoline-Yes');
  hasDogsYes = this.page.getByTestId('hasDogs-Yes');
  hasExoticPetsYes = this.page.getByTestId('hasExoticPets-Yes');
}
