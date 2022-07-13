const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');
const { waitForDebugger } = require('inspector');

(async function firstScript() {
  try {

    let usernames = new Array('standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user');

    // Iterate through the 4 accepted user names and fill
    for(let u_idx = 0; u_idx < 1; u_idx++) {

      // Spawn window
      var fill = new Builder().forBrowser('firefox').build();
      await fill.get('https://www.saucedemo.com/');
      
      // Find user-name and fill
      var user = await fill.findElement(By.id('user-name'));
      await user.sendKeys(usernames[u_idx]);
      
      // Check if user-name filled correctly
      await user.getAttribute('value').then(async function(value) {
        assert.equal(value, usernames[u_idx]);
      });

      // Find password and fill
      var passw = await fill.findElement(By.id('password'));
      await passw.sendKeys('secret_sauce');

      // Check if password filled correctly
      await passw.getAttribute('value').then(async function(value){
        assert.equal(value, 'secret_sauce');
      })
      
      // Click login-button
      await fill.findElement(By.id('login-button')).click();

      for(let spam = 0; spam < 1; spam++) {
        await fill.findElement(By.id('add-to-cart-sauce-labs-backpack')).click();
        await fill.findElement(By.id('remove-sauce-labs-backpack')).click();

        await fill.findElement(By.id('add-to-cart-sauce-labs-bike-light')).click();
        await fill.findElement(By.id('remove-sauce-labs-bike-light')).click();

        await fill.findElement(By.id('add-to-cart-sauce-labs-bolt-t-shirt')).click();
        await fill.findElement(By.id('remove-sauce-labs-bolt-t-shirt')).click();

        await fill.findElement(By.id('add-to-cart-sauce-labs-fleece-jacket')).click();
        await fill.findElement(By.id('remove-sauce-labs-fleece-jacket')).click();

        await fill.findElement(By.id('add-to-cart-sauce-labs-onesie')).click();
        await fill.findElement(By.id('remove-sauce-labs-onesie')).click();

        await fill.findElement(By.id('add-to-cart-test.allthethings()-t-shirt-(red)')).click();
        await fill.findElement(By.id('remove-test.allthethings()-t-shirt-(red)')).click();

      }
      
      await fill.findElement(By.id('add-to-cart-test.allthethings()-t-shirt-(red)')).click();
      await fill.findElement(By.className('shopping_cart_link')).click();

      fill.quit();

    }
    
  } catch (error) {
    console.log(error)
  }
})();