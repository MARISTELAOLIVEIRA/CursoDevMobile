#!/usr/bin/env node
/**
 * Gera a página inicial (curso/index.md) agregando módulos, horas, contagem de quizzes e desafios.
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const CURSO_DIR = path.join(process.cwd(), 'curso');
const moduleFiles = readdirSync(CURSO_DIR)
  .filter(f => /^\d+.*\.md$/.test(f))
  .sort((a,b) => a.localeCompare(b, undefined, { numeric: true }));

function parseFrontMatter(txt){
  const m = /^---([\s\S]*?)---/m.exec(txt);
  if(!m) return {};
  const block = m[1];
  const obj = {};
  block.split('\n').forEach(line => {
    const kv = /^([a-zA-Z0-9_]+):\s*(.+)$/.exec(line.trim());
    if(kv) obj[kv[1]] = kv[2];
  });
  return obj;
}

const rows = [];
let totalHours = 0;
let totalQuizzes = 0;
let totalChallenges = 0;

moduleFiles.forEach(f => {
  const full = path.join(CURSO_DIR, f);
  const content = readFileSync(full, 'utf8');
  const fm = parseFrontMatter(content);
  const modulo = f.split('-')[0];
  const title = fm.title || f;
  const hours = Number(fm.durationHours || 0);
  const quizzes = (content.match(/```quiz/g) || []).length;
  const challenges = (content.match(/```challenge/g) || []).length;
  totalHours += hours;
  totalQuizzes += quizzes;
  totalChallenges += challenges;
  rows.push({ modulo, title, file: f, hours, quizzes, challenges });
});

const lines = [];
lines.push('# Curso Dev Mobile');
lines.push('');
lines.push('Bem-vindo(a)! Esta é a página inicial interativa do curso. Use os atalhos e a tabela para navegar rapidamente pelas atividades.');
lines.push('');
lines.push('## Atalhos Rápidos');
lines.push('- 📘 **Plano Geral**: [PLANO-GERAL.md](PLANO-GERAL.md) – visão macro (carga horária total, objetivos).');
lines.push('- 🗂 **Índice Automatizado**: [INDEX.md](INDEX.md) – lista simples de módulos.');
lines.push('- ✅ **Progresso Local**: [progresso.md](progresso.md) – acompanhamento de quizzes resolvidos (salvo no seu navegador).');
lines.push('- 🧪 **Executar Quizzes (CLI)**: `npm run quiz`');
lines.push('- 🧩 **Executar Desafios**: `npm run challenges`');
lines.push('- 🔍 **Validar Estrutura**: `npm run validate`');
lines.push('');
lines.push('## Resumo Global');
lines.push(`- Carga horária planejada: **${totalHours}h**`);
lines.push(`- Total de módulos: **${rows.length}**`);
lines.push(`- Quizzes detectados: **${totalQuizzes}**`);
lines.push(`- Desafios detectados: **${totalChallenges}**`);
lines.push('');
lines.push('## Módulos e Atividades');
lines.push('');
lines.push('| Módulo | Título | Horas | Quizzes | Desafios | Link |');
lines.push('|--------|--------|-------|---------|----------|------|');
rows.forEach(r => {
  lines.push(`| ${r.modulo} | ${r.title} | ${r.hours || ''} | ${r.quizzes} | ${r.challenges} | [Abrir](./${r.file}) |`);
});
lines.push('');
lines.push('## Como Usar o Curso');
lines.push('1. Leia o conteúdo do módulo na ordem sugerida (ou navegue conforme necessidade).');
lines.push('2. Responda aos quizzes diretamente no site ou via CLI (respostas locais).');
lines.push('3. Execute os desafios com `npm run challenges` para verificar as soluções.');
lines.push('4. Acompanhe seu progresso em `Progresso Local`.');
lines.push('5. Revise regularmente e avance para o Projeto Final (Módulo 14).');
lines.push('');
lines.push('> Nota: O progresso armazenado no navegador é local ao dispositivo; exportação/importação poderá ser adicionada futuramente.');
lines.push('');
lines.push('_Página gerada automaticamente por `scripts/generate-home.js`._');

writeFileSync(path.join(CURSO_DIR, 'index.md'), lines.join('\n'));
console.log('Página inicial (index.md) gerada com sucesso.');
