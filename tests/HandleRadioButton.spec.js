// import { expect, test } from '@playwright/test';

const { expect, test } = require('@playwright/test');

test('Handle Radio button', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');

  // Click the label instead of the input
  await page.locator('label[for="yesRadio"]').click();

  await expect(await page.locator('//input[@id="yesRadio"]')).toBeChecked();
  await expect(await page.locator('//input[@id="yesRadio"]').isChecked()).toBeTruthy();
  await expect(await page.locator('//input[@id="noRadio"]').isChecked()).toBeFalsy();

  await page.waitForTimeout(2000);
});