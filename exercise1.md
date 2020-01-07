# Exercise 1: Getting up & running

Before you continue setting up WebdriverIO I have a few important notes:
- You can navigate the CLI using the arrow (navigation), spacebar (selection) and enter (confirm) keys
- Do not create a new directory as mentioned in the guide but use the root of this project to run `npm init -y` instead
- Make sure you install selenium-standalone instead of chromedriver
- ONLY install the dot-reporter, not the spec-reporter

The goal of this exercise is to show you how to get up and running with WebdriverIO. First read the notes above and then follow the steps at <https://webdriver.io/docs/gettingstarted.html> and implement them in this project.

After you are done, add the following constant to the config file.
The reason we add this is so that we can manually control the driver versions that will be used for each driver as this is something you will run into very quickly when using WebdriverIO in a real job.
Note that these versions should only ever be updated when a new version of either the driver or the browser has been released.
When you'd use the ChromeDriver directly without the use of `selenium-standalone` then you'd still need to update this driver but you'd but updated the npm package directly instead.

```javascript
const seleniumOptions = {
    drivers: {
        chrome: {
            version: '75.0.3770.90', // replace this with the latest stable version of ChromeDriver which can be found here https://chromedriver.chromium.org/
        },
        firefox: {
            version: '0.24.0' // replace this with the latest stable version version of GeckoDriver which can be found here https://github.com/mozilla/geckodriver/releases
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
