import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const run = async () => {
  console.log('🚀 Launching Chromium...');
  const browser = await puppeteer.launch({
    headless: true,
    
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  console.log('🌐 Navigating to example.com...');
  await page.goto('https://example.com');
const textContent = await page.evaluate(() => {
    return document.body.innerText;
  });

  console.log('📄 Page Text:\n', textContent); // <- Logs fu
  console.log('📸 Taking screenshot...');
  await page.screenshot({ path: 'ec2-test.png' });

await browser.close();
  console.log('✅ Done! Screenshot saved as ec2-test.png');
};

run();
