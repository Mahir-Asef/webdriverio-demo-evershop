const searchLocators = require("./searchLocators");

class searchActions{
    async clickOnSeacrhIcon(){
        await searchLocators.searchIcon.click();
    }
    async enterSearchIteanName(){
        await searchLocators.searchInputField.setValue("productName");
    }
}
module.exports = new searchActions();