# Plano Geral – Curso de Desenvolvimento Mobile com JavaScript (140h)

Total: 140 horas = 7 semanas * 20h (5 aulas * 4h).

## Visão por Semana
| Semana | Foco Principal | Módulos (rótulos) | Horas Aproximadas |
|--------|----------------|-------------------|-------------------|
| 1 | Fundamentos + Ambiente + JS moderno aplicado a Mobile | 00, 01, 02 | 20 |
| 2 | React / React Native Básico: Componentes, Layout, Estilos, Navegação inicial | 03, 04 | 20 |
| 3 | Dados & Integração: Fetch/API, Async, Armazenamento local, Forms | 05, 06 | 20 |
| 4 | Recursos Avançados RN: Navegação avançada, Animações, Imagens, Performance | 07, 08 | 20 |
| 5 | Arquitetura de Estado, Offline-first, Testes, Qualidade | 09, 10 | 20 |
| 6 | Recursos Nativos & Distribuição: Câmera, Sensores, Push, Build & Store, Segurança | 11, 12 | 20 |
| 7 | Acessibilidade, i18n, Otimizações, CI/CD, Projeto Final & Apresentação | 13, 14 | 20 |

## Sequência de 35 Aulas (4h cada)
- Aula 01: Visão geral do ecossistema, roadmap, setup macro
- Aula 02: Fundamentos JS (ES modules, async/await) focados em mobile
- Aula 03: Tooling (Node, npx, pacotes, lint, prettier)
- Aula 04: Versionamento & fluxo Git
- Aula 05: Introdução a React, JSX mental model
- Aula 06: Hooks essenciais (useState/useEffect)
- Aula 07: Estrutura inicial de um app React Native
- Aula 08: Flexbox & Layout responsivo
- Aula 09: Estilização (StyleSheet vs libs), dark mode
- Aula 10: Navegação básica (React Navigation stack/tab)
- Aula 11: Fetch API, consumo REST, ergonomia de chamadas
- Aula 12: Estados assíncronos e loading patterns
- Aula 13: Armazenamento local (AsyncStorage / SecureStore)
- Aula 14: Formulários e validação (Controller pattern)
- Aula 15: Upload/Download & manipulação leve de arquivos/imagens
- Aula 16: Navegação avançada (deep linking, params complexos)
- Aula 17: Animações (LayoutAnimation, Reanimated intro)
- Aula 18: Imagens, cache e otimização
- Aula 19: Performance profiling (Flipper, render counts)
- Aula 20: Estratégias de otimização (memo, virtualization)
- Aula 21: Gerência de estado escalável (Context, Redux Toolkit, Zustand)
- Aula 22: Domain-driven slices & camadas (services, hooks, UI)
- Aula 23: Offline-first (sync strategy, filas, conflitos)
- Aula 24: Testes: unit (Jest) e componentes (RN Testing Library)
- Aula 25: Testes end-to-end (Detox/alternativas) visão geral
- Aula 26: APIs nativas: câmera, localização, permissões
- Aula 27: Sensores & background tasks (conceitos)
- Aula 28: Push notifications (expo vs bare, tópicos)
- Aula 29: Build & distribuição (Android .aab, iOS .ipa, OTA updates)
- Aula 30: Segurança básica: armazenamento seguro, obfuscação, .env
- Aula 31: Acessibilidade (VoiceOver/TalkBack), semântica, contrastes
- Aula 32: Internacionalização (i18n) & formatação
- Aula 33: CI/CD (GitHub Actions, fastlane, EAS) pipelines
- Aula 34: Projeto final – consolidação (refino, QA)
- Aula 35: Apresentação, retrospectiva, próximos passos

## Mapeamento de Módulos (proposta inicial)
| Módulo | Título | Conteúdo síntese | Artefatos |
|--------|--------|------------------|-----------|
| 00 | Introdução & Objetivos | Roadmap, formato, mindset | Quiz, checklist |
| 01 | Ambiente & Ferramentas | Instalação, Git, editor, linters | Script verificação |
| 02 | JS Moderno p/ Mobile | ESNext, módulos, async, patterns | Desafios código |
| 03 | Fundamentos React | Componentes, props, estado | Quiz, mini-labs |
| 04 | Layout & Navegação Básica | Flexbox, estilos, RN Navigation | Exercício app layout |
| 05 | Consumo de APIs | Fetch, erros, retries | Lab API + quiz |
| 06 | Estado Assíncrono & Forms | Form libs, validação | Desafio forms |
| 07 | Navegação Avançada | Deep link, nested, params | Lab rotas avançadas |
| 08 | Animações & Performance | Reanimated, otimização | Desafio animação |
| 09 | Estado Global Escalável | Redux Toolkit / Zustand | Desafio refactor |
| 10 | Offline & Testes | Cache, sync, Jest, RTL | Suite testes |
| 11 | Recursos Nativos 1 | Câmera, galeria, permissões | Lab mídia |
| 12 | Recursos Nativos 2 | Push, sensores, background | Demo notificações |
| 13 | Qualidade & Build | Build, distribuição, segurança | Pipeline exemplo |
| 14 | Projeto Final | Arquitetura, polish, pitch | Rubrica avaliação |

## Estrutura de Arquivos Sugerida
```
curso/
  00-introducao.md
  01-ambiente.md
  02-js-moderno.md
  03-react-fundamentos.md
  04-layout-navegacao.md
  05-consumo-apis.md
  06-estado-forms.md
  07-navegacao-avancada.md
  08-animacoes-performance.md
  09-estado-global.md
  10-offline-testes.md
  11-recursos-nativos-1.md
  12-recursos-nativos-2.md
  13-build-seguranca-ci.md
  14-projeto-final.md
```

## Formato de Cada Módulo
1. Objetivos de aprendizagem (bullet claro)
2. Conteúdo teórico sucinto
3. Blocos de exemplo (código)
4. Desafio(s) incremental(is)
5. Quiz (3–5 perguntas)
6. Referências & leitura adicional
7. Critérios de conclusão

## Rubrica Projeto Final (Resumo)
- Arquitetura clara (módulos, pastas) – 20%
- Funcionalidades core implementadas – 30%
- Qualidade (testes, lint, performance básica) – 20%
- UX/Acessibilidade/internacionalização – 15%
- Documentação & Pitch – 15%

## Automação Planejada
- Parser de quizzes (ok)
- Runner de desafios (beta)
- Gerador de índice (ok)
- Futuro: verificador de padrões (lint custom para módulos)

## Próximos Passos Prioritários
1. Criar esqueleto vazio dos módulos 02–14.
2. Adicionar pelo menos 1 quiz e 1 challenge por módulo.
3. Acrescentar script de validação de checklist de ambiente.
4. Implementar testes unitários para parser de quiz/challenge.
5. Integrar GitHub Action para garantir que JSON de quizzes é válido.

---
Este plano pode ser iterado conforme feedback.
