# Curso Dev Mobile

Bem-vindo(a)! Este repositório hospeda um curso interativo baseado apenas em arquivos Markdown + um pequeno script Node.js para quizzes e validações locais. Tudo roda dentro do próprio repositório (GitHub + Codespaces/VS Code).

## 🎯 Objetivos
- Estrutura modular em `curso/`
- Navegação simples só com Markdown
- Quizzes interativos locais (`node scripts/quiz.js`)
- Respostas/soluções ocultas usando `<details>`

![Progresso](badges/progresso.svg) <!-- METRICS_BADGE -->

> Nota: No build do site (GitHub Pages) as soluções em `solutions/` são substituídas por stubs para os alunos. A versão completa fica apenas na branch `solutions` ou na cópia `solutions_full/` gerada em CI.

## 📂 Estrutura (atual)
```
curso/
  PLANO-GERAL.md          # Visão macro das 140h (7 semanas)
  INDEX.md                # Gerado pelo script de TOC
  00-introducao.md
  01-ambiente.md
  ... (demais módulos numerados)
scripts/
  quiz.js                 # Executor de quizzes
  challenge-runner.js     # Executor de desafios de código (WIP)
  generate-toc.js         # Gera índice em curso/INDEX.md
package.json
```

## ✅ Quizzes locais
1. Instale (se precisar) dependências (no momento nenhuma externa).
2. Execute:
```bash
node scripts/quiz.js
```
3. Siga as perguntas. Os quizzes são extraídos de blocos Markdown com o tipo `quiz`:
```markdown
```quiz
{
  "id": "quiz-intro-1",
  "question": "Qual é o objetivo principal deste repositório?",
  "options": {"a": "Ser um app final", "b": "Conter um curso interativo", "c": "Publicar um backend"},
  "answer": "b",
  "explanation": "O foco é um curso interativo em Markdown."
}
```
```

## 🧪 Convenção de quiz
- Bloco inicia com três crases + `quiz`
- Conteúdo em JSON
- Campos obrigatórios: `id`, `question`, `options` (objeto), `answer`
- Campo opcional: `explanation`

### Multi-resposta
Para quizzes com múltiplas respostas corretas, use `answer` como array e responda separando letras por vírgula.

Exemplo:
```quiz
{
  "id": "ex-multi-1",
  "question": "Quais são tipos primitivos JS?",
  "options": {"a": "number", "b": "object", "c": "string"},
  "answer": ["a","c"],
  "explanation": "number e string são primitivos; object não."
}
```

## 🧩 Desafios de código (beta)
Blocos em Markdown:
```challenge
{
  "id": "sum-basic",
  "title": "Soma básica",
  "instructions": "Implemente a função sum(a,b)",
  "function": "sum",
  "tests": [
    {"code": "sum(1,2) === 3"},
    {"code": "sum(-1,1) === 0"}
  ]
}
```
Execução:
```bash
npm run challenges
```
Será criado (se não existir) `solutions/sum-basic.js` com um esqueleto para você editar.

## 🔄 Gerar índice
```bash
npm run toc
```
Gera/atualiza `curso/INDEX.md` listando os módulos.

## 🔍 Validação & Métricas
- `npm run validate` garante padrão dos módulos.
- `npm run metrics` gera `metrics.json` + badge em `badges/progresso.svg`.
- `npm run report` gera `REPORT.md` consolidando progresso.
- `npm run lint:solutions` alerta para soluções com TODO.

## 🚀 Evoluções possíveis
- GitHub Pages + transformação automática (MkDocs/Docusaurus)
- Testes automatizados para exercícios de código
- Badge de progresso via GitHub Issues/Actions
- Integração com devcontainers para ambiente pronto

## 📜 Licença
Veja `LICENSE`.

Boa jornada! Abra uma issue com sugestões.
