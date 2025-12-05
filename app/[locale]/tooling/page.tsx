'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLocale } from 'next-intl';

const content = {
  'en': {
    metadata: {
      title: 'Tooling | Documentation-First Approach',
      description: '15 slash commands, 9 specialized agents, template library and quality rules.',
    },
    header: {
      title: 'Tooling',
      subtitle: '15 slash commands, 9 specialized agents, template library and quality rules'
    },
    commands: {
      title: '15 slash commands',
      subtitle: 'quick and focused commands for documentation and development tasks - click to see examples',
      exampleLabel: 'Usage example:',
      list: [
        {
          name: '/vision',
          description: 'Define project vision, goals and stakeholders',
          example: `You: /vision Create a task management platform with real-time
     collaboration, user authentication, and team workspaces

Claude: [Analyzing requirement]
        Creating vision document...
        → specs/01_introduction/001_introduction-and-goals.md
        ✅ Vision defined with 3 stakeholders, 5 goals`
        },
        {
          name: '/stack',
          description: 'Define tech stack, constraints and create ADR-001',
          example: `You: /stack Node.js 20+, PostgreSQL 15, Redis 7, TypeScript 5

Claude: [Analyzing tech stack]
        Creating constraint documentation...
        → specs/02_constraints/002_constraints.md
        Creating ADR-001 (tech stack decision)...
        → specs/09_decisions/adrs/ADR-001_tech-stack.md
        ✅ Stack documented with justifications`
        },
        {
          name: '/actor',
          description: 'Document actors and external systems',
          example: `You: /actor Admin user - manages teams, permissions, billing

Claude: [Creating actor documentation]
        → specs/03_context/actors/ACT-001_admin-user.md
        ✅ Actor documented with 3 responsibilities`
        },
        {
          name: '/container',
          description: 'Document high-level building blocks (services)',
          example: `You: /container API Gateway - Node.js 20, handles auth, routing

Claude: [Creating container documentation]
        → specs/05_building-blocks/containers/CNT-001_api-gateway.md
        ✅ Container documented with C2 diagram`
        },
        {
          name: '/component',
          description: 'Document code modules and their responsibilities',
          example: `You: /component Authentication module - JWT + refresh tokens

Claude: [Creating component documentation]
        → specs/05_building-blocks/components/CMP-001_authentication.md
        ✅ Component documented with C3 diagram`
        },
        {
          name: '/plan',
          description: 'Create building blocks + runtime structure',
          example: `You: /plan

Claude: [Generating architectural structure]
        Creating Chapter 5 (Building Blocks)...
        Creating Chapter 6 (Runtime View)...
        ✅ Structure ready for containers and components`
        },
        {
          name: '/feature',
          description: 'Create BDD scenarios for new features',
          example: `You: /feature User can create task with title, description, due date

Claude: [Analyzing feature]
        Complexity: MEDIUM
        Creating BDD scenario...
        → specs/06_runtime/scenarios/SCN-001_create-task.md
        ✅ Scenario created with GIVEN-WHEN-THEN`
        },
        {
          name: '/flow',
          description: 'Document journeys and runtime flows',
          example: `You: /flow User login with 2FA and session management

Claude: [Creating runtime flow]
        → specs/06_runtime/flows/FLW-001_login-2fa.md
        ✅ Flow documented with sequence diagram`
        },
        {
          name: '/rule',
          description: 'Create/update quality rules',
          example: `You: /rule Email validation must follow RFC 5322 standard

Claude: [Creating quality rule]
        → .claude/rules/040_email-validation.md
        ✅ Rule created with validation criteria`
        },
        {
          name: '/adr',
          description: 'Register architectural decisions',
          example: `You: /adr Why we chose PostgreSQL over MongoDB

Claude: [Creating ADR]
        → specs/09_decisions/adrs/ADR-002_postgresql-choice.md
        ✅ ADR created with context, decision, consequences`
        },
        {
          name: '/cross',
          description: 'Document crosscutting concepts',
          example: `You: /cross Security: OAuth2 + JWT, HTTPS only, rate limiting

Claude: [Documenting crosscutting concept]
        → specs/08_crosscutting/008_crosscutting-concepts.md
        ✅ Security section added`
        },
        {
          name: '/build',
          description: 'Define deployment and quality requirements',
          example: `You: /build Docker + K8s, 80% coverage, <200ms response time

Claude: [Creating deployment documentation]
        → specs/07_deployment/007_deployment-view.md
        → specs/10_quality/010_quality-requirements.md
        ✅ Deployment and quality documented`
        },
        {
          name: '/code',
          description: 'Implement code from specifications',
          example: `You: /code

Claude: [Reading specifications]
        Found: SCN-001_create-task.md
        Invoking orchestrator for task decomposition...
        → changes/create-task-001/tasks.md (5 tasks)
        Implementing task 1/5...
        ✅ All tasks completed, tests passing (92% coverage)`
        },
        {
          name: '/import',
          description: 'Import external documents to specs',
          example: `You: /import requirements.pdf

Claude: [Importing document]
        Extracting content from PDF...
        Analyzing structure...
        Mapping to Arc42 chapters...
        ✅ Content imported to 8 chapters`
        },
        {
          name: '/stats',
          description: 'Generate documentation health dashboard',
          example: `You: /stats

Claude: [Analyzing specs/]
        Documentation Health: 85%
        ✅ Complete: 10/12 chapters
        ⚠️  Missing: Chapter 7 (Deployment), Chapter 11 (Risks)
        📊 Dashboard: stats/health-report.md`
        }
      ]
    },
    agents: {
      title: '9 specialized agents',
      subtitle: 'autonomous agents that orchestrate the 7-phase workflow',
      phase: 'phase',
      list: [
        { name: 'Analyst', phase: '1, 3', description: 'Discovery and specification' },
        { name: 'Architect', phase: '2', description: 'Architecture design (HIGH complexity)' },
        { name: 'Orchestrator', phase: '3.5', description: 'Task decomposition (CRITICAL)' },
        { name: 'Developer', phase: '4', description: 'Code implementation' },
        { name: 'Gatekeeper', phase: '4', description: 'Quality gates validation' },
        { name: 'Reviewer', phase: '5', description: 'Code review' },
        { name: 'Tester', phase: '5', description: 'Test validation' },
        { name: 'Documenter', phase: '6', description: 'Documentation generation' },
        { name: 'Guardian', phase: '7', description: 'Pre-commit validation' }
      ]
    },
    workflow: {
      title: 'Complete 7-phase workflow',
      subtitle: 'from user request to production-ready code',
      phases: [
        {
          number: 1,
          name: 'Discovery',
          agent: 'analyst',
          description: 'Understands requirements, evaluates complexity (LOW/MEDIUM/HIGH) and creates changes/[id]/proposal.md'
        },
        {
          number: 2,
          name: 'Architecture',
          agent: 'architect',
          extra: '(HIGH complexity only)',
          description: 'Architecture design with C4 diagrams and creates changes/[id]/design.md'
        },
        {
          number: 3,
          name: 'Specification',
          agent: 'analyst',
          description: 'Writes Arc42 documentation + BDD scenarios + ADRs and creates changes/[id]/spec.md'
        },
        {
          number: 3.5,
          name: 'Task Decomposition',
          agent: 'orchestrator',
          critical: true,
          description: 'Breaks specs into atomic tasks <100 LOC to prevent hallucinations and creates changes/[id]/tasks.md'
        },
        {
          number: 4,
          name: 'Implementation',
          agent: 'developer + gatekeeper',
          description: 'Implements task by task with tests, validated by gatekeeper'
        },
        {
          number: 5,
          name: 'Review',
          agent: 'reviewer + tester',
          description: 'Code review + test validation (≥80% coverage required)'
        },
        {
          number: 6,
          name: 'Documentation',
          agent: 'documenter',
          description: 'Updates docs and README to match implementation'
        },
        {
          number: 7,
          name: 'Validation & Release',
          agent: 'guardian',
          extra: '(optional)',
          description: 'Final validation: constitution compliance, tests, linters, updated specs'
        }
      ]
    },
    decomposition: {
      title: 'Why Task Decomposition prevents AI hallucinations',
      problem: 'The problem:',
      problemText: 'Large specs cause quadratic attention degradation O(n²)',
      dataTitle: 'Experimental data (Chronicle 10):',
      solution: 'The solution:',
      solutionText: 'Orchestrator breaks specs into ~100 LOC tasks, keeping scope bounded and context focused',
      reference: 'Based on research: Liu et al. (2023) "Lost in the Middle", Vaswani et al. (2017) "Attention Is All You Need"',
      data: [
        {
          label: 'Without specification:',
          value: '60.4% hallucination rate'
        },
        {
          label: 'Complete Arc42 spec (3,570 lines):',
          value: '20.0% hallucination',
          note: '→ Large context = 625M attention operations\n→ 60% loss in middle of context ("Lost in the Middle")'
        },
        {
          label: 'Spec + Task Decomposition (450 lines/task):',
          value: '7.5% hallucination',
          note: '→ Small context = 6.25M operations per task\n→ <5% context loss'
        },
        {
          result: '✅ 88% reduction in hallucination rate'
        }
      ]
    },
    templates: {
      title: 'Templates & rules',
      library: {
        title: 'Template library',
        description: 'Ready-to-use templates in Arc42 (12 chapters), C4 diagrams, BDD scenarios, and ADRs in Markdown, JSON and Obsidian formats',
        buttons: [
          '[download arc42 templates] - coming soon',
          '[download c4 templates] - coming soon',
          '[download bdd templates] - coming soon',
          '[download adr templates] - coming soon'
        ]
      },
      rules: {
        title: '39 quality rules',
        description: 'Object Calisthenics (9 rules) + Extensions (30 rules) covering functional programming, package design and much more',
        categoriesLabel: 'Categories:',
        categories: [
          '• Object Calisthenics (001-009): Fundamental OOP principles',
          '• Functional Programming (010-019): FP patterns and immutability',
          '• Package Design (020-029): Module organization and dependencies',
          '• Testing (030-039): Quality patterns and test coverage'
        ],
        catalogButton: 'view complete rules catalog - coming soon'
      }
    },
    structure: {
      title: '.claude/ directory structure'
    },
    ctas: {
      getStarted: {
        title: 'Getting started guide →',
        description: 'Step-by-step tutorial: from installation to your first feature in 5 minutes'
      },
      why: {
        title: 'Why task decomposition? →',
        description: 'Understand the science: O(n²) complexity, "Lost in the Middle" and 88% reduction in hallucinations'
      }
    }
  },
  'pt-BR': {
    metadata: {
      title: 'Tooling | Documentation-First Approach',
      description: '15 slash commands, 9 agents especializados, biblioteca de templates e quality rules.',
    },
    header: {
      title: 'Tooling',
      subtitle: '15 slash commands, 9 agents especializados, biblioteca de templates e quality rules'
    },
    commands: {
      title: '15 slash commands',
      subtitle: 'comandos rápidos e focados para tarefas de documentação e desenvolvimento - clique para ver exemplos',
      exampleLabel: 'Exemplo de uso:',
      list: [
        {
          name: '/vision',
          description: 'Define visão, objetivos e stakeholders do projeto',
          example: `You: /vision Create a task management platform with real-time
     collaboration, user authentication, and team workspaces

Claude: [Analyzing requirement]
        Creating vision document...
        → specs/01_introduction/001_introduction-and-goals.md
        ✅ Vision defined with 3 stakeholders, 5 goals`
        },
        {
          name: '/stack',
          description: 'Define tech stack, restrições e cria ADR-001',
          example: `You: /stack Node.js 20+, PostgreSQL 15, Redis 7, TypeScript 5

Claude: [Analyzing tech stack]
        Creating constraint documentation...
        → specs/02_constraints/002_constraints.md
        Creating ADR-001 (tech stack decision)...
        → specs/09_decisions/adrs/ADR-001_tech-stack.md
        ✅ Stack documented with justifications`
        },
        {
          name: '/actor',
          description: 'Documenta atores e sistemas externos',
          example: `You: /actor Admin user - manages teams, permissions, billing

Claude: [Creating actor documentation]
        → specs/03_context/actors/ACT-001_admin-user.md
        ✅ Actor documented with 3 responsibilities`
        },
        {
          name: '/container',
          description: 'Documenta blocos de construção de alto nível (serviços)',
          example: `You: /container API Gateway - Node.js 20, handles auth, routing

Claude: [Creating container documentation]
        → specs/05_building-blocks/containers/CNT-001_api-gateway.md
        ✅ Container documented with C2 diagram`
        },
        {
          name: '/component',
          description: 'Documenta módulos de código e suas responsabilidades',
          example: `You: /component Authentication module - JWT + refresh tokens

Claude: [Creating component documentation]
        → specs/05_building-blocks/components/CMP-001_authentication.md
        ✅ Component documented with C3 diagram`
        },
        {
          name: '/plan',
          description: 'Cria building blocks + estrutura runtime',
          example: `You: /plan

Claude: [Generating architectural structure]
        Creating Chapter 5 (Building Blocks)...
        Creating Chapter 6 (Runtime View)...
        ✅ Structure ready for containers and components`
        },
        {
          name: '/feature',
          description: 'Cria scenarios BDD para novas features',
          example: `You: /feature User can create task with title, description, due date

Claude: [Analyzing feature]
        Complexity: MEDIUM
        Creating BDD scenario...
        → specs/06_runtime/scenarios/SCN-001_create-task.md
        ✅ Scenario created with GIVEN-WHEN-THEN`
        },
        {
          name: '/flow',
          description: 'Documenta jornadas e fluxos runtime',
          example: `You: /flow User login with 2FA and session management

Claude: [Creating runtime flow]
        → specs/06_runtime/flows/FLW-001_login-2fa.md
        ✅ Flow documented with sequence diagram`
        },
        {
          name: '/rule',
          description: 'Cria/atualiza quality rules',
          example: `You: /rule Email validation must follow RFC 5322 standard

Claude: [Creating quality rule]
        → .claude/rules/040_email-validation.md
        ✅ Rule created with validation criteria`
        },
        {
          name: '/adr',
          description: 'Registra decisões arquiteturais',
          example: `You: /adr Why we chose PostgreSQL over MongoDB

Claude: [Creating ADR]
        → specs/09_decisions/adrs/ADR-002_postgresql-choice.md
        ✅ ADR created with context, decision, consequences`
        },
        {
          name: '/cross',
          description: 'Documenta conceitos transversais',
          example: `You: /cross Security: OAuth2 + JWT, HTTPS only, rate limiting

Claude: [Documenting crosscutting concept]
        → specs/08_crosscutting/008_crosscutting-concepts.md
        ✅ Security section added`
        },
        {
          name: '/build',
          description: 'Define deployment e requisitos de qualidade',
          example: `You: /build Docker + K8s, 80% coverage, <200ms response time

Claude: [Creating deployment documentation]
        → specs/07_deployment/007_deployment-view.md
        → specs/10_quality/010_quality-requirements.md
        ✅ Deployment and quality documented`
        },
        {
          name: '/code',
          description: 'Implementa código a partir das especificações',
          example: `You: /code

Claude: [Reading specifications]
        Found: SCN-001_create-task.md
        Invoking orchestrator for task decomposition...
        → changes/create-task-001/tasks.md (5 tasks)
        Implementing task 1/5...
        ✅ All tasks completed, tests passing (92% coverage)`
        },
        {
          name: '/import',
          description: 'Importa documentos externos para specs',
          example: `You: /import requirements.pdf

Claude: [Importing document]
        Extracting content from PDF...
        Analyzing structure...
        Mapping to Arc42 chapters...
        ✅ Content imported to 8 chapters`
        },
        {
          name: '/stats',
          description: 'Gera dashboard de saúde da documentação',
          example: `You: /stats

Claude: [Analyzing specs/]
        Documentation Health: 85%
        ✅ Complete: 10/12 chapters
        ⚠️  Missing: Chapter 7 (Deployment), Chapter 11 (Risks)
        📊 Dashboard: stats/health-report.md`
        }
      ]
    },
    agents: {
      title: '9 agents especializados',
      subtitle: 'agents autônomos que orquestram o workflow de 7 fases',
      phase: 'fase',
      list: [
        { name: 'Analyst', phase: '1, 3', description: 'Discovery e specification' },
        { name: 'Architect', phase: '2', description: 'Design de arquitetura (complexidade HIGH)' },
        { name: 'Orchestrator', phase: '3.5', description: 'Task decomposition (CRÍTICO)' },
        { name: 'Developer', phase: '4', description: 'Implementação de código' },
        { name: 'Gatekeeper', phase: '4', description: 'Validação de quality gates' },
        { name: 'Reviewer', phase: '5', description: 'Code review' },
        { name: 'Tester', phase: '5', description: 'Validação de testes' },
        { name: 'Documenter', phase: '6', description: 'Geração de documentação' },
        { name: 'Guardian', phase: '7', description: 'Validação pre-commit' }
      ]
    },
    workflow: {
      title: 'Workflow completo de 7 fases',
      subtitle: 'da requisição do usuário até código pronto para produção',
      phases: [
        {
          number: 1,
          name: 'Discovery',
          agent: 'analyst',
          description: 'Entende requisitos, avalia complexidade (LOW/MEDIUM/HIGH) e cria changes/[id]/proposal.md'
        },
        {
          number: 2,
          name: 'Architecture',
          agent: 'architect',
          extra: '(HIGH complexity only)',
          description: 'Design da arquitetura com diagramas C4 e cria changes/[id]/design.md'
        },
        {
          number: 3,
          name: 'Specification',
          agent: 'analyst',
          description: 'Escreve documentação Arc42 + cenários BDD + ADRs e cria changes/[id]/spec.md'
        },
        {
          number: 3.5,
          name: 'Task Decomposition',
          agent: 'orchestrator',
          critical: true,
          description: 'Quebra specs em tarefas atômicas <100 LOC para prevenir alucinações e cria changes/[id]/tasks.md'
        },
        {
          number: 4,
          name: 'Implementation',
          agent: 'developer + gatekeeper',
          description: 'Implementa tarefa por tarefa com testes, validado pelo gatekeeper'
        },
        {
          number: 5,
          name: 'Review',
          agent: 'reviewer + tester',
          description: 'Code review + validação de testes (≥80% cobertura exigida)'
        },
        {
          number: 6,
          name: 'Documentation',
          agent: 'documenter',
          description: 'Atualiza docs e README para corresponder à implementação'
        },
        {
          number: 7,
          name: 'Validation & Release',
          agent: 'guardian',
          extra: '(optional)',
          description: 'Validação final: constitution compliance, testes, linters, specs atualizados'
        }
      ]
    },
    decomposition: {
      title: 'Por que Task Decomposition previne alucinações da IA',
      problem: 'O problema:',
      problemText: 'Specs grandes causam degradação quadrática de atenção O(n²)',
      dataTitle: 'Dados experimentais (Crônica 10):',
      solution: 'A solução:',
      solutionText: 'Orchestrator decompõe specs em tasks de ~100 LOC, mantendo o escopo delimitado e o contexto focado',
      reference: 'Baseado em pesquisas: Liu et al. (2023) "Lost in the Middle", Vaswani et al. (2017) "Attention Is All You Need"',
      data: [
        {
          label: 'Sem especificação:',
          value: '60.4% taxa de alucinação'
        },
        {
          label: 'Spec Arc42 completa (3.570 linhas):',
          value: '20.0% alucinação',
          note: '→ Contexto grande = 625M operações de atenção\n→ 60% de perda no meio do contexto ("Lost in the Middle")'
        },
        {
          label: 'Spec + Task Decomposition (450 linhas/task):',
          value: '7.5% alucinação',
          note: '→ Contexto pequeno = 6.25M operações por task\n→ <5% de perda no contexto'
        },
        {
          result: '✅ Redução de 88% na taxa de alucinação'
        }
      ]
    },
    templates: {
      title: 'Templates & rules',
      library: {
        title: 'Biblioteca de templates',
        description: 'Templates prontos para uso em Arc42 (12 capítulos), diagramas C4, scenarios BDD, e ADRs nos formatos Markdown, JSON e Obsidian',
        buttons: [
          '[download templates arc42] - em breve',
          '[download templates c4] - em breve',
          '[download templates bdd] - em breve',
          '[download templates adr] - em breve'
        ]
      },
      rules: {
        title: '39 quality rules',
        description: 'Object Calisthenics (9 rules) + Extensões (30 rules) cobrindo programação funcional, design de pacotes e muito mais',
        categoriesLabel: 'Categorias:',
        categories: [
          '• Object Calisthenics (001-009): Princípios fundamentais OOP',
          '• Functional Programming (010-019): Padrões FP e imutabilidade',
          '• Package Design (020-029): Organização de módulos e dependências',
          '• Testing (030-039): Padrões de qualidade e cobertura de testes'
        ],
        catalogButton: 'ver catálogo completo de rules - em breve'
      }
    },
    structure: {
      title: 'Estrutura do diretório .claude/'
    },
    ctas: {
      getStarted: {
        title: 'Guia de início →',
        description: 'Tutorial passo a passo: da instalação até sua primeira feature em 5 minutos'
      },
      why: {
        title: 'Por que task decomposition? →',
        description: 'Entenda a ciência: complexidade O(n²), "Lost in the Middle" e redução de 88% em alucinações'
      }
    }
  },
  'es': {
    metadata: {
      title: 'Tooling | Documentation-First Approach',
      description: '15 comandos slash, 9 agentes especializados, biblioteca de plantillas y reglas de calidad.',
    },
    header: {
      title: 'Tooling',
      subtitle: '15 comandos slash, 9 agentes especializados, biblioteca de plantillas y reglas de calidad'
    },
    commands: {
      title: '15 comandos slash',
      subtitle: 'comandos rápidos y enfocados para tareas de documentación y desarrollo - haz clic para ver ejemplos',
      exampleLabel: 'Ejemplo de uso:',
      list: [
        {
          name: '/vision',
          description: 'Define visión, objetivos y stakeholders del proyecto',
          example: `You: /vision Create a task management platform with real-time
     collaboration, user authentication, and team workspaces

Claude: [Analyzing requirement]
        Creating vision document...
        → specs/01_introduction/001_introduction-and-goals.md
        ✅ Vision defined with 3 stakeholders, 5 goals`
        },
        {
          name: '/stack',
          description: 'Define tech stack, restricciones y crea ADR-001',
          example: `You: /stack Node.js 20+, PostgreSQL 15, Redis 7, TypeScript 5

Claude: [Analyzing tech stack]
        Creating constraint documentation...
        → specs/02_constraints/002_constraints.md
        Creating ADR-001 (tech stack decision)...
        → specs/09_decisions/adrs/ADR-001_tech-stack.md
        ✅ Stack documented with justifications`
        },
        {
          name: '/actor',
          description: 'Documenta actores y sistemas externos',
          example: `You: /actor Admin user - manages teams, permissions, billing

Claude: [Creating actor documentation]
        → specs/03_context/actors/ACT-001_admin-user.md
        ✅ Actor documented with 3 responsibilities`
        },
        {
          name: '/container',
          description: 'Documenta bloques de construcción de alto nivel (servicios)',
          example: `You: /container API Gateway - Node.js 20, handles auth, routing

Claude: [Creating container documentation]
        → specs/05_building-blocks/containers/CNT-001_api-gateway.md
        ✅ Container documented with C2 diagram`
        },
        {
          name: '/component',
          description: 'Documenta módulos de código y sus responsabilidades',
          example: `You: /component Authentication module - JWT + refresh tokens

Claude: [Creating component documentation]
        → specs/05_building-blocks/components/CMP-001_authentication.md
        ✅ Component documented with C3 diagram`
        },
        {
          name: '/plan',
          description: 'Crea building blocks + estructura runtime',
          example: `You: /plan

Claude: [Generating architectural structure]
        Creating Chapter 5 (Building Blocks)...
        Creating Chapter 6 (Runtime View)...
        ✅ Structure ready for containers and components`
        },
        {
          name: '/feature',
          description: 'Crea escenarios BDD para nuevas features',
          example: `You: /feature User can create task with title, description, due date

Claude: [Analyzing feature]
        Complexity: MEDIUM
        Creating BDD scenario...
        → specs/06_runtime/scenarios/SCN-001_create-task.md
        ✅ Scenario created with GIVEN-WHEN-THEN`
        },
        {
          name: '/flow',
          description: 'Documenta jornadas y flujos runtime',
          example: `You: /flow User login with 2FA and session management

Claude: [Creating runtime flow]
        → specs/06_runtime/flows/FLW-001_login-2fa.md
        ✅ Flow documented with sequence diagram`
        },
        {
          name: '/rule',
          description: 'Crea/actualiza reglas de calidad',
          example: `You: /rule Email validation must follow RFC 5322 standard

Claude: [Creating quality rule]
        → .claude/rules/040_email-validation.md
        ✅ Rule created with validation criteria`
        },
        {
          name: '/adr',
          description: 'Registra decisiones arquitecturales',
          example: `You: /adr Why we chose PostgreSQL over MongoDB

Claude: [Creating ADR]
        → specs/09_decisions/adrs/ADR-002_postgresql-choice.md
        ✅ ADR created with context, decision, consequences`
        },
        {
          name: '/cross',
          description: 'Documenta conceptos transversales',
          example: `You: /cross Security: OAuth2 + JWT, HTTPS only, rate limiting

Claude: [Documenting crosscutting concept]
        → specs/08_crosscutting/008_crosscutting-concepts.md
        ✅ Security section added`
        },
        {
          name: '/build',
          description: 'Define deployment y requisitos de calidad',
          example: `You: /build Docker + K8s, 80% coverage, <200ms response time

Claude: [Creating deployment documentation]
        → specs/07_deployment/007_deployment-view.md
        → specs/10_quality/010_quality-requirements.md
        ✅ Deployment and quality documented`
        },
        {
          name: '/code',
          description: 'Implementa código a partir de las especificaciones',
          example: `You: /code

Claude: [Reading specifications]
        Found: SCN-001_create-task.md
        Invoking orchestrator for task decomposition...
        → changes/create-task-001/tasks.md (5 tasks)
        Implementing task 1/5...
        ✅ All tasks completed, tests passing (92% coverage)`
        },
        {
          name: '/import',
          description: 'Importa documentos externos a specs',
          example: `You: /import requirements.pdf

Claude: [Importing document]
        Extracting content from PDF...
        Analyzing structure...
        Mapping to Arc42 chapters...
        ✅ Content imported to 8 chapters`
        },
        {
          name: '/stats',
          description: 'Genera dashboard de salud de la documentación',
          example: `You: /stats

Claude: [Analyzing specs/]
        Documentation Health: 85%
        ✅ Complete: 10/12 chapters
        ⚠️  Missing: Chapter 7 (Deployment), Chapter 11 (Risks)
        📊 Dashboard: stats/health-report.md`
        }
      ]
    },
    agents: {
      title: '9 agentes especializados',
      subtitle: 'agentes autónomos que orquestan el workflow de 7 fases',
      phase: 'fase',
      list: [
        { name: 'Analyst', phase: '1, 3', description: 'Discovery y specification' },
        { name: 'Architect', phase: '2', description: 'Diseño de arquitectura (complejidad HIGH)' },
        { name: 'Orchestrator', phase: '3.5', description: 'Descomposición de tareas (CRÍTICO)' },
        { name: 'Developer', phase: '4', description: 'Implementación de código' },
        { name: 'Gatekeeper', phase: '4', description: 'Validación de quality gates' },
        { name: 'Reviewer', phase: '5', description: 'Code review' },
        { name: 'Tester', phase: '5', description: 'Validación de tests' },
        { name: 'Documenter', phase: '6', description: 'Generación de documentación' },
        { name: 'Guardian', phase: '7', description: 'Validación pre-commit' }
      ]
    },
    workflow: {
      title: 'Workflow completo de 7 fases',
      subtitle: 'desde la solicitud del usuario hasta código listo para producción',
      phases: [
        {
          number: 1,
          name: 'Discovery',
          agent: 'analyst',
          description: 'Entiende requisitos, evalúa complejidad (LOW/MEDIUM/HIGH) y crea changes/[id]/proposal.md'
        },
        {
          number: 2,
          name: 'Architecture',
          agent: 'architect',
          extra: '(HIGH complexity only)',
          description: 'Diseño de arquitectura con diagramas C4 y crea changes/[id]/design.md'
        },
        {
          number: 3,
          name: 'Specification',
          agent: 'analyst',
          description: 'Escribe documentación Arc42 + escenarios BDD + ADRs y crea changes/[id]/spec.md'
        },
        {
          number: 3.5,
          name: 'Task Decomposition',
          agent: 'orchestrator',
          critical: true,
          description: 'Divide specs en tareas atómicas <100 LOC para prevenir alucinaciones y crea changes/[id]/tasks.md'
        },
        {
          number: 4,
          name: 'Implementation',
          agent: 'developer + gatekeeper',
          description: 'Implementa tarea por tarea con tests, validado por gatekeeper'
        },
        {
          number: 5,
          name: 'Review',
          agent: 'reviewer + tester',
          description: 'Code review + validación de tests (≥80% cobertura requerida)'
        },
        {
          number: 6,
          name: 'Documentation',
          agent: 'documenter',
          description: 'Actualiza docs y README para corresponder con la implementación'
        },
        {
          number: 7,
          name: 'Validation & Release',
          agent: 'guardian',
          extra: '(optional)',
          description: 'Validación final: constitution compliance, tests, linters, specs actualizados'
        }
      ]
    },
    decomposition: {
      title: 'Por qué la Descomposición de Tareas previene alucinaciones de IA',
      problem: 'El problema:',
      problemText: 'Las specs grandes causan degradación cuadrática de atención O(n²)',
      dataTitle: 'Datos experimentales (Crónica 10):',
      solution: 'La solución:',
      solutionText: 'Orchestrator descompone specs en tasks de ~100 LOC, manteniendo el alcance acotado y el contexto enfocado',
      reference: 'Basado en investigaciones: Liu et al. (2023) "Lost in the Middle", Vaswani et al. (2017) "Attention Is All You Need"',
      data: [
        {
          label: 'Sin especificación:',
          value: '60.4% tasa de alucinación'
        },
        {
          label: 'Spec Arc42 completa (3.570 líneas):',
          value: '20.0% alucinación',
          note: '→ Contexto grande = 625M operaciones de atención\n→ 60% de pérdida en medio del contexto ("Lost in the Middle")'
        },
        {
          label: 'Spec + Task Decomposition (450 líneas/task):',
          value: '7.5% alucinación',
          note: '→ Contexto pequeño = 6.25M operaciones por task\n→ <5% de pérdida de contexto'
        },
        {
          result: '✅ Reducción del 88% en la tasa de alucinación'
        }
      ]
    },
    templates: {
      title: 'Templates & rules',
      library: {
        title: 'Biblioteca de plantillas',
        description: 'Plantillas listas para usar en Arc42 (12 capítulos), diagramas C4, escenarios BDD, y ADRs en formatos Markdown, JSON y Obsidian',
        buttons: [
          '[descargar plantillas arc42] - próximamente',
          '[descargar plantillas c4] - próximamente',
          '[descargar plantillas bdd] - próximamente',
          '[descargar plantillas adr] - próximamente'
        ]
      },
      rules: {
        title: '39 reglas de calidad',
        description: 'Object Calisthenics (9 reglas) + Extensiones (30 reglas) cubriendo programación funcional, diseño de paquetes y mucho más',
        categoriesLabel: 'Categorías:',
        categories: [
          '• Object Calisthenics (001-009): Principios fundamentales OOP',
          '• Functional Programming (010-019): Patrones FP e inmutabilidad',
          '• Package Design (020-029): Organización de módulos y dependencias',
          '• Testing (030-039): Patrones de calidad y cobertura de tests'
        ],
        catalogButton: 'ver catálogo completo de reglas - próximamente'
      }
    },
    structure: {
      title: 'Estructura del directorio .claude/'
    },
    ctas: {
      getStarted: {
        title: 'Guía de inicio →',
        description: 'Tutorial paso a paso: desde la instalación hasta tu primera feature en 5 minutos'
      },
      why: {
        title: '¿Por qué descomposición de tareas? →',
        description: 'Entiende la ciencia: complejidad O(n²), "Lost in the Middle" y reducción del 88% en alucinaciones'
      }
    }
  }
};

