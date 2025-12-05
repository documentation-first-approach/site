'use client';

import Link from 'next/link';
import { Download, Github } from 'lucide-react';
import { useLocale } from 'next-intl';

const content = {
  'en': {
    title: 'Download | Documentation-First Approach',
    description: 'Download the complete .claude/ scaffold with commands, agents, templates and quality rules.',
    header: {
      title: 'Download',
      subtitle: 'Get everything you need to start building with the Documentation-First Approach'
    },
    getScaffold: {
      title: 'Get the scaffold',
      subtitle: 'works with any language and stack - TypeScript, Python, Go, Rust, Java, or any other'
    },
    downloadButton: {
      title: 'documentation-first-approach.zip',
      subtitle: 'Complete scaffold with 15 commands, 9 agents, 39 quality rules and templates',
      cta: 'download .zip'
    },
    githubAlt: {
      title: 'Clone from GitHub',
      subtitle: 'Prefer to clone directly from the repository?',
      cta: 'view on GitHub'
    },
    packageContents: {
      title: 'Package contents',
      subtitle: 'complete project structure with 15 commands, 9 agents, 39 quality rules and all templates',
      items: [
        {
          path: '.claude/constitution.md',
          description: 'Governance principles and documentation-first process rules'
        },
        {
          path: '.claude/commands/',
          description: '(15) Slash commands - vision, stack, actor, container, component, plan, rule, feature, flow, build, cross, adr, code, import, stats'
        },
        {
          path: '.claude/skills/',
          description: '(9) Specialized agents - analyst, architect, orchestrator, developer, gatekeeper, reviewer, tester, documenter, guardian'
        },
        {
          path: '.claude/templates/',
          description: 'Arc42 templates (12 chapters), C4 diagrams (Context, Container, Component), BDD scenarios (Given-When-Then), ADR (MADR format)'
        },
        {
          path: '.claude/rules/',
          description: '(39) Grouped quality rules - SOLID (5), Object Calisthenics (9), Clean Code (10), DDD Tactical (8), Functional Programming (7)'
        },
        {
          path: 'CLAUDE.md',
          description: 'Complete Claude Code usage guide and framework instructions'
        },
        {
          path: 'README.md',
          description: 'Quick start and project overview'
        }
      ]
    },
    whatsNew: {
      title: "What's new in v3.0.0",
      items: [
        'Added orchestrator agent (critical for task decomposition)',
        '5 new quality rules (functional programming patterns)',
        'Updated Arc42 templates (adaptive complexity)',
        'Gatekeeper validation performance improvements',
        'Dark mode support in all templates'
      ]
    },
    howToInstall: {
      title: 'How to install',
      subtitle: 'three simple steps to get started',
      step1: {
        title: '1. Download the scaffold',
        description: 'Download the .zip or clone from GitHub'
      },
      step2: {
        title: '2. Copy to your project',
        description: 'Extract and copy the .claude/ directory to your project root'
      },
      step3: {
        title: '3. Start using',
        description: 'Start Claude Code and use the commands'
      }
    },
    systemRequirements: {
      title: 'System requirements',
      essential: {
        title: 'Essential',
        items: [
          'Claude Code CLI installed (npm install -g @anthropic/claude-code)',
          'Anthropic API Key (console.anthropic.com)',
          'Git 2.30+ for version control',
          'Code editor of your choice'
        ]
      },
      stack: {
        title: 'For your language/stack',
        items: [
          'Appropriate runtime (Node.js, Python, Go, Rust, Java, etc.)',
          'Package manager for your stack (npm, pip, cargo, maven, etc.)',
          'Test framework for your stack (vitest, pytest, etc.)',
          'Linter/formatter for your stack (biome, black, clippy, etc.)'
        ]
      },
      note: 'Documentation-First Approach is language-agnostic and works with any tech stack you use.'
    },
    ctas: {
      getStarted: {
        title: 'Get started now →',
        description: 'Step-by-step tutorial: from installation to your first feature in 5 minutes'
      },
      why: {
        title: 'Why does this work? →',
        description: 'Understand the science: information theory, O(n²) complexity and 98.5% reduction in hallucinations'
      }
    }
  },
  'pt-BR': {
    title: 'Download | Documentation-First Approach',
    description: 'Baixe o scaffold completo .claude/ com commands, agents, templates e quality rules.',
    header: {
      title: 'Download',
      subtitle: 'Obtenha tudo que você precisa para começar a construir com a Documentation-First Approach'
    },
    getScaffold: {
      title: 'Obter o scaffold',
      subtitle: 'funciona com qualquer linguagem e stack - TypeScript, Python, Go, Rust, Java, ou qualquer outra'
    },
    downloadButton: {
      title: 'documentation-first-approach.zip',
      subtitle: 'Scaffold completo com 15 commands, 9 agents, 39 quality rules e templates',
      cta: 'baixar .zip'
    },
    githubAlt: {
      title: 'Clone do GitHub',
      subtitle: 'Prefere clonar direto do repositório?',
      cta: 'ver no GitHub'
    },
    packageContents: {
      title: 'Conteúdo do pacote',
      subtitle: 'estrutura completa de projeto com 15 commands, 9 agents, 39 quality rules e todos os templates',
      items: [
        {
          path: '.claude/constitution.md',
          description: 'Princípios de governança e regras do processo documentation-first'
        },
        {
          path: '.claude/commands/',
          description: '(15) Slash commands - vision, stack, actor, container, component, plan, rule, feature, flow, build, cross, adr, code, import, stats'
        },
        {
          path: '.claude/skills/',
          description: '(9) Agents especializados - analyst, architect, orchestrator, developer, gatekeeper, reviewer, tester, documenter, guardian'
        },
        {
          path: '.claude/templates/',
          description: 'Templates Arc42 (12 capítulos), C4 diagrams (Context, Container, Component), BDD scenarios (Given-When-Then), ADR (MADR format)'
        },
        {
          path: '.claude/rules/',
          description: '(39) Quality rules agrupadas - SOLID (5), Object Calisthenics (9), Clean Code (10), DDD Tactical (8), Functional Programming (7)'
        },
        {
          path: 'CLAUDE.md',
          description: 'Guia completo de uso do Claude Code e instruções do framework'
        },
        {
          path: 'README.md',
          description: 'Quick start e visão geral do projeto'
        }
      ]
    },
    whatsNew: {
      title: 'Novidades na v3.0.0',
      items: [
        'Adicionado agent orchestrator (crítico para task decomposition)',
        '5 novas quality rules (padrões de programação funcional)',
        'Templates Arc42 atualizados (complexidade adaptativa)',
        'Melhorias de performance na validação do gatekeeper',
        'Suporte dark mode em todos os templates'
      ]
    },
    howToInstall: {
      title: 'Como instalar',
      subtitle: 'três passos simples para começar',
      step1: {
        title: '1. Baixe o scaffold',
        description: 'Faça download do .zip ou clone do GitHub'
      },
      step2: {
        title: '2. Copie para seu projeto',
        description: 'Extraia e copie o diretório .claude/ para a raiz do seu projeto'
      },
      step3: {
        title: '3. Comece a usar',
        description: 'Inicie o Claude Code e use os comandos'
      }
    },
    systemRequirements: {
      title: 'Requisitos do sistema',
      essential: {
        title: 'Essencial',
        items: [
          'Claude Code CLI instalado (npm install -g @anthropic/claude-code)',
          'API Key da Anthropic (console.anthropic.com)',
          'Git 2.30+ para controle de versão',
          'Editor de código de sua preferência'
        ]
      },
      stack: {
        title: 'Para sua linguagem/stack',
        items: [
          'Runtime apropriado (Node.js, Python, Go, Rust, Java, etc.)',
          'Package manager da sua stack (npm, pip, cargo, maven, etc.)',
          'Framework de testes da sua stack (vitest, pytest, etc.)',
          'Linter/formatter da sua stack (biome, black, clippy, etc.)'
        ]
      },
      note: 'A Documentation-First Approach é agnóstica de linguagem e funciona com qualquer stack tecnológica que você use.'
    },
    ctas: {
      getStarted: {
        title: 'Começar agora →',
        description: 'Tutorial passo a passo: da instalação até sua primeira feature em 5 minutos'
      },
      why: {
        title: 'Por que isso funciona? →',
        description: 'Entenda a ciência: teoria da informação, complexidade O(n²) e redução de 98.5% em alucinações'
      }
    }
  },
  'es': {
    title: 'Descargar | Documentation-First Approach',
    description: 'Descarga el scaffold completo .claude/ con comandos, agentes, plantillas y reglas de calidad.',
    header: {
      title: 'Descargar',
      subtitle: 'Obtén todo lo que necesitas para empezar a construir con Documentation-First Approach'
    },
    getScaffold: {
      title: 'Obtener el scaffold',
      subtitle: 'funciona con cualquier lenguaje y stack - TypeScript, Python, Go, Rust, Java, o cualquier otro'
    },
    downloadButton: {
      title: 'documentation-first-approach.zip',
      subtitle: 'Scaffold completo con 15 comandos, 9 agentes, 39 reglas de calidad y plantillas',
      cta: 'descargar .zip'
    },
    githubAlt: {
      title: 'Clonar desde GitHub',
      subtitle: '¿Prefieres clonar directamente del repositorio?',
      cta: 'ver en GitHub'
    },
    packageContents: {
      title: 'Contenido del paquete',
      subtitle: 'estructura completa de proyecto con 15 comandos, 9 agentes, 39 reglas de calidad y todas las plantillas',
      items: [
        {
          path: '.claude/constitution.md',
          description: 'Principios de gobernanza y reglas del proceso documentation-first'
        },
        {
          path: '.claude/commands/',
          description: '(15) Comandos slash - vision, stack, actor, container, component, plan, rule, feature, flow, build, cross, adr, code, import, stats'
        },
        {
          path: '.claude/skills/',
          description: '(9) Agentes especializados - analyst, architect, orchestrator, developer, gatekeeper, reviewer, tester, documenter, guardian'
        },
        {
          path: '.claude/templates/',
          description: 'Plantillas Arc42 (12 capítulos), diagramas C4 (Context, Container, Component), escenarios BDD (Given-When-Then), ADR (formato MADR)'
        },
        {
          path: '.claude/rules/',
          description: '(39) Reglas de calidad agrupadas - SOLID (5), Object Calisthenics (9), Clean Code (10), DDD Tactical (8), Functional Programming (7)'
        },
        {
          path: 'CLAUDE.md',
          description: 'Guía completa de uso de Claude Code e instrucciones del framework'
        },
        {
          path: 'README.md',
          description: 'Quick start y visión general del proyecto'
        }
      ]
    },
    whatsNew: {
      title: 'Novedades en v3.0.0',
      items: [
        'Añadido agente orchestrator (crítico para descomposición de tareas)',
        '5 nuevas reglas de calidad (patrones de programación funcional)',
        'Plantillas Arc42 actualizadas (complejidad adaptativa)',
        'Mejoras de rendimiento en validación del gatekeeper',
        'Soporte de modo oscuro en todas las plantillas'
      ]
    },
    howToInstall: {
      title: 'Cómo instalar',
      subtitle: 'tres pasos simples para empezar',
      step1: {
        title: '1. Descargar el scaffold',
        description: 'Descarga el .zip o clona desde GitHub'
      },
      step2: {
        title: '2. Copiar a tu proyecto',
        description: 'Extrae y copia el directorio .claude/ a la raíz de tu proyecto'
      },
      step3: {
        title: '3. Empezar a usar',
        description: 'Inicia Claude Code y usa los comandos'
      }
    },
    systemRequirements: {
      title: 'Requisitos del sistema',
      essential: {
        title: 'Esencial',
        items: [
          'Claude Code CLI instalado (npm install -g @anthropic/claude-code)',
          'API Key de Anthropic (console.anthropic.com)',
          'Git 2.30+ para control de versiones',
          'Editor de código de tu elección'
        ]
      },
      stack: {
        title: 'Para tu lenguaje/stack',
        items: [
          'Runtime apropiado (Node.js, Python, Go, Rust, Java, etc.)',
          'Gestor de paquetes para tu stack (npm, pip, cargo, maven, etc.)',
          'Framework de pruebas para tu stack (vitest, pytest, etc.)',
          'Linter/formatter para tu stack (biome, black, clippy, etc.)'
        ]
      },
      note: 'Documentation-First Approach es agnóstico del lenguaje y funciona con cualquier stack tecnológico que uses.'
    },
    ctas: {
      getStarted: {
        title: 'Empezar ahora →',
        description: 'Tutorial paso a paso: desde la instalación hasta tu primera feature en 5 minutos'
      },
      why: {
        title: '¿Por qué funciona esto? →',
        description: 'Entiende la ciencia: teoría de la información, complejidad O(n²) y reducción del 98.5% en alucinaciones'
      }
    }
  }
};

