/* eslint new-cap: 0 */
/* global browser, expect, pending, Meteor */

module.exports = function steps() {
  this.Given(/^I am authenticated$/, () => {
    // Skip this detail for for; assumaes always authenticated
  });

  this.Given(/^I have no pomodoros$/, () => {
    // No pomodoros, check! :)
  });

  const PomodoroManager = {
    myCompletedPomodoros: () => 'No Pomodoros yet',
  };

  let myPomodoros;

  this.When(/^I review my activity$/, () => {
    // Naive implementation of 'BDD' is to assume this
    // step should be based on UI. The expected step is to
    // start looking for a screen with a list or an
    // empty state message..
    // We're going to start with an API call through a
    // kind of programming by wishfull thinking
    myPomodoros = PomodoroManager.myCompletedPomodoros();
  });

  this.Then(/^I should be informed that I have none$/, () => {
    expect(myPomodoros).toEqual('No Pomodoros yet');
  });
};
