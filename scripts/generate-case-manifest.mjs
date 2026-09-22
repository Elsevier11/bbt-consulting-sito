#!/usr/bin/env node
// Rigenera functions/_case-manifest.js a partire dai file presenti nel repo.
// Uso: node scripts/generate-case-manifest.mjs
// Da rilanciare ogni volta che si aggiungono/rinominano pagine o cartelle.

import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

const EXCLUDED_DIRS = new Set([
  ".git",
  ".impeccable",
  "node_modules",
  "legacy-spa",
  "scripts",
  "functions",
]);

function walk(dir, acc) {
  for (const entry of readdirSync(dir)) {
    if (EXCLUDED_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const rel = relative(root, full).split("\\").join("/");
    const info = statSync(full);
    if (info.isDirectory()) {
      walk(full, acc);
    } else {
      acc.push("/" + rel);
    }
  }
  return acc;
}

const files = walk(root, []);

// Mappa: percorso in minuscolo -> percorso reale (case corretto).
const manifest = {};
for (const path of files) {
  manifest[path.toLowerCase()] = path;
}

const out = `// File generato automaticamente da scripts/generate-case-manifest.mjs
// Non modificare a mano: rilanciare lo script dopo aver aggiunto/rinominato pagine.
export default ${JSON.stringify(manifest, null, 2)};
`;

writeFileSync(join(root, "functions", "_case-manifest.js"), out);
console.log(`Manifest generato con ${files.length} file.`);
