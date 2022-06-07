var loginCommands = {
    login: function (email, password) {
        return this.navigate()
            .waitForElementVisible('@emailInput')
            .waitForElementVisible('@passwInput')
            .setValue('@emailInput', email)
            .setValue('@passwInput', password)
            .clickLogin();
    }
};

module.exports = {
    url: 'http://automationpractice.com/index.php?controller=my-account',
    elements: {
        emailInput: '#email',
        passwInput: '#passwd',
        signInButton: '#SubmitLogin',
        alertMessage: 'div[class="alert alert-danger"]'
    },
    commands: [{
        verifyAlertMessageContains(value) {
            return this.expect.element('@alertMessage').text.to.contain(value);
        },
        
        clickLogin() {
            this.click('@signInButton');
        }
    }, loginCommands]
};