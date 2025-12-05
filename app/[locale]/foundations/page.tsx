'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Box, Grid3x3, Code2, ExternalLink, BookOpen, Github, MessageSquare, FileText, Users } from 'lucide-react';
import { useLocale } from 'next-intl';

const content = {
  'en': {
    metadata: {
      title: 'Foundations | Documentation-First Approach',
      description: 'The theoretical and methodological pillars that make Documentation-First Approach work.',
    },
    header: {
      title: 'Foundations',
      subtitle: 'The theoretical and methodological pillars that make Documentation-First Approach work'
    },
    toc: {
      title: 'On this page',
      sections: [
        { id: 'intro', label: 'Introduction' },
        { id: 'arc42', label: 'Arc42' },
        { id: 'c4', label: 'C4 Model' },
        { id: 'bdd', label: 'BDD' },
        { id: 'adr', label: 'ADR' },
        { id: 'quality', label: 'Quality Principles' },
      ]
    },
    intro: {
      subtitle: 'why documentation-first works',
      text: 'Documentation-First Approach combines four proven methodologies into a cohesive system that eliminates ambiguity and produces deterministic outputs from AI.',
      formula: 'Arc42 + C4 + BDD + ADR = Deterministic Specifications',
      formulaSub: 'that AI can implement correctly'
    },
    arc42: {
      title: 'Arc42: Architecture Documentation Framework',
      authors: 'Dr. Gernot Starke & Peter Hruschka • ~2005 • Thousands of projects worldwide',
      links: {
        official: 'Official website',
        docs: 'Documentation',
        template: 'GitHub template'
      },
      chaptersTitle: 'The 12 Chapters',
      chaptersTable: {
        headers: ['#', 'Chapter', 'Purpose'],
        rows: [
          { num: '1', name: 'Introduction & Goals', purpose: 'Vision, stakeholders, objectives' },
          { num: '2', name: 'Constraints', purpose: 'Technical, org, legal limits' },
          { num: '3', name: 'Context & Scope', purpose: 'System boundaries' },
          { num: '4', name: 'Solution Strategy', purpose: 'Overview of key decisions' },
          { num: '5', name: 'Building Block View', purpose: 'Static structure (C2, C3)' },
          { num: '6', name: 'Runtime View', purpose: 'Dynamic behavior (scenarios)' },
          { num: '7', name: 'Deployment View', purpose: 'Infrastructure mapping' },
          { num: '8', name: 'Crosscutting Concepts', purpose: 'Patterns, domain model' },
          { num: '9', name: 'Decisions (ADRs)', purpose: 'Architecture decisions' },
          { num: '10', name: 'Quality Requirements', purpose: 'NFRs, quality scenarios' },
          { num: '11', name: 'Risks & Tech Debt', purpose: 'Known issues, mitigations' },
          { num: '12', name: 'Glossary', purpose: 'Ubiquitous language' }
        ]
      },
      adaptiveTitle: 'Adaptive Use by Complexity',
      adaptiveSeeDetails: 'see details →',
      adaptiveLevels: [
        { badge: 'LOW', description: 'Only chapters 6, 10' },
        { badge: 'MEDIUM', description: 'Chapters 3, 5, 6, 8, 9, 10' },
        { badge: 'HIGH', description: 'All 12 chapters' }
      ]
    },
    c4: {
      title: 'C4 Model: Visual Architecture Language',
      authors: 'Simon Brown • ~2012 • Context, Containers, Components, Code',
      links: {
        official: 'Official website',
        structurizr: 'Structurizr',
        examples: 'Examples'
      },
      levels: [
        {
          icon: 'Globe',
          title: 'C1: Context',
          description: 'Shows the system in its environment. The system itself (center), users/actors (people and external systems), and relationships between them.'
        },
        {
          icon: 'Box',
          title: 'C2: Container',
          description: 'Shows the main technical building blocks: web apps, APIs, databases, message queues. How they communicate (protocols, ports) and technology choices.'
        },
        {
          icon: 'Grid3x3',
          title: 'C3: Component',
          description: 'Shows the internal structure of a container: components (modules, classes, interfaces), each component\'s responsibilities and dependencies.'
        },
        {
          icon: 'Code2',
          title: 'C4: Code',
          description: 'Shows code structure (rarely used). Generally better visualized via IDE or the code itself.'
        }
      ]
    },
    bdd: {
      title: 'BDD: Behavior-Driven Development',
      authors: 'Dan North • ~2006 • Executable specifications in natural language',
      links: {
        original: 'Original article',
        cucumber: 'Cucumber Docs',
        gherkin: 'Gherkin Syntax'
      },
      syntaxTitle: 'The Gherkin Syntax',
      syntaxExample: `Feature: User Login

  Scenario: Successful login with valid credentials
    GIVEN a registered user with email "user@email.com"
      AND password "securepass123"
    WHEN the user submits the login form
    THEN the user should be redirected to the dashboard
      AND a session cookie should be created
      AND the login timestamp should be recorded`,
      keywordsTable: {
        headers: ['Keyword', 'Purpose'],
        rows: [
          { keyword: 'Feature', purpose: 'Group of related scenarios' },
          { keyword: 'Scenario', purpose: 'Specific behavior to test' },
          { keyword: 'GIVEN', purpose: 'Context/initial state' },
          { keyword: 'WHEN', purpose: 'Action/event that triggers behavior' },
          { keyword: 'THEN', purpose: 'Expected result/assertion' },
          { keyword: 'AND', purpose: 'Additional context/action/result' }
        ]
      },
      whyTitle: 'Why BDD?',
      whyPoints: [
        'Shared understanding between business and technical teams',
        'Living documentation that stays synchronized with code',
        'Executable specifications that validate behavior',
        'Clear acceptance criteria for each feature'
      ],
      workflowTitle: 'Example Workflow',
      workflowSteps: [
        'Discover: Collaborate with stakeholders to understand the feature',
        'Formulate: Write scenarios in Gherkin (GIVEN-WHEN-THEN)',
        'Automate: Implement step definitions that execute scenarios',
        'Validate: Run scenarios as automated tests',
        'Refine: Update scenarios as requirements evolve'
      ]
    },
    adr: {
      title: 'ADR: Architecture Decision Records',
      authors: 'Michael Nygard • 2011 • MADR format (Markdown ADR)',
      links: {
        original: 'Original post',
        github: 'ADR GitHub',
        templates: 'Templates'
      },
      structureTitle: 'ADR Structure',
      structureExample: `# ADR-001: Use PostgreSQL for Primary Database

## Status: Accepted

## Context
We need a relational database for our e-commerce platform.
Requirements: ACID, JSON support, scale to 100k users.

## Decision
We will use PostgreSQL 15+ as our primary database.

## Consequences

Positive:
• Strong ACID guarantees
• Excellent JSON support (JSONB)
• Mature ecosystem

Negative:
• Horizontal scaling requires sharding
• Higher operational complexity than managed services

## Alternatives Considered
• MongoDB: Rejected (prefer strong schema)
• MySQL: Rejected (PostgreSQL has better JSON support)`,
      lifecycleTitle: 'Status Lifecycle',
      lifecycle: 'Proposed → Accepted → Deprecated → Superseded',
      whenTitle: 'When to Write an ADR',
      whenPoints: [
        'Choosing between architectural patterns or frameworks',
        'Selecting databases, message queues, or core infrastructure',
        'Deciding on API design (REST vs GraphQL vs gRPC)',
        'Establishing code organization or module structure',
        'Making decisions that are hard to reverse later',
        'Rejecting popular options (document why)'
      ]
    },
    quality: {
      title: 'Quality Principles',
      ddd: {
        title: 'DDD Tactical Co-Located',
        structure: `src/[bounded-context]/[container]/[component]/
  ├── index.ts                 # Aggregate Root (entry point)
  ├── criar-[entity].ts        # Factory (construction)
  ├── persistir-[entity].ts    # Repository (persistence)
  ├── [action]-[entity].ts     # Use case (business actions)
  ├── [ValueObject].ts         # Value Object (domain concept)
  ├── [Entity].ts              # Entity (internal entity)
  ├── [Event].ts               # Domain Event (business event)
  ├── [Policy].ts              # Policy/Specification (business rule)
  ├── [BusinessRule].ts        # Business Rule (domain policy)
  ├── adapters.ts              # Infrastructure adapters
  └── [component].spec.ts      # Tests (coverage ≥80%)`,
        whyTitle: 'Why is this organization better for AI?',
        whyPoints: [
          { title: 'Single point of action:', text: 'When the model needs to make a release/change, it has only a single block of code to act on' },
          { title: 'Focused context:', text: 'All feature scope is bounded within a single directory' },
          { title: 'Less dispersion:', text: 'Avoids context fragmentation across technical layers (services/, repositories/, controllers/)' }
        ],
        comparisonTitle: 'Comparison:',
        comparisonBad: 'Technical layers (services/, repositories/, controllers/):',
        comparisonBadNote: '→ AI needs to navigate 3-5 directories to understand one feature',
        comparisonGood: 'DDD Co-Located (src/sales/orders/order/):',
        comparisonGoodNote: '→ AI has everything related to the feature in one place',
        principles: 'Screaming Architecture • Co-Located • Semantic Names • Flat Structure'
      },
      solid: {
        title: 'SOLID Principles',
        principles: [
          { letter: 'S', text: 'Single Responsibility: One reason to change' },
          { letter: 'O', text: 'Open/Closed: Open for extension, closed for modification' },
          { letter: 'L', text: 'Liskov Substitution: Subtypes are substitutable' },
          { letter: 'I', text: 'Interface Segregation: Many specific interfaces' },
          { letter: 'D', text: 'Dependency Inversion: Depend on abstractions' }
        ]
      },
      calisthenics: {
        title: 'Object Calisthenics',
        description: '9 rules for better OOP (Jeff Bay) + 30 extensions:',
        rules: [
          '1. One level of indentation per method',
          '2. Don\'t use the ELSE keyword',
          '3. Wrap all primitives and Strings',
          '4. First class collections',
          '5. One dot per line',
          '6. Don\'t abbreviate',
          '7. Keep all entities small',
          '8. No classes with more than two instance variables',
          '9. No getters/setters/properties'
        ]
      },
      testFirst: {
        title: 'Test-First Development',
        description: 'Tests MUST be written BEFORE implementation:',
        rules: [
          'Write the failing test first (RED)',
          'Implement minimal code to pass (GREEN)',
          'Refactor while keeping tests green (REFACTOR)',
          'Maintain ≥80% coverage as non-negotiable baseline'
        ]
      }
    },
    communities: {
      title: 'Communities and Resources',
      arc42: {
        title: 'Arc42 Community',
        links: [
          { label: 'Slack', href: 'https://arc42.org/slack' },
          { label: 'Discussions', href: 'https://github.com/arc42/arc42-template/discussions' }
        ]
      },
      ddd: {
        title: 'Domain-Driven Design',
        links: [
          { label: 'DDD Crew', href: 'https://github.com/ddd-crew' },
          { label: 'Virtual DDD', href: 'https://virtualddd.com/' }
        ]
      },
      bdd: {
        title: 'Behavior-Driven Development',
        links: [
          { label: 'Cucumber Community', href: 'https://cucumber.io/community' },
          { label: 'BDD Kickstart', href: 'https://bddkickstart.com/' }
        ]
      }
    },
    ctas: {
      why: {
        title: 'Why does this work? →',
        description: 'Understand the science: information theory, O(n²) complexity and 98.5% reduction in hallucinations'
      },
      workflow: {
        title: 'See the workflow →',
        description: 'Discover how to apply Arc42, C4, BDD and ADR in the 7-phase workflow'
      }
    }
  },
  'pt-BR': {
    metadata: {
      title: 'Fundamentos | Documentation-First Approach',
      description: 'Os pilares teóricos e metodológicos que fazem a Documentation-First Approach funcionar.',
    },
    header: {
      title: 'Fundamentos',
      subtitle: 'Os pilares teóricos e metodológicos que fazem a Documentation-First Approach funcionar'
    },
    toc: {
      title: 'On this page',
      sections: [
        { id: 'intro', label: 'Introdução' },
        { id: 'arc42', label: 'Arc42' },
        { id: 'c4', label: 'C4 Model' },
        { id: 'bdd', label: 'BDD' },
        { id: 'adr', label: 'ADR' },
        { id: 'quality', label: 'Princípios de Qualidade' },
      ]
    },
    intro: {
      subtitle: 'por que documentation-first funciona',
      text: 'A Documentation-First Approach combina quatro metodologias comprovadas em um sistema coeso que elimina ambiguidade e produz outputs determinísticos da IA.',
      formula: 'Arc42 + C4 + BDD + ADR = Especificações Determinísticas',
      formulaSub: 'que a IA pode implementar corretamente'
    },
    arc42: {
      title: 'Arc42: Architecture Documentation Framework',
      authors: 'Dr. Gernot Starke & Peter Hruschka • ~2005 • Milhares de projetos no mundo todo',
      links: {
        official: 'Website oficial',
        docs: 'Documentação',
        template: 'Template GitHub'
      },
      chaptersTitle: 'Os 12 Capítulos',
      chaptersTable: {
        headers: ['#', 'Capítulo', 'Propósito'],
        rows: [
          { num: '1', name: 'Introduction & Goals', purpose: 'Visão, stakeholders, objetivos' },
          { num: '2', name: 'Constraints', purpose: 'Limites técnicos, org, legais' },
          { num: '3', name: 'Context & Scope', purpose: 'Fronteiras do sistema' },
          { num: '4', name: 'Solution Strategy', purpose: 'Visão geral das decisões chave' },
          { num: '5', name: 'Building Block View', purpose: 'Estrutura estática (C2, C3)' },
          { num: '6', name: 'Runtime View', purpose: 'Comportamento dinâmico (scenarios)' },
          { num: '7', name: 'Deployment View', purpose: 'Mapeamento de infraestrutura' },
          { num: '8', name: 'Crosscutting Concepts', purpose: 'Patterns, modelo de domínio' },
          { num: '9', name: 'Decisions (ADRs)', purpose: 'Decisões de arquitetura' },
          { num: '10', name: 'Quality Requirements', purpose: 'NFRs, cenários de qualidade' },
          { num: '11', name: 'Risks & Tech Debt', purpose: 'Problemas conhecidos, mitigações' },
          { num: '12', name: 'Glossary', purpose: 'Linguagem ubíqua' }
        ]
      },
      adaptiveTitle: 'Uso Adaptativo por Complexidade',
      adaptiveSeeDetails: 'ver detalhes →',
      adaptiveLevels: [
        { badge: 'LOW', description: 'Apenas capítulos 6, 10' },
        { badge: 'MEDIUM', description: 'Capítulos 3, 5, 6, 8, 9, 10' },
        { badge: 'HIGH', description: 'Todos os 12 capítulos' }
      ]
    },
    c4: {
      title: 'C4 Model: Visual Architecture Language',
      authors: 'Simon Brown • ~2012 • Context, Containers, Components, Code',
      links: {
        official: 'Website oficial',
        structurizr: 'Structurizr',
        examples: 'Exemplos'
      },
      levels: [
        {
          icon: 'Globe',
          title: 'C1: Context',
          description: 'Mostra o sistema em seu ambiente. O próprio sistema (centro), usuários/atores (pessoas e sistemas externos), e relacionamentos entre eles.'
        },
        {
          icon: 'Box',
          title: 'C2: Container',
          description: 'Mostra os principais blocos de construção técnicos: aplicações web, APIs, bancos de dados, filas de mensagens. Como se comunicam (protocolos, portas) e escolhas tecnológicas.'
        },
        {
          icon: 'Grid3x3',
          title: 'C3: Component',
          description: 'Mostra a estrutura interna de um container: componentes (módulos, classes, interfaces), responsabilidades de cada componente e dependências.'
        },
        {
          icon: 'Code2',
          title: 'C4: Code',
          description: 'Mostra a estrutura do código (raramente usado). Geralmente melhor visualizado via IDE ou o próprio código.'
        }
      ]
    },
    bdd: {
      title: 'BDD: Behavior-Driven Development',
      authors: 'Dan North • ~2006 • Especificações executáveis em linguagem natural',
      links: {
        original: 'Artigo original',
        cucumber: 'Cucumber Docs',
        gherkin: 'Gherkin Syntax'
      },
      syntaxTitle: 'A Sintaxe Gherkin',
      syntaxExample: `Feature: User Login

  Scenario: Successful login with valid credentials
    GIVEN a registered user with email "user@email.com"
      AND password "securepass123"
    WHEN the user submits the login form
    THEN the user should be redirected to the dashboard
      AND a session cookie should be created
      AND the login timestamp should be recorded`,
      keywordsTable: {
        headers: ['Palavra-chave', 'Propósito'],
        rows: [
          { keyword: 'Feature', purpose: 'Grupo de scenarios relacionados' },
          { keyword: 'Scenario', purpose: 'Comportamento específico a testar' },
          { keyword: 'GIVEN', purpose: 'Contexto/estado inicial' },
          { keyword: 'WHEN', purpose: 'Ação/evento que dispara o comportamento' },
          { keyword: 'THEN', purpose: 'Resultado esperado/asserção' },
          { keyword: 'AND', purpose: 'Contexto/ação/resultado adicional' }
        ]
      },
      whyTitle: 'Por que BDD?',
      whyPoints: [
        'Entendimento compartilhado entre times de negócio e técnicos',
        'Documentação viva que permanece sincronizada com o código',
        'Especificações executáveis que validam comportamento',
        'Critérios de aceitação claros para cada feature'
      ],
      workflowTitle: 'Exemplo de Workflow',
      workflowSteps: [
        'Descobrir: Colaborar com stakeholders para entender a feature',
        'Formular: Escrever scenarios em Gherkin (GIVEN-WHEN-THEN)',
        'Automatizar: Implementar step definitions que executam scenarios',
        'Validar: Executar scenarios como testes automatizados',
        'Refinar: Atualizar scenarios conforme requisitos evoluem'
      ]
    },
    adr: {
      title: 'ADR: Architecture Decision Records',
      authors: 'Michael Nygard • 2011 • formato MADR (Markdown ADR)',
      links: {
        original: 'Post original',
        github: 'ADR GitHub',
        templates: 'Templates'
      },
      structureTitle: 'Estrutura ADR',
      structureExample: `# ADR-001: Use PostgreSQL for Primary Database

## Status: Accepted

## Context
We need a relational database for our e-commerce platform.
Requirements: ACID, JSON support, scale to 100k users.

## Decision
We will use PostgreSQL 15+ as our primary database.

## Consequences

Positive:
• Strong ACID guarantees
• Excellent JSON support (JSONB)
• Mature ecosystem

Negative:
• Horizontal scaling requires sharding
• Higher operational complexity than managed services

## Alternatives Considered
• MongoDB: Rejected (prefer strong schema)
• MySQL: Rejected (PostgreSQL has better JSON support)`,
      lifecycleTitle: 'Ciclo de Vida do Status',
      lifecycle: 'Proposed → Accepted → Deprecated → Superseded',
      whenTitle: 'Quando Escrever um ADR',
      whenPoints: [
        'Escolher entre patterns arquiteturais ou frameworks',
        'Selecionar bancos de dados, filas de mensagens ou infraestrutura core',
        'Decidir sobre design de API (REST vs GraphQL vs gRPC)',
        'Estabelecer organização de código ou estrutura de módulos',
        'Tomar decisões difíceis de reverter posteriormente',
        'Rejeitar opções populares (documentar o porquê)'
      ]
    },
    quality: {
      title: 'Princípios de Qualidade',
      ddd: {
        title: 'DDD Tactical Co-Located',
        structure: `src/[bounded-context]/[container]/[component]/
  ├── index.ts                 # Aggregate Root (ponto de entrada)
  ├── criar-[entity].ts        # Factory (construção)
  ├── persistir-[entity].ts    # Repository (persistência)
  ├── [action]-[entity].ts     # Use case (ações de negócio)
  ├── [ValueObject].ts         # Value Object (conceito de domínio)
  ├── [Entity].ts              # Entity (entidade interna)
  ├── [Event].ts               # Domain Event (evento de negócio)
  ├── [Policy].ts              # Policy/Specification (regra de negócio)
  ├── [BusinessRule].ts        # Business Rule (política de domínio)
  ├── adapters.ts              # Infrastructure adapters
  └── [component].spec.ts      # Tests (cobertura ≥80%)`,
        whyTitle: 'Por que esta organização é melhor para IA?',
        whyPoints: [
          { title: 'Ponto único de atuação:', text: 'Quando o modelo precisa fazer uma release/mudança, ele tem apenas um único bloco de código para atuar' },
          { title: 'Contexto focado:', text: 'Todo o escopo da feature está delimitado em um único diretório' },
          { title: 'Menos dispersão:', text: 'Evita fragmentação de contexto entre camadas técnicas (services/, repositories/, controllers/)' }
        ],
        comparisonTitle: 'Comparação:',
        comparisonBad: 'Camadas técnicas (services/, repositories/, controllers/):',
        comparisonBadNote: '→ IA precisa navegar 3-5 diretórios para entender uma feature',
        comparisonGood: 'DDD Co-Located (src/vendas/pedidos/pedido/):',
        comparisonGoodNote: '→ IA tem tudo relacionado à feature em um único lugar',
        principles: 'Screaming Architecture • Co-Located • Semantic Names • Flat Structure'
      },
      solid: {
        title: 'SOLID Principles',
        principles: [
          { letter: 'S', text: 'Single Responsibility: Uma razão para mudar' },
          { letter: 'O', text: 'Open/Closed: Aberto para extensão, fechado para modificação' },
          { letter: 'L', text: 'Liskov Substitution: Subtipos são substituíveis' },
          { letter: 'I', text: 'Interface Segregation: Muitas interfaces específicas' },
          { letter: 'D', text: 'Dependency Inversion: Dependa de abstrações' }
        ]
      },
      calisthenics: {
        title: 'Object Calisthenics',
        description: '9 regras para melhor OOP (Jeff Bay) + 30 extensões:',
        rules: [
          '1. Um nível de indentação por método',
          '2. Não use a palavra-chave ELSE',
          '3. Encapsule todos os primitivos e Strings',
          '4. Coleções como primeira classe',
          '5. Um ponto por linha',
          '6. Não abrevie',
          '7. Mantenha todas as entidades pequenas',
          '8. Sem classes com mais de duas variáveis de instância',
          '9. Sem getters/setters/properties'
        ]
      },
      testFirst: {
        title: 'Test-First Development',
        description: 'Testes DEVEM ser escritos ANTES da implementação:',
        rules: [
          'Escreva primeiro o teste que falha (RED)',
          'Implemente código mínimo para passar (GREEN)',
          'Refatore mantendo os testes verdes (REFACTOR)',
          'Mantenha ≥80% de cobertura como baseline inegociável'
        ]
      }
    },
    communities: {
      title: 'Comunidades e Recursos',
      arc42: {
        title: 'Arc42 Community',
        links: [
          { label: 'Slack', href: 'https://arc42.org/slack' },
          { label: 'Discussions', href: 'https://github.com/arc42/arc42-template/discussions' }
        ]
      },
      ddd: {
        title: 'Domain-Driven Design',
        links: [
          { label: 'DDD Crew', href: 'https://github.com/ddd-crew' },
          { label: 'Virtual DDD', href: 'https://virtualddd.com/' }
        ]
      },
      bdd: {
        title: 'Behavior-Driven Development',
        links: [
          { label: 'Cucumber Community', href: 'https://cucumber.io/community' },
          { label: 'BDD Kickstart', href: 'https://bddkickstart.com/' }
        ]
      }
    },
    ctas: {
      why: {
        title: 'Por que isso funciona? →',
        description: 'Entenda a ciência por trás: teoria da informação, complexidade O(n²) e redução de 98.5% em alucinações'
      },
      workflow: {
        title: 'Ver o workflow →',
        description: 'Descubra como aplicar Arc42, C4, BDD e ADR no workflow de 7 fases'
      }
    }
  },
  'es': {
    metadata: {
      title: 'Fundamentos | Documentation-First Approach',
      description: 'Los pilares teóricos y metodológicos que hacen funcionar Documentation-First Approach.',
    },
    header: {
      title: 'Fundamentos',
      subtitle: 'Los pilares teóricos y metodológicos que hacen funcionar Documentation-First Approach'
    },
    toc: {
      title: 'En esta página',
      sections: [
        { id: 'intro', label: 'Introducción' },
        { id: 'arc42', label: 'Arc42' },
        { id: 'c4', label: 'C4 Model' },
        { id: 'bdd', label: 'BDD' },
        { id: 'adr', label: 'ADR' },
        { id: 'quality', label: 'Principios de Calidad' },
      ]
    },
    intro: {
      subtitle: 'por qué documentation-first funciona',
      text: 'Documentation-First Approach combina cuatro metodologías probadas en un sistema cohesivo que elimina la ambigüedad y produce outputs determinísticos de la IA.',
      formula: 'Arc42 + C4 + BDD + ADR = Especificaciones Determinísticas',
      formulaSub: 'que la IA puede implementar correctamente'
    },
    arc42: {
      title: 'Arc42: Architecture Documentation Framework',
      authors: 'Dr. Gernot Starke & Peter Hruschka • ~2005 • Miles de proyectos en todo el mundo',
      links: {
        official: 'Sitio web oficial',
        docs: 'Documentación',
        template: 'Template GitHub'
      },
      chaptersTitle: 'Los 12 Capítulos',
      chaptersTable: {
        headers: ['#', 'Capítulo', 'Propósito'],
        rows: [
          { num: '1', name: 'Introduction & Goals', purpose: 'Visión, stakeholders, objetivos' },
          { num: '2', name: 'Constraints', purpose: 'Límites técnicos, org, legales' },
          { num: '3', name: 'Context & Scope', purpose: 'Fronteras del sistema' },
          { num: '4', name: 'Solution Strategy', purpose: 'Visión general de decisiones clave' },
          { num: '5', name: 'Building Block View', purpose: 'Estructura estática (C2, C3)' },
          { num: '6', name: 'Runtime View', purpose: 'Comportamiento dinámico (escenarios)' },
          { num: '7', name: 'Deployment View', purpose: 'Mapeo de infraestructura' },
          { num: '8', name: 'Crosscutting Concepts', purpose: 'Patrones, modelo de dominio' },
          { num: '9', name: 'Decisions (ADRs)', purpose: 'Decisiones de arquitectura' },
          { num: '10', name: 'Quality Requirements', purpose: 'NFRs, escenarios de calidad' },
          { num: '11', name: 'Risks & Tech Debt', purpose: 'Problemas conocidos, mitigaciones' },
          { num: '12', name: 'Glossary', purpose: 'Lenguaje ubicuo' }
        ]
      },
      adaptiveTitle: 'Uso Adaptativo por Complejidad',
      adaptiveSeeDetails: 'ver detalles →',
      adaptiveLevels: [
        { badge: 'LOW', description: 'Solo capítulos 6, 10' },
        { badge: 'MEDIUM', description: 'Capítulos 3, 5, 6, 8, 9, 10' },
        { badge: 'HIGH', description: 'Todos los 12 capítulos' }
      ]
    },
    c4: {
      title: 'C4 Model: Visual Architecture Language',
      authors: 'Simon Brown • ~2012 • Context, Containers, Components, Code',
      links: {
        official: 'Sitio web oficial',
        structurizr: 'Structurizr',
        examples: 'Ejemplos'
      },
      levels: [
        {
          icon: 'Globe',
          title: 'C1: Context',
          description: 'Muestra el sistema en su entorno. El sistema en sí (centro), usuarios/actores (personas y sistemas externos), y relaciones entre ellos.'
        },
        {
          icon: 'Box',
          title: 'C2: Container',
          description: 'Muestra los principales bloques de construcción técnicos: aplicaciones web, APIs, bases de datos, colas de mensajes. Cómo se comunican (protocolos, puertos) y elecciones tecnológicas.'
        },
        {
          icon: 'Grid3x3',
          title: 'C3: Component',
          description: 'Muestra la estructura interna de un contenedor: componentes (módulos, clases, interfaces), responsabilidades de cada componente y dependencias.'
        },
        {
          icon: 'Code2',
          title: 'C4: Code',
          description: 'Muestra la estructura del código (raramente usado). Generalmente mejor visualizado mediante IDE o el código mismo.'
        }
      ]
    },
    bdd: {
      title: 'BDD: Behavior-Driven Development',
      authors: 'Dan North • ~2006 • Especificaciones ejecutables en lenguaje natural',
      links: {
        original: 'Artículo original',
        cucumber: 'Cucumber Docs',
        gherkin: 'Gherkin Syntax'
      },
      syntaxTitle: 'La Sintaxis Gherkin',
      syntaxExample: `Feature: User Login

  Scenario: Successful login with valid credentials
    GIVEN a registered user with email "user@email.com"
      AND password "securepass123"
    WHEN the user submits the login form
    THEN the user should be redirected to the dashboard
      AND a session cookie should be created
      AND the login timestamp should be recorded`,
      keywordsTable: {
        headers: ['Palabra clave', 'Propósito'],
        rows: [
          { keyword: 'Feature', purpose: 'Grupo de escenarios relacionados' },
          { keyword: 'Scenario', purpose: 'Comportamiento específico a probar' },
          { keyword: 'GIVEN', purpose: 'Contexto/estado inicial' },
          { keyword: 'WHEN', purpose: 'Acción/evento que dispara el comportamiento' },
          { keyword: 'THEN', purpose: 'Resultado esperado/aserción' },
          { keyword: 'AND', purpose: 'Contexto/acción/resultado adicional' }
        ]
      },
      whyTitle: '¿Por qué BDD?',
      whyPoints: [
        'Entendimiento compartido entre equipos de negocio y técnicos',
        'Documentación viva que permanece sincronizada con el código',
        'Especificaciones ejecutables que validan comportamiento',
        'Criterios de aceptación claros para cada feature'
      ],
      workflowTitle: 'Ejemplo de Workflow',
      workflowSteps: [
        'Descubrir: Colaborar con stakeholders para entender la feature',
        'Formular: Escribir escenarios en Gherkin (GIVEN-WHEN-THEN)',
        'Automatizar: Implementar step definitions que ejecutan escenarios',
        'Validar: Ejecutar escenarios como tests automatizados',
        'Refinar: Actualizar escenarios conforme requisitos evolucionan'
      ]
    },
    adr: {
      title: 'ADR: Architecture Decision Records',
      authors: 'Michael Nygard • 2011 • formato MADR (Markdown ADR)',
      links: {
        original: 'Post original',
        github: 'ADR GitHub',
        templates: 'Templates'
      },
      structureTitle: 'Estructura ADR',
      structureExample: `# ADR-001: Use PostgreSQL for Primary Database

## Status: Accepted

## Context
We need a relational database for our e-commerce platform.
Requirements: ACID, JSON support, scale to 100k users.

## Decision
We will use PostgreSQL 15+ as our primary database.

## Consequences

Positive:
• Strong ACID guarantees
• Excellent JSON support (JSONB)
• Mature ecosystem

Negative:
• Horizontal scaling requires sharding
• Higher operational complexity than managed services

## Alternatives Considered
• MongoDB: Rejected (prefer strong schema)
• MySQL: Rejected (PostgreSQL has better JSON support)`,
      lifecycleTitle: 'Ciclo de Vida del Estado',
      lifecycle: 'Proposed → Accepted → Deprecated → Superseded',
      whenTitle: 'Cuándo Escribir un ADR',
      whenPoints: [
        'Elegir entre patrones arquitecturales o frameworks',
        'Seleccionar bases de datos, colas de mensajes o infraestructura core',
        'Decidir sobre diseño de API (REST vs GraphQL vs gRPC)',
        'Establecer organización de código o estructura de módulos',
        'Tomar decisiones difíciles de revertir posteriormente',
        'Rechazar opciones populares (documentar el porqué)'
      ]
    },
    quality: {
      title: 'Principios de Calidad',
      ddd: {
        title: 'DDD Tactical Co-Located',
        structure: `src/[bounded-context]/[container]/[component]/
  ├── index.ts                 # Aggregate Root (punto de entrada)
  ├── criar-[entity].ts        # Factory (construcción)
  ├── persistir-[entity].ts    # Repository (persistencia)
  ├── [action]-[entity].ts     # Use case (acciones de negocio)
  ├── [ValueObject].ts         # Value Object (concepto de dominio)
  ├── [Entity].ts              # Entity (entidad interna)
  ├── [Event].ts               # Domain Event (evento de negocio)
  ├── [Policy].ts              # Policy/Specification (regla de negocio)
  ├── [BusinessRule].ts        # Business Rule (política de dominio)
  ├── adapters.ts              # Infrastructure adapters
  └── [component].spec.ts      # Tests (cobertura ≥80%)`,
        whyTitle: '¿Por qué esta organización es mejor para la IA?',
        whyPoints: [
          { title: 'Punto único de actuación:', text: 'Cuando el modelo necesita hacer un release/cambio, tiene solo un único bloque de código para actuar' },
          { title: 'Contexto enfocado:', text: 'Todo el alcance de la feature está delimitado en un único directorio' },
          { title: 'Menos dispersión:', text: 'Evita fragmentación de contexto entre capas técnicas (services/, repositories/, controllers/)' }
        ],
        comparisonTitle: 'Comparación:',
        comparisonBad: 'Capas técnicas (services/, repositories/, controllers/):',
        comparisonBadNote: '→ IA necesita navegar 3-5 directorios para entender una feature',
        comparisonGood: 'DDD Co-Located (src/ventas/pedidos/pedido/):',
        comparisonGoodNote: '→ IA tiene todo relacionado con la feature en un único lugar',
        principles: 'Screaming Architecture • Co-Located • Semantic Names • Flat Structure'
      },
      solid: {
        title: 'SOLID Principles',
        principles: [
          { letter: 'S', text: 'Single Responsibility: Una razón para cambiar' },
          { letter: 'O', text: 'Open/Closed: Abierto para extensión, cerrado para modificación' },
          { letter: 'L', text: 'Liskov Substitution: Los subtipos son sustituibles' },
          { letter: 'I', text: 'Interface Segregation: Muchas interfaces específicas' },
          { letter: 'D', text: 'Dependency Inversion: Depende de abstracciones' }
        ]
      },
      calisthenics: {
        title: 'Object Calisthenics',
        description: '9 reglas para mejor OOP (Jeff Bay) + 30 extensiones:',
        rules: [
          '1. Un nivel de indentación por método',
          '2. No use la palabra clave ELSE',
          '3. Encapsule todos los primitivos y Strings',
          '4. Colecciones como primera clase',
          '5. Un punto por línea',
          '6. No abrevie',
          '7. Mantenga todas las entidades pequeñas',
          '8. Sin clases con más de dos variables de instancia',
          '9. Sin getters/setters/properties'
        ]
      },
      testFirst: {
        title: 'Test-First Development',
        description: 'Los tests DEBEN ser escritos ANTES de la implementación:',
        rules: [
          'Escriba primero el test que falla (RED)',
          'Implemente código mínimo para pasar (GREEN)',
          'Refactorice manteniendo los tests verdes (REFACTOR)',
          'Mantenga ≥80% de cobertura como baseline no negociable'
        ]
      }
    },
    communities: {
      title: 'Comunidades y Recursos',
      arc42: {
        title: 'Arc42 Community',
        links: [
          { label: 'Slack', href: 'https://arc42.org/slack' },
          { label: 'Discussions', href: 'https://github.com/arc42/arc42-template/discussions' }
        ]
      },
      ddd: {
        title: 'Domain-Driven Design',
        links: [
          { label: 'DDD Crew', href: 'https://github.com/ddd-crew' },
          { label: 'Virtual DDD', href: 'https://virtualddd.com/' }
        ]
      },
      bdd: {
        title: 'Behavior-Driven Development',
        links: [
          { label: 'Cucumber Community', href: 'https://cucumber.io/community' },
          { label: 'BDD Kickstart', href: 'https://bddkickstart.com/' }
        ]
      }
    },
    ctas: {
      why: {
        title: '¿Por qué funciona esto? →',
        description: 'Entiende la ciencia: teoría de la información, complejidad O(n²) y reducción del 98.5% en alucinaciones'
      },
      workflow: {
        title: 'Ver el workflow →',
        description: 'Descubre cómo aplicar Arc42, C4, BDD y ADR en el workflow de 7 fases'
      }
    }
  }
};

