#!/usr/bin/env node
/**
 * Runner simples de challenges definidos em blocos ```challenge ...``` nos .md.
 * Formato esperado JSON:
 * { id, title, instructions, function, tests:[{code:"expr retorna boolean"}] }
 * Para cada challenge cria (se não existir) solutions/<id>.js com stub.
 * Em seguida carrega o arquivo e avalia cada teste em sandbox.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';
import vm from 'vm';

const COURSE_DIR = path.join(process.cwd(), 'curso');
const SOL_DIR = path.join(process.cwd(), 'solutions');
if (!existsSync(SOL_DIR)) mkdirSync(SOL_DIR);

function mdFiles() {
  return readdirSync(COURSE_DIR).filter(f => f.endsWith('.md'));
}

function extractChallenges(txt) {
  const regex = /```challenge\n([\s\S]*?)```/g;
  const arr = []; let m;
  while ((m = regex.exec(txt)) !== null) {
    try {
      const obj = JSON.parse(m[1]);
      if (obj.id && obj.function && Array.isArray(obj.tests)) arr.push(obj);
    } catch(e) { /* ignore parse errors */ }
  }
  return arr;
}

function ensureSolution(ch) {
  const file = path.join(SOL_DIR, `${ch.id}.js`);
  if (!existsSync(file)) {
    const template = `// Solution for challenge: ${ch.title}\n// Instructions: ${ch.instructions}\nexport function ${ch.function}(...args) {\n  // TODO: implementar\n  throw new Error('Not implemented');\n}\n`;
    writeFileSync(file, template);
    console.log('Criado stub', file);
  }
  return file;
}

function deepEqual(a,b){ return JSON.stringify(a) === JSON.stringify(b); }

function runTests(ch, filePath) {
  let code = readFileSync(filePath, 'utf8');
  // Suporte simples a 'export function name' transformando em atribuição no sandbox
  code = code.replace(/export\s+function\s+(\w+)/g, 'function $1');
  const sandbox = { console, exports: {}, module: { exports: {} } };
  vm.createContext(sandbox);
  try { vm.runInContext(code, sandbox, { timeout: 2000 }); } catch(e) {
    return { passed: 0, total: ch.tests.length, errors: [`Erro ao carregar solução: ${e.message}`] };
  }
  // Tenta localizar função (global após replace ou em module.exports)
  const fn = sandbox[ch.function] || sandbox.module.exports[ch.function] || sandbox.exports[ch.function];
  if (typeof fn !== 'function') {
    return { passed: 0, total: ch.tests.length, errors: ['Função não encontrada: ' + ch.function] };
  }
  let passed = 0; const errors = [];
  ch.tests.forEach((t,i) => {
    try {
      if (t.code) {
        const result = vm.runInContext(`(${t.code})`, vm.createContext({ ...sandbox, [ch.function]: fn, JSON }), { timeout: 1000 });
        if (result === true) passed++; else errors.push(`Teste ${i+1} falhou: ${t.code}`);
      } else if (t.input !== undefined && t.expected !== undefined) {
        const result = fn(...(Array.isArray(t.input)? t.input : [t.input]));
        if (deepEqual(result, t.expected)) passed++; else errors.push(`Teste ${i+1} falhou: esperado ${JSON.stringify(t.expected)} obtido ${JSON.stringify(result)}`);
      } else {
        errors.push(`Teste ${i+1} formato inválido`);
      }
    } catch(e) {
      errors.push(`Teste ${i+1} erro: ${e.message}`);
    }
  });
  return { passed, total: ch.tests.length, errors };
}

function main() {
  const challenges = [];
  mdFiles().forEach(f => {
    const content = readFileSync(path.join(COURSE_DIR, f), 'utf8');
    extractChallenges(content).forEach(c => challenges.push({ ...c, source: f }));
  });
  if (!challenges.length) {
    console.log('Nenhum challenge encontrado.');
    return;
  }
  console.log('Encontrados', challenges.length, 'challenges');
  let totalPassed = 0, totalTests = 0;
  challenges.forEach(ch => {
    console.log(`\n# ${ch.id} - ${ch.title} (${ch.source})`);
    const file = ensureSolution(ch);
    const { passed, total, errors } = runTests(ch, file);
    totalPassed += passed; totalTests += total;
    console.log(`Resultado: ${passed}/${total}`);
    errors.forEach(e => console.log('  -', e));
  });
  console.log('\nResumo geral:', totalPassed + '/' + totalTests, `(${Math.round((totalPassed/totalTests)*100)}%)`);
  if (totalTests > 0 && totalPassed < totalTests) {
    process.exitCode = 1; // falha em CI se algum teste falhar
  }
}

main();
