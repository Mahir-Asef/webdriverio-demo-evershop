const addToCartLocators = require("./addToCartLocators");
const utility = require("../../utilities/utility");
class addToCartActions {
  async clickOnProductfromList(productName) {
    await addToCartLocators.productFromList(productName).click();
  }
  async selectProductSize(number) {
    await addToCartLocators.productSize(number).click();
    await browser.pause(3000);
  }
  async selectColor() {
    await addToCartLocators.productColor.click();
    await browser.pause(3000);
  }
  async enterProductQty(qty) {
    await addToCartLocators.inputQtyField.setValue(qty);
  }
  async clickOnAddToCartButton() {
    await addToCartLocators.buttonAddToCart.click();
  }
  async clickOnViewCartButton() {
    await addToCartLocators.buttonViewCartFromModal.click();
  }
  async getSingleProductPrice() {
    const productPrice = await addToCartLocators.priceFromProductPage.getText();
    const productPriceInNumber =await utility.covertTextToNumber(productPrice);
      return productPriceInNumber;
  }
}

module.exports = new addToCartActions();
