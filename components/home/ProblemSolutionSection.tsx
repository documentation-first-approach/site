import { Brain, Dice6, TrendingUp, FileText, Puzzle, ShieldCheck } from 'lucide-react';

export function ProblemSolutionSection() {
  return (
    <section className="py-32 md:py-40 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* What is Documentation-First? */}
          <div className="mb-32">
            <h2 className="text-sm font-mono text-neutral-600 mb-6">
              o que é documentation-first?
            </h2>
            <p className="text-3xl md:text-4xl font-mono font-normal text-white leading-tight mb-8">
              Uma abordagem de desenvolvimento orientada a especificações que elimina alucinações da IA
            </p>
            <p className="text-lg font-mono text-neutral-400 leading-relaxed">
              Documentation-First é uma metodologia que coloca especificações determinísticas antes do código.
              Usando frameworks Arc42, C4, BDD e ADR, cria requisitos não ambíguos que a IA pode implementar com &lt;10% de taxa de erro.
            </p>
          </div>

          {/* The Problem */}
          <div className="mb-32">
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              O problema
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-800 pl-6">
                <div className="flex items-start gap-4">
                  <Brain className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-mono text-white mb-2">
                      60-80% de taxa de alucinação
                    </h3>
                    <p className="text-base font-mono text-neutral-500 leading-relaxed">
                      LLMs geram código plausível mas incorreto sem especificações claras.
                      O mesmo prompt produz resultados completamente diferentes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <div className="flex items-start gap-4">
                  <Dice6 className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-mono text-white mb-2">
                      Qualidade imprevisível
                    </h3>
                    <p className="text-base font-mono text-neutral-500 leading-relaxed">
                      A qualidade do código varia drasticamente entre execuções. Sem consistência, sem confiabilidade,
                      sem forma de garantir output pronto para produção.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-mono text-white mb-2">
                      Dívida técnica crescente
                    </h3>
                    <p className="text-base font-mono text-neutral-500 leading-relaxed">
                      Retrabalho constante, bugs em produção, decisões de arquitetura pouco claras.
                      Times gastam mais tempo corrigindo do que construindo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Separator */}
          <div className="flex items-center justify-center my-16">
            <div className="flex gap-4 text-neutral-800">
              <span className="text-2xl">↓</span>
              <span className="text-2xl">↓</span>
              <span className="text-2xl">↓</span>
            </div>
          </div>

          {/* The Solution */}
          <div>
            <h2 className="text-2xl font-mono font-normal text-white mb-12">
              A solução
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-white pl-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-mono text-white mb-2">
                      Orientado a especificações
                    </h3>
                    <p className="text-base font-mono text-neutral-500 leading-relaxed">
                      Toda feature começa com uma spec determinística (Arc42 + C4 + BDD + ADR).
                      Zero ambiguidade, requisitos completos, clareza perfeita.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-white pl-6">
                <div className="flex items-start gap-4">
                  <Puzzle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-mono text-white mb-2">
                      Task decomposition
                    </h3>
                    <p className="text-base font-mono text-neutral-500 leading-relaxed">
                      Specs grandes são quebradas em tarefas atômicas &lt;100 LOC. Mantém o foco da IA,
                      previne overflow de contexto, garante output determinístico.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-white pl-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-mono text-white mb-2">
                      Quality gates
                    </h3>
                    <p className="text-base font-mono text-neutral-500 leading-relaxed">
                      Validação automatizada em cada etapa. SOLID, DDD, Object Calisthenics aplicados.
                      80%+ de cobertura de testes garantida antes do merge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
