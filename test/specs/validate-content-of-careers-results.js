const strings = require('../constants/strings.js');
const selectors = require('../constants/selectors.js');
const Page = require('../pageobjects/Page.js');

describe('Opening Careers tab in 10Clouds page and typing Automation in search box', () => {

    it('should validate that each job title contains Automation', () => {

        Page.open10CloudsHomePage();
        Page.goToOpenJobPositions();
        Page.searchForJobPosition(strings.automation);

        const jobTitlesArray = $$(selectors.jobOfferTitle);
        for (let i = 0; i < jobTitlesArray.length; i++) {
            expect(jobTitlesArray[i].getText()).toContain(strings.automation)
        }

    });
});


