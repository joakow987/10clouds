### Requirements

Node.js

### Pre-requisites

- Clone the repository with the command `git clone https://github.com/joakow987/10clouds.git`
- Navigate to the project folder and run `npm install` to install dependencies

### Running the tests

In package.json there are two scripts specified: `test` and `test-suite`:
- `test` is used for running tests specified in `specs` object in `wdio.conf.js` so if you want to run them separately comment out those you don't need and run:
`npm test`
- `test-suite` used for running the whole suite of specs which are specified in `suites` object in `wdio.conf.js`; the script can be run with: 
`npm run test-suite careersPageSuite`