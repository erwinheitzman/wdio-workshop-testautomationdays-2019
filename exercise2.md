# Exercise 2: Updating config

The goal of this exercise is to get familiar with the WebdriverIO config file. We will do this by changing/setting a few options.
Implement the following changes and explore how they work!

## Add another browser

Add another capability in the config to run your tests on Chrome <https://webdriver.io/docs/options.html#capabilities>.

## Change reporter

The `dot` reporter we installed does not show much info. Install the `spec` reporter to get a little more info about your tests <https://webdriver.io/docs/spec-reporter.html>.

## Write output to file

All that logging to the terminal is pretty annoying, let's set the `outputDir` property <https://webdriver.io/docs/options.html#outputdir> in the config to write all logs to file and put the `logLevel` on `silent`.

## Take a screenshot on error

Wouldn't it be great if we had a screenshot of our viewport when a test fails?
Implement this by adding a check to the `afterTest` hook, when the test fails it should save a screenshot if it did <https://webdriver.io/docs/api/browser/saveScreenshot.html>.
(Don't forget to verify it works by making a test fail.)
Hint: the test as a `passed` property