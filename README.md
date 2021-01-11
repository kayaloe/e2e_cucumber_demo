# e2e_cucumber_demo
This is a testautomation enviroment based on Node.js, WebdriverIO, Cucumber and Selenium.
You can test automated in different Browsers. It's for UI-tests.

#setup 
To set up this project make sure Node.js and Java are installed. 

Run this in your environment to make sure your node-modules are installed correct:
```bash 
npm install
```

#excecution
You can run your tests through this:
```bash
npm test
```
or 
```bash
wdio wdio.conf.js
```

#maintenance
When you want to have a special browser to run your tests in, define it in the `wdio.conf.js` and run locally with your own browser or add your browser + driver in the `./lib`.
Make sure, you have the correct way named your adding. 
To implement the browsers just comment in the onPrepare function and fill in your browsers and drivers from the lib. 
In the Capabilities you have to comment in the browser options and put your favored Browser in the browser binary.
In the Test Runner services further down you have to comment in too the Selenium stuff and name it as it is named in your lib.

There a quite a few things you can add in this project, to make it custom for your application. In the `wdio.conf.js` are a few examples commented for you. 