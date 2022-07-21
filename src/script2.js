const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://pptr.dev/');
  await page.addStyleTag({ content: '.navbar__inner{background: #1F54C0}' });
  await page.screenshot({ path: 'screenshots/script2.png' });
  await browser.close();
})();
