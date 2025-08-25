---
title: Módulo 02 – JavaScript Moderno para Mobile
id: 02
durationHours: 8
objectives:
  - Revisar sintaxe moderna ESNext
  - Aplicar módulos e async/await
  - Praticar manipulação de erros
---

# Módulo 02 – JavaScript Moderno para Mobile

## Objetivos
- Revisar sintaxe moderna ESNext relevante para RN
- Entender módulos, import/export e padrões de organização
- Praticar async/await e manipulação de erros

## Conteúdo
- let/const vs var
- Desestruturação, rest/spread
- Arrow functions e this
- Módulos ES: import/export
- Async/Await, try/catch, Promise.all

## Exemplo
```js
export async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Falha ' + res.status);
  return res.json();
}
```

## Challenge
```challenge
{
  "id": "sum-basic",
  "title": "Soma básica",
  "instructions": "Implemente a função sum(a, b) retornando a soma numérica.",
  "function": "sum",
  "tests": [
    {"code": "sum(1,2) === 3"},
    {"code": "sum(-1,1) === 0"},
    {"code": "sum(0,0) === 0"}
  ]
}
```

## Quiz
```quiz
{
  "id": "quiz-js-1",
  "question": "Qual palavra-chave evita reatribuição de referência?",
  "options": {"a": "const", "b": "let", "c": "var"},
  "answer": "a",
  "explanation": "const impede reatribuição da variável (mas objeto interno pode mudar)."
}
```

```quiz
{
  "id": "quiz-js-2",
  "question": "Quais desses são recursos de ESNext? (multi)",
  "options": {"a": "Optional chaining", "b": "Goto label", "c": "Nullish coalescing"},
  "answer": ["a","c"],
  "explanation": "Optional chaining (?.) e nullish coalescing (??) são do ecossistema moderno; 'goto' não existe."
}
```

## Conclusão
Avance quando souber aplicar imports/exports e async/await sem consultar.
