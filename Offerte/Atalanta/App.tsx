
import React from 'react';
import Layout from './components/Layout';
import AiAssistant from './components/AiAssistant';
import {
  STRATEGIC_OBJECTIVES,
  APPLICATION_AREAS,
  WORK_PHASES,
  BENEFITS
} from './constants';
import { ChevronRight, ArrowRight, Play, Info, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-nerazzurro">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0565c6d?q=80&w=2970&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        {/* Header moved to Layout.tsx */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <Play className="w-3 h-3 fill-current" /> Evoluzione Digitale 2026
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tighter">
            AI GENERATIVA COME LEVA DI <span className="text-gradient">VANTAGGIO COMPETITIVO</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Proposta Operativa per <span className="font-bold text-white border-b-2 border-blue-600">Atalanta BC</span>: trasformare le potenzialità tecnologiche in efficienza concreta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#premessa" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2">
              Inizia l'Esplorazione <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#metodo" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold backdrop-blur-md transition-all flex items-center justify-center gap-2 border border-white/10">
              Guarda il Metodo
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronRight className="w-8 h-8 rotate-90" />
        </div>
      </section>

      {/* Premessa Section */}
      <section id="premessa" className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-base font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 inline-block px-3 py-1 rounded mb-4">01. Premessa</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">Dalla Fase Esplorativa alla <span className="text-blue-500">Trasformazione Operativa</span>.</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                A seguito dell'incontro introduttivo, definiamo una proposta finalizzata a integrare gli strumenti di AI nei processi aziendali in modo <span className="text-white font-medium">strutturato e misurabile</span>.
              </p>
              <div className="p-6 card-glass rounded-2xl border-l-4 border-blue-600">
                <p className="text-xl italic font-light text-white">
                  "L’obiettivo non è l’utilizzo occasionale dell’AI, ma la sua adozione come leva organizzativa per generare efficienza, qualità e vantaggio competitivo."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                alt="Innovation"
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-blue-900/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Obiettivi Strategici */}
      <section id="obiettivi" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-base font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 inline-block px-3 py-1 rounded mb-4">02. Obiettivi</h2>
          <h3 className="text-4xl font-bold">Pilastri della Strategia</h3>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRATEGIC_OBJECTIVES.map((obj, i) => (
            <div key={i} className="p-8 card-glass rounded-3xl hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {obj.icon}
                </div>
                <span className="text-blue-500/50 font-black text-4xl">0{i + 1}</span>
              </div>
              <p className="text-lg font-medium text-gray-200">{obj.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ambiti di Applicazione */}
      <section id="ambiti" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-base font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 inline-block px-3 py-1 rounded mb-4">03. Ambiti di Applicazione</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Un Ecosistema AI per ogni <span className="text-blue-500">Reparto</span>.</h3>
            </div>
            <div className="text-gray-500 text-sm italic max-w-xs text-right">
              Aree prioritarie di intervento non vincolanti ed estensibili.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPLICATION_AREAS.map((area) => (
              <div key={area.id} className="p-8 card-glass rounded-3xl border border-white/5 hover:bg-white/5 transition-all group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 [&>svg]:w-10 [&>svg]:h-10">{area.icon}</div>
                <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">{area.title}</h4>
                <ul className="space-y-4">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-gray-400">
                      <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Football Camp Focus */}
      <section id="camp" className="py-24 bg-nerazzurro">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-glass p-8 md:p-16 rounded-[40px] overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="inline-block px-4 py-1 bg-white text-black text-xs font-black uppercase tracking-tighter rounded mb-6">Case Study Focus</span>
                <h3 className="text-4xl md:text-5xl font-black mb-8">Atalanta Football <span className="text-blue-400 italic underline decoration-white underline-offset-8">Camp</span></h3>
                <p className="text-xl text-blue-100 font-light mb-10 leading-relaxed">
                  Non un rilancio, ma un potenziamento operativo. L'obiettivo è aumentare l'efficienza interna e la qualità percepita dai genitori e dai piccoli atleti.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Standardizzazione comunicazioni genitori",
                    "Produzione modulare multi-località",
                    "Kit informativi sintetici",
                    "Diario giornaliero riutilizzabile",
                    "Valorizzazione format Elite",
                    "Materiali educational complementari"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-base font-medium bg-black/30 p-3 rounded-xl border border-white/10">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block h-full">
                <div className="h-full bg-gradient-to-br from-blue-600 to-black rounded-3xl p-1 shadow-2xl">
                  <img
                    src="camp.jpg"
                    alt="Camp Focus"
                    className="w-full h-full object-cover rounded-[22px] min-h-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodo di Lavoro */}
      <section id="metodo" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-base font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 inline-block px-3 py-1 rounded mb-4">04. Metodo di Lavoro</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Un Percorso in 3 Fasi</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-blue-900/30 -z-0"></div>

            {WORK_PHASES.map((phase, i) => (
              <div key={i} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 bg-black border-4 border-blue-600 rounded-full flex items-center justify-center text-3xl font-black mb-8 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  {i + 1}
                </div>
                <h4 className="text-2xl font-bold mb-4">{phase.title}</h4>
                <p className="text-gray-400 mb-8 text-sm">{phase.description}</p>
                <div className="w-full space-y-3">
                  {phase.steps.map((step, idx) => (
                    <div key={idx} className="bg-gray-900/50 p-4 rounded-xl text-base border border-white/5 text-gray-300 flex items-center justify-center gap-3 text-center transition-all hover:bg-white/5 hover:border-blue-500/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefici e Coinvolgimento */}
      <section id="benefici" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">05. Benefici Attesi</h2>
              <h3 className="text-4xl font-bold mb-10">L'impatto sul Business <br /><span className="text-blue-500">Nerazzurro</span></h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 card-glass rounded-2xl hover:translate-x-2 transition-transform">
                    <div className="p-3 bg-blue-600/20 text-blue-400 rounded-lg">
                      {benefit.icon}
                    </div>
                    <span className="text-lg font-semibold">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-blue-900/10 rounded-[40px] border border-blue-500/20">
              <div className="flex items-center gap-4 mb-8">
                <Info className="w-8 h-8 text-blue-500" />
                <h4 className="text-2xl font-bold">Coinvolgimento del Personale</h4>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8">
                Ogni intervento verrà definito congiuntamente con il personale delle singole funzioni. L’obiettivo è lavorare esclusivamente su elementi che abbiano <span className="text-white font-bold underline">valore effettivo</span> per i team coinvolti.
              </p>
              <div className="p-6 bg-black/40 rounded-2xl border-l-4 border-blue-500">
                <p className="text-sm italic text-gray-400">
                  "Il progetto si fonda su un principio chiave: utilità concreta prima della sperimentazione."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-24 bg-black border-t border-blue-900/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase italic">
            Ready for the <span className="text-blue-500">Kick-off?</span>
          </h2>
          <div className="mb-12 max-w-lg mx-auto">
            <h3 className="text-xl font-medium text-gray-400 mb-6">I prossimi passi da discutere insieme:</h3>
            <div className="space-y-4">
              {[
                "Definizione perimetro iniziale",
                "Identificazione aree pilota",
                "Pianificazione calendario operativo",
                "Elaborazione proposta economica"
              ].map((step, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl text-left border border-white/5 group hover:border-blue-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
                    <span className="text-base font-bold uppercase tracking-wider">{step}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
          <button className="px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-blue-600/20 uppercase tracking-widest">
            Avvia Collaborazione
          </button>
        </div>
      </section>

      <AiAssistant />
    </Layout>
  );
};

export default App;
