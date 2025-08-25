---
title: Módulo 03 – Fundamentos React
id: 03
durationHours: 8
objectives:
  - Compreender mental model de componentes
  - Usar props e estado
  - Introduzir hooks básicos
---

# Módulo 03 – Fundamentos React

## Objetivos
Rever front matter.

## Conteúdo
- Componentes / JSX
- Props vs estado
- useState / useEffect

## Exemplo
```jsx
function Hello({ name }) { return <Text>Olá {name}</Text>; }
```

## Challenge
```challenge
{
  "id": "greet-name",
  "title": "Saudação",
  "instructions": "Implemente a função greet(name) retornando 'Olá, <name>!'",
  "function": "greet",
  "tests": [
    {"code": "greet('Ana') === 'Olá, Ana!'"},
    {"code": "greet('') === 'Olá, !'"}
  ]
}
```

## Quiz
```quiz
{
  "id": "quiz-react-1",
  "question": "Qual hook é usado para estado local?",
  "options": {"a": "useState", "b": "useEffect", "c": "useMemo"},
  "answer": "a",
  "explanation": "useState gerencia estado local simples."
}
```

## Referências
- docs.react.dev

## Conclusão
Avance ao entender ciclo de render básico.
