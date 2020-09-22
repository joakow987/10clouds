const selectors = require('../constants/selectors.js');
const clickHelper = require('../helpers/clickHelper');

const { searchJobsInput, careersTab, seeOpenPositionsButton } = selectors;

module.exports = {
    
  /**
    * Provides input to the "Search jobs..." input field
    * @param {string} jobTitle string that will be searched for in the input field
    * 
    */
  searchForJobPosition: function (jobTitle) {
    console.log(`Searching for job positions containing: "${jobTitle}"`);
    clickHelper.selectElementWithWait(searchJobsInput);
    $(searchJobsInput).setValue(jobTitle);
  },

  /**
    * Opens "Careers" tab and clicks "See open positions" button
    * 
    */
  goToOpenJobPositions: function () {
    console.log('Opening Careers tab and selecting "See open posiitonss button"');
    clickHelper.selectElementWithWait(careersTab);
    clickHelper.selectElementWithWait(seeOpenPositionsButton);
  }

};
