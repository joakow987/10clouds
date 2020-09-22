const strings = require('../constants/strings.js');
const selectors = require('../constants/selectors.js');
const HomePage = require('../pageObjects/HomePage.js');
const CareersPage = require('../pageObjects/CareersPage.js');

describe('Opening Careers tab in 10Clouds page', () => {

  it('should validate that there is exactly 1 QA Automation Engineer role open', () => {
    const { qaEngineer } = strings;
    const { openPositions } = selectors;

    HomePage.open10CloudsHomePage();
    CareersPage.goToOpenJobPositions();
    CareersPage.searchForJobPosition(qaEngineer);

    // check if number od job positions displayed is equal 1
    const numberOfJobPositionsDisplayed = $(openPositions).$$('a').length;
    expect(numberOfJobPositionsDisplayed).toEqual(1);

  });
});
