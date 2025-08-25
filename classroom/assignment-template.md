# Template de Atividade – Curso Dev Mobile

## Objetivo da Atividade
Implementar as funções dos desafios marcados neste módulo e obter 100% nos testes automáticos.

## Passos para o Aluno
1. Clone o repositório (assignment).
2. Rode os quizzes/local para estudo (opcional):
   ```bash
   npm run quiz
   ```
3. Rode os desafios:
   ```bash
   npm run challenges
   ```
4. Edite os arquivos em `solutions/*.js` até todos os testes passarem.
5. Faça commit e push.

## Avaliação Automática
O GitHub Actions (workflow CI) executa `node scripts/challenge-runner.js`. Se algum teste falhar, o status da atividade fica vermelho.

## Critérios de Conclusão
- Todos os testes dos challenges do módulo passam.
- Código limpo e comentado quando necessário.

## Extensões Futuras
- Adicionar lint custom.
- Contar quizzes respondidos corretamente (script separado).

Boa prática! Suba dúvidas via issues.
