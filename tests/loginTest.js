module.exports = {
    '@tags': ['login'],
    'Invalid credentials login'(browser) {
        const loginPage = browser.page.login();

        loginPage.login('abc@xyz.com', 'wrongpass');
        loginPage.verifyAlertMessageContains('There is 1 error');
    }
};