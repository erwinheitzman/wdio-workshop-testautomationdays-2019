# Exercise 2: Updating config

The goal of this exercise is to get familiar with the WebdriverIO config file. We will do this by changing/setting a few options.
Implement the following changes and see what they do!

## Add another browser

Add another capability in the config to run your tests on Chrome. <https://webdriver.io/docs/options.html#capabilities>

## Change reporter

The `dot` reporter we installed is not very ellaborate. Install the `spec` reporter to get more info from your test. <https://webdriver.io/docs/spec-reporter.html>

## Write output to file

All that logging to the terminal is pretty annoying, set the `outputDir` property in the config to write all logs to file.
<https://webdriver.io/docs/options.html#outputdir>

## Take a screenshot on error

Wouldn't it be great if we had a screenshot of our browser when a test fails.
Implement this by checking in the `afterTest` hook if the test failed and take a screenshot if it did.
(Don't forget to verify it works by making a test fail.)
