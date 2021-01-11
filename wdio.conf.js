const path = require('path');
const thisFilesPath = path.resolve(__dirname);
const seleniumManager = require('selenium-standalone');
const fs = require('fs-extra');
const allure = require('allure-commandline');
// const Reporter = require('./features/utils/Reporter')

exports.config = {

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function () {
    //
    //     // Start Selenium Server and Browser Drivers
    //     // const libDir = `${thisFilesPath}${path.sep}lib`;
    //     /*
    //     * selenium-standalone löst die Pfade zu den Driver-Executables
    //     * strikt nach folgendem Schema auf:
    //     * <basePath>/<83-mac64-chromedriver|geckodriver|iedriver|edgedriver>/<opts.browser.version>-<opts.browser.arch>-<83-mac64-chromedriver|geckodriver|IEDriverServer.exe|MicrosoftEdgeDriver.exe>
    //     * Der Pfad zur Selenium Server Standalone-Jar wird folgendermaßen aufgelöst:
    //     * <basePath>/selenium-server/<opts.seleniumVersion>-server.jar
    //     * */
    //     var opts = {
    //         javaArg: ['-Dselenium.LOGGER.level=DEBUG'],
    //         basePath: './lib',
    //         seleniumVersion: '3.141.59',
    //         drivers: {
    //             chrome: {
    //                 version: '87',
    //                 arch: 'mac64'
    //             },
    //         }
    //     };
    //     seleniumManager.start(opts, (err) => {
    //         if (err) {
    //             console.error(err);
    //         }
    //     });
    //     let screenshotPath = "./reports/";
    //     fs.emptyDirSync(screenshotPath);
    // },

    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    //
    // Override default path ('/wd/hub') for 83-mac64-chromedriver service.
    // path: '/',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        path.resolve(__dirname, './features/*.feature'),
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in house Selenium
        // grid with only 5 firefox instance available you can make sure that not more than
        // 5 instance gets started at a time.
        maxInstances: 5,
        browserName: 'chrome',
        // 'goog:chromeOptions': {
        //     // binary: './lib/Chrome-bin/chrome.app/Contents/MacOS/GoogleChrome'
        //     // to run chrome headless the following flags are required
        //     // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        //     // args: ['--headless', '--disable-gpu'],
        // }
     }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'verbose',
    coloredLogs: true,
    outputDir: __dirname,

    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,

    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    //baseUrl: 'http://localhost',

    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,

    // Default request retries count
    connectionRetryCount: 3,

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    //services: ['83-mac64-chromedriver'],


    // services: ['selenium-standalone'],
    // seleniumLogs: 'logs',
    // seleniumVersion: '3.141.59',
    // seleniumInstallArgs: {
    //     drivers: {
    //         chrome: { version: '78.0.3904.70' },
    //     }
    // },
    // seleniumArgs: {
    //     drivers: {
    //         chrome: { version: '78.0.3904.70' },
    //     }
    // },

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html

    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    specFileRetries: 1,

    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: ['spec', 'allure'],
    reporterOptions: {
        custom: {
            expose: ['test:fail]'],
            report: ['test.fail]']
        },
        allure: {
            outputDir: './reports/allure-reports',
            disableWebdriverStepsReporting: true,
            //überprüfen, ob das die doppelten Screenshots verursacht
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true
        }
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    cucumberOpts: {
        // <boolean> show full backtrace for errors
        backtrace: true,
        // <string[]> filetype:compiler used for processing required features
        // compiler: [
        //   'js:babel-register',
        // ],
        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // <boolean> invoke formatters without executing steps
        // dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,
        // <string[]> ("extension:module") require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <string[]> (file/dir) require files before executing features
        require: [
            path.resolve(__dirname, './features/**/*.js')
        ],
        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,
        // <boolean> fail if there are any undefined or pending steps
        strict: true,
        // <string> (expression) only execute the features or scenarios with
        // tags matching the expression, see
        // https://docs.cucumber.io/tag-expressions/
        tagExpression: 'not @wip and not @ignored and not @ignored-by-qa and not @ignored-by-dev',
        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,
        // <number> timeout for step definitions
        timeout: 20000,

        format: ['html']
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed after every cucumber-step.
     */
    afterStep: function () {
        browser.screenshot();
    },

    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: function () {
        let reportPath = "./allure-report/";
        fs.emptyDirSync(reportPath);

        let generation = allure(['generate', './reports/allure-reports', '--clean']);

        generation.on('exit', function (exitCode) {
            console.log('Generation is finished with code: ' + exitCode);
        });
    }
}