# Exercise 2: Updating config

The goal of this exercise is to get familiar with the WebdriverIO config file. We will do this by changing/setting a few options.
Implement the following changes and explore how they work!

## Add another browser

Add another browser capability in the config to run your tests on Chrome/Firefox <https://webdriver.io/docs/options.html#capabilities>.

## Add another reporter

The `spec` reporter we installed does not generate a report. Install the `allure` reporter to be able to generate a html report <https://webdriver.io/docs/allure-reporter.html>.

## Write output to file instead of console

All that logging to the terminal is pretty annoying, let's set the `outputDir` property <https://webdriver.io/docs/options.html#outputdir> in the config to write all logs to file and put the `logLevel` on `silent`.

## Take a screenshot on error

Wouldn't it be great if we had a screenshot of our viewport when a test fails?
Implement this by adding a check to the `afterTest` hook, when the test fails it should save a screenshot if it did <https://webdriver.io/docs/api/browser/saveScreenshot.html>.\
Tip: the `test` object has a `passed` property\
Tip: Don't forget to verify it works by making a test fail by adding `expect(true).to.equal(false)` to a test\