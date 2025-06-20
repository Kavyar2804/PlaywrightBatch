import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('mobile');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('group', { name: 'Brands', exact: true }).getByLabel('Apply Top Brands filter to').click();
  await page.locator('[id="\\34 7c1a603-c2d0-45bb-b73d-e644a11d99d4"] > .sg-col-inner > .s-widget-container > span > .puis-card-container > div > .s-product-image-container > .rush-component > .a-link-normal').click();
  await page.getByRole('link', { name: 'Add to List' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('45656');
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).press('Enter');
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('456566');
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).press('Enter');
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('4565666');
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).press('Enter');
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('45656666');
  await page.getByRole('button', { name: 'Continue' }).click();
});