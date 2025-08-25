#!/usr/bin/env node
/**
 * Lint simples: verifica se soluções ainda possuem 'Not implemented' ou 'TODO'.
 */
import { readdirSync, readFileSync } from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'solutions');
let issues = [];
try {
  const files = readdirSync(DIR).filter(f=>f.endsWith('.js'));
  files.forEach(f => {
    const c = readFileSync(path.join(DIR,f),'utf8');
    if (/Not implemented/.test(c) || /TODO/i.test(c)) issues.push(f + ' contém TODO/Not implemented');
  });
} catch(e) {
  console.log('Sem diretório solutions ainda.');
}
if (issues.length) {
  console.log('⚠️  Pendências em soluções:\n - ' + issues.join('\n - '));
  process.exitCode = 1;
} else {
  console.log('Soluções sem pendências.');
}
