// @flow
import { waitFor, element, by } from 'detox';

describe.skip('Step Component', () => {
  it('Should redirect to a Step ', async () => {
    await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(15000);
    await expect(element(by.id('login_button'))).toBeVisible();
    await element(by.id('login_button')).tap();
    await expect(element(by.id('login_button'))).toBeNotVisible();
    await waitFor(element(by.id('step_title'))).toBeVisible().withTimeout(10000);
    await expect(element(by.id('step_title'))).toBeVisible();
  });

  it('Should render everything in Step Component', async () => {
    await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(15000);
    await expect(element(by.id('login_button'))).toBeVisible();
    await element(by.id('login_button')).tap();
    await expect(element(by.id('login_button'))).toBeNotVisible();
    await waitFor(element(by.id('step_title'))).toBeVisible().withTimeout(10000);
    await expect(element(by.id('step_title'))).toBeVisible();
    await expect(element(by.id('step_picture'))).toBeVisible();
    await expect(element(by.id('step_header_title'))).toBeVisible();
    await expect(element(by.id('step_description'))).toBeVisible();
    await expect(element(by.id('step_start_button'))).toBeVisible();
    await expect(element(by.id('step_time_text'))).toBeVisible();
  });

  it('Should leave HomeScreen', async () => {
    await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(15000);
    await expect(element(by.id('login_button'))).toBeVisible();
    await element(by.id('login_button')).tap();
    await expect(element(by.id('login_button'))).toBeNotVisible();
    await waitFor(element(by.id('step_start_button'))).toBeVisible().withTimeout(15000);
    await element(by.id('step_start_button')).tap();
  })

});

