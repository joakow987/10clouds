const selectors = require('../constants/selectors.js');
const strings = require('../constants/strings.js');

const { url } = strings;
const { searchJobsInput, careersTab, seeOpenPositionsButton } = selectors;

module.exports = {
    
  /**
     * Opens 10Clouds homepage.
     *
     */
  open10CloudsHomePage: function () {
    console.log("Opening 10Clouds homepage");
    browser.url(url);
  },

  /**
     * Waits for the element to be displayed for the specified time and clicks it. The default timeout is 5s.
     * @param {string} element string storing the selector to the element 
     * @param {number} timeout number of miliseconds that the function will wait for the element to be displayed
     * 
     */
  selectElementWithWait: function (elementSelector, timeout = 5000) {
    $(elementSelector).waitForDisplayed(timeout);
    $(elementSelector).click();
  },

  /**
    * Provides input to the "Search jobs..." input field
    * @param {string} jobTitle string that will be searched for in the input field
    * 
    */
  searchForJobPosition: function (jobTitle) {
    console.log(`Searching for job positions containing: "${jobTitle}"`);
    this.selectElementWithWait(searchJobsInput);
    $(searchJobsInput).setValue(jobTitle);
  },

  /**
    * Opens "Careers" tab and clicks "See open positions" button
    * 
    */
  goToOpenJobPositions: function () {
    console.log('Opening Careers tab and selecting "See open posiitonss button"');
    this.selectElementWithWait(careersTab);
    this.selectElementWithWait(seeOpenPositionsButton);
  }

};
