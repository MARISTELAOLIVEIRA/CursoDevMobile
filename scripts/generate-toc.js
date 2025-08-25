#!/usr/bin/env node
/**
 * Gera curso/INDEX.md listando módulos numerados.
 */
import { readdirSync, writeFileSync } from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'curso');
const files = readdirSync(DIR)
  .filter(f => /^\d+.*\.md$/.test(f))
  .sort((a,b) => a.localeCompare(b, undefined, { numeric: true }));
function extractTitle(file) {
  try {
    const txt = require('fs').readFileSync(DIR + '/' + file, 'utf8');
    const m = /^---([\s\S]*?)---/m.exec(txt);
    if (m) {
      const title = /title:\s*(.+)/.exec(m[1]);
      if (title) return title[1].trim();
    }
  } catch(e) {}
  return file;
}
const lines = ['# Índice do Curso', '', '| Módulo | Título | Arquivo |', '|--------|--------|---------|'];
files.forEach(f => {
  const modulo = f.split('-')[0];
  lines.push(`| ${modulo} | ${extractTitle(f)} | [${f}](./${f}) |`);
});
lines.push('', '_Gerado automaticamente. Não editar manualmente._');

writeFileSync(path.join(DIR, 'INDEX.md'), lines.join('\n'));
console.log('INDEX.md atualizado com', files.length, 'entradas.');
