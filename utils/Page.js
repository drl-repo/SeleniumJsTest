class Page{

    driver;

    constructor(driver){
        this.driver = driver;
    }

    async getDriver(){
        return this.driver;
    }

    async visit(url){
        const fullUrl = baseUrl+url;
        if(url.indexOf("http") > -1) {
          fullUrl = url;
        }
        await this.driver.get(fullUrl);
    }
    async setText(locator, text){
        await this.driver.findElement(locator).sendKeys(text);
    }
    async click(locator){
        await this.driver.findElement(locator).click();
    }

    async getText(locator){
        return await this.driver.findElement(locator).getText();
    }

        /* tested on HTML based and dynamic select */
    async selectOptionByLabel(selector, label){
        await this.driver.wait(async function(driver){
            return await driver.findElements(selector).then(async function(parent){
                const selectEl = parent[0];
                return await selectEl.findElements(By.xpath('./option[contains(text(),"'+label+'")]'))
                    .then(async function(elements){
                        if(elements.length > 0){
                            const select = new Select(selectEl);
                            await select.selectByVisibleText(label);
                            return true;
                        }
                        return false;
                }).catch(function(Ex){
                    console.log(Ex);
                })
            })
        }, waitTimeout)
        .catch(function(Ex){
            throw Error('selectOptionByLabel() on '+selector+' failed with exception : '+Ex);
        });
    }

    async selectOptionByValue(selector, value){
    await this.driver.wait(async function(driver){
        return await driver.findElements(selector).then(async function(parent){
            const selectEl = parent[0];
            return await selectEl.findElements(By.xpath('./option[contains(@value,"'+value+'")]'))
                .then(async function(elements){
                    if(elements.length > 0){
                        const select = new Select(selectEl);
                        await select.selectByValue(value);
                        return true;
                    }
                    return false;
            }).catch(function(Ex){
                console.log(Ex);
            })
        })
        }, waitTimeout)
        .catch(function(Ex){
            throw Error('selectOptionByValue() on '+selector+' failed with exception : '+Ex);
        });
    }

    async wait(fn, timeout){
       await this.driver.wait(fn, timeout);
    }

    //alert
    //iframe

    async close(){
        
        await this.driver.quit();
       
    }

    //to be continue
}



module.exports = Page;