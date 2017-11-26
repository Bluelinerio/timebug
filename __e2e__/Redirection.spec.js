/**
 * @flow
 */

describe('Redirection', () => {
  it('should redirect to first day screen', async () => {
    await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(120000);
    await expect(element(by.id('login_button'))).toBeVisible();
  });

});

