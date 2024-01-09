module.exports =  {
	
	//selector
	firstName 	: By.id('signatory_first_name'),
	lastName 	: By.id('signatory_last_name'),
	email 		: By.id('email'),
	password 	: By.id('password'),
	companyName : By.id('name'),
	phoneNumber : By.css('input[type="tel"]'),
	country 		: By.id('country'),
	province 	: By.css('input[name="state"]'),
	accept 		: By.css('input[class="psa-checkbox"]'),
	nextStep		: By.id('btn-register')


}