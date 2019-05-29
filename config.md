# WebdriverIO workshop testautomationdays 2019

## Config

### Hooks

### Screenshots on error

```javascript
afterTest(test) {
    if (!test.passed) {
        browser.saveScreenshot('./errorShots/' + test.fullTitle + '.png');
    }
}
```

### Selenium arguments

```javascript
const seleniumOptions = {
    version: '3.141.5', // version of Selenium server
    drivers: {
        chrome: {
            version: '74.0.3729.6', // version of ChromeDriver
        },
    },
};

exports.config = {
    seleniumInstallArgs: seleniumOptions,
    seleniumArgs: seleniumOptions,
};
```
