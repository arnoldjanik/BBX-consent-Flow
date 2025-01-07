import { test, expect } from '@playwright/test';

test.describe('Happy path for consent flow', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Defaul Home Page Verification', async ({ page }) => {
        
        await page.getByRole('heading', { name: 'Just a few more Questions' }).click();
        await page.getByTestId('hasNonOwnerOccupants-No').click();
        await page.getByTestId('isBusiness-No').click();
        await page.getByTestId('hasSwimmingPool-No').click();
        await page.getByTestId('hasTrampoline-No').click();
        await page.getByTestId('hasDogs-No').click();
        await page.getByTestId('hasDogs-No').click();
        await page.getByTestId('hasExoticPets-No').click();
        await page.getByRole('button', { name: 'Continue' }).click();

        await expect()
      });

})