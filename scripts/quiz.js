#!/usr/bin/env node
/**
 * Script simples para varrer arquivos em curso/ e executar quizzes definidos em blocos ```quiz ... ```.
 * Formato do bloco:
 * ```quiz
 * {"id":"...","question":"?","options":{"a":"..."},"answer":"a","explanation":"..."}
 * ```
 */
import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import readline from 'readline';

const COURSE_DIR = path.join(process.cwd(), 'curso');

function loadMarkdownFiles(dir) {
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .map(f => path.join(dir, f));
}

function extractQuizzes(markdown) {
  const regex = /```quiz\n([\s\S]*?)```/g;
  const quizzes = [];
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const raw = match[1].trim();
    try {
      const obj = JSON.parse(raw);
      if (!obj.id || !obj.question || !obj.options || !obj.answer) {
        console.warn('Quiz ignorado (campos obrigatórios faltando):', raw.substring(0, 60));
        continue;
      }
      quizzes.push(obj);
    } catch (e) {
      console.warn('Falha ao parsear quiz:', e.message);
    }
  }
  return quizzes;
}

function loadAllQuizzes() {
  const files = loadMarkdownFiles(COURSE_DIR);
  const all = [];
  files.forEach(file => {
    const content = readFileSync(file, 'utf8');
    const qs = extractQuizzes(content).map(q => ({ ...q, source: path.basename(file) }));
    all.push(...qs);
  });
  return all;
}

async function runInteractive(quizzes) {
  if (!quizzes.length) {
    console.log('Nenhum quiz encontrado.');
    return;
  }
  console.log(`Encontrados ${quizzes.length} quizzes. Responda digitando a letra.`);
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  let correct = 0;
  for (const q of quizzes) {
    console.log('\n[' + q.id + '] (' + q.source + ')');
    console.log(q.question);
    Object.entries(q.options).forEach(([k, v]) => console.log(` ${k}) ${v}`));
    const isMulti = Array.isArray(q.answer);
    const prompt = isMulti ? 'Sua(s) resposta(s) (separe por vírgula): ' : 'Sua resposta: ';
    const raw = await new Promise(res => rl.question(prompt, res));
    const normalizedUser = raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    const expected = isMulti ? q.answer.map(a => String(a).toLowerCase()) : [String(q.answer).toLowerCase()];
    const ok = isMulti ? expected.every(e => normalizedUser.includes(e)) && normalizedUser.length === expected.length : normalizedUser[0] === expected[0];
    if (ok) { console.log('✅ Correto'); correct++; }
    else {
      console.log(`❌ Incorreto. Resposta certa: ${isMulti ? expected.join(',') : expected[0]}`);
    }
    if (q.explanation) console.log('💡 ' + q.explanation);
  }
  rl.close();
  console.log(`\nResultado: ${correct}/${quizzes.length} (${Math.round((correct/quizzes.length)*100)}%)`);
}

const quizzes = loadAllQuizzes();
runInteractive(quizzes);
