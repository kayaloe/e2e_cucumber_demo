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
    assert.equal(browser.getTitle(), 'HTW Berlin - Hochschule für Technik und Wirtschaft Berlin');
});

When('ich in der Suche {string} eingebe', function (string) {
    if(string=='akademischer Kalender'){
        $('input.noSwipe').setValue('akademischer Kalender');
    }
});

When('ich den Suchbutton klicke', function () {
    $('#suchbutton').click();
});

Then('befinde ich mich in den Suchergebnissen', function () {
    assert.equal(browser.getTitle(), 'Suchergebnisse');
});