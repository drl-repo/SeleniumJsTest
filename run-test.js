const { Condition, By, Key, until, Select } = require('selenium-webdriver');

const myUntil =  require('./utils/my-until');
let customUntil = {
    ...until,
    ...myUntil
};

global.Page = require('./utils/Page');
global.browser =  require('./utils/browser');
global.Condition = Condition;
global.By = By;
global.Key = Key;
global.until = customUntil;
global.Select = Select;
global.waitTimeout = 7000;
global.baseUrl = 'https://stage.mobipaid.com';


const testSuiteDir = './test-suite';

const satu = require(testSuiteDir+'/satu-test');

//call test by order
satu();

