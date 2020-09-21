/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
// module.exports =  {
//     /**
//     * Opens a sub page of the page
//     * @param path path of the sub page (e.g. /path/to/page.html)
//     */
//    openUrl: function(url) {
//         browser.url(url);
//     },

//     selectElementWithWait: function(element, timeout = 5000) {
//         element.waitForDisplayed(timeout);
//         element.click();
//     },
// }
const selectors = require('../constants/selectors.js');
const strings = require('../constants/strings.js');

module.exports = {

    open10CloudsHomePage: function() {
        browser.url(strings.url);
    },

    selectElementWithWait: function(element, timeout=5000) {
        element.waitForDisplayed(timeout);
        element.click();
    },

    searchForJobPosition: function(jobTitle) {
        this.selectElementWithWait($(selectors.searchJobsInput));
        $(selectors.searchJobsInput).setValue(jobTitle);
    },

    goToOpenJobPositions: function(){
        this.selectElementWithWait($(selectors.careersTab));
        this.selectElementWithWait($(selectors.seeOpenPositionsButton));
    }

}
