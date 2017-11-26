/**
 * @flow
 */

describe('Login', () => {
    it('Should open Login', async () => {
        await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(120000);
        await expect(element(by.id('login_button'))).toBeVisible();
    });
  
    it('Should login', async () => {
      await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(120000);  
      await expect(element(by.id('login_button'))).toBeVisible();
      await element(by.id('login_button')).tap();
    });
  
  });
  
  