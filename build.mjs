import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = path.join(root, 'dist');
const assetExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.ttf', '.woff', '.woff2', '.txt']);

await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'marketplace-config.js']) {
  await copyFile(path.join(root, file), path.join(output, file));
}

async function copyAssets(relativeDirectory) {
  const source = path.join(root, relativeDirectory);
  const destination = path.join(output, relativeDirectory);
  await mkdir(destination, { recursive: true });
  for (const entry of await readdir(source, { withFileTypes: true })) {
    const relative = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) await copyAssets(relative);
    else if (entry.isFile() && assetExtensions.has(path.extname(entry.name).toLowerCase())) {
      await copyFile(path.join(root, relative), path.join(output, relative));
    }
  }
}

await copyAssets('assets');
console.log('Static website ready in dist/');
