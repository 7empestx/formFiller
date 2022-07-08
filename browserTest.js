const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');

(async function firstScript() {
  try {

    let usernames   = new Array('standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user');
    let driver = new Array();
    let u_idx = 0;

    // Iterate through the 4 accepted user names and fill
    for(let i = 0; i < 4; i++) {
        
        // Spawn window
        driver[i] = new Builder().forBrowser('firefox').build();
        await driver[i].get('https://www.saucedemo.com/');
        
        // Find user-name and fill
        await driver[i].findElement(By.id('user-name')).sendKeys(usernames[u_idx]);
        u_idx++

        // Find password and fill
        await driver[i].findElement(By.id('password')).sendKeys('secret_sauce');
        
        // Click login-button
        await driver[i].findElement(By.id('login-button')).click();
    }
    
  } catch (error) {
    console.log(error)
  }
})();