---
title: Módulo 09 – Estado Global Escalável
id: 09
durationHours: 8
objectives:
  - Selecionar ferramenta de estado
  - Modularizar slices
  - Evitar over-render
---

# Módulo 09 – Estado Global Escalável

## Challenge
```challenge
{
  "id": "merge-unique",
  "title": "Merge Unique",
  "instructions": "Implemente mergeUnique(a,b) retornando array sem duplicatas.",
  "function": "mergeUnique",
  "tests": [
    {"code": "JSON.stringify(mergeUnique([1,2],[2,3])) === JSON.stringify([1,2,3])"}
  ]
}
```

## Quiz
```quiz
{
  "id": "quiz-estado-1",
  "question": "Qual abordagem reduz acoplamento?",
  "options": {"a": "Acesso global aleatório", "b": "Selectors bem definidos", "c": "Mutar state direto"},
  "answer": "b"
}
```
