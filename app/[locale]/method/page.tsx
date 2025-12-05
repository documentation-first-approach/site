'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';
import { useLocale } from 'next-intl';

const content = {
  'en': {
    metadata: {
      title: 'The Method | Documentation-First Approach',
      description: 'The 7-phase workflow: Discovery, Architecture, Specification, Task Decomposition, Implementation, Validation, Documentation.',
    },
    header: {
      title: 'The method',
      subtitle: 'The 7-phase workflow that transforms requirements into deterministic, production-ready software'
    },
    whyWorks: {
      title: 'Why this method works',
      subtitle: 'scientific foundations and experimental data',
      problem: {
        title: 'The problem: Ambiguity → Hallucination',
        withoutSpec: {
          title: 'Without deterministic specification:',
          items: [
            '"Create an authentication system"',
            '10²⁰ possible implementations',
            'AI chooses probabilistically',
            '→ 60.4% hallucination rate'
          ]
        },
        withSpec: {
          title: 'With structured specification:',
          items: [
            'Complete Arc42 + BDD + ADR spec',
            'Entropy H ≈ 0.5 bits (vs 18 bits)',
            '~1.4 possible implementations',
            '→ 7.5% hallucination rate'
          ]
        },
        footer: '88% reduction in hallucination rate through entropy reduction (Shannon, 1948)'
      },
      solution1: {
        title: 'Solution 1: Documentation-First Approach',
        why: 'Why?',
        whyText: 'Language models are probabilistic: P(sequence) = P(t₁) × P(t₂|t₁) × ... × P(tₙ|...)',
        probabilityNote: 'Even with 80% accuracy per token:',
        probabilityCalc: 'P(1000 correct tokens) = 0.8¹⁰⁰⁰ ≈ 10⁻⁹⁷ (essentially zero)',
        how: 'How?',
        howText: 'Arc42 (12 chapters) + C4 (3 levels) + BDD (Given-When-Then) + ADR (documented decisions)',
        result: 'Result:',
        resultText: 'Reduces entropy from 18 bits → 0.5 bits = 262,144 possibilities → 1.4 possibilities'
      },
      solution2: {
        title: 'Solution 2: Task Decomposition (Phase 3.5)',
        why: 'Why?',
        whyText: 'Attention mechanism has O(n²) complexity - large contexts cause degradation',
        largeSpec: 'Spec 3,570 lines (~25,000 tokens):',
        largeSpecOps: '→ 625M attention operations',
        largeSpecLoss: '→ 60% loss in the middle of context ("Lost in the Middle", Liu et al. 2023)',
        smallTask: 'Task 450 lines (~2,500 tokens):',
        smallTaskOps: '→ 6.25M operations per task',
        smallTaskLoss: '→ <5% context loss',
        how: 'How?',
        howText: 'Orchestrator decomposes specs into tasks ~100 LOC (Vaswani et al. 2017 - Attention is All You Need)',
        result: 'Result:',
        resultText: '10× fewer operations + maintained focus = additional 62.5% reduction in hallucination'
      },
      solution3: {
        title: 'Solution 3: Test-First Development',
        why: 'Why?',
        whyText: 'Tests are executable specifications that validate behavior',
        withoutTests: 'Without tests: bugs found in production = 72 (3 months)',
        withTests: 'With TDD + ≥80% coverage: bugs found = 10 (3 months)',
        reduction: '→ 86% bug reduction',
        how: 'How?',
        howText: 'RED (failing test) → GREEN (minimal implementation) → REFACTOR (improve while keeping green)'
      },
      solution4: {
        title: 'Solution 4: DDD Tactical Co-Located',
        why: 'Why?',
        whyText: 'Technical layer organization obscures domain and increases context dispersion',
        technical: 'Technical layers (services/, repositories/, controllers/):',
        technicalNav: '→ AI needs to navigate 3-5 directories to understand one feature',
        technicalContext: '→ Fragmented context = higher error probability',
        colocated: 'DDD Co-Located (src/[context]/[container]/[component]/):',
        colocatedAll: '→ Everything related to the feature in one place',
        colocatedContext: '→ Focused context = lower error probability',
        how: 'How?',
        howText: 'Screaming Architecture + Co-Location + Semantic Names + Flat Structure'
      },
      combined: {
        title: 'Combined effect: 98.5% reduction in hallucination',
        withoutMethod: 'Without method:',
        withoutValue: '60.4%',
        withoutLabel: 'hallucination',
        plusArc42: '+ Arc42 Spec:',
        plusArc42Value: '35.0%',
        plusArc42Label: '(-42%)',
        plusDecomp: '+ Task Decomposition:',
        plusDecompValue: '7.5%',
        plusDecompLabel: '(-88%)',
        plusIteration: '+ Iteration with validation:',
        plusIterationValue: '0.9%',
        plusIterationLabel: '(-98.5%)',
        references: 'Based on: Shannon (1948), Vaswani et al. (2017), Liu et al. (2023) + controlled experiments (Chronicle 10)'
      }
    },
    workflow: {
      title: 'The 7-phase workflow',
      subtitle: 'specification → decomposition → implementation → validation',
      phases: [
        {
          number: 1,
          name: 'Discovery',
          agent: 'Analyst',
          input: 'User requirement (text, doc, conversation)',
          process: [
            'Understand requirement',
            'Ask questions to clarify',
            'Evaluate complexity (LOW/MEDIUM/HIGH)',
            'Generate proposal.md'
          ],
          output: 'changes/[id]/proposal.md with problem, solution, complexity',
          decision: 'HIGH → Phase 2 (Architecture) | MEDIUM/LOW → Skip to Phase 3'
        },
        {
          number: 2,
          name: 'Architecture',
          agent: 'Architect • [HIGH only]',
          input: 'proposal.md (HIGH complexity)',
          process: [
            'Design system architecture',
            'Create C4 diagrams (Context, Container, Component)',
            'Identify bounded contexts',
            'Document key decisions as ADRs',
            'Generate design.md'
          ],
          output: 'changes/[id]/design.md + ADRs'
        },
        {
          number: 3,
          name: 'Specification',
          agent: 'Analyst',
          input: 'proposal.md (+ design.md if HIGH)',
          process: [
            'Write Arc42 documentation (adaptive by complexity)',
            'Create C4 diagrams',
            'Write BDD scenarios (GIVEN-WHEN-THEN)',
            'Document ADRs for key decisions',
            'Generate spec.md'
          ],
          output: 'changes/[id]/spec.md (OpenSpec delta format)'
        },
        {
          number: 3.5,
          name: 'Task Decomposition',
          agent: 'Orchestrator',
          critical: true,
          warning: '⚠️ THIS IS WHAT PREVENTS AI HALLUCINATIONS',
          input: 'spec.md',
          process: [
            'Analyze size and complexity of spec',
            'Break into atomic tasks: each <100 LOC, <2 hours',
            'Define clear dependencies',
            'Map tasks to BDD scenarios',
            'Generate tasks.md'
          ],
          output: 'changes/[id]/tasks.md',
          whyMatters: 'Why this matters:',
          whyItems: [
            '• Large context (5000+ LOC) → Attention decay O(n²)',
            '• AI loses focus → Hallucinations increase',
            '• Small tasks (~100 LOC) → Deterministic output'
          ],
          changesStructure: 'changes/ folder structure:',
          changesTree: `changes/[feature-id]/
├── proposal.md       # Problem, solution, complexity
├── design.md         # Architecture (HIGH only)
├── spec.md           # Arc42 + C4 + BDD + ADR
└── tasks.md          # Atomic tasks <100 LOC

Each changes/ folder orchestrates:
• Complete isolated specification
• Decomposed and prioritized tasks
• Traceability from requirement → code`
        },
        {
          number: 4,
          name: 'Implementation',
          agent: 'Developer + Gatekeeper',
          input: 'changes/[id]/tasks.md',
          process: [
            'Implement task by task sequentially',
            'Write tests BEFORE implementation (TDD)',
            'Apply DDD Tactical Co-Located structure',
            'Gatekeeper validates SOLID, Object Calisthenics',
            'Run tests (≥80% coverage mandatory)'
          ],
          output: 'Implemented code + passing tests'
        },
        {
          number: 5,
          name: 'Validation',
          agent: 'Reviewer + Tester',
          input: 'Implemented code (Phase 4)',
          process: [
            'Reviewer: code review focused on quality, maintainability',
            'Reviewer: validate adherence to constitution.md',
            'Tester: execute BDD scenarios from spec',
            'Tester: validate test coverage ≥80%',
            'Tester: verify edge cases'
          ],
          output: 'Validated code + quality report'
        },
        {
          number: 6,
          name: 'Documentation',
          agent: 'Documenter',
          input: 'Validated code (Phase 5)',
          process: [
            'Update README with new features',
            'Generate/update API documentation',
            'Create migration guides (if breaking changes)',
            'Update CHANGELOG',
            'Sync specs/ with implemented code'
          ],
          output: 'Updated and synchronized documentation'
        },
        {
          number: 7,
          name: 'Pre-Commit Validation',
          agent: 'Guardian',
          input: 'Code + updated docs (Phase 6)',
          process: [
            'Validate compliance with constitution.md',
            'Run all tests (full regression)',
            'Verify linters (zero warnings)',
            'Validate updated specs/',
            'Verify BDD → code mapping'
          ],
          output: '✅ Approved for commit or ❌ Blocked with feedback'
        }
      ],
      processLabel: 'Process:',
      inputLabel: 'Input:',
      outputLabel: 'Output:',
      decisionLabel: 'Decision:'
    },
    criticalPhase: {
      title: 'Phase 3.5: Task decomposition - THE KEY',
      why: 'Why?',
      whyText: 'Context >5000 lines = AI loses focus (attention decay O(n²))',
      how: 'How?',
      howText: 'Orchestrator breaks specs into tasks <100 LOC',
      result: 'Result?',
      resultText: 'Deterministic output, predictable quality'
    },
    complexity: {
      title: 'Complexity-driven approach',
      subtitle: 'not all features are equal - we adapt the workflow',
      low: {
        badge: 'LOW',
        time: '2-8 hours',
        phases: 'Phases',
        phasesValue: '1 → 3 → 3.5 → 4 → 7',
        chapters: 'Arc42 Chapters',
        chaptersValue: 'Only 6, 10',
        criteria: 'Criteria',
        criteriaValue: '1 context, <5 files, established patterns',
        examples: 'Examples: Add validation, new field, small bug fix'
      },
      medium: {
        badge: 'MEDIUM',
        time: '1-3 days',
        phases: 'Phases',
        phasesValue: '1 → 3 → 3.5 → 4 → 5 → 7',
        chapters: 'Arc42 Chapters',
        chaptersValue: '3, 5, 6, 8, 9, 10',
        criteria: 'Criteria',
        criteriaValue: '1-2 contexts, 5-15 files, some new patterns',
        examples: 'Examples: New feature, module, 3-5 use cases'
      },
      high: {
        badge: 'HIGH',
        time: '1-2 weeks',
        phases: 'Phases',
        phasesValue: 'All 7 phases',
        chapters: 'Arc42 Chapters',
        chaptersValue: 'All 12 chapters',
        criteria: 'Criteria',
        criteriaValue: '3+ contexts, >15 files, new architectural patterns',
        examples: 'Examples: Payment system, authentication, messaging'
      }
    },
    references: {
      title: 'Scientific References',
      shannon: {
        title: 'A Mathematical Theory of Communication',
        authors: 'Claude Shannon, 1948 • Information Theory and Entropy',
        cta: 'Read paper (PDF)'
      },
      vaswani: {
        title: 'Attention Is All You Need',
        authors: 'Vaswani et al., 2017 • Transformer Architecture and O(n²) complexity',
        cta: 'Read paper (arXiv)'
      },
      liu: {
        title: 'Lost in the Middle: How Language Models Use Long Contexts',
        authors: 'Liu et al., 2023 • Context degradation in language models',
        cta: 'Read paper (arXiv)'
      }
    },
    ctas: {
      tooling: {
        title: 'Explore the tools →',
        description: '15 slash commands, 9 specialized agents, 39 quality rules and ready-to-use templates'
      },
      download: {
        title: 'Get started now →',
        description: 'Download the complete scaffold and implement the 7-phase workflow in your project'
      }
    }
  },
  'pt-BR': {
    metadata: {
      title: 'O Método | Documentation-First Approach',
      description: 'O workflow de 7 fases: Discovery, Architecture, Specification, Task Decomposition, Implementation, Validation, Documentation.',
    },
    header: {
      title: 'O método',
      subtitle: 'O workflow de 7 fases que transforma requisitos em software determinístico e pronto para produção'
    },
    whyWorks: {
      title: 'Por que este método funciona',
      subtitle: 'fundamentos científicos e dados experimentais',
      problem: {
        title: 'O problema: Ambiguidade → Alucinação',
        withoutSpec: {
          title: 'Sem especificação determinística:',
          items: [
            '"Crie um sistema de autenticação"',
            '10²⁰ implementações possíveis',
            'IA escolhe probabilisticamente',
            '→ 60.4% taxa de alucinação'
          ]
        },
        withSpec: {
          title: 'Com especificação estruturada:',
          items: [
            'Spec Arc42 + BDD + ADR completa',
            'Entropia H ≈ 0.5 bits (vs 18 bits)',
            '~1.4 implementações possíveis',
            '→ 7.5% taxa de alucinação'
          ]
        },
        footer: 'Redução de 88% na taxa de alucinação através da redução de entropia (Shannon, 1948)'
      },
      solution1: {
        title: 'Solução 1: Documentation-First Approach',
        why: 'Por quê?',
        whyText: 'Modelos de linguagem são probabilísticos: P(sequência) = P(t₁) × P(t₂|t₁) × ... × P(tₙ|...)',
        probabilityNote: 'Mesmo com 80% de acerto por token:',
        probabilityCalc: 'P(1000 tokens corretos) = 0.8¹⁰⁰⁰ ≈ 10⁻⁹⁷ (essencialmente zero)',
        how: 'Como?',
        howText: 'Arc42 (12 capítulos) + C4 (3 níveis) + BDD (Given-When-Then) + ADR (decisões documentadas)',
        result: 'Resultado:',
        resultText: 'Reduz entropia de 18 bits → 0.5 bits = 262.144 possibilidades → 1.4 possibilidades'
      },
      solution2: {
        title: 'Solução 2: Task Decomposition (Phase 3.5)',
        why: 'Por quê?',
        whyText: 'Mecanismo de atenção tem complexidade O(n²) - contextos grandes causam degradação',
        largeSpec: 'Spec 3.570 linhas (~25.000 tokens):',
        largeSpecOps: '→ 625M operações de atenção',
        largeSpecLoss: '→ 60% perda no meio do contexto ("Lost in the Middle", Liu et al. 2023)',
        smallTask: 'Task 450 linhas (~2.500 tokens):',
        smallTaskOps: '→ 6.25M operações por task',
        smallTaskLoss: '→ <5% perda no contexto',
        how: 'Como?',
        howText: 'Orchestrator decompõe specs em tasks ~100 LOC (Vaswani et al. 2017 - Attention is All You Need)',
        result: 'Resultado:',
        resultText: '10× menos operações + foco mantido = redução adicional de 62.5% na alucinação'
      },
      solution3: {
        title: 'Solução 3: Test-First Development',
        why: 'Por quê?',
        whyText: 'Testes são especificações executáveis que validam comportamento',
        withoutTests: 'Sem testes: bugs encontrados em produção = 72 (3 meses)',
        withTests: 'Com TDD + ≥80% cobertura: bugs encontrados = 10 (3 meses)',
        reduction: '→ Redução de 86% em bugs',
        how: 'Como?',
        howText: 'RED (teste que falha) → GREEN (implementação mínima) → REFACTOR (melhorar mantendo verde)'
      },
      solution4: {
        title: 'Solução 4: DDD Tactical Co-Located',
        why: 'Por quê?',
        whyText: 'Organização por camadas técnicas obscurece o domínio e aumenta dispersão de contexto',
        technical: 'Camadas técnicas (services/, repositories/, controllers/):',
        technicalNav: '→ IA precisa navegar 3-5 diretórios para entender uma feature',
        technicalContext: '→ Contexto fragmentado = maior probabilidade de erro',
        colocated: 'DDD Co-Located (src/[contexto]/[container]/[componente]/):',
        colocatedAll: '→ Tudo relacionado à feature em um único lugar',
        colocatedContext: '→ Contexto focado = menor probabilidade de erro',
        how: 'Como?',
        howText: 'Screaming Architecture + Co-Location + Semantic Names + Flat Structure'
      },
      combined: {
        title: 'Efeito combinado: 98.5% de redução em alucinação',
        withoutMethod: 'Sem método:',
        withoutValue: '60.4%',
        withoutLabel: 'alucinação',
        plusArc42: '+ Spec Arc42:',
        plusArc42Value: '35.0%',
        plusArc42Label: '(-42%)',
        plusDecomp: '+ Task Decomposition:',
        plusDecompValue: '7.5%',
        plusDecompLabel: '(-88%)',
        plusIteration: '+ Iteração com validação:',
        plusIterationValue: '0.9%',
        plusIterationLabel: '(-98.5%)',
        references: 'Baseado em: Shannon (1948), Vaswani et al. (2017), Liu et al. (2023) + experimentos controlados (Crônica 10)'
      }
    },
    workflow: {
      title: 'O workflow de 7 fases',
      subtitle: 'specification → decomposition → implementation → validation',
      phases: [
        {
          number: 1,
          name: 'Discovery',
          agent: 'Analyst',
          input: 'Requisito do usuário (texto, doc, conversa)',
          process: [
            'Entender requisito',
            'Fazer perguntas para esclarecer',
            'Avaliar complexidade (LOW/MEDIUM/HIGH)',
            'Gerar proposal.md'
          ],
          output: 'changes/[id]/proposal.md com problema, solução, complexidade',
          decision: 'HIGH → Phase 2 (Architecture) | MEDIUM/LOW → Pular para Phase 3'
        },
        {
          number: 2,
          name: 'Architecture',
          agent: 'Architect • [Apenas HIGH]',
          input: 'proposal.md (complexidade HIGH)',
          process: [
            'Design da arquitetura do sistema',
            'Criar diagramas C4 (Context, Container, Component)',
            'Identificar bounded contexts',
            'Documentar decisões chave como ADRs',
            'Gerar design.md'
          ],
          output: 'changes/[id]/design.md + ADRs'
        },
        {
          number: 3,
          name: 'Specification',
          agent: 'Analyst',
          input: 'proposal.md (+ design.md se HIGH)',
          process: [
            'Escrever documentação Arc42 (adaptativa por complexidade)',
            'Criar diagramas C4',
            'Escrever scenarios BDD (GIVEN-WHEN-THEN)',
            'Documentar ADRs para decisões chave',
            'Gerar spec.md'
          ],
          output: 'changes/[id]/spec.md (formato OpenSpec delta)'
        },
        {
          number: 3.5,
          name: 'Task Decomposition',
          agent: 'Orchestrator',
          critical: true,
          warning: '⚠️ ISTO É O QUE PREVINE ALUCINAÇÕES DA IA',
          input: 'spec.md',
          process: [
            'Analisar tamanho e complexidade da spec',
            'Quebrar em tarefas atômicas: cada <100 LOC, <2 horas',
            'Definir dependências claras',
            'Mapear tarefas para scenarios BDD',
            'Gerar tasks.md'
          ],
          output: 'changes/[id]/tasks.md',
          whyMatters: 'Por que isto importa:',
          whyItems: [
            '• Contexto grande (5000+ LOC) → Decaimento de atenção O(n²)',
            '• IA perde foco → Alucinações aumentam',
            '• Tarefas pequenas (~100 LOC) → Output determinístico'
          ],
          changesStructure: 'Estrutura da pasta changes/:',
          changesTree: `changes/[feature-id]/
├── proposal.md       # Problema, solução, complexidade
├── design.md         # Arquitetura (apenas HIGH)
├── spec.md           # Arc42 + C4 + BDD + ADR
└── tasks.md          # Tarefas atômicas <100 LOC

Cada pasta changes/ orquestra:
• Especificação completa isolada
• Tasks decompostas e priorizadas
• Rastreabilidade de requisito → código`
        },
        {
          number: 4,
          name: 'Implementation',
          agent: 'Developer + Gatekeeper',
          input: 'changes/[id]/tasks.md',
          process: [
            'Implementar task por task sequencialmente',
            'Escrever testes ANTES da implementação (TDD)',
            'Aplicar DDD Tactical Co-Located structure',
            'Gatekeeper valida SOLID, Object Calisthenics',
            'Executar testes (≥80% cobertura obrigatória)'
          ],
          output: 'Código implementado + testes passando'
        },
        {
          number: 5,
          name: 'Validation',
          agent: 'Reviewer + Tester',
          input: 'Código implementado (Phase 4)',
          process: [
            'Reviewer: code review focado em qualidade, manutenibilidade',
            'Reviewer: validar aderência a constitution.md',
            'Tester: executar scenarios BDD da spec',
            'Tester: validar cobertura de testes ≥80%',
            'Tester: verificar edge cases'
          ],
          output: 'Código validado + relatório de qualidade'
        },
        {
          number: 6,
          name: 'Documentation',
          agent: 'Documenter',
          input: 'Código validado (Phase 5)',
          process: [
            'Atualizar README com novos recursos',
            'Gerar/atualizar documentação de API',
            'Criar guias de migração (se breaking changes)',
            'Atualizar CHANGELOG',
            'Sincronizar specs/ com código implementado'
          ],
          output: 'Documentação atualizada e sincronizada'
        },
        {
          number: 7,
          name: 'Pre-Commit Validation',
          agent: 'Guardian',
          input: 'Código + docs atualizados (Phase 6)',
          process: [
            'Validar conformidade com constitution.md',
            'Executar todos os testes (regressão completa)',
            'Verificar linters (zero warnings)',
            'Validar specs/ atualizados',
            'Verificar mapeamento BDD → código'
          ],
          output: '✅ Aprovado para commit ou ❌ Bloqueado com feedback'
        }
      ],
      processLabel: 'Processo:',
      inputLabel: 'Input:',
      outputLabel: 'Output:',
      decisionLabel: 'Decisão:'
    },
    criticalPhase: {
      title: 'Phase 3.5: Task decomposition - A CHAVE',
      why: 'Por quê?',
      whyText: 'Contexto >5000 linhas = IA perde foco (decaimento de atenção O(n²))',
      how: 'Como?',
      howText: 'Orchestrator quebra specs em tarefas <100 LOC',
      result: 'Resultado?',
      resultText: 'Output determinístico, qualidade previsível'
    },
    complexity: {
      title: 'Abordagem orientada à complexidade',
      subtitle: 'nem todas as features são iguais - adaptamos o workflow',
      low: {
        badge: 'LOW',
        time: '2-8 horas',
        phases: 'Fases',
        phasesValue: '1 → 3 → 3.5 → 4 → 7',
        chapters: 'Arc42 Chapters',
        chaptersValue: 'Apenas 6, 10',
        criteria: 'Critérios',
        criteriaValue: '1 contexto, <5 arquivos, padrões estabelecidos',
        examples: 'Exemplos: Adicionar validação, novo campo, pequeno bug fix'
      },
      medium: {
        badge: 'MEDIUM',
        time: '1-3 dias',
        phases: 'Fases',
        phasesValue: '1 → 3 → 3.5 → 4 → 5 → 7',
        chapters: 'Arc42 Chapters',
        chaptersValue: '3, 5, 6, 8, 9, 10',
        criteria: 'Critérios',
        criteriaValue: '1-2 contextos, 5-15 arquivos, alguns padrões novos',
        examples: 'Exemplos: Nova feature, módulo, 3-5 use cases'
      },
      high: {
        badge: 'HIGH',
        time: '1-2 semanas',
        phases: 'Fases',
        phasesValue: 'Todas as 7 fases',
        chapters: 'Arc42 Chapters',
        chaptersValue: 'Todos os 12 capítulos',
        criteria: 'Critérios',
        criteriaValue: '3+ contextos, >15 arquivos, padrões arquiteturais novos',
        examples: 'Exemplos: Sistema de pagamentos, autenticação, mensageria'
      }
    },
    references: {
      title: 'Referências Científicas',
      shannon: {
        title: 'A Mathematical Theory of Communication',
        authors: 'Claude Shannon, 1948 • Teoria da Informação e Entropia',
        cta: 'Ler paper (PDF)'
      },
      vaswani: {
        title: 'Attention Is All You Need',
        authors: 'Vaswani et al., 2017 • Transformer Architecture e complexidade O(n²)',
        cta: 'Ler paper (arXiv)'
      },
      liu: {
        title: 'Lost in the Middle: How Language Models Use Long Contexts',
        authors: 'Liu et al., 2023 • Context degradation em modelos de linguagem',
        cta: 'Ler paper (arXiv)'
      }
    },
    ctas: {
      tooling: {
        title: 'Explorar as ferramentas →',
        description: '15 slash commands, 9 agents especializados, 39 quality rules e templates prontos'
      },
      download: {
        title: 'Começar agora →',
        description: 'Baixe o scaffold completo e implemente o workflow de 7 fases no seu projeto'
      }
    }
  },
  'es': {
    metadata: {
      title: 'El Método | Documentation-First Approach',
      description: 'El workflow de 7 fases: Discovery, Architecture, Specification, Task Decomposition, Implementation, Validation, Documentation.',
    },
    header: {
      title: 'El método',
      subtitle: 'El workflow de 7 fases que transforma requisitos en software determinístico y listo para producción'
    },
    whyWorks: {
      title: 'Por qué este método funciona',
      subtitle: 'fundamentos científicos y datos experimentales',
      problem: {
        title: 'El problema: Ambigüedad → Alucinación',
        withoutSpec: {
          title: 'Sin especificación determinística:',
          items: [
            '"Crea un sistema de autenticación"',
            '10²⁰ implementaciones posibles',
            'IA elige probabilísticamente',
            '→ 60.4% tasa de alucinación'
          ]
        },
        withSpec: {
          title: 'Con especificación estructurada:',
          items: [
            'Spec Arc42 + BDD + ADR completa',
            'Entropía H ≈ 0.5 bits (vs 18 bits)',
            '~1.4 implementaciones posibles',
            '→ 7.5% tasa de alucinación'
          ]
        },
        footer: 'Reducción del 88% en la tasa de alucinación mediante reducción de entropía (Shannon, 1948)'
      },
      solution1: {
        title: 'Solución 1: Documentation-First Approach',
        why: '¿Por qué?',
        whyText: 'Los modelos de lenguaje son probabilísticos: P(secuencia) = P(t₁) × P(t₂|t₁) × ... × P(tₙ|...)',
        probabilityNote: 'Incluso con 80% de aciertos por token:',
        probabilityCalc: 'P(1000 tokens correctos) = 0.8¹⁰⁰⁰ ≈ 10⁻⁹⁷ (esencialmente cero)',
        how: '¿Cómo?',
        howText: 'Arc42 (12 capítulos) + C4 (3 niveles) + BDD (Given-When-Then) + ADR (decisiones documentadas)',
        result: 'Resultado:',
        resultText: 'Reduce entropía de 18 bits → 0.5 bits = 262.144 posibilidades → 1.4 posibilidades'
      },
      solution2: {
        title: 'Solución 2: Task Decomposition (Phase 3.5)',
        why: '¿Por qué?',
        whyText: 'El mecanismo de atención tiene complejidad O(n²) - contextos grandes causan degradación',
        largeSpec: 'Spec 3.570 líneas (~25.000 tokens):',
        largeSpecOps: '→ 625M operaciones de atención',
        largeSpecLoss: '→ 60% pérdida en medio del contexto ("Lost in the Middle", Liu et al. 2023)',
        smallTask: 'Task 450 líneas (~2.500 tokens):',
        smallTaskOps: '→ 6.25M operaciones por task',
        smallTaskLoss: '→ <5% pérdida de contexto',
        how: '¿Cómo?',
        howText: 'Orchestrator descompone specs en tasks ~100 LOC (Vaswani et al. 2017 - Attention is All You Need)',
        result: 'Resultado:',
        resultText: '10× menos operaciones + foco mantenido = reducción adicional del 62.5% en alucinación'
      },
      solution3: {
        title: 'Solución 3: Test-First Development',
        why: '¿Por qué?',
        whyText: 'Los tests son especificaciones ejecutables que validan comportamiento',
        withoutTests: 'Sin tests: bugs encontrados en producción = 72 (3 meses)',
        withTests: 'Con TDD + ≥80% cobertura: bugs encontrados = 10 (3 meses)',
        reduction: '→ Reducción del 86% en bugs',
        how: '¿Cómo?',
        howText: 'RED (test que falla) → GREEN (implementación mínima) → REFACTOR (mejorar manteniendo verde)'
      },
      solution4: {
        title: 'Solución 4: DDD Tactical Co-Located',
        why: '¿Por qué?',
        whyText: 'La organización por capas técnicas oscurece el dominio y aumenta dispersión de contexto',
        technical: 'Capas técnicas (services/, repositories/, controllers/):',
        technicalNav: '→ IA necesita navegar 3-5 directorios para entender una feature',
        technicalContext: '→ Contexto fragmentado = mayor probabilidad de error',
        colocated: 'DDD Co-Located (src/[contexto]/[container]/[componente]/):',
        colocatedAll: '→ Todo relacionado a la feature en un único lugar',
        colocatedContext: '→ Contexto enfocado = menor probabilidad de error',
        how: '¿Cómo?',
        howText: 'Screaming Architecture + Co-Location + Semantic Names + Flat Structure'
      },
      combined: {
        title: 'Efecto combinado: 98.5% de reducción en alucinación',
        withoutMethod: 'Sin método:',
        withoutValue: '60.4%',
        withoutLabel: 'alucinación',
        plusArc42: '+ Spec Arc42:',
        plusArc42Value: '35.0%',
        plusArc42Label: '(-42%)',
        plusDecomp: '+ Task Decomposition:',
        plusDecompValue: '7.5%',
        plusDecompLabel: '(-88%)',
        plusIteration: '+ Iteración con validación:',
        plusIterationValue: '0.9%',
        plusIterationLabel: '(-98.5%)',
        references: 'Basado en: Shannon (1948), Vaswani et al. (2017), Liu et al. (2023) + experimentos controlados (Crónica 10)'
      }
    },
    workflow: {
      title: 'El workflow de 7 fases',
      subtitle: 'specification → decomposition → implementation → validation',
      phases: [
        {
          number: 1,
          name: 'Discovery',
          agent: 'Analyst',
          input: 'Requisito del usuario (texto, doc, conversación)',
          process: [
            'Entender requisito',
            'Hacer preguntas para aclarar',
            'Evaluar complejidad (LOW/MEDIUM/HIGH)',
            'Generar proposal.md'
          ],
          output: 'changes/[id]/proposal.md con problema, solución, complejidad',
          decision: 'HIGH → Phase 2 (Architecture) | MEDIUM/LOW → Saltar a Phase 3'
        },
        {
          number: 2,
          name: 'Architecture',
          agent: 'Architect • [Solo HIGH]',
          input: 'proposal.md (complejidad HIGH)',
          process: [
            'Diseño de arquitectura del sistema',
            'Crear diagramas C4 (Context, Container, Component)',
            'Identificar bounded contexts',
            'Documentar decisiones clave como ADRs',
            'Generar design.md'
          ],
          output: 'changes/[id]/design.md + ADRs'
        },
        {
          number: 3,
          name: 'Specification',
          agent: 'Analyst',
          input: 'proposal.md (+ design.md si HIGH)',
          process: [
            'Escribir documentación Arc42 (adaptativa por complejidad)',
            'Crear diagramas C4',
            'Escribir escenarios BDD (GIVEN-WHEN-THEN)',
            'Documentar ADRs para decisiones clave',
            'Generar spec.md'
          ],
          output: 'changes/[id]/spec.md (formato OpenSpec delta)'
        },
        {
          number: 3.5,
          name: 'Task Decomposition',
          agent: 'Orchestrator',
          critical: true,
          warning: '⚠️ ESTO ES LO QUE PREVIENE ALUCINACIONES DE IA',
          input: 'spec.md',
          process: [
            'Analizar tamaño y complejidad de la spec',
            'Dividir en tareas atómicas: cada <100 LOC, <2 horas',
            'Definir dependencias claras',
            'Mapear tareas a escenarios BDD',
            'Generar tasks.md'
          ],
          output: 'changes/[id]/tasks.md',
          whyMatters: 'Por qué esto importa:',
          whyItems: [
            '• Contexto grande (5000+ LOC) → Decaimiento de atención O(n²)',
            '• IA pierde foco → Alucinaciones aumentan',
            '• Tareas pequeñas (~100 LOC) → Output determinístico'
          ],
          changesStructure: 'Estructura de la carpeta changes/:',
          changesTree: `changes/[feature-id]/
├── proposal.md       # Problema, solución, complejidad
├── design.md         # Arquitectura (solo HIGH)
├── spec.md           # Arc42 + C4 + BDD + ADR
└── tasks.md          # Tareas atómicas <100 LOC

Cada carpeta changes/ orquesta:
• Especificación completa aislada
• Tasks descompuestas y priorizadas
• Trazabilidad de requisito → código`
        },
        {
          number: 4,
          name: 'Implementation',
          agent: 'Developer + Gatekeeper',
          input: 'changes/[id]/tasks.md',
          process: [
            'Implementar task por task secuencialmente',
            'Escribir tests ANTES de la implementación (TDD)',
            'Aplicar DDD Tactical Co-Located structure',
            'Gatekeeper valida SOLID, Object Calisthenics',
            'Ejecutar tests (≥80% cobertura obligatoria)'
          ],
          output: 'Código implementado + tests pasando'
        },
        {
          number: 5,
          name: 'Validation',
          agent: 'Reviewer + Tester',
          input: 'Código implementado (Phase 4)',
          process: [
            'Reviewer: code review enfocado en calidad, mantenibilidad',
            'Reviewer: validar adherencia a constitution.md',
            'Tester: ejecutar escenarios BDD de la spec',
            'Tester: validar cobertura de tests ≥80%',
            'Tester: verificar edge cases'
          ],
          output: 'Código validado + reporte de calidad'
        },
        {
          number: 6,
          name: 'Documentation',
          agent: 'Documenter',
          input: 'Código validado (Phase 5)',
          process: [
            'Actualizar README con nuevas características',
            'Generar/actualizar documentación de API',
            'Crear guías de migración (si hay breaking changes)',
            'Actualizar CHANGELOG',
            'Sincronizar specs/ con código implementado'
          ],
          output: 'Documentación actualizada y sincronizada'
        },
        {
          number: 7,
          name: 'Pre-Commit Validation',
          agent: 'Guardian',
          input: 'Código + docs actualizados (Phase 6)',
          process: [
            'Validar conformidad con constitution.md',
            'Ejecutar todos los tests (regresión completa)',
            'Verificar linters (cero warnings)',
            'Validar specs/ actualizados',
            'Verificar mapeo BDD → código'
          ],
          output: '✅ Aprobado para commit o ❌ Bloqueado con feedback'
        }
      ],
      processLabel: 'Proceso:',
      inputLabel: 'Input:',
      outputLabel: 'Output:',
      decisionLabel: 'Decisión:'
    },
    criticalPhase: {
      title: 'Phase 3.5: Task decomposition - LA CLAVE',
      why: '¿Por qué?',
      whyText: 'Contexto >5000 líneas = IA pierde foco (decaimiento de atención O(n²))',
      how: '¿Cómo?',
      howText: 'Orchestrator divide specs en tareas <100 LOC',
      result: '¿Resultado?',
      resultText: 'Output determinístico, calidad predecible'
    },
    complexity: {
      title: 'Enfoque orientado a complejidad',
      subtitle: 'no todas las features son iguales - adaptamos el workflow',
      low: {
        badge: 'LOW',
        time: '2-8 horas',
        phases: 'Fases',
        phasesValue: '1 → 3 → 3.5 → 4 → 7',
        chapters: 'Arc42 Chapters',
        chaptersValue: 'Solo 6, 10',
        criteria: 'Criterios',
        criteriaValue: '1 contexto, <5 archivos, patrones establecidos',
        examples: 'Ejemplos: Añadir validación, nuevo campo, pequeño bug fix'
      },
      medium: {
        badge: 'MEDIUM',
        time: '1-3 días',
        phases: 'Fases',
        phasesValue: '1 → 3 → 3.5 → 4 → 5 → 7',
        chapters: 'Arc42 Chapters',
        chaptersValue: '3, 5, 6, 8, 9, 10',
        criteria: 'Criterios',
        criteriaValue: '1-2 contextos, 5-15 archivos, algunos patrones nuevos',
        examples: 'Ejemplos: Nueva feature, módulo, 3-5 use cases'
      },
      high: {
        badge: 'HIGH',
        time: '1-2 semanas',
        phases: 'Fases',
        phasesValue: 'Todas las 7 fases',
        chapters: 'Arc42 Chapters',
        chaptersValue: 'Todos los 12 capítulos',
        criteria: 'Criterios',
        criteriaValue: '3+ contextos, >15 archivos, patrones arquitecturales nuevos',
        examples: 'Ejemplos: Sistema de pagos, autenticación, mensajería'
      }
    },
    references: {
      title: 'Referencias Científicas',
      shannon: {
        title: 'A Mathematical Theory of Communication',
        authors: 'Claude Shannon, 1948 • Teoría de la Información y Entropía',
        cta: 'Leer paper (PDF)'
      },
      vaswani: {
        title: 'Attention Is All You Need',
        authors: 'Vaswani et al., 2017 • Arquitectura Transformer y complejidad O(n²)',
        cta: 'Leer paper (arXiv)'
      },
      liu: {
        title: 'Lost in the Middle: How Language Models Use Long Contexts',
        authors: 'Liu et al., 2023 • Degradación de contexto en modelos de lenguaje',
        cta: 'Leer paper (arXiv)'
      }
    },
    ctas: {
      tooling: {
        title: 'Explorar las herramientas →',
        description: '15 comandos slash, 9 agentes especializados, 39 reglas de calidad y plantillas listas'
      },
      download: {
        title: 'Empezar ahora →',
        description: 'Descarga el scaffold completo e implementa el workflow de 7 fases en tu proyecto'
      }
    }
  }
};

