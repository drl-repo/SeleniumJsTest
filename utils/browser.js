const { Builder } = require('selenium-webdriver');
const Chrome = require('selenium-webdriver/chrome');

//initialize
module.exports = async function(){
   const options = new Chrome.Options();
   let driver = await new Builder()
         .forBrowser('chrome')
         .setChromeOptions(options.addArguments([
         //argument -> https://peter.sh/experiments/chromium-command-line-switches/ 
         '--start-maximized',
         //'--disable-web-security'
         //'--disable-notifications'
        ]))
        .build();

   await driver.manage().setTimeouts({ implicit: waitTimeout });
   return driver;
}
