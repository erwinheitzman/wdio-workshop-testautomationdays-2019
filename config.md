# WebdriverIO workshop testautomationdays 2019

## Config

### Hooks

### Screenshots on error

```javascript
afterTest(test) {
    if (!test.passed) {
        const filename: string = Math.random()
            .toString(26)
            .slice(2);

        // make sure that the errorShots directory is created/existing before running this
        browser.saveScreenshot('./errorShots/' + filename + '.png');
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
    singleDriverInstall: true, // only install a single browser driver (the ChromeDriver in this case)
};

exports.config = {
    seleniumInstallArgs: seleniumOptions,
    seleniumArgs: seleniumOptions,
};
```
