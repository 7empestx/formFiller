const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');

(async function firstScript() {
  try {

    let usernames = new Array('standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user');

    // Iterate through the 4 accepted user names and fill
    for(let u_idx = 0; u_idx < 4; u_idx++) {

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

      fill.quit();

    }
    
  } catch (error) {
    console.log(error)
  }
})();