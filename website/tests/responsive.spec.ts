import { expect, test } from '@playwright/test';

for (const width of [320, 375, 390, 640, 768, 1024, 1440]) {
  for (const route of ['/', '/about', '/publications&projects']) {
    test(`${route} fits a ${width}px viewport`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      // Third-party analytics is outside the local layout checks.
      await page.route('**/www.googletagmanager.com/**', request => request.abort());
      await page.goto(route);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('main')).toBeVisible();
      if (route === '/') {
        await expect(page.locator('article')).toHaveCount(3);
        await expect(page.getByRole('region', { name: 'Selected publications' })).toContainText('ICML 2026');
        await expect(page.getByRole('region', { name: 'Selected publications' })).toContainText('NeurIPS 2025');
        await expect(page.getByRole('region', { name: 'Selected publications' })).toContainText('BMVC 2026');
      }
      const layout = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, overflowing: Array.from(document.querySelectorAll('body *')).filter(el => { const box = el.getBoundingClientRect(); return box.right > innerWidth + 1; }).map(el => ({ tag: el.tagName, className: el.getAttribute('class'), right: el.getBoundingClientRect().right })) }));
      expect(layout.scrollWidth, JSON.stringify(layout)).toBe(width);
      await page.locator('footer').scrollIntoViewIfNeeded();
      await page.evaluate(() => document.querySelectorAll('img').forEach(image => { image.loading = 'eager'; }));
      await page.waitForFunction(() => Array.from(document.images).every(image => image.complete));
      expect(await page.locator('img').evaluateAll(images => images.map(image => image as HTMLImageElement).filter(image => !image.naturalWidth).map(image => image.src))).toEqual([]);
      expect(errors).toEqual([]);
      if ([375, 1440].includes(width)) {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: `test-results/screenshots/${route === '/' ? 'home' : route.slice(1)}-${width}.png`, fullPage: true });
      }
    });
  }
}

test('mobile menu supports navigation, Escape, and outside dismissal', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: /Menu/ });
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(page.getByRole('link', { name: 'About', exact: true })).toBeHidden();
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await menu.click();
  await page.locator('h1').click();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await page.getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole('button', { name: /Menu/ })).toHaveAttribute('aria-expanded', 'false');
});

for (const viewport of [{ width: 320, height: 568 }, { width: 844, height: 390 }, { width: 1440, height: 900 }]) {
  test(`all article dialogs work at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/publications&projects');
    const articles = page.getByRole('button', { name: /Read article/ });
    await expect(articles).toHaveCount(10);
    for (let index = 0; index < await articles.count(); index++) {
      const trigger = articles.nth(index);
      await trigger.click();
      const dialog = page.getByRole('dialog');
      await expect(dialog).toBeVisible();
      await expect(page.getByRole('button', { name: 'Close article' })).toBeFocused();
      const bounds = await dialog.boundingBox();
      expect(bounds!.x).toBeGreaterThanOrEqual(0);
      expect(bounds!.y).toBeGreaterThanOrEqual(0);
      expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(viewport.height);
      await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
      const lastLink = dialog.getByRole('link').last();
      if (await lastLink.count()) {
        await lastLink.focus();
        await expect(lastLink).toBeInViewport();
      }
      await page.keyboard.press('Escape');
      await expect(dialog).not.toBeVisible();
      await expect(trigger).toBeFocused();
      await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
    }
    await articles.first().click();
    await page.getByRole('button', { name: 'Close article' }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });
}

test('theme starts from system preference and persists across navigation and reload', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  const lightBackground = await page.locator('body').evaluate(body => getComputedStyle(body).backgroundColor);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(page.locator('body')).toHaveCSS('background-color', lightBackground);
  await page.goto('/about');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('reduced motion keeps all skills readable without animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.skills-orbit')).toBeHidden();
  await expect(page.getByRole('listitem').filter({ hasText: 'PyTorch' })).toBeVisible();
});

for (const width of [375, 1440]) {
  test(`profile photo slides into the header and returns at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('/');
    const portrait = page.getByRole('link', { name: 'Maximilian Forstenhäusler — home' });
    await expect(portrait).toHaveCSS('position', 'fixed');
    const start = (await portrait.boundingBox())!;
    expect(start.width).toBe(96);

    await page.evaluate(() => window.scrollTo(0, 40));
    await expect.poll(async () => (await portrait.boundingBox())!.width).toBeLessThan(96);
    const middle = (await portrait.boundingBox())!;
    expect(middle.width).toBeGreaterThan(48);
    expect(middle.y).toBeLessThan(start.y);

    await page.evaluate(() => window.scrollTo(0, 250));
    await expect.poll(async () => (await portrait.boundingBox())!.width).toBeCloseTo(48);
    const target = (await page.locator('[data-portrait-target]').boundingBox())!;
    const docked = (await portrait.boundingBox())!;
    expect(docked.x).toBeCloseTo(target.x);
    expect(docked.y).toBeCloseTo(target.y);
    await expect(portrait).toBeInViewport();
    await page.screenshot({ path: `test-results/screenshots/profile-docked-${width}.png` });

    // A breakpoint change must not leave the fixed photo at its old horizontal position.
    await page.setViewportSize({ width: width === 375 ? 844 : 768, height: 844 });
    await expect.poll(async () => {
      const photo = (await portrait.boundingBox())!;
      const slot = (await page.locator('[data-portrait-target]').boundingBox())!;
      return Math.abs(photo.x - slot.x) + Math.abs(photo.y - slot.y);
    }).toBeLessThan(1);

    await page.evaluate(() => window.scrollTo(0, 0));
    await expect.poll(async () => (await portrait.boundingBox())!.width).toBeCloseTo(96);
    await expect(portrait).toBeInViewport();
  });
}

test('profile photo skips the shrinking transition with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const portrait = page.getByRole('link', { name: 'Maximilian Forstenhäusler — home' });
  await expect(portrait).toHaveCSS('position', 'fixed');
  await page.evaluate(() => window.scrollTo(0, 40));
  await expect.poll(async () => (await portrait.boundingBox())!.y).toBeLessThan(100);
  expect((await portrait.boundingBox())!.width).toBe(96);
  await page.evaluate(() => window.scrollTo(0, 250));
  await expect.poll(async () => (await portrait.boundingBox())!.width).toBeCloseTo(48);
});
