#!/usr/bin/env node
/**
 * Gera metrics.json e badge SVG simples com progresso (módulos c/ quiz+challenge).
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'curso');
const files = readdirSync(DIR).filter(f => /^\d+.*\.md$/.test(f));
let modules = [];
files.forEach(f => {
  const c = readFileSync(path.join(DIR,f),'utf8');
  const num = parseInt(f.split('-')[0],10);
  const hasQuiz = /```quiz\n/.test(c);
  const hasChallenge = /```challenge\n/.test(c);
  modules.push({ file: f, module: num, hasQuiz, hasChallenge });
});
const total = modules.length;
const completed = modules.filter(m => (m.module===0 || m.module===14) ? m.hasQuiz : (m.hasQuiz && m.hasChallenge)).length;
const pct = total? Math.round((completed/total)*100) : 0;
const metrics = { generatedAt: new Date().toISOString(), totalModules: total, completedModules: completed, percent: pct, modules };
writeFileSync('metrics.json', JSON.stringify(metrics,null,2));

// Badge SVG
if (!existsSync('badges')) mkdirSync('badges');
const color = pct >= 80 ? '#2e7d32' : pct >= 50 ? '#f9a825' : '#d32f2f';
const label = 'progresso';
const value = pct + '%';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" role="img" aria-label="${label}: ${value}"><linearGradient id="a" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><rect rx="3" width="140" height="20" fill="#555"/><rect rx="3" x="70" width="70" height="20" fill="${color}"/><path fill="${color}" d="M70 0h4v20h-4z"/><rect rx="3" width="140" height="20" fill="url(#a)"/><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11"><text x="35" y="15" fill="#010101" fill-opacity=".3">${label}</text><text x="35" y="14">${label}</text><text x="105" y="15" fill="#010101" fill-opacity=".3">${value}</text><text x="105" y="14">${value}</text></g></svg>`;
writeFileSync('badges/progresso.svg', svg);
console.log('Metrics geradas. Progresso', pct+'%');
