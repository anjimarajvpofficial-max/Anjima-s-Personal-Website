const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to a standard desktop size
  await page.setViewportSize({ width: 1440, height: 900 });
  
  console.log("Navigating to http://localhost:3000");
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  console.log("Taking Hero screenshot");
  await page.screenshot({ path: 'hero.png' });
  
  console.log("Scrolling to Transmissions (Horizontal track)");
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5));
  await page.waitForTimeout(1000); // Wait for scroll animation
  await page.screenshot({ path: 'transmissions.png' });
  
  console.log("Scrolling to Control Room");
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 4.5));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'control-room.png' });
  
  await browser.close();
  console.log("Screenshots captured!");
})();
