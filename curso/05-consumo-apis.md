---
title: Módulo 05 – Consumo de APIs
id: 05
durationHours: 8
objectives:
  - Consumir REST
  - Lidar com erros
  - Padronizar chamadas
---

# Módulo 05 – Consumo de APIs

## Challenge
```challenge
{
  "id": "join-path",
  "title": "Juntar path",
  "instructions": "Implemente joinPath(base, segment) garantindo apenas uma '/'.",
  "function": "joinPath",
  "tests": [
    {"code": "joinPath('api', 'user') === 'api/user'"},
    {"code": "joinPath('api/', '/user') === 'api/user'"}
  ]
}
```

## Quiz
```quiz
{
  "id": "quiz-api-1",
  "question": "Qual status HTTP indica recurso não encontrado?",
  "options": {"a": "200", "b": "404", "c": "500"},
  "answer": "b"
}
```
