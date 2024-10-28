const checkoutLocators = require("./checkoutLocators.js");
const utility = require("../../utilities/utility.js");
class checkoutActions {
  async getSubTotalAmount() {
    const subTotal = await checkoutLocators.subTotal.getText()
    const subTotalInNumber = await utility.covertTextToNumber(subTotal);
    return subTotalInNumber;
  }
  async getGrandTotalAmount() {
    const grandTotal = await checkoutLocators.grandTotal.getText();
    const grandTotalInNumber = await utility.covertTextToNumber(grandTotal);
    return grandTotalInNumber;
  }
  async clickOnCheckoutButton() {
    await checkoutLocators.checkoutButton.click();
  }
}
module.exports = new checkoutActions();
