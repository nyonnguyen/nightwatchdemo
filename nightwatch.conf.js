module.exports = {
    src_folders: ['tests'],
    page_objects_path: ['pages'],
  
    webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515,
    },
  
    test_settings: {
        default: {
            baseUrl: 'http://automationpractice.com/',
            screenshots: {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            desiredCapabilities : {
                browserName : 'chrome',
                chromeOptions : {
                    'args': ['--headless', '--no-sandbox', '--window-size=1280,800']
                }
            }
        }
    }
};