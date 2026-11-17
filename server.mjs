import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { networkInterfaces } from 'node:os';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 3000);
const host = process.argv.includes('--network') ? '0.0.0.0' : (process.env.HOST || '127.0.0.1');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ttf': 'font/ttf' };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const publicPath = pathname === '/' ? '/index.html' : pathname;
    const allowed = ['/index.html', '/styles.css', '/app.js', '/marketplace-config.js'].includes(publicPath) || publicPath.startsWith('/assets/');
    if (!allowed || publicPath.split(/[\\/]/).some(part => part.startsWith('.'))) { res.writeHead(403).end('Forbidden'); return; }
    const file = await realpath(path.resolve(root, '.' + publicPath));
    if (!file.startsWith(root)) { res.writeHead(403).end('Forbidden'); return; }
    if (!(await stat(file)).isFile()) { res.writeHead(404).end('Not found'); return; }
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(port, host, () => {
  console.log(`AQL preview: http://localhost:${port}`);
  if (host === '0.0.0.0') {
    for (const addresses of Object.values(networkInterfaces())) {
      for (const address of addresses || []) {
        if (address.family === 'IPv4' && !address.internal && !address.address.startsWith('169.254.')) {
          console.log(`Phone preview: http://${address.address}:${port}`);
        }
      }
    }
  }
});