export default function FoundationsPage() {
  const locale = useLocale() as 'en' | 'pt-BR' | 'es';
  const t = content[locale];
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'arc42', 'c4', 'bdd', 'adr', 'quality'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />;
      case 'Box': return <Box className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />;
      case 'Grid3x3': return <Grid3x3 className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />;
      case 'Code2': return <Code2 className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-black py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-12">
            {/* Main content */}
            <div className="flex-1 max-w-4xl">
          {/* Header */}
          <div className="mb-32">
            <h1 className="text-4xl md:text-5xl font-mono font-normal text-white mb-6">
              {t.header.title}
            </h1>
            <p className="text-base font-mono text-neutral-500 leading-relaxed">
              {t.header.subtitle}
            </p>
          </div>

          {/* Introduction */}
          <div id="intro" className="mb-32">
            <h2 className="text-sm font-mono text-neutral-600 mb-6">
              {t.intro.subtitle}
            </h2>
            <p className="text-lg font-mono text-neutral-400 leading-relaxed mb-8">
              {t.intro.text}
            </p>
            <div className="border border-white p-6">
              <p className="text-sm font-mono text-neutral-400">
                <span className="text-white">{t.intro.formula}</span>
                <br />
                {t.intro.formulaSub}
              </p>
            </div>
          </div>

          {/* Arc42 Framework */}
          <div id="arc42" className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.arc42.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.arc42.authors}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://arc42.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t.arc42.links.official}
              </a>
              <a
                href="https://docs.arc42.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5" />
                {t.arc42.links.docs}
              </a>
              <a
                href="https://github.com/arc42/arc42-template"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                {t.arc42.links.template}
              </a>
            </div>

            <div className="mb-12">
              <h3 className="text-base font-mono text-white mb-6">
                {t.arc42.chaptersTitle}
              </h3>
              <div className="border border-neutral-800">
                <table className="w-full text-sm font-mono">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      {t.arc42.chaptersTable.headers.map((header, index) => (
                        <th key={index} className="text-left p-3 text-neutral-600 font-normal">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.arc42.chaptersTable.rows.map((row, index) => (
                      <tr key={index} className={index < t.arc42.chaptersTable.rows.length - 1 ? 'border-b border-neutral-800' : ''}>
                        <td className="p-3 text-neutral-500">{row.num}</td>
                        <td className="p-3 text-white">{row.name}</td>
                        <td className="p-3 text-neutral-500">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Link
              href="/method#complexity"
              className="block border border-neutral-800 p-6 hover:border-neutral-600 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-mono text-white">
                  {t.arc42.adaptiveTitle}
                </h4>
                <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                  {t.arc42.adaptiveSeeDetails}
                </span>
              </div>
              <div className="space-y-3 text-sm font-mono">
                {t.arc42.adaptiveLevels.map((level, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`px-2 py-0.5 ${
                      level.badge === 'LOW' ? 'bg-green-900/30 border border-green-800/50' :
                      level.badge === 'MEDIUM' ? 'bg-yellow-900/30 border border-yellow-800/50' :
                      'bg-red-900/30 border border-red-800/50'
                    }`}>
                      <span className={`text-xs font-mono ${
                        level.badge === 'LOW' ? 'text-green-500' :
                        level.badge === 'MEDIUM' ? 'text-yellow-500' :
                        'text-red-500'
                      }`}>{level.badge}</span>
                    </div>
                    <span className="text-neutral-400">{level.description}</span>
                  </div>
                ))}
              </div>
            </Link>
          </div>

          {/* C4 Model */}
          <div id="c4" className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.c4.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.c4.authors}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://c4model.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t.c4.links.official}
              </a>
              <a
                href="https://structurizr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <Box className="h-3.5 w-3.5" />
                {t.c4.links.structurizr}
              </a>
              <a
                href="https://github.com/structurizr/examples"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                {t.c4.links.examples}
              </a>
            </div>

            <div className="space-y-8">
              {t.c4.levels.map((level, index) => (
                <div key={index} className="border-l-2 border-neutral-800 pl-6">
                  <div className="flex items-start gap-4">
                    {getIcon(level.icon)}
                    <div>
                      <h3 className="text-base font-mono text-white mb-2">
                        {level.title}
                      </h3>
                      <p className="text-sm font-mono text-neutral-500 leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BDD */}
          <div id="bdd" className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.bdd.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.bdd.authors}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://dannorth.net/introducing-bdd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <FileText className="h-3.5 w-3.5" />
                {t.bdd.links.original}
              </a>
              <a
                href="https://cucumber.io/docs/bdd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5" />
                {t.bdd.links.cucumber}
              </a>
              <a
                href="https://cucumber.io/docs/gherkin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <Code2 className="h-3.5 w-3.5" />
                {t.bdd.links.gherkin}
              </a>
            </div>

            <div className="mb-8">
              <h3 className="text-base font-mono text-white mb-4">
                {t.bdd.syntaxTitle}
              </h3>
              <div className="border border-neutral-800 bg-black p-6">
                <pre className="text-sm font-mono text-neutral-400">
                  <code>{t.bdd.syntaxExample}</code>
                </pre>
              </div>
            </div>

            <div className="border border-neutral-800 mb-12">
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr className="border-b border-neutral-800">
                    {t.bdd.keywordsTable.headers.map((header, index) => (
                      <th key={index} className="text-left p-3 text-neutral-600 font-normal">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.bdd.keywordsTable.rows.map((row, index) => (
                    <tr key={index} className={index < t.bdd.keywordsTable.rows.length - 1 ? 'border-b border-neutral-800' : ''}>
                      <td className="p-3 text-white">{row.keyword}</td>
                      <td className="p-3 text-neutral-500">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-8">
              <h3 className="text-base font-mono text-white mb-4">
                {t.bdd.whyTitle}
              </h3>
              <div className="space-y-3 text-sm font-mono">
                {t.bdd.whyPoints.map((point, index) => (
                  <p key={index} className="text-neutral-500">
                    <span className="text-white">✓</span> {point}
                  </p>
                ))}
              </div>
            </div>

            <div className="border border-neutral-800 p-6">
              <h4 className="text-sm font-mono text-white mb-4">
                {t.bdd.workflowTitle}
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm font-mono text-neutral-500">
                {t.bdd.workflowSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* ADR */}
          <div id="adr" className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.adr.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.adr.authors}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <FileText className="h-3.5 w-3.5" />
                {t.adr.links.original}
              </a>
              <a
                href="https://adr.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                {t.adr.links.github}
              </a>
              <a
                href="https://github.com/joelparkerhenderson/architecture-decision-record"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5" />
                {t.adr.links.templates}
              </a>
            </div>

            <div className="mb-8">
              <h3 className="text-base font-mono text-white mb-4">
                {t.adr.structureTitle}
              </h3>
              <div className="border border-neutral-800 bg-black p-6">
                <pre className="text-sm font-mono text-neutral-400 leading-relaxed">
                  <code>{t.adr.structureExample}</code>
                </pre>
              </div>
            </div>

            <div className="border border-neutral-800 p-6 mb-8">
              <h4 className="text-sm font-mono text-white mb-4">
                {t.adr.lifecycleTitle}
              </h4>
              <p className="text-sm font-mono text-neutral-500">
                {t.adr.lifecycle}
              </p>
            </div>

            <div className="border border-neutral-800 p-6">
              <h4 className="text-sm font-mono text-white mb-4">
                {t.adr.whenTitle}
              </h4>
              <div className="space-y-2 text-sm font-mono text-neutral-500">
                {t.adr.whenPoints.map((point, index) => (
                  <p key={index}>• {point}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Quality Principles */}
          <div id="quality" className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              {t.quality.title}
            </h2>

            <div className="space-y-12">
              {/* DDD */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-lg font-mono text-white mb-4">
                  {t.quality.ddd.title}
                </h3>
                <div className="border border-neutral-800 bg-black p-6 mb-4">
                  <pre className="text-sm font-mono text-neutral-500">
                    <code>{t.quality.ddd.structure}</code>
                  </pre>
                </div>
                <div className="space-y-4 text-sm font-mono text-neutral-500 mb-4">
                  <p className="text-white">
                    {t.quality.ddd.whyTitle}
                  </p>
                  <div className="border-l-2 border-neutral-700 pl-4 space-y-2">
                    {t.quality.ddd.whyPoints.map((point, index) => (
                      <p key={index}>
                        <span className="text-white">{point.title}</span> {point.text}
                      </p>
                    ))}
                  </div>
                  <div className="border border-neutral-700 bg-black p-4">
                    <p className="text-neutral-600 mb-2">{t.quality.ddd.comparisonTitle}</p>
                    <p className="mb-2">❌ {t.quality.ddd.comparisonBad}</p>
                    <p className="text-neutral-600 mb-3">{t.quality.ddd.comparisonBadNote}</p>
                    <p className="mb-2">✅ {t.quality.ddd.comparisonGood}</p>
                    <p className="text-neutral-600">{t.quality.ddd.comparisonGoodNote}</p>
                  </div>
                </div>
                <p className="text-sm font-mono text-neutral-500">
                  {t.quality.ddd.principles}
                </p>
              </div>

              {/* SOLID */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-lg font-mono text-white mb-4">
                  {t.quality.solid.title}
                </h3>
                <div className="space-y-2 text-sm font-mono">
                  {t.quality.solid.principles.map((principle, index) => (
                    <p key={index}>
                      <span className="text-white">{principle.letter}</span>{' '}
                      <span className="text-neutral-500">{principle.text}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Object Calisthenics */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-lg font-mono text-white mb-4">
                  {t.quality.calisthenics.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500 mb-4">
                  {t.quality.calisthenics.description}
                </p>
                <div className="space-y-2 text-sm font-mono text-neutral-500">
                  {t.quality.calisthenics.rules.map((rule, index) => (
                    <p key={index}>{rule}</p>
                  ))}
                </div>
              </div>

              {/* Test-First Development */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-lg font-mono text-white mb-4">
                  {t.quality.testFirst.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500 mb-4">
                  {t.quality.testFirst.description}
                </p>
                <div className="space-y-2 text-sm font-mono text-neutral-500">
                  {t.quality.testFirst.rules.map((rule, index) => (
                    <p key={index}>• {rule}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Communities and Resources */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              {t.communities.title}
            </h2>

            <div className="space-y-12">
              {/* Arc42 Community */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-lg font-mono text-white mb-4">
                  {t.communities.arc42.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t.communities.arc42.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
                    >
                      {link.label === 'Slack' ? <MessageSquare className="h-3.5 w-3.5" /> : <Github className="h-3.5 w-3.5" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* DDD Community */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-lg font-mono text-white mb-4">
                  {t.communities.ddd.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t.communities.ddd.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
                    >
                      {link.label.includes('Crew') ? <Github className="h-3.5 w-3.5" /> : <Users className="h-3.5 w-3.5" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* BDD Community */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-lg font-mono text-white mb-4">
                  {t.communities.bdd.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t.communities.bdd.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
                    >
                      {link.label.includes('Cucumber') ? <Users className="h-3.5 w-3.5" /> : <BookOpen className="h-3.5 w-3.5" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-32">
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/why"
                className="block border border-neutral-800 p-6 hover:border-white transition-colors group"
              >
                <h3 className="text-base font-mono text-white mb-2 group-hover:text-white">
                  {t.ctas.why.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500">
                  {t.ctas.why.description}
                </p>
              </Link>

              <Link
                href="/method"
                className="block border border-neutral-800 p-6 hover:border-white transition-colors group"
              >
                <h3 className="text-base font-mono text-white mb-2 group-hover:text-white">
                  {t.ctas.workflow.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500">
                  {t.ctas.workflow.description}
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Sticky TOC Sidebar - Desktop only */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="border border-neutral-800 p-6 bg-black">
              <h3 className="text-sm font-mono text-neutral-600 mb-6 uppercase tracking-wider">
                {t.toc.title}
              </h3>
              <nav className="space-y-3">
                {t.toc.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-sm font-mono transition-colors cursor-pointer ${
                      activeSection === section.id
                        ? 'text-white border-l-2 border-white pl-3 -ml-3'
                        : 'text-neutral-500 hover:text-neutral-300 pl-3'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
