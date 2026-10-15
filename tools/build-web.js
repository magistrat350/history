// Kopiert die Web-App nach www/ (für Capacitor und GitHub Pages).
// Aufruf: APP_VERSION=1.23 node tools/build-web.js
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
const items = ['index.html', 'manifest.webmanifest', 'icon.svg', 'sw.js', 'css', 'js', 'data'];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const item of items) fs.cpSync(path.join(root, item), path.join(out, item), { recursive: true });
const version = process.env.APP_VERSION || 'dev';
const repo = process.env.GITHUB_REPOSITORY || 'magistrat350/history';
fs.writeFileSync(path.join(out, 'js', 'version.js'),
  `/* Automatisch erzeugt beim Build. */\nwindow.CHRONIKA = { version: ${JSON.stringify(version)}, repo: ${JSON.stringify(repo)} };\n`);
console.log(`www/ erstellt (Version ${version}, Repo ${repo})`);
