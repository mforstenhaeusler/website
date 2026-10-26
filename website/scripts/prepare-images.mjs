import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const source = path.resolve('public/images');
const output = path.join(source, 'optimized');
await mkdir(output, { recursive: true });
for (const file of await readdir(source)) {
  if (!/\.jpe?g$/i.test(file)) continue;
  for (const width of [360, 720]) {
    await sharp(path.join(source, file)).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(output, `${path.parse(file).name}-${width}.webp`));
  }
}
console.log('Generated responsive WebP photos.');
