# wat.js

_A Truly Symbolic Language_


[wat.js Documentation](documentation.md)


## Setting Up Tests in WebStorm

- Open the WebStorm terminal and run:
    - `npm install karma`
    - `npm install karma-jasmine`
    - `npm install jasmine-core`
    - `npm install karma-chrome-launcher`
    - `npm install -g karma-cli`
- Run `karma init karma.conf.js` and use the following configurations:
    - `jasmine`
    - No to `Require.js`
    - Chrome
    - Enter the following for locations of source and test files:
        - `src/wat.js`
        - `src/**/wat*.js`
        - `test/**/*.test.js`
    - No exclusions
    - No to run tests on file change
- Create a run configuration with the following:
    - Configuration file: `path\to\project\karma.conf.js`
    - Leave `Browsers` blank
    - Karma package: `path\to\project\note_modules\karma`
    - Select `All tests`
- Save and run configuration