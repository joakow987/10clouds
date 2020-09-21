const strings = require('../constants/strings.js');
const selectors = require('../constants/selectors.js');
const Page = require('../pageObjects/Page.js');


describe('Opening Careers tab in 10Clouds page', () => {

  it('should validate that there is exactly 1 QA Automation Engineer role open', () => {
    const { qaEngineer } = strings;
    const { openPositions } = selectors;

    Page.open10CloudsHomePage();
    Page.goToOpenJobPositions();
    Page.searchForJobPosition(qaEngineer);

    // check if number od job positions displayed is equal 1
    const numberOfJobPositionsDisplayed = $(openPositions).$$('a').length;
    expect(numberOfJobPositionsDisplayed).toEqual(1);

  });
});
