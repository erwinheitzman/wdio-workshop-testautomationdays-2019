# Exercise 1: Getting up & running

The goal of this exercise is to show you how to get up and running with WebdriverIO.\
Just follow the steps at <https://webdriver.io/docs/gettingstarted.html>\

NOTES:
- Do not create a new directory as mentioned in the guide but use the root of this project to run `npm init -y`
- Make sure you install selenium-standalone instead of chromedriver
- ONLY install the dot-reporter, not the spec-reporter

After you are done, add the following constant to the config file.

```javascript
const seleniumOptions = {
    version: '3.141.59', // version of Selenium server
    drivers: {
        chrome: {
            version: '75.0.3770.90', // version of ChromeDriver
        },
        firefox: {
            version: '0.24.0' // version of GeckoDriver
        }
    },
};
```

And add the following properties in the existing config:

```javascript
exports.config = {
    seleniumInstallArgs: seleniumOptions,
    seleniumArgs: seleniumOptions,
};
```
