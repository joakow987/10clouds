const strings = require('../constants/strings.js');

const { url } = strings;

module.exports = {
    
  /**
     * Opens 10Clouds homepage
     *
     */
  open10CloudsHomePage: function () {
    console.log("Opening 10Clouds homepage");
    browser.url(url);
  }

};