export default function ToolingPage() {
  const locale = useLocale() as 'en' | 'pt-BR' | 'es';
  const t = content[locale];
  const [expandedCommand, setExpandedCommand] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-32">
            <h1 className="text-4xl md:text-5xl font-mono font-normal text-white mb-6">
              {t.header.title}
            </h1>
            <p className="text-base font-mono text-neutral-500 leading-relaxed">
              {t.header.subtitle}
            </p>
          </div>

          {/* 15 Slash Commands */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.commands.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.commands.subtitle}
            </p>
            <div className="space-y-4">
              {t.commands.list.map((command, index) => (
                <div key={index} className="border border-neutral-800">
                  <button
                    onClick={() => setExpandedCommand(expandedCommand === index ? null : index)}
                    className="w-full text-left p-4 hover:bg-neutral-950 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-base font-mono text-white mb-1">
                          {command.name}
                        </h3>
                        <p className="text-sm font-mono text-neutral-500 leading-relaxed">
                          {command.description}
                        </p>
                      </div>
                      <div className="ml-4 text-neutral-600">
                        {expandedCommand === index ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  </button>
                  {expandedCommand === index && (
                    <div className="border-t border-neutral-800 bg-black p-4">
                      <p className="text-xs font-mono text-neutral-600 mb-3">
                        {t.commands.exampleLabel}
                      </p>
                      <pre className="text-sm font-mono text-neutral-400 leading-relaxed">
                        <code>{command.example}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 9 Specialized Agents */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.agents.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.agents.subtitle}
            </p>
            <div className="space-y-6">
              {t.agents.list.map((agent, index) => (
                <div key={index} className="border-l-2 border-neutral-800 pl-6">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-base font-mono text-white">
                      {agent.name}
                    </h3>
                    <span className="text-xs font-mono text-neutral-600">
                      {t.agents.phase} {agent.phase}
                    </span>
                  </div>
                  <p className="text-sm font-mono text-neutral-500 leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Workflow */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.workflow.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.workflow.subtitle}
            </p>
            <div className="space-y-6">
              {t.workflow.phases.map((phase, index) => (
                <div key={index} className="border-l-2 border-neutral-800 pl-6">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-base font-mono text-white">
                      Phase {phase.number}: {phase.name}
                    </h3>
                    <span className="text-xs font-mono text-neutral-600">
                      {phase.agent}
                    </span>
                    {phase.critical && (
                      <span className="px-2 py-0.5 bg-red-900/30 border border-red-800/50">
                        <span className="text-xs font-mono text-red-500">CRÍTICO</span>
                      </span>
                    )}
                    {phase.extra && (
                      <span className="text-xs font-mono text-neutral-600">
                        {phase.extra}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-mono text-neutral-500 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Task Decomposition Prevents Hallucinations */}
          <div className="mb-32">
            <div className="border-2 border-white p-8">
              <h3 className="text-xl font-mono text-white mb-6">
                {t.decomposition.title}
              </h3>
              <div className="space-y-6 text-sm font-mono">
                <p className="text-neutral-400">
                  <span className="text-white">{t.decomposition.problem}</span> {t.decomposition.problemText}
                </p>

                <div className="border border-neutral-700 p-6 bg-black">
                  <p className="text-neutral-500 mb-4">{t.decomposition.dataTitle}</p>
                  <div className="space-y-3 text-neutral-400">
                    {t.decomposition.data.map((item, index) => (
                      <div key={index}>
                        {item.result ? (
                          <p className="mt-4 text-white">{item.result}</p>
                        ) : (
                          <>
                            <p>📊 <span className="text-white">{item.label}</span> {item.value}</p>
                            {item.note && item.note.split('\n').map((line, i) => (
                              <p key={i} className="text-neutral-600">{line}</p>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-neutral-400">
                  <span className="text-white">{t.decomposition.solution}</span> {t.decomposition.solutionText}
                </p>

                <div className="pt-4 border-t border-neutral-700">
                  <p className="text-xs text-neutral-600">
                    {t.decomposition.reference}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Templates & Rules */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              {t.templates.title}
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-lg font-mono text-white mb-2">
                  {t.templates.library.title}
                </h3>
                <p className="text-base font-mono text-neutral-500 leading-relaxed mb-4">
                  {t.templates.library.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {t.templates.library.buttons.map((button, index) => (
                    <button
                      key={index}
                      disabled
                      className="text-sm font-mono text-neutral-600 cursor-not-allowed"
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-lg font-mono text-white mb-2">
                  {t.templates.rules.title}
                </h3>
                <p className="text-base font-mono text-neutral-500 leading-relaxed mb-4">
                  {t.templates.rules.description}
                </p>
                <div className="space-y-3">
                  <div className="text-sm font-mono text-neutral-500">
                    <p className="mb-2">{t.templates.rules.categoriesLabel}</p>
                    <ul className="space-y-1 ml-4">
                      {t.templates.rules.categories.map((category, index) => (
                        <li key={index}>{category}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    disabled
                    className="text-sm font-mono text-neutral-600 cursor-not-allowed underline underline-offset-4"
                  >
                    {t.templates.rules.catalogButton}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* .claude/ Structure */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              {t.structure.title}
            </h2>
            <div className="border border-neutral-800 bg-black p-6">
              <pre className="text-sm font-mono text-neutral-500">
                <code>{`.claude/
├── constitution.md      # Governance principles
├── commands/            # 15 slash commands
│   ├── vision.md
│   ├── feature.md
│   └── ...
├── skills/              # 9 specialized agents
│   ├── analyst/
│   ├── orchestrator/
│   └── ...
├── templates/           # Arc42, C4, BDD, ADR
│   ├── arc42/
│   ├── c4/
│   └── ...
└── rules/               # 39 quality rules
    ├── 001_nivel-unico-indentacao.md
    └── ...`}</code>
              </pre>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-32">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/getting-started"
                className="block border border-neutral-800 p-6 hover:border-white transition-colors group"
              >
                <h3 className="text-base font-mono text-white mb-2 group-hover:text-white">
                  {t.ctas.getStarted.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500">
                  {t.ctas.getStarted.description}
                </p>
              </a>

              <a
                href="/why"
                className="block border border-neutral-800 p-6 hover:border-white transition-colors group"
              >
                <h3 className="text-base font-mono text-white mb-2 group-hover:text-white">
                  {t.ctas.why.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500">
                  {t.ctas.why.description}
                </p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
