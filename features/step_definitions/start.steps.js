const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('der Browser ist geöffnet', function () {
    browser.windowHandleSize({width: 1300, height: 820});
    browser.url('http://google.de');
});

When('ich die Seite der HTW Berlin öffne', function () {
    browser.url('https://www.htw-berlin.de/');
});

Then('sehe ich die Seite der HTW Berlin', function () {
    assert.equal(browser.getTitle(), 'HTW Berlin - Hochschule für Technik und Wirtschaft Berlin')
   // browser.getTitle().should.be.equal('HTW Berlin - Hochschule für Technik und Wirtschaft Berlin')
});