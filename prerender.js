import puppeteer from 'puppeteer';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

const routes = [
  '/',
  '/blog/messy-truth-data-pipelines-at-scale',
  '/blog/what-2m-farmers-taught-me-about-software',
  '/blog/going-multi-tenant-lessons-from-rewriting-a-saas-platform',
  '/blog/why-every-developer-should-build-something-they-actually-use'
];

async function prerender() {
  const app = express();
  
  // Serve static files from dist
  app.use(express.static(distPath));
  
  // Fallback to index.html for SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log(`Server started on port ${port} for prerendering...`);

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set a flag so the React app knows it's being prerendered (if it checks for it)
    await page.setUserAgent('ReactSnap');

    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for the app to finish its entry animation
      try {
        await page.waitForSelector('.opacity-100', { timeout: 5000 });
      } catch (e) {
        console.warn('Timeout waiting for .opacity-100 class, proceeding to capture HTML anyway.');
      }
      
      const html = await page.evaluate(() => document.documentElement.outerHTML);
      
      // Create directories if they don't exist
      const routeDir = path.join(distPath, route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(routeDir, 'index.html'), `<!DOCTYPE html>\n${html}`);
    }

    await browser.close();
    server.close();
    console.log('Prerendering completed.');
  });
}

prerender().catch(err => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
