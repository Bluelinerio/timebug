/**
 * @flow
 */

describe('Login', () => {
    it('Should open Login', async () => {
        await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(15000);
        await expect(element(by.id('login_button'))).toBeVisible();
        await expect(element(by.id('login_text'))).toHaveText('LOGIN WITH FACEBOOK')
    });
  
    it('Should login', async () => {
      await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(15000);  
      await expect(element(by.id('login_button'))).toBeVisible();
      await element(by.id('login_button')).tap();
      await expect(element(by.id('login_button'))).toBeNotVisible();
    });
  
  });
  
  