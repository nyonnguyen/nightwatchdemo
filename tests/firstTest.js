module.exports = {
    'My first test case'(browser) {
        browser
            .url(browser.baseUrl)
            .waitForElementPresent('h1')
            .assert.containsText('h1', 'Automation Practice Website');
    }
};