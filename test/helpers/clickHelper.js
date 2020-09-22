
module.exports = {

  /**
     * Waits for the element to be displayed for the specified time and clicks it. The default timeout is 5s.
     * @param {string} element string storing the selector to the element 
     * @param {number} timeout number of miliseconds that the function will wait for the element to be displayed
     * 
     */
  selectElementWithWait: function (elementSelector, timeout = 5000) {
    $(elementSelector).waitForDisplayed(timeout);
    $(elementSelector).click();
  }
};