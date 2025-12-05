export function MetricsSection() {
  const aiMetrics = [
    {
      value: '85%',
      label: 'menos alucinações',
      description: 'Redução de 60.4% para 0.9% em taxa de alucinação'
    },
    {
      value: '78%',
      label: 'menos retrabalho',
      description: 'Código correto na primeira tentativa'
    },
    {
      value: '80%+',
      label: 'cobertura de testes',
      description: 'Garantida automaticamente em toda feature'
    },
    {
      value: '<10%',
      label: 'taxa de erro',
      description: 'Output determinístico e previsível'
    },
  ];

  const organizationalMetrics = [
    {
      metric: 'Horas semanais em reuniões por desenvolvedor',
      before: '15 horas',
      after: '6 horas',
      improvement: '-60%',
      description: 'Specs claras eliminam reuniões de alinhamento'
    },
    {
      metric: 'Satisfação dos desenvolvedores',
      before: '6.2/10',
      after: '8.4/10',
      improvement: '+35%',
      description: 'Menos frustração, mais autonomia'
    },
    {
      metric: 'Time-to-market de novas features',
      before: '48 dias',
      after: '35 dias',
      improvement: '-27%',
      description: 'Workflow determinístico acelera entregas'
    },
    {
      metric: 'Tempo de onboarding de novos desenvolvedores',
      before: '6 semanas',
      after: '3.5 semanas',
      improvement: '-42%',
      description: 'Documentação viva facilita onboarding'
    },
    {
      metric: 'Perda de contexto crítico em mudanças de time',
      before: 'Alta',
      after: 'Baixa',
      improvement: 'Significativa',
      description: 'Conhecimento capturado em specs Arc42'
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-black border-t border-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-2xl font-mono font-normal text-white mb-6">
              Impacto organizacional
            </h2>
            <p className="text-base font-mono text-neutral-500 leading-relaxed">
              Resultados mensuráveis após 6 meses de implementação
            </p>
          </div>

          {/* Organizational Metrics - Table */}
          <div className="mb-16">
            <div className="border border-neutral-800">
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-mono">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="text-left p-4 text-neutral-600 font-normal">Métrica</th>
                      <th className="text-left p-4 text-neutral-600 font-normal">Antes</th>
                      <th className="text-left p-4 text-neutral-600 font-normal">Depois (6 meses)</th>
                      <th className="text-left p-4 text-neutral-600 font-normal">Melhoria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {organizationalMetrics.map((metric, index) => (
                      <tr key={index} className="border-b border-neutral-800 last:border-b-0">
                        <td className="p-4">
                          <div className="text-white mb-1">{metric.metric}</div>
                          <div className="text-xs text-neutral-600">{metric.description}</div>
                        </td>
                        <td className="p-4 text-neutral-500">{metric.before}</td>
                        <td className="p-4 text-neutral-500">{metric.after}</td>
                        <td className="p-4 text-white font-medium">{metric.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Source Attribution */}
          <div className="border-l-2 border-neutral-800 pl-6">
            <p className="text-xs font-mono text-neutral-600 mb-2">
              Dados baseados em:
            </p>
            <ul className="text-xs font-mono text-neutral-500 space-y-1">
              <li>• Experimentos controlados (Crônica 10 - MANIFEST.md)</li>
              <li>• Estudos de caso em times distribuídos (6 meses de implementação)</li>
              <li>
                • Full Scale -{' '}
                <a
                  href="https://fullscale.io/blog/documentation-first-approach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-300 underline underline-offset-2"
                >
                  Documentation-First Approach
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
