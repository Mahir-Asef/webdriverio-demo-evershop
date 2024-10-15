const productName = "Nike react phantom run flyknit 2";
describe("Demo evershop automation",()=>{
    it("Successfully add product to cart",async()=>{
        await browser.url("https://demo.evershop.io/");
    // await driver.findElement(By.className("search-icon")).click();
    await $("//a[@class='search-icon']").click();
    await $("//input[@placeholder='Search']").setValue("nike");
    await browser.keys('Enter');
    await $(`//a[contains(@href,'182')]/span[contains(text(),'${productName}')]`).click();
    await $("//a[@href='#' and contains(text(),'S')]").click();
    await browser.pause(3000);
    await $("//a[@href='#' and contains(text(),'Black')]").click();
    await browser.pause(3000);
    // await $("//input[@name='qty']").clear();
    await $("//input[@name='qty']").setValue(2);
    await $("//button[contains(.,'ADD TO CART')]").click();
    await browser.pause(3000);
    await $("//a[@class='add-cart-popup-button']").click();
    
    await browser.pause(5000);
    await browser.silent();
    })
});