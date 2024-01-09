/* 

custom wait for selenium js using selector only
you can use it as assertion with powerfull auto wait until condition meet or error timeout

*/


const myuntil = {

	elementHasText(locator, text){
	  	return new Condition(
	   	'element of'+ locator +' text equals to '+text,
		   function (driver) {
		      return driver.findElements(locator).then(function (elements) {
		        if(elements.length > 0){
						return elements[0].getText().then(function(textValue){
							return textValue === text ? elements[0] : null;
						});
					}
					return false;
		      })
		   }
	   );
	},

	elementContainsText(locator, subtext){
	  	return new Condition(
	   	'element of '+ locator +' text contains '+subtext,
		   function (driver) {
		      return driver.findElements(locator).then(function (elements) {
		        if(elements.length > 0){
						return elements[0].getText().then(function(textValue){
							return textValue.indexOf(subtext) != -1 ? elements[0] : null

						});
					}
					return false;
		      })
		   }
	   );
	},

	elementHasAttribute(locator, attr, text){
	  	return new Condition(
	   	'element of '+attr+ ' attribute '+ locator +' value equals to '+text,
		   function (driver) {
		      return driver.findElements(locator).then(function (elements) {
		        if(elements.length > 0){
						return elements[0].getAttribute(attr).then(function(attrValue){
							return attrValue === text ? elements[0] : null;
						});
					}
					return false;
		      })
		   }
	   );
	},

	elementContainsAttribute(locator, attr, subtext){
	  	return new Condition(
	   	'element of '+attr+ ' attribute '+ locator +' value contains '+subtext,
		   function (driver) {
		      return driver.findElements(locator).then(function (elements) {
		        if(elements.length > 0){
						return elements[0].getAttribute(attr).then(function(attrValue){
							return attrValue.indexOf(subtext) != -1 ? elements[0] : null

						});
					}
					return false;
		      })
		   }
	   );
	}

	//to be continue...

}

module.exports =  myuntil;