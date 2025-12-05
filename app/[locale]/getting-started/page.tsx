'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, Terminal, Key, GitBranch, Code2, AlertCircle, Settings, TestTube, FileText, FolderGit, BookOpen, Wrench, Users, GraduationCap, BookText, BarChart } from 'lucide-react';

export default function GettingStartedPage() {
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('getting-started-progress');
    return saved ? JSON.parse(saved) : [];
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (completedSteps.length > 0) {
      localStorage.setItem('getting-started-progress', JSON.stringify(completedSteps));
    } else {
      localStorage.removeItem('getting-started-progress');
    }
  }, [completedSteps]);

  const toggleStep = (step: number) => {
    setCompletedSteps((prev) =>
      prev.includes(step) ? prev.filter((s) => s !== step) : [...prev, step]
    );
  };

  const resetProgress = () => {
    setCompletedSteps([]);
    localStorage.removeItem('getting-started-progress');
  };

  const progress = Math.round((completedSteps.length / 3) * 100);
  const prerequisites = [
    {
      icon: Terminal,
      title: 'Claude Code CLI instalado',
      detail: 'npm install -g @anthropic/claude-code',
    },
    {
      icon: Key,
      title: 'API Key da Anthropic',
      detail: 'https://console.anthropic.com',
    },
    {
      icon: GitBranch,
      title: 'Repositório Git',
      detail: 'Projeto existente ou novo',
    },
    {
      icon: Code2,
      title: 'Sua linguagem/framework preferido',
      detail: 'Funciona com qualquer stack',
    },
  ];

  const commands = [
    { command: '/vision', description: 'Define visão e objetivos do projeto' },
    { command: '/stack', description: 'Define tech stack e constraints' },
    { command: '/feature', description: 'Cria uma nova feature (cenário BDD)' },
    { command: '/code', description: 'Implementa código a partir das especificações' },
    { command: '/actor', description: 'Documenta um ator/sistema externo' },
    { command: '/container', description: 'Documenta um building block de alto nível' },
    { command: '/component', description: 'Documenta um módulo de código' },
    { command: '/rule', description: 'Cria/atualiza uma quality rule' },
    { command: '/adr', description: 'Cria um architecture decision record' },
  ];

  const troubleshooting = [
    {
      icon: AlertCircle,
      question: 'Claude não reconhece os commands',
      solution: 'Garanta que CLAUDE.md está na raiz do projeto e o diretório .claude/ existe. Reinicie o Claude Code CLI.',
    },
    {
      icon: Settings,
      question: 'Código gerado não combina com meu estilo',
      solution: 'Customize .claude/rules/ com seus padrões de código e atualize constitution.md com seus princípios.',
    },
    {
      icon: TestTube,
      question: 'Testes estão falhando após implementação',
      solution: 'Verifique cenários BDD na spec. Garanta que o framework de testes está configurado corretamente. Execute o orchestrator para quebrar em tarefas menores.',
    },
    {
      icon: FileText,
      question: 'Specs estão muito verbosas / não detalhadas o suficiente',
      solution: 'Ajuste complexidade em constitution.md: LOW = capítulos mínimos (apenas 6, 10), MEDIUM = padrão (3, 5, 6, 8, 9, 10), HIGH = todos os 12 capítulos Arc42.',
    },
    {
      icon: FolderGit,
      question: 'Como migro um projeto existente?',
      solution: 'Comece com /vision para documentar o sistema existente. Use /container para documentar cada componente principal. Refatore gradualmente usando documentation-first. Veja receita: "Migrating Legacy Code".',
    },
  ];

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
                  Começando
                </h1>
            <p className="text-base font-mono text-neutral-500 leading-relaxed mb-6">
              Fique pronto em apenas 5 minutos
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-neutral-600">
              <span>⏱️ Tempo até primeira feature: ~5 minutos</span>
              <span>📦 Sem setup complexo necessário</span>
              <span>🚀 Funciona com seu projeto existente</span>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              Pré-requisitos
            </h2>
            <div className="space-y-6">
              {prerequisites.map((prereq, index) => {
                const Icon = prereq.icon;
                return (
                  <div key={index} className="border-l-2 border-neutral-800 pl-6">
                    <div className="flex items-start gap-4">
                      <Icon className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-base font-mono text-white mb-1">
                          {prereq.title}
                        </h3>
                        <p className="text-sm font-mono text-neutral-500">
                          {prereq.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Start: 3 Steps */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              Quick start: 3 passos
            </h2>

            {/* Step 1 */}
            <div className="mb-12">
              <div className="border-l-2 border-white pl-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono text-neutral-600">1</span>
                  <h3 className="text-lg font-mono text-white">
                    Baixe o scaffold
                  </h3>
                </div>
                <p className="text-sm font-mono text-neutral-500">
                  Baixe o pacote .claude/ que funciona com qualquer linguagem
                </p>
              </div>
              <div className="pl-6">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center px-6 py-2 bg-white text-black font-mono text-sm hover:bg-neutral-200 transition-colors mb-4"
                >
                  ir para página de download →
                </Link>
                <p className="text-sm font-mono text-neutral-600 mt-4 mb-6">
                  ✅ Você deve ter agora um diretório <code className="text-neutral-500">.claude/</code>
                </p>
                <button
                  onClick={() => toggleStep(1)}
                  className={`px-4 py-2 border font-mono text-sm transition-colors cursor-pointer ${
                    completedSteps.includes(1)
                      ? 'border-white bg-white text-black'
                      : 'border-neutral-800 text-neutral-500 hover:border-neutral-600'
                  }`}
                >
                  {completedSteps.includes(1) ? '✓ Finalizado' : 'Marcar como finalizado'}
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <div className="border-l-2 border-white pl-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono text-neutral-600">2</span>
                  <h3 className="text-lg font-mono text-white">
                    Configure seu projeto
                  </h3>
                </div>
                <p className="text-sm font-mono text-neutral-500">
                  Extraia e copie para seu projeto, customize a constitution
                </p>
              </div>
              <div className="border border-neutral-800 bg-black p-4">
                <pre className="text-sm font-mono text-neutral-500">
                  <code>{`$ unzip documentation-first-approach.zip
$ cp -r .claude /path/to/your/project/
$ cp CLAUDE.md /path/to/your/project/

# Your project structure:
your-project/
├── .claude/          ← New!
├── CLAUDE.md         ← New!
├── specs/            ← Will be created
└── src/              ← Your code`}</code>
                </pre>
              </div>
              <div className="pl-6">
                <p className="text-sm font-mono text-neutral-600 mt-4 mb-6">
                  ✅ Setup completo! Pronto para criar sua primeira feature
                </p>
                <button
                  onClick={() => toggleStep(2)}
                  className={`px-4 py-2 border font-mono text-sm transition-colors cursor-pointer ${
                    completedSteps.includes(2)
                      ? 'border-white bg-white text-black'
                      : 'border-neutral-800 text-neutral-500 hover:border-neutral-600'
                  }`}
                >
                  {completedSteps.includes(2) ? '✓ Finalizado' : 'Marcar como finalizado'}
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="border-l-2 border-white pl-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono text-neutral-600">3</span>
                  <h3 className="text-lg font-mono text-white">
                    Crie sua primeira feature
                  </h3>
                </div>
                <p className="text-sm font-mono text-neutral-500">
                  Use os commands /vision e /feature para começar a construir
                </p>
              </div>

              {/* Sub-step 3.1 */}
              <div className="pl-6 mb-6">
                <p className="text-sm font-mono text-neutral-600 mb-3">
                  3.1. Inicie o Claude Code:
                </p>
                <div className="border border-neutral-800 bg-black p-4">
                  <pre className="text-sm font-mono text-neutral-500">
                    <code>$ claude</code>
                  </pre>
                </div>
              </div>

              {/* Sub-step 3.2 */}
              <div className="pl-6 mb-6">
                <p className="text-sm font-mono text-neutral-600 mb-3">
                  3.2. Defina sua visão (se projeto novo):
                </p>
                <div className="border border-neutral-800 bg-black p-4">
                  <pre className="text-sm font-mono text-neutral-500">
                    <code>{`You: /vision Create a task management app with user
     authentication, CRUD operations, and real-time
     updates

Claude: [Creates specs/01_introduction/...]`}</code>
                  </pre>
                </div>
              </div>

              {/* Sub-step 3.3 */}
              <div className="pl-6 mb-6">
                <p className="text-sm font-mono text-neutral-600 mb-3">
                  3.3. Crie sua primeira feature:
                </p>
                <div className="border border-neutral-800 bg-black p-4">
                  <pre className="text-sm font-mono text-neutral-500">
                    <code>{`You: /feature User can create a new task with title,
     description, and due date

Claude: [Analyzes requirement]
        Complexity: LOW
        Creating specification...
        → changes/create-task-001/proposal.md
        → changes/create-task-001/spec.md
        → changes/create-task-001/tasks.md
        Ready to implement!`}</code>
                  </pre>
                </div>
              </div>

              {/* Sub-step 3.4 */}
              <div className="pl-6 mb-6">
                <p className="text-sm font-mono text-neutral-600 mb-3">
                  3.4. Implemente a feature:
                </p>
                <div className="border border-neutral-800 bg-black p-4">
                  <pre className="text-sm font-mono text-neutral-500">
                    <code>{`You: /code

Claude: [Reads spec, generates tasks, implements]
        ✅ Task 1: Create Task entity
        ✅ Task 2: Create task factory
        ✅ Task 3: Create use case
        ✅ Task 4: Write tests
        ✅ All tests passing (95% coverage)
        Feature complete!`}</code>
                  </pre>
                </div>
              </div>

              {/* Sub-step 3.5 */}
              <div className="pl-6 mb-6">
                <p className="text-sm font-mono text-neutral-600 mb-3">
                  3.5. Revise o código gerado:
                </p>
                <div className="border border-neutral-800 bg-black p-4">
                  <pre className="text-sm font-mono text-neutral-500">
                    <code>{`src/task-management/tasks/task/
├── index.ts                 # Exports
├── criar-task.ts            # Factory
├── registrar-task.ts        # Use case
├── Task.ts                  # Entity
└── task.spec.ts             # Tests (95% coverage)`}</code>
                  </pre>
                </div>
              </div>

              {/* Celebration */}
              <div className="pl-6 border border-white p-6 mb-6">
                <p className="text-base font-mono text-white mb-2">
                  🎉 Parabéns!
                </p>
                <p className="text-sm font-mono text-neutral-500">
                  Você acabou de criar sua primeira feature usando a Documentation-First Approach!
                </p>
              </div>

              {/* Mark as complete button */}
              <div className="pl-6">
                <button
                  onClick={() => toggleStep(3)}
                  className={`px-4 py-2 border font-mono text-sm transition-colors cursor-pointer ${
                    completedSteps.includes(3)
                      ? 'border-white bg-white text-black'
                      : 'border-neutral-800 text-neutral-500 hover:border-neutral-600'
                  }`}
                >
                  {completedSteps.includes(3) ? '✓ Finalizado' : 'Marcar como finalizado'}
                </button>
              </div>
            </div>
          </div>

          {/* Command Cheat Sheet */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              Cheat sheet de commands
            </h2>
            <p className="text-sm font-mono text-neutral-600 mb-12">
              commands essenciais para começar
            </p>
            <div className="space-y-4">
              {commands.map((cmd, index) => (
                <div key={index} className="border-l-2 border-neutral-800 pl-6">
                  <div className="flex items-start gap-3">
                    <code className="text-sm font-mono text-white">
                      {cmd.command}
                    </code>
                    <span className="text-sm font-mono text-neutral-500">
                      {cmd.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/tooling"
                className="text-sm font-mono text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-4"
              >
                ver todos os 15 commands →
              </Link>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              Solução de problemas
            </h2>
            <div className="space-y-8">
              {troubleshooting.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="border-l-2 border-neutral-800 pl-6">
                    <div className="flex items-start gap-4">
                      <Icon className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-base font-mono text-white mb-2">
                          {item.question}
                        </h3>
                        <p className="text-sm font-mono text-neutral-500 leading-relaxed">
                          <span className="text-neutral-600">Solution:</span> {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What's Next */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              O que vem depois?
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-800 pl-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-mono text-white mb-2">
                      Aprender fundamentos
                    </h3>
                    <p className="text-sm font-mono text-neutral-500 mb-3">
                      Entenda os frameworks Arc42, C4, BDD e ADR
                    </p>
                    <Link
                      href="/foundations"
                      className="text-sm font-mono text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-4"
                    >
                      ler documentação →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <div className="flex items-start gap-4">
                  <Wrench className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-mono text-white mb-2">
                      Explorar ferramentas
                    </h3>
                    <p className="text-sm font-mono text-neutral-500 mb-3">
                      15 commands, 9 agents, 39 quality rules
                    </p>
                    <Link
                      href="/tooling"
                      className="text-sm font-mono text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-4"
                    >
                      ver ferramentas →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-mono text-white mb-2">
                      Entrar na comunidade
                    </h3>
                    <p className="text-sm font-mono text-neutral-500 mb-3">
                      Discord, fórum e contribuições
                    </p>
                    <span className="text-sm font-mono text-neutral-600">
                      em breve
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-mono text-white mb-2">
                      Tutoriais
                    </h3>
                    <p className="text-sm font-mono text-neutral-500 mb-3">
                      Construa um app TODO, checkout de e-commerce e muito mais
                    </p>
                    <span className="text-sm font-mono text-neutral-600">
                      em breve
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <div className="flex items-start gap-4">
                  <BookText className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-mono text-white mb-2">
                      Receitas
                    </h3>
                    <p className="text-sm font-mono text-neutral-500 mb-3">
                      Como migrar código legado, integrar desenvolvedores e melhores práticas
                    </p>
                    <span className="text-sm font-mono text-neutral-600">
                      em breve
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <div className="flex items-start gap-4">
                  <BarChart className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-mono text-white mb-2">
                      Pesquisa & Dados
                    </h3>
                    <p className="text-sm font-mono text-neutral-500 mb-3">
                      Benchmarks, estudos de caso e artigos
                    </p>
                    <span className="text-sm font-mono text-neutral-600">
                      em breve
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-32">
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/foundations"
                className="block border border-neutral-800 p-6 hover:border-white transition-colors group"
              >
                <h3 className="text-base font-mono text-white mb-2 group-hover:text-white">
                  Aprender os fundamentos →
                </h3>
                <p className="text-sm font-mono text-neutral-500">
                  Entenda Arc42, C4, BDD e ADR - os frameworks que tornam a abordagem determinística
                </p>
              </Link>

              <Link
                href="/method"
                className="block border border-neutral-800 p-6 hover:border-white transition-colors group"
              >
                <h3 className="text-base font-mono text-white mb-2 group-hover:text-white">
                  Ver o workflow completo →
                </h3>
                <p className="text-sm font-mono text-neutral-500">
                  Descubra o workflow de 7 fases e como o task decomposition previne alucinações
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Tracker Sidebar - Desktop only */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-32">
            <div className="border border-neutral-800 p-6 bg-black">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-mono text-white">Seu progresso</h3>
                {completedSteps.length > 0 && (
                  <button
                    onClick={resetProgress}
                    className="text-xs font-mono text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
                  >
                    resetar
                  </button>
                )}
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-mono text-neutral-500">
                    {completedSteps.length} / 3 steps
                  </span>
                  <span className="text-sm font-mono text-neutral-500">{progress}%</span>
                </div>
                <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Steps checklist */}
              <div className="space-y-4">
                <button
                  onClick={() => toggleStep(1)}
                  className="w-full text-left flex items-start gap-3 hover:bg-neutral-950 p-2 -m-2 rounded transition-colors cursor-pointer"
                >
                  {completedSteps.includes(1) ? (
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-sm font-mono ${completedSteps.includes(1) ? 'text-white' : 'text-neutral-500'}`}>
                      Baixar scaffold
                    </p>
                    <p className="text-xs font-mono text-neutral-600 mt-1">
                      Obter o diretório .claude/
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => toggleStep(2)}
                  className="w-full text-left flex items-start gap-3 hover:bg-neutral-950 p-2 -m-2 rounded transition-colors cursor-pointer"
                >
                  {completedSteps.includes(2) ? (
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-sm font-mono ${completedSteps.includes(2) ? 'text-white' : 'text-neutral-500'}`}>
                      Configurar projeto
                    </p>
                    <p className="text-xs font-mono text-neutral-600 mt-1">
                      Copiar arquivos e configurar
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => toggleStep(3)}
                  className="w-full text-left flex items-start gap-3 hover:bg-neutral-950 p-2 -m-2 rounded transition-colors cursor-pointer"
                >
                  {completedSteps.includes(3) ? (
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-sm font-mono ${completedSteps.includes(3) ? 'text-white' : 'text-neutral-500'}`}>
                      Criar primeira feature
                    </p>
                    <p className="text-xs font-mono text-neutral-600 mt-1">
                      Executar /vision e /feature
                    </p>
                  </div>
                </button>
              </div>

              {/* Completion message */}
              {progress === 100 && (
                <div className="mt-6 pt-6 border-t border-neutral-800">
                  <p className="text-sm font-mono text-white mb-2">🎉 Tudo pronto!</p>
                  <p className="text-xs font-mono text-neutral-500">
                    Pronto para começar a construir com Documentation-First
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
