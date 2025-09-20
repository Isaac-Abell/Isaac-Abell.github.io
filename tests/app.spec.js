import { test, expect } from '@playwright/test';
import { spawn } from 'child_process';
import http from 'http';

let serverProcess;

async function waitForServer(url, timeout = 10000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http.get(url, (res) => {
        if (res.statusCode === 200) return resolve();
        if (Date.now() - start > timeout) return reject(new Error('Server did not respond in time'));
        setTimeout(check, 500);
      }).on('error', () => {
        if (Date.now() - start > timeout) return reject(new Error('Server did not respond in time'));
        setTimeout(check, 500);
      });
    };
    check();
  });
}

test.beforeAll(async () => {
  // Start the server
  serverProcess = spawn('npx', ['serve', '-s', 'dist', '-l', '3000'], {
    stdio: 'inherit',
    shell: true,
  });

  // Wait until the server is responding
  await waitForServer('http://localhost:3000');
});

test.afterAll(() => {
  if (serverProcess) serverProcess.kill();
});

test('homepage loads without console errors', async ({ page }) => {
  const consoleErrors = [];

  page.on('pageerror', (err) => consoleErrors.push(err));
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.goto('http://localhost:3000');
  expect(consoleErrors).toHaveLength(0);
});