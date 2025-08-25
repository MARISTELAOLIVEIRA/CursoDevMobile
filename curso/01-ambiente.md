---
title: Módulo 01 – Preparando Ambiente
id: 01
durationHours: 4
objectives:
  - Configurar ambiente inicial
  - Validar ferramentas principais
  - Executar primeiro script
---

# Módulo 01 – Preparando Ambiente

Neste módulo você configurará o ambiente inicial.

## Passos gerais (exemplos genéricos)
1. Instalar SDK/plataforma (ex: Node.js, Java SDK, Flutter SDK, Android Studio…)
2. Configurar emulador ou dispositivo físico
3. Verificar variáveis de ambiente

## Checklist rápido
- [ ] Node.js instalado
- [ ] Git configurado
- [ ] Editor (VS Code) com extensões recomendadas

## Quiz
```quiz
{
  "id": "quiz-amb-1",
  "question": "Qual item NÃO é necessariamente obrigatório para rodar um script Node simples deste curso?",
  "options": {
    "a": "Node.js",
    "b": "Android Emulator",
    "c": "Git"
  },
  "answer": "b",
  "explanation": "Para quizzes em Node, não precisamos ainda de emulador Android."
}
```

## Challenge
```challenge
{
  "id": "check-node-version-range",
  "title": "Verificar versão Node",
  "instructions": "Implemente isSupported(v) retornando true se versão >= 18.",
  "function": "isSupported",
  "tests": [
    {"code": "isSupported('18.0.0') === true"},
    {"code": "isSupported('16.20.0') === false"}
  ]
}
```

## Exercício
Execute `node -v` e anote a versão. Garanta que seja suportada (>= 18).

---
Próximo: (criar próximos módulos conforme necessidade).
