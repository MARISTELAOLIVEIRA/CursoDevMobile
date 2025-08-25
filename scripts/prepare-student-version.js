#!/usr/bin/env node
/**
 * Gera versão para alunos removendo implementações das funções em solutions/ e substituindo por stubs.
 * Mantém uma cópia original em solutions_full/ para referência.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, cpSync } from 'fs';
import path from 'path';

const SOL = path.join(process.cwd(), 'solutions');
const FULL = path.join(process.cwd(), 'solutions_full');
if (existsSync(FULL)) rmSync(FULL, { recursive: true });
cpSync(SOL, FULL, { recursive: true });

const files = readdirSync(SOL).filter(f=>f.endsWith('.js'));
files.forEach(f => {
  const fp = path.join(SOL,f);
  const code = readFileSync(fp,'utf8');
  const transformed = code.replace(/export function (\w+)\([^)]*\) {[\s\S]*?}/g, (m, name) => {
    return `export function ${name}(...args) {\n  // TODO: implementar\n  throw new Error('Not implemented');\n}`;
  });
  writeFileSync(fp, transformed);
});
console.log('Versão de aluno preparada. Cópia completa em solutions_full/.');
