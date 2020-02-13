const WDIOReporter = require('@wdio/reporter').default;

module.exports = class CustomReporter extends WDIOReporter {
    constructor(options) {
        /*
         * make reporter to write to the output stream by default
         */
        options = Object.assign(options, { stdout: true })
        super(options)
    }

    onRunnerEnd(test) {
        this.write(`Congratulations! Your have successfully added a custom reporter! 👏\n`);
    }
}