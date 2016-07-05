/* eslint new-cap: 0 */
/* global browser, expect, pending, Meteor */

module.exports = function steps() {
  let myPomodoros;
  let pomodoroData;

  this.Given(/^I am authenticated$/, () => {
    // Skip this detail for for; assumes always authenticated
  });

  this.Given(/^I have no pomodoros$/, () => {
    // No pomodoros, check! :)
  });

  this.Given(/^I have (\d+) pomodoros$/, (count) => {
    // Hardcode Pomodoros array
    pomodoroData = ['first', 'second'];
  });

  const PomodoroManager = {
    myCompletedPomodoros: () => {
      return pomodoroData;
    }
  };


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

  this.Then(/^I should see (\d+) pomodoros$/, (expectedCount) => {
    expect(myPomodoros.length).toEqual(parseInt(expectedCount));
  });
};

