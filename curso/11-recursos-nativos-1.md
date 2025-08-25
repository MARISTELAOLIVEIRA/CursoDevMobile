---
title: Módulo 11 – Recursos Nativos 1
id: 11
durationHours: 8
objectives:
  - Câmera/galeria
  - Permissões
  - Localização
---

# Módulo 11 – Recursos Nativos 1

## Challenge
```challenge
{
  "id": "has-permission",
  "title": "Checa permissão",
  "instructions": "Implemente hasPermission(list, p).",
  "function": "hasPermission",
  "tests": [
    {"code": "hasPermission(['CAMERA'],'CAMERA') === true"},
    {"code": "hasPermission([], 'GPS') === false"}
  ]
}
```

## Quiz
```quiz
{
  "id": "quiz-nativo-1",
  "question": "Permissão de câmera em iOS exige?",
  "options": {"a": "Nada", "b": "Descrição em Info.plist", "c": "Rebuild do kernel"},
  "answer": "b"
}
```
