/**
 * @flow
 */

describe('Step Component', () => {
    it('Should Open StepScreen', async () => {
      await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(15000);
      await expect(element(by.id('login_button'))).toBeVisible();
      await element(by.id('login_button')).tap();
      await expect(element(by.id('login_button'))).toBeNotVisible();
      await waitFor(element(by.id('step_start_button'))).toBeVisible().withTimeout(15000);
      await element(by.id('step_start_button')).tap();
      await expect(element(by.id('step_subtitle'))).toBeVisible();
    })

    it('Should render Step Screen', async () => {
        await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(15000);
        await expect(element(by.id('login_button'))).toBeVisible();
        await element(by.id('login_button')).tap();
        await expect(element(by.id('login_button'))).toBeNotVisible();
        await waitFor(element(by.id('step_start_button'))).toBeVisible().withTimeout(15000);
        await element(by.id('step_start_button')).tap();
        await expect(element(by.id('step_screen_step_number'))).toExist();
        await expect(element(by.id('step_screen_close_icon'))).toExist();       
        await expect(element(by.id('step_subtitle'))).toBeVisible();
        await expect(element(by.id('step_content_scrollable'))).toExist();
        await expect(element(by.id('step_to_assignment_button'))).toExist();
    })

    it("Should scroll softly", async () => {
        await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(15000);
        await expect(element(by.id('login_button'))).toBeVisible();
        await element(by.id('login_button')).tap();
        await expect(element(by.id('login_button'))).toBeNotVisible();
        await waitFor(element(by.id('step_start_button'))).toBeVisible().withTimeout(15000);
        await element(by.id('step_start_button')).tap();
        await expect(element(by.id('step_subtitle'))).toBeVisible();
        await element(by.id('step_content_scrollable')).scroll(50,'down')
        await expect(element(by.id('step_content_scrollable'))).toBeVisible();
        await element(by.id('step_content_scrollable')).scroll(50,'up')
    })

    it("Should scroll to edges", async () => {
        await waitFor(element(by.id('login_button'))).toBeVisible().withTimeout(15000);
        await expect(element(by.id('login_button'))).toBeVisible();
        await element(by.id('login_button')).tap();
        await expect(element(by.id('login_button'))).toBeNotVisible();
        await waitFor(element(by.id('step_start_button'))).toBeVisible().withTimeout(15000);
        await element(by.id('step_start_button')).tap();
        await expect(element(by.id('step_subtitle'))).toBeVisible();      
        await element(by.id('step_content_scrollable')).scrollTo('bottom')
        await expect(element(by.id('step_content_scrollable'))).toBeVisible();
        await expect(element(by.id('step_to_assignment_button'))).toBeVisible()
        await element(by.id('step_content_scrollable')).scrollTo('top')
        await expect(element(by.id('step_to_assignment_button'))).toBeNotVisible()
    })

  });
  
  