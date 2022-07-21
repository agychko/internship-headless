const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://pptr.dev/');
  await page.click('.searchBox_ZlJk');
  await page.keyboard.type('pdf');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  await page.emulateMediaType('screen');
  await page.pdf({ path: 'screenshots/script1.pdf' });

  await browser.close();
})();
