# Exercise 1: Getting up & running

The goal of these exercises is to show you how to get up and running with WebdriverIO.

## Installation

Initialize a new NPM project in the root directory of this project:

```
npm init -y
```

Install the CLI:

```
npm i -D @wdio/cli
```

Generate a setup:

```
./node_modules/.bin/wdio config
```

Answer the questions with the following options:

```
Where should your tests be launched? -> local (press enter)
Where is your automation backend located? -> On my local machine (press enter)
Which framework do you want to use? -> mocha (press enter)
Do you want to run WebdriverIO commands synchronous or asynchronous? -> sync (press enter)
Where are your test specs located? -> ./test/specs/**/*.js (press enter)
Which reporter do you want to use? -> spec (press enter)
Do you want to add a service to your test setup? -> selenium-standalone (deselect everything else using the arrow keys and spacebar)
What is the base url? -> http://todomvc.com/ (copy paste and press enter)
```

## Drivers

After the CLI is done installing, add the code shown below to the top of your `wdio.conf.js` file.

```javascript
const seleniumOptions = {
    drivers: {
        chrome: {
            version: '79.0.3945.36', // replace this with the latest stable version of ChromeDriver which can be found here https://chromedriver.chromium.org/
        },
        firefox: {
            version: '0.26.0' // replace this with the latest stable version version of GeckoDriver which can be found here https://github.com/mozilla/geckodriver/releases
        }
    },
};
```

And add the following properties in the existing config:

```javascript
exports.config = {
    // ...
    seleniumInstallArgs: seleniumOptions,
    seleniumArgs: seleniumOptions,
    // ...
};
```

The reason we add this is so that we can manually control the driver versions that will be used by each browser as this is something you will run into very quickly when using WebdriverIO in a real job situation. Note that these versions should only ever be updated when a new version of either the driver or the browser has been released.
When you use the ChromeDriver directly without the use of `selenium-standalone` then you'd still need to update this driver but would do so by updating the chromedriver (npm) package directly instead.

## Setup

Let's make life easier by opening your `package.json` file and changing this:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

To this:

```
  "scripts": {
    "test": "wdio"
  },
```

## First test run

Now let's start the tests by using the change we just made in the `package.json` file by running:

```
npm test
```

You should see something along the lines of: `Spec Files:      1 passed, 1 total (100% completed)`

If you got a similar message, well done!
