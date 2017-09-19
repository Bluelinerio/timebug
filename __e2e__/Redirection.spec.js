/**
 * @flow
 */

describe('Redirection', () => {
  it('should redirect to first day screen', async () => {
    await device.reloadReactNative();
    await expect(element(by.id('day_1'))).toBeVisible();
    await element(by.id('day_1')).tap();
  });

  it('Day 1 info should be visible', async () => {
    await expect(element(by.id('subtitle'))).toBeVisible();
    await expect(element(by.id('title'))).toBeVisible();
    await expect(element(by.id('introducing_text'))).toBeVisible();
    await expect(element(by.id('begin_button'))).toBeVisible();

    await element(by.traits(['button'])).atIndex(0).tap()
  });

});

