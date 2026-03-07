import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const screenshotDir = path.join(__dirname, '../docs/screenshots');

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function capture() {
  console.log('Starting playwright capture...');
  const browser = await chromium.launch();
  
  // Set consistent 16:9 viewport for beautiful showcase
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
    colorScheme: 'dark'
  });
  
  const page = await context.newPage();

  const views = [
    { url: 'http://localhost:3000/', name: 'dashboard' },
    { url: 'http://localhost:3000/playbooks/new', name: 'playbook-builder' },
    { url: 'http://localhost:3000/cadences', name: 'live-cadences' },
    { url: 'http://localhost:3000/leads', name: 'lead-canvas' },
    { url: 'http://localhost:3000/settings', name: 'settings' },
  ];

  for (const view of views) {
    console.log(`Navigating to ${view.url}...`);
    try {
      await page.goto(view.url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1500); // wait for complex CSS animations to settle
      const filePath = path.join(screenshotDir, `${view.name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
      console.log(`Captured: ${view.name}.png`);
    } catch (err) {
      console.error(`Failed to capture ${view.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('Capture complete. Saved to docs/screenshots/');
}

capture().catch(console.error);
