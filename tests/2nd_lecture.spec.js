const { test, expect } = require('@playwright/test');

test('Log page title to console', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 
  const title = await page.title();
  
  
  console.log('Page Title:', title);
  //expect(title).toBe('Google');  

});