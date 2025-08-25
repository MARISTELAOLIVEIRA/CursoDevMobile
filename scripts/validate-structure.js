#!/usr/bin/env node
/**
 * Valida estrutura dos módulos: front matter, seções mínimas, presença de quiz/challenge (regras simples).
 */
import { readdirSync, readFileSync } from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'curso');
const files = readdirSync(DIR).filter(f => /^\d+.*\.md$/.test(f));
let errors = [];
const frontMatterRe = /^---([\s\S]*?)---/;

files.forEach(f => {
  const content = readFileSync(path.join(DIR,f), 'utf8');
  const fm = frontMatterRe.exec(content);
  if (!fm) {
    errors.push(`${f}: falta front matter`);
    return;
  }
  const block = fm[1];
  ['title','id','objectives'].forEach(key => {
    if (!new RegExp('^'+key+':', 'm').test(block)) errors.push(`${f}: campo '${key}' ausente no front matter`);
  });
  const num = parseInt(f.split('-')[0],10);
  const hasQuiz = /```quiz\n/.test(content);
  const hasChallenge = /```challenge\n/.test(content);
  // Regras: módulo 00 pode não ter challenge, módulo final (14) pode ter quiz opcional.
  if (num !== 0 && num !== 14 && !hasQuiz) errors.push(`${f}: deve ter pelo menos um quiz`);
  if (num !== 0 && num !== 14 && !hasChallenge) errors.push(`${f}: deve ter pelo menos um challenge`);
});

if (errors.length) {
  console.error('Falhas de validação:\n - ' + errors.join('\n - '));
  process.exitCode = 1;
} else {
  console.log('Estrutura OK ('+files.length+' módulos).');
}
