#!/usr/bin/env node
/**
 * Converte metrics.json em REPORT.md com tabela de módulos.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';

if (!existsSync('metrics.json')) {
  console.error('metrics.json não encontrado. Rode: npm run metrics');
  process.exit(1);
}
const data = JSON.parse(readFileSync('metrics.json','utf8'));
let lines = [];
lines.push('# Relatório de Progresso');
lines.push('', `Gerado em: ${data.generatedAt}`, '');
lines.push(`Progresso: **${data.completedModules}/${data.totalModules} (${data.percent}%)**`, '');
lines.push('| Módulo | Arquivo | Quiz | Challenge |');
lines.push('|--------|---------|------|-----------|');
data.modules.sort((a,b)=>a.module-b.module).forEach(m => {
  lines.push(`| ${m.module.toString().padStart(2,'0')} | ${m.file} | ${m.hasQuiz?'✅':'❌'} | ${m.hasChallenge?'✅':'❌'} |`);
});
writeFileSync('REPORT.md', lines.join('\n'));
console.log('REPORT.md gerado.');
