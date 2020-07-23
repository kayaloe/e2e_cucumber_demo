# e2e_cucumber_demo
This is a testautomation enviroment based on Node.js, WebdriverIO, Cucumber and Selenium.
You can test automated in different Browsers. It's for UI-tests.

#setup 
To set up this project make sure Node.js and Java are installed. 

Run this in your enviroment to make sure your node-modules are installed correct:
```bash 
npm install
```

#excecution
You can run your tests through this:
```bash
npm test
```

#maintenance
With this enviroment there come a few browsers with settings to set in your `wdio.conf.js`. 
When you want to have a special browser to run your tests in, define it in the `wdio.conf.js` and run locally with your own browser or add your browser + driver in the `./lib`.
Make sure, you have the correct way named your addings. 

There a quite a few things you can add in this project, to make it custom for your application. In the `wdio.conf.js` are a few examples commented for you. 