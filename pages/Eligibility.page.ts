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
export class EligibilityPageDefaultAnswers {
  constructor(private page: Page) {}

  hasNonOwnerOccupants = this.page.getByTestId('hasNonOwnerOccupants-No');
  isBusiness = this.page.getByTestId('isBusiness-No');
  hasSwimmingPool = this.page.getByTestId('hasSwimmingPool-No');
  hasTrampoline = this.page.getByTestId('hasTrampoline-No');
  hasDogs = this.page.getByTestId('hasDogs-No');
  hasExoticPets = this.page.getByTestId('hasExoticPets-No');
}
