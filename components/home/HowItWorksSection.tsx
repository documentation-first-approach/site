'use client';

import Link from 'next/link';

export function HowItWorksSection() {
  const phases = [
    {
      number: '1',
      name: 'discovery',
      agent: 'analyst',
      description: 'Entende requisitos e avalia complexidade (LOW/MEDIUM/HIGH)',
    },
    {
      number: '2',
      name: 'architecture',
      agent: 'architect',
      optional: true,
      description: 'Design da arquitetura do sistema com diagramas C4 (apenas HIGH)',
    },
    {
      number: '3',
      name: 'specification',
      agent: 'analyst',
      description: 'Escreve documentação Arc42 + cenários BDD + ADRs',
    },
    {
      number: '3.5',
      name: 'decomposition',
      agent: 'orchestrator',
      critical: true,
      description: 'Quebra specs em tarefas atômicas <100 LOC - previne alucinações',
    },
    {
      number: '4',
      name: 'implementation',
      agent: 'developer',
      description: 'Implementa tarefa por tarefa com testes, validado pelo gatekeeper',
    },
    {
      number: '5',
      name: 'validation',
      agent: 'review+test',
      description: 'Code review + validação de testes (≥80% cobertura exigida)',
    },
    {
      number: '6',
      name: 'documentation',
      agent: 'documenter',
      description: 'Atualiza docs e README para corresponder à implementação',
    },
    {
      number: '7',
      name: 'pre-commit',
      agent: 'guardian',
      description: 'Validação final: constitution compliance, testes, linters, specs atualizados',
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-black border-t border-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl font-mono font-normal text-white mb-6">
            Como funciona
          </h2>
          <p className="text-base font-mono text-neutral-500 mb-16">
            O workflow de 7 fases que transforma requisitos em código pronto para produção
          </p>

          {/* Workflow - Vertical flow with connectors */}
          <div className="mb-16">
            {phases.map((phase, index) => {
              // Only the critical phase (3.5) and the phase before it (3) should have white lines
              const isCriticalPhase = phase.critical;
              const isBeforeCritical = phases[index + 1]?.critical;
              const hasWhiteLine = isCriticalPhase || isBeforeCritical;

              return (
              <div key={index}>
                {/* Phase */}
                <div
                  className={`border-l-2 ${
                    hasWhiteLine ? 'border-white' : 'border-neutral-800'
                  } pl-8 pb-8 relative`}
                >
                  {/* Phase number badge */}
                  <div
                    className={`absolute left-0 top-0 -translate-x-1/2 w-8 h-8 flex items-center justify-center ${
                      phase.critical
                        ? 'bg-white text-black'
                        : 'bg-neutral-900 text-neutral-500 border border-neutral-800'
                    } font-mono text-xs`}
                  >
                    {phase.number}
                  </div>

                  {/* Phase content */}
                  <div className="pt-2">
                    <div className="flex items-start justify-between mb-2">
                      <h3
                        className={`text-lg font-mono ${
                          phase.critical ? 'text-white' : 'text-neutral-400'
                        }`}
                      >
                        {phase.name}
                        {phase.optional && (
                          <span className="ml-2 text-xs text-neutral-600">[HIGH only]</span>
                        )}
                        {phase.critical && (
                          <span className="ml-2 px-2 py-0.5 bg-red-900/30 border border-red-800/50">
                            <span className="text-xs font-mono text-red-500">CRÍTICO</span>
                          </span>
                        )}
                      </h3>
                      <span className="text-xs font-mono text-neutral-600">
                        {phase.agent}
                      </span>
                    </div>
                    <p className="text-sm font-mono text-neutral-500 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            );
            })}
          </div>

          {/* Critical phase callout - Simple */}
          <div className="border border-white p-8 mb-16">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠</span>
              <div>
                <h3 className="text-lg font-mono text-white mb-3">
                  Por que a fase 3.5 é crítica?
                </h3>
                <div className="space-y-2 text-sm font-mono text-neutral-400">
                  <p>
                    <span className="text-white">Problema:</span> Contexto &gt;5000 linhas = IA perde foco (decaimento de atenção O(n²))
                  </p>
                  <p>
                    <span className="text-white">Solução:</span> Orchestrator quebra specs em tarefas &lt;100 LOC
                  </p>
                  <p>
                    <span className="text-white">Resultado:</span> Output determinístico, qualidade previsível, zero alucinações
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Learn more link */}
          <div>
            <Link
              href="/method"
              className="text-sm font-mono text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-4"
            >
              saiba mais sobre o processo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
