module.exports = class CustomService {

    constructor(options) {
        this.options = options;
    }

    onPrepare(config, capabilities) {
        // console.log('options: ', this.options);
    }

    onComplete(exitCode, config, capabilities) {
        // TODO: something after the workers shutdown
        console.log('someOption is ' + this.options.someOption);
    }

    // ...
}