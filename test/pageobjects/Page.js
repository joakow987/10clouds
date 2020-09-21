const selectors = require('../constants/selectors.js');
const strings = require('../constants/strings.js');

module.exports = {

  /**
     * Opens 10Clouds homepage.
     *
     */
  open10CloudsHomePage: function () {
    browser.url(strings.url);
  },

  /**
     * Waits for the element to be displayed for the specified time and clicks it. The default timeout is 5s.
     * @param {string} element string storing the selector to the element 
     * @param {number} timeout number of miliseconds that the function will wait for the element to be displayed
     * 
     */
  selectElementWithWait: function (element, timeout = 5000) {
    element.waitForDisplayed(timeout);
    element.click();
  },

  /**
    * Provides input to the "Search jobs..." input field
    * @param {string} jobTitle string that will be searched for in the input field
    * 
    */
  searchForJobPosition: function (jobTitle) {
    this.selectElementWithWait($(selectors.searchJobsInput));
    $(selectors.searchJobsInput).setValue(jobTitle);
  },

  /**
    * Opens "Careers" tab and clicks "See open positions" button
    * 
    */
  goToOpenJobPositions: function () {
    this.selectElementWithWait($(selectors.careersTab));
    this.selectElementWithWait($(selectors.seeOpenPositionsButton));
  }

};
