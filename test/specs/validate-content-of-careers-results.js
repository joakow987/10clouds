const strings = require('../constants/strings.js');
const selectors = require('../constants/selectors.js');
const HomePage = require('../pageObjects/HomePage.js');
const CareersPage = require('../pageObjects/CareersPage.js');

describe('Opening Careers tab in 10Clouds page and typing Automation in search box', () => {

  it('should validate that each job title contains Automation', () => {
    const { automation } = strings;
    const { jobOfferTitle } = selectors;

    HomePage.open10CloudsHomePage();
    CareersPage.goToOpenJobPositions();
    CareersPage.searchForJobPosition(automation);

    // check if each job displayed contains "Automation" in the title
    const arrayOfJobTitlesDisplayed = $$(jobOfferTitle);
    for (let i = 0; i < arrayOfJobTitlesDisplayed.length; i++) {
      expect(arrayOfJobTitlesDisplayed[i].getText()).toContain(automation);
    }

  });
});
