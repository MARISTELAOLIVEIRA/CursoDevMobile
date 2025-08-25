---
title: Módulo 08 – Animações & Performance
id: 08
durationHours: 8
objectives:
  - Otimizar renders
  - Aplicar animações básicas
  - Medir performance
---

# Módulo 08 – Animações & Performance

## Challenge
```challenge
{
  "id": "clamp-value",
  "title": "Clamp",
  "instructions": "Implemente clamp(v,min,max).",
  "function": "clamp",
  "tests": [
    {"code": "clamp(5,0,10) === 5"},
    {"code": "clamp(-1,0,10) === 0"},
    {"code": "clamp(99,0,10) === 10"}
  ]
}
```

## Quiz
```quiz
{
  "id": "quiz-perf-1",
  "question": "Qual ajuda a evitar renders desnecessários?",
  "options": {"a": "memoização", "b": "re-render em loop", "c": "logs excessivos"},
  "answer": "a"
}
```