export default function DownloadPage() {
  const locale = useLocale() as 'en' | 'pt-BR' | 'es';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-black py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-mono font-normal text-white mb-6">
              {t.header.title}
            </h1>
            <p className="text-base font-mono text-neutral-500 leading-relaxed">
              {t.header.subtitle}
            </p>
          </div>

          {/* Download Options */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.getScaffold.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.getScaffold.subtitle}
            </p>

            {/* Download button */}
            <div className="border border-white p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-mono text-white mb-2">
                    {t.downloadButton.title}
                  </h3>
                  <p className="text-sm font-mono text-neutral-500">
                    {t.downloadButton.subtitle}
                  </p>
                </div>
                <a
                  href="/documentation-first-approach.zip"
                  download
                  className="inline-flex items-center gap-2 justify-center px-8 py-3 bg-white text-black font-mono text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap"
                >
                  <Download className="h-4 w-4" />
                  {t.downloadButton.cta}
                </a>
              </div>
            </div>

            {/* GitHub alternative */}
            <div className="border border-neutral-800 p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-mono text-white mb-2">
                    {t.githubAlt.title}
                  </h3>
                  <p className="text-sm font-mono text-neutral-500 mb-3">
                    {t.githubAlt.subtitle}
                  </p>
                  <code className="text-xs font-mono text-neutral-600">
                    git clone https://github.com/deMGoncalves/documentation-first-approach.git
                  </code>
                </div>
                <a
                  href="https://github.com/deMGoncalves/documentation-first-approach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 justify-center px-8 py-3 border border-neutral-800 text-neutral-400 font-mono text-sm hover:border-neutral-600 hover:text-neutral-300 transition-colors whitespace-nowrap"
                >
                  <Github className="h-4 w-4" />
                  {t.githubAlt.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Package Contents */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.packageContents.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.packageContents.subtitle}
            </p>
            <div className="space-y-6">
              {t.packageContents.items.map((item, index) => (
                <div key={index} className="border-l-2 border-neutral-800 pl-6">
                  <h3 className="text-base font-mono text-white mb-1">
                    {item.path}
                  </h3>
                  <p className="text-sm font-mono text-neutral-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What's New */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              {t.whatsNew.title}
            </h2>
            <div className="space-y-6">
              {t.whatsNew.items.map((item, index) => (
                <div key={index} className="border-l-2 border-neutral-800 pl-6">
                  <p className="text-base font-mono text-neutral-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Installation Methods */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.howToInstall.title}
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              {t.howToInstall.subtitle}
            </p>

            <div className="space-y-8">
              {/* Step 1: Download */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-base font-mono text-white mb-3">
                  {t.howToInstall.step1.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500 mb-4">
                  {t.howToInstall.step1.description}
                </p>
                <div className="border border-neutral-800 bg-black p-4">
                  <code className="text-sm font-mono text-neutral-500">
                    # {t.howToInstall.step1.title.slice(3)}
                    <br />
                    $ unzip documentation-first-approach.zip
                    <br />
                    <br />
                    # {t.howToInstall.step1.description.split('ou')[1] || 'Clone from GitHub'}
                    <br />
                    $ git clone https://github.com/deMGoncalves/documentation-first-approach.git
                  </code>
                </div>
              </div>

              {/* Step 2: Copy to project */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-base font-mono text-white mb-3">
                  {t.howToInstall.step2.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500 mb-4">
                  {t.howToInstall.step2.description}
                </p>
                <div className="border border-neutral-800 bg-black p-4">
                  <code className="text-sm font-mono text-neutral-500">
                    $ cp -r .claude /path/to/your/project/
                    <br />
                    $ cp CLAUDE.md /path/to/your/project/
                    <br />
                    <br />
                    # Your project structure:
                    <br />
                    your-project/
                    <br />
                    ├── .claude/          ← New!
                    <br />
                    ├── CLAUDE.md         ← New!
                    <br />
                    ├── specs/            ← Will be created
                    <br />
                    └── src/              ← Your code
                  </code>
                </div>
              </div>

              {/* Step 3: Start using */}
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-base font-mono text-white mb-3">
                  {t.howToInstall.step3.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500 mb-4">
                  {t.howToInstall.step3.description}
                </p>
                <div className="border border-neutral-800 bg-black p-4">
                  <code className="text-sm font-mono text-neutral-500">
                    $ claude
                    <br />
                    <br />
                    You: /vision Create a task management app
                    <br />
                    You: /feature User can create tasks
                    <br />
                    You: /code
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              {t.systemRequirements.title}
            </h2>
            <div className="border border-neutral-800 p-6">
              <div className="space-y-6 text-sm font-mono">
                <div>
                  <p className="text-white mb-3">{t.systemRequirements.essential.title}</p>
                  <ul className="space-y-2 text-neutral-500">
                    {t.systemRequirements.essential.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-white mb-3">{t.systemRequirements.stack.title}</p>
                  <ul className="space-y-2 text-neutral-500">
                    {t.systemRequirements.stack.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs text-neutral-600 italic">
                    {t.systemRequirements.note}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-32">
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/getting-started"
                className="block border border-neutral-800 p-6 hover:border-white transition-colors group"
              >
                <h3 className="text-base font-mono text-white mb-2 group-hover:text-white">
                  {t.ctas.getStarted.title}
                </h3>
                <p className="text-sm font-mono text-neutral-500">
                  {t.ctas.getStarted.description}
                </p>
              </Link>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
