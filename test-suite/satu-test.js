const register = require('../page-object/register-page');

module.exports = function(){
    describe('', function () {
        this.timeout(0);
        let page;

        before(async () => {
            page = new Page(await browser());
           
        });

        it('Register using valid data no province', async function () {
            await page.visit("/en/register");
            await page.setText(register.firstName, "Jhone");
            await page.setText(register.lastName, "Doe");
            await page.setText(register.email, "jhone@doe.x");
            await page.setText(register.password, "secretBg7@");
            await page.setText(register.companyName, "The SQA");
            await page.setText(register.phoneNumber, "8123456791");
            await page.selectOptionByValue(register.country, "9");
            await page.click(register.accept);
            await page.click(register.nextStep);

            //tinggal asert notice
        });

        it('Register using valid data with province', async function () {
            await page.visit("/en/register");
            await page.setText(register.firstName, "Jhone");
            await page.setText(register.lastName, "Doe");
            //bisa pakai faker atau data driven test untuk field unique value
            //agar bisa uniq
            //or alternatively karna test ini harus repeatable
            //maka bisa clear existing data di before/after hook supaya testnya bisa dire-run
            await page.setText(register.email, "jhone@uniq.x");
            await page.setText(register.password, "secretBg7@");
            await page.setText(register.companyName, "The SQA");
            await page.setText(register.phoneNumber, "8123456791");
            await page.selectOptionByValue(register.country, "9");
            await page.setText(register.province, "East Java");
            await page.click(register.accept);
            await page.click(register.nextStep);

            //tinggal asert notice
            //assert new page redirect
        });

        it('Leave mandatory field blank', async function () {
            //
            await page.visit("/en/register");
            await page.click(register.accept);
            await page.click(register.nextStep);

            //tinggal asert error notice
        });

        it('Register using existing data (email)', async function () {
            await page.visit("/en/register");
            await page.setText(register.firstName, "Jhone");
            await page.setText(register.lastName, "Doe");
            await page.setText(register.email, "jhone@doe.x");
            await page.setText(register.password, "secretBg7@");
            await page.setText(register.companyName, "The SQA");
            await page.setText(register.phoneNumber, "8123456791");
            await page.selectOptionByValue(register.country, "9");
            await page.setText(register.province, "East Java");
            await page.click(register.accept);
            await page.click(register.nextStep);

            //tinggal asert error notice
           
        });

        after(async ()=>{
            setTimeout(async function(){
                await page.close();
            }, 3000);
            
        })

       
    });
}