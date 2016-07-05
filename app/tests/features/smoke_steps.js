/* eslint new-cap: 0 */
/* global browser, expect, pending, Meteor */

module.exports = function steps() {
  this.Given(/^I am home$/, () => {
    browser.url('http:localhost:3000');
  });

  this.Then(/^I should see "([^"]*)"$/, (welcomeMessage) => {
    const el = browser.element('h1');
    el.waitForExist();
    expect(el.getText()).toEqual(welcomeMessage);
  });
};