export default function MethodPage() {
  const locale = useLocale() as 'en' | 'pt-BR' | 'es';
  const t = content[locale];

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

          {/* Why This Method Works: Scientific Foundation */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.whyWorks.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.whyWorks.subtitle}
            </p>

            {/* Problem: Ambiguity and Hallucination */}
            <div className="mb-12 border-2 border-white p-6">
              <h3 className="text-xl font-mono text-white mb-6">
                {t.whyWorks.problem.title}
              </h3>
              <div className="space-y-6 text-sm font-mono">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white mb-3">{t.whyWorks.problem.withoutSpec.title}</p>
                    <div className="space-y-2 text-neutral-500">
                      {t.whyWorks.problem.withoutSpec.items.map((item, index) => (
                        <p key={index} className={index === 3 ? 'text-white' : ''}>{item}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-white mb-3">{t.whyWorks.problem.withSpec.title}</p>
                    <div className="space-y-2 text-neutral-500">
                      {t.whyWorks.problem.withSpec.items.map((item, index) => (
                        <p key={index} className={index === 3 ? 'text-white' : ''}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t border-neutral-700 pt-4">
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.problem.footer.split('88%')[0]}88%</span>
                    {t.whyWorks.problem.footer.split('88%')[1]}
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 1: Documentation-First Approach */}
            <div className="mb-12">
              <h3 className="text-lg font-mono text-white mb-6">
                {t.whyWorks.solution1.title}
              </h3>
              <div className="border border-neutral-800 p-6">
                <div className="space-y-4 text-sm font-mono">
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution1.why}</span> {t.whyWorks.solution1.whyText}
                  </p>
                  <div className="border-l-2 border-neutral-700 pl-4 text-neutral-500">
                    <p className="mb-2">{t.whyWorks.solution1.probabilityNote}</p>
                    <p>{t.whyWorks.solution1.probabilityCalc}</p>
                  </div>
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution1.how}</span> {t.whyWorks.solution1.howText}
                  </p>
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution1.result}</span> {t.whyWorks.solution1.resultText}
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 2: Task Decomposition */}
            <div className="mb-12">
              <h3 className="text-lg font-mono text-white mb-6">
                {t.whyWorks.solution2.title}
              </h3>
              <div className="border border-neutral-800 p-6">
                <div className="space-y-4 text-sm font-mono">
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution2.why}</span> {t.whyWorks.solution2.whyText}
                  </p>
                  <div className="border-l-2 border-neutral-700 pl-4 text-neutral-500 space-y-2">
                    <p>{t.whyWorks.solution2.largeSpec}</p>
                    <p>{t.whyWorks.solution2.largeSpecOps}</p>
                    <p>{t.whyWorks.solution2.largeSpecLoss}</p>
                    <p className="mt-2">{t.whyWorks.solution2.smallTask}</p>
                    <p>{t.whyWorks.solution2.smallTaskOps}</p>
                    <p>{t.whyWorks.solution2.smallTaskLoss}</p>
                  </div>
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution2.how}</span> {t.whyWorks.solution2.howText}
                  </p>
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution2.result}</span> {t.whyWorks.solution2.resultText}
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 3: Test-First Development */}
            <div className="mb-12">
              <h3 className="text-lg font-mono text-white mb-6">
                {t.whyWorks.solution3.title}
              </h3>
              <div className="border border-neutral-800 p-6">
                <div className="space-y-4 text-sm font-mono">
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution3.why}</span> {t.whyWorks.solution3.whyText}
                  </p>
                  <div className="border-l-2 border-neutral-700 pl-4 text-neutral-500">
                    <p>{t.whyWorks.solution3.withoutTests}</p>
                    <p>{t.whyWorks.solution3.withTests}</p>
                    <p className="text-white mt-2">{t.whyWorks.solution3.reduction}</p>
                  </div>
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution3.how}</span> {t.whyWorks.solution3.howText}
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 4: DDD Tactical Co-Located */}
            <div className="mb-12">
              <h3 className="text-lg font-mono text-white mb-6">
                {t.whyWorks.solution4.title}
              </h3>
              <div className="border border-neutral-800 p-6">
                <div className="space-y-4 text-sm font-mono">
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution4.why}</span> {t.whyWorks.solution4.whyText}
                  </p>
                  <div className="border-l-2 border-neutral-700 pl-4 text-neutral-500 space-y-2">
                    <p>{t.whyWorks.solution4.technical}</p>
                    <p>{t.whyWorks.solution4.technicalNav}</p>
                    <p>{t.whyWorks.solution4.technicalContext}</p>
                    <p className="mt-2">{t.whyWorks.solution4.colocated}</p>
                    <p>{t.whyWorks.solution4.colocatedAll}</p>
                    <p>{t.whyWorks.solution4.colocatedContext}</p>
                  </div>
                  <p className="text-neutral-400">
                    <span className="text-white">{t.whyWorks.solution4.how}</span> {t.whyWorks.solution4.howText}
                  </p>
                </div>
              </div>
            </div>

            {/* Summary: Combined Effect */}
            <div className="border-2 border-white p-6">
              <h3 className="text-lg font-mono text-white mb-4">
                {t.whyWorks.combined.title}
              </h3>
              <div className="space-y-3 text-sm font-mono text-neutral-400">
                <p>{t.whyWorks.combined.withoutMethod} <span className="text-white">{t.whyWorks.combined.withoutValue}</span> {t.whyWorks.combined.withoutLabel}</p>
                <p>{t.whyWorks.combined.plusArc42} <span className="text-white">{t.whyWorks.combined.plusArc42Value}</span> {t.whyWorks.combined.plusArc42Label}</p>
                <p>{t.whyWorks.combined.plusDecomp} <span className="text-white">{t.whyWorks.combined.plusDecompValue}</span> {t.whyWorks.combined.plusDecompLabel}</p>
                <p>{t.whyWorks.combined.plusIteration} <span className="text-white">{t.whyWorks.combined.plusIterationValue}</span> {t.whyWorks.combined.plusIterationLabel}</p>
                <div className="border-t border-neutral-700 pt-3 mt-3">
                  <p className="text-xs text-neutral-600">
                    {t.whyWorks.combined.references}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 7-Phase Workflow */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.workflow.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.workflow.subtitle}
            </p>

            {t.workflow.phases.map((phase, index) => (
              <div
                key={index}
                className={`mb-12 ${phase.critical ? 'border-2 border-white' : 'border border-neutral-800'} p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-sm font-mono ${phase.critical ? 'text-white' : 'text-neutral-600'}`}>
                    {phase.number}
                  </span>
                  <h3 className="text-lg font-mono text-white">{phase.name}</h3>
                  {phase.critical && (
                    <span className="px-2 py-0.5 bg-red-900/30 border border-red-800/50">
                      <span className="text-xs font-mono text-red-500">CRÍTICO</span>
                    </span>
                  )}
                  <span className={`text-xs font-mono ${phase.critical ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {phase.agent}
                  </span>
                </div>
                <div className="space-y-4 text-sm font-mono">
                  {phase.warning && (
                    <p className="text-white">
                      {phase.warning}
                    </p>
                  )}
                  <p>
                    <span className="text-white">{t.workflow.inputLabel}</span>{' '}
                    <span className={phase.critical ? 'text-neutral-400' : 'text-neutral-500'}>
                      {phase.input}
                    </span>
                  </p>
                  <div>
                    <p className="text-white mb-2">{t.workflow.processLabel}</p>
                    <ol className={`list-decimal list-inside space-y-1 ${phase.critical ? 'text-neutral-400' : 'text-neutral-500'} ml-4`}>
                      {phase.process.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  <p>
                    <span className="text-white">{t.workflow.outputLabel}</span>{' '}
                    <span className={phase.critical ? 'text-neutral-400' : 'text-neutral-500'}>
                      {phase.output}
                    </span>
                  </p>
                  {phase.decision && (
                    <p>
                      <span className="text-white">{t.workflow.decisionLabel}</span>{' '}
                      <span className="text-neutral-500">{phase.decision}</span>
                    </p>
                  )}
                  {phase.whyMatters && (
                    <div className="border-t border-neutral-700 pt-4 mt-4">
                      <p className="text-white mb-2">{phase.whyMatters}</p>
                      <ul className="space-y-1 text-neutral-400">
                        {phase.whyItems?.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {phase.changesStructure && (
                    <div className="border-t border-neutral-700 pt-4 mt-4">
                      <p className="text-white mb-3">{phase.changesStructure}</p>
                      <div className="border border-neutral-800 bg-black p-4">
                        <pre className="text-xs font-mono text-neutral-500">
                          <code>{phase.changesTree}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Critical Phase Callout */}
          <div className="mb-32">
            <div className="border border-white p-8">
              <h3 className="text-lg font-mono text-white mb-6">
                {t.criticalPhase.title}
              </h3>
              <div className="space-y-3 text-sm font-mono text-neutral-400">
                <p>
                  <span className="text-white">{t.criticalPhase.why}</span> {t.criticalPhase.whyText}
                </p>
                <p>
                  <span className="text-white">{t.criticalPhase.how}</span> {t.criticalPhase.howText}
                </p>
                <p>
                  <span className="text-white">{t.criticalPhase.result}</span> {t.criticalPhase.resultText}
                </p>
              </div>
            </div>
          </div>

          {/* Complexity-Driven Approach */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.complexity.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.complexity.subtitle}
            </p>

            {/* Complexity Cards */}
            <div className="grid gap-6 mb-12">
              {/* LOW */}
              <div className="border border-neutral-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-2 py-0.5 bg-green-900/30 border border-green-800/50">
                    <span className="text-xs font-mono text-green-500">{t.complexity.low.badge}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-600 ml-auto">{t.complexity.low.time}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm font-mono">
                  <div>
                    <p className="text-neutral-600 mb-2">{t.complexity.low.phases}</p>
                    <p className="text-neutral-400">{t.complexity.low.phasesValue}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600 mb-2">{t.complexity.low.chapters}</p>
                    <p className="text-neutral-400">{t.complexity.low.chaptersValue}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600 mb-2">{t.complexity.low.criteria}</p>
                    <p className="text-neutral-400">{t.complexity.low.criteriaValue}</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-neutral-600 mt-4">
                  {t.complexity.low.examples}
                </p>
              </div>

              {/* MEDIUM */}
              <div className="border border-neutral-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-2 py-0.5 bg-yellow-900/30 border border-yellow-800/50">
                    <span className="text-xs font-mono text-yellow-500">{t.complexity.medium.badge}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-600 ml-auto">{t.complexity.medium.time}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm font-mono">
                  <div>
                    <p className="text-neutral-600 mb-2">{t.complexity.medium.phases}</p>
                    <p className="text-neutral-400">{t.complexity.medium.phasesValue}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600 mb-2">{t.complexity.medium.chapters}</p>
                    <p className="text-neutral-400">{t.complexity.medium.chaptersValue}</p>
                  </div>
                  <div>
                    <p className="text-neutral-600 mb-2">{t.complexity.medium.criteria}</p>
                    <p className="text-neutral-400">{t.complexity.medium.criteriaValue}</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-neutral-600 mt-4">
                  {t.complexity.medium.examples}
                </p>
              </div>

              {/* HIGH */}
              <div className="border border-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-2 py-0.5 bg-red-900/30 border border-red-800/50">
                    <span className="text-xs font-mono text-red-500">{t.complexity.high.badge}</span>
                  </div>
                  <span className="text-xs font-mono text-white ml-auto">{t.complexity.high.time}</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm font-mono">
                  <div>
                    <p className="text-neutral-400 mb-2">{t.complexity.high.phases}</p>
                    <p className="text-white">{t.complexity.high.phasesValue}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-2">{t.complexity.high.chapters}</p>
                    <p className="text-white">{t.complexity.high.chaptersValue}</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-2">{t.complexity.high.criteria}</p>
                    <p className="text-white">{t.complexity.high.criteriaValue}</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-neutral-400 mt-4">
                  {t.complexity.high.examples}
                </p>
              </div>
            </div>

          </div>

          {/* Scientific References */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              {t.references.title}
            </h2>

            <div className="space-y-8">
              {/* Shannon 1948 */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-base font-mono text-white mb-2">
                  {t.references.shannon.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500 mb-4">
                  {t.references.shannon.authors}
                </p>
                <a
                  href="https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  {t.references.shannon.cta}
                </a>
              </div>

              {/* Vaswani et al 2017 */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-base font-mono text-white mb-2">
                  {t.references.vaswani.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500 mb-4">
                  {t.references.vaswani.authors}
                </p>
                <a
                  href="https://arxiv.org/abs/1706.03762"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  {t.references.vaswani.cta}
                </a>
              </div>

              {/* Liu et al 2023 */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-base font-mono text-white mb-2">
                  {t.references.liu.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500 mb-4">
                  {t.references.liu.authors}
                </p>
                <a
                  href="https://arxiv.org/abs/2307.03172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-400 font-mono text-xs hover:border-neutral-600 hover:text-neutral-300 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  {t.references.liu.cta}
                </a>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-32">
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/tooling"
                className="block border border-neutral-800 p-6 hover:border-white transition-colors group"
              >
                <h3 className="text-base font-mono text-white mb-2 group-hover:text-white">
                  {t.ctas.tooling.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500">
                  {t.ctas.tooling.description}
                </p>
              </Link>

              <Link
                href="/download"
                className="block border border-neutral-800 p-6 hover:border-white transition-colors group"
              >
                <h3 className="text-base font-mono text-white mb-2 group-hover:text-white">
                  {t.ctas.download.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500">
                  {t.ctas.download.description}
                </p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
