/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ChevronRight,
  Target,
  Cpu,
  BarChart3,
  TrendingUp,
  Users,
  Database,
  Twitter,
  ArrowRight,
  BrainCircuit,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  CheckCircle2,
  Plus
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'servizi' | 'chi-siamo' | 'contatti' | 'privacy' | 'cookies' | 'terms' | 'case-studies';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Servizi', id: 'servizi' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Chi siamo', id: 'chi-siamo' },
    { label: 'Contatti', id: 'contatti' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-3"
          onClick={() => setCurrentPage('home')}
        >
          <img src="/Favicon/apple-touch-icon.png" alt="BBT Logo" className="w-8 h-8 object-contain" />
          <span>BBT <span className="text-blue-500">Consulting</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-xs font-semibold tracking-widest transition-colors hover:text-blue-400 ${currentPage === item.id ? 'text-blue-500' : 'text-white/70'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-brand-dark/95 backdrop-blur-2xl p-6 md:hidden flex flex-col gap-4 border-b border-white/10 shadow-2xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`text-left text-sm font-semibold tracking-widest py-2 ${currentPage === item.id ? 'text-blue-500' : 'text-white/70'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Home = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <div className="min-h-screen pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-blue-500 mb-6">
            <div className="w-4 h-4 border border-blue-500/30 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em]">Home</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter text-balance">
            Sviluppo d'impresa con l'intelligenza artificiale
          </h1>


          <div className="space-y-6 text-white/70 text-lg leading-relaxed max-w-xl mb-10">
            <p>
              Aiutiamo le aziende a integrare tecnologie avanzate per ottimizzare i processi e aumentare la competitività.
            </p>
            <p>
              Trasformiamo i tuoi obiettivi in realtà digitale, eliminando la complessità e puntando a risultati misurabili.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => onNavigate('servizi')}
              className="group relative flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-bold transition-all shadow-lg shadow-blue-600/20"
            >
              Scopri come lavoriamo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://www.cal.eu/paolopedron/30min?user=paolopedron&overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-sm font-bold transition-all"
            >
              Prenota una consulenza
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-premium p-8 rounded-xl space-y-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                <Target size={24} />
              </div>
              <h3 className="font-bold text-xl">Consulenza direzionale</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Roadmap strategiche calibrate sui vertici decisionali dell'impresa.
              </p>
            </div>
            <div className="glass-premium p-8 rounded-xl space-y-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                <Cpu size={24} />
              </div>
              <h3 className="font-bold text-xl">Integrazione AI</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Integrazione di modelli generativi per scalare il valore operativo.
              </p>
            </div>
          </div>
          <div className="glass-premium p-8 rounded-xl space-y-4">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">
              <BarChart3 size={24} />
            </div>
            <h3 className="font-bold text-xl">Data intelligence</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Analisi predittiva e flussi informativi che governano la complessità dei mercati.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const Servizi = () => {
  const services = [
    {
      title: "Strategia e direzione",
      desc: "Definiamo insieme la rotta per la tua impresa con piani d'azione concreti e roadmap orientate ai risultati.",
      icon: <TrendingUp size={32} />,
      color: "blue"
    },
    {
      title: "Organizzazione commerciale",
      desc: "Ottimizziamo i tuoi processi di vendita per massimizzare le performance e ottenere risultati tangibili.",
      icon: <Users size={32} />,
      color: "indigo"
    },
    {
      title: "Data intelligence",
      desc: "Trasformiamo i dati aziendali in informazioni strategiche per prendere decisioni più sicure e tempestive.",
      icon: <Database size={32} />,
      color: "emerald"
    },
    {
      title: "Integrazione AI",
      desc: "Portiamo l'intelligenza artificiale nei tuoi processi per automatizzare compiti ripetitivi e innovare il business.",
      icon: <BrainCircuit size={32} />,
      color: "violet"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-blue-500 mb-6">
            <div className="w-4 h-4 border border-blue-500/30 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em]">Servizi</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Quattro pilastri per lo sviluppo della tua impresa</h2>
          <p className="text-white/60 max-w-2xl text-lg">
            Soluzioni mirate per costruire organizzazioni agili, intelligenti e pronte a vincere le sfide del mercato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
              className="glass-premium spotlight-card p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="mb-8 text-blue-500 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ChiSiamo = () => (
  <div className="min-h-screen pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-blue-500 mb-6">
            <div className="w-4 h-4 border border-blue-500/30 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em]">Chi siamo</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight text-balance">
            Il nostro metodo: regia unica, valore multidisciplinare
          </h2>

          <div className="space-y-8 text-white/70 text-lg leading-relaxed">
            <p>
              In BBT Consulting crediamo che la vera innovazione nasca dall'integrazione tra <strong>visione di business</strong> e <strong>tecnologia evoluta</strong>.
            </p>
            <p>
              Siamo il partner tecnico che trasforma i tuoi obiettivi in realtà digitale. Operiamo come hub per l'innovazione, convertendo le ambizioni della proprietà in sistemi intelligenti capaci di generare risultati concreti e sostenibili.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl space-y-10"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-blue-500" />
              L'ecosistema BBT: la forza del network
            </h3>
            <p className="text-white/60 leading-relaxed">
              La nostra capacità di esecuzione si poggia su un network solido di partner specializzati, che ci permette di offrire soluzioni chiavi in mano in aree critiche: information technology, sicurezza informatica, soluzioni gestionali ERP e comunicazione digitale.
            </p>
          </div>

          <div className="pt-10 border-t border-white/10">
            <p className="text-white/60 leading-relaxed italic">
              "Collaborare con noi significa affidarsi a un unico punto di contatto che garantisce coerenza strategica, velocità di esecuzione e una visione tecnologica costantemente aggiornata sulle ultime frontiere dell'intelligenza artificiale."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const CaseStudies = ({ onNavigate }: { onNavigate: (p: Page) => void }) => {
  const [selectedCase, setSelectedCase] = React.useState<number | null>(null);

  const cases = [
    {
      sector: "Sales Intelligence",
      title: "Smart Pipeline Control",
      impact: "Controllo Totale",
      desc: "L'AI al fianco della direzione commerciale: monitoraggio costante delle trattative per anticipare i rischi, ottimizzare il lavoro dei team e garantire il raggiungimento degli obiettivi di budget.",
      longDesc: "Una piattaforma di Sales Intelligence che trasforma i dati grezzi del CRM in insight azionabili. Il sistema analizza la pipeline storica per prevedere la chiusura delle trattative e segnala proattivamente le anomalie, permettendo al Direttore Commerciale di intervenire prima che i target vengano mancati.",
      features: ["Integrazione CRM Real-time", "Analisi Predittiva Chiusure", "Dashboard Direzionale Comparativa", "Alerting Criticità Automatico"],
      appUrl: "#",
      icon: <TrendingUp size={32} />
    },
    {
      sector: "Cybersecurity",
      title: "NIS2 Compliance Navigator",
      impact: "100% Regulatory Fit",
      desc: "Piattaforma guidata per l'adeguamento alla direttiva NIS2: supporto alla documentazione, checklist interattive e snapshot di avanzamento per garantire l'aderenza ai requisiti ACN.",
      longDesc: "Il navigatore NIS2 semplifica il complesso percorso di compliance normativa. Attraverso un workflow strutturato, guida l'azienda nella redazione della documentazione richiesta dall'Agenzia per la Cybersicurezza Nazionale, monitorando ogni step fino alla piena aderenza ai dettati della direttiva.",
      features: ["Workflow di Documentazione Guidato", "Checklist Requisiti NIS2/ACN", "Repository Prove di Compliance", "Report Avanzamento in Tempo Reale"],
      appUrl: "#",
      icon: <BrainCircuit size={32} />
    },
    {
      sector: "Digital Strategy",
      title: "Performance Audit Tool",
      impact: "Max Visibility",
      desc: "Analisi completa della qualità web: valutazione estetica, funzionale e SEO per ottimizzare il posizionamento e massimizzare la conversione dei visitatori in opportunità reali.",
      longDesc: "Uno strumento di analisi profonda che valuta l'efficacia del sito web sotto tre lenti: estetica (brand perception), tecnica (performance e SEO) e funzionale (conversion rate). Identifica esattamente dove l'utente si ferma e consiglia gli interventi per massimizzare il ROI del canale digitale.",
      features: ["Audit SEO Semantico", "Analisi User Experience (UX)", "Benchmark Competitivo AI", "Roadmap di Ottimizzazione Conversioni"],
      appUrl: "#",
      icon: <BarChart3 size={32} />
    },
    {
      sector: "Co-Creation",
      title: "La tua prossima soluzione",
      impact: "Inizia Ora",
      desc: "Hai una sfida specifica o un processo da ottimizzare? Progettiamo insieme lo strumento AI su misura per la tua impresa.",
      isCTA: true,
      icon: <Plus size={32} />
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-blue-500 mb-4">
            <div className="w-4 h-4 border border-blue-500/30 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em]">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Risultati reali, soluzioni su misura</h2>
          <p className="text-white/60 max-w-2xl text-base">
            Esplora le nostre piattaforme o richiedi una consulenza per la tua nuova idea.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => {
                if ('isCTA' in c && c.isCTA) {
                  window.open('https://www.cal.eu/paolopedron/30min?user=paolopedron&overlayCalendar=true', '_blank');
                } else {
                  setSelectedCase(i);
                }
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
              className={`spotlight-card p-8 rounded-3xl group flex flex-col h-full cursor-pointer transition-all duration-300 ${'isCTA' in c && c.isCTA
                ? 'bg-blue-600/10 border-2 border-blue-500/30 hover:bg-blue-600/20'
                : 'glass-premium hover:border-blue-500/30'
                }`}
            >
              <div className="text-blue-500 mb-6 opacity-50 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                {c.icon}
                {!('isCTA' in c && c.isCTA) && <ExternalLink size={18} className="text-white/20 group-hover:text-blue-400" />}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2">{c.sector}</div>
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-6">{c.desc}</p>
              <div className="pt-6 border-t border-white/5 mt-auto">
                <div className="text-2xl font-bold text-blue-400">{c.impact}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCase !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedCase(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl glass-premium rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
              >
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={20} />
                </button>

                {/* Anteprima Visuale dell'App */}
                <div className="lg:w-1/2 bg-blue-600/5 p-8 flex items-center justify-center relative overflow-hidden group border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="absolute inset-0 atmosphere opacity-30" />
                  <div className="relative z-10 glass-premium rounded-xl border border-white/20 shadow-2xl w-full aspect-video overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="h-6 bg-white/10 flex items-center px-4 gap-2 border-b border-white/5">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="p-6 flex flex-col gap-4">
                      <div className="w-2/3 h-4 bg-white/10 rounded-full" />
                      <div className="flex gap-4">
                        <div className="w-1/3 h-24 bg-blue-500/10 rounded-lg border border-blue-500/20" />
                        <div className="w-2/3 h-24 bg-white/5 rounded-lg" />
                      </div>
                      <div className="w-full h-20 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                </div>

                {/* Dettagli e Azioni */}
                <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto">
                  <div className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-4">
                    {cases[selectedCase].sector}
                  </div>
                  <h2 className="text-3xl font-bold mb-6 italic">{cases[selectedCase].title}</h2>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    {cases[selectedCase].longDesc}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Moduli Chiave</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cases[selectedCase].features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                          <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={cases[selectedCase].appUrl}
                      className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                    >
                      Accedi alla Piattaforma <ChevronRight size={18} />
                    </a>
                    <button
                      onClick={() => {
                        setSelectedCase(null);
                        onNavigate('contatti');
                      }}
                      className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full text-center border border-white/10 transition-all"
                    >
                      Richiedi Account Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Contatti = () => (
  <div className="min-h-screen pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 text-blue-500 mb-6">
          <div className="w-4 h-4 border border-blue-500/30 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em]">Contatti</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance max-w-4xl">
          Scegli un momento per parlare del tuo progetto
        </h2>
        <p className="text-white/60 max-w-2xl text-lg mb-12">
          Ogni grande cambiamento nasce da un confronto. Prenota una <strong>chiamata conoscitiva</strong> direttamente sul mio calendario e definiamo insieme la rotta per la tua impresa.
        </p>

        <a
          href="https://www.cal.eu/paolopedron/30min?user=paolopedron&overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-sm font-bold text-xl transition-all shadow-2xl shadow-blue-600/40 hover:scale-105"
        >
          Prenota una consulenza
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="glass-premium p-8 rounded-2xl">
          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-6">
            <Target size={24} />
          </div>
          <h3 className="font-bold mb-2">Pianificazione</h3>
          <p className="text-sm text-white/50">Scegli la data e l'ora che preferisci in 30 secondi.</p>
        </div>
        <div className="glass-premium p-8 rounded-2xl">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mx-auto mb-6">
            <Cpu size={24} />
          </div>
          <h3 className="font-bold mb-2">Automazione</h3>
          <p className="text-sm text-white/50">Ricevi subito il link Google Meet via email.</p>
        </div>
        <div className="glass-premium p-8 rounded-2xl">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mx-auto mb-6">
            <TrendingUp size={24} />
          </div>
          <h3 className="font-bold mb-2">Analisi</h3>
          <p className="text-sm text-white/50">Iniziamo a dare forma alla tua strategia.</p>
        </div>
      </div>
    </div>
  </div>
);

const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="min-h-screen pt-40 pb-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-premium p-10 md:p-16 rounded-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-balance">{title}</h1>
        <div className="space-y-8 text-white/70 text-lg leading-relaxed legal-content">
          {children}
        </div>
      </motion.div>
    </div>
  </div>
);

const PrivacyPolicy = () => (
  <LegalSection title="Privacy Policy">
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">1. Titolare del Trattamento</h2>
      <p>Il Titolare del trattamento è <strong>BBT S.r.l.</strong>, con sede legale in Via Vicenza, 32 · 31050 Vedelago (TV). Per qualsiasi chiarimento in merito alla protezione dei dati, è possibile contattarci tramite i canali ufficiali indicati sul sito.</p>
    </section>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">2. Tipologia di Dati Raccolti</h2>
      <p>Trattiamo esclusivamente i dati necessari alla gestione degli appuntamenti e delle sessioni di consulenza prenotate tramite la piattaforma di terze parti Cal.com. Non salviamo dati personali direttamente su questo sito.</p>
    </section>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">3. Finalità del Trattamento</h2>
      <p>I dati sono trattati esclusivamente per l'erogazione dei servizi di consulenza richiesti e per la gestione del calendario appuntamenti.</p>
    </section>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">4. Base Giuridica</h2>
      <p>Il trattamento si basa sulla necessità di eseguire misure precontrattuali o contrattuali (Art. 6 par. 1 lett. b del GDPR) attivate dalla richiesta dell'utente.</p>
    </section>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">5. Diritti dell'Interessato</h2>
      <p>Ogni utente ha il diritto di richiedere l'accesso ai propri dati, la rettifica, la cancellazione o la limitazione del trattamento rivolgendosi al Titolare.</p>
    </section>
  </LegalSection>
);

const CookiePolicy = () => (
  <LegalSection title="Cookie Policy">
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Informativa Estesa sui Cookie</h2>
      <p>Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento della piattaforma. Non utilizziamo cookie di profilazione o tracciamento pubblicitario.</p>
    </section>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Servizi di Terze Parti</h2>
      <p>L'integrazione con Cal.com per la prenotazione degli appuntamenti potrebbe comportare l'uso di cookie tecnici da parte del fornitore esterno per gestire la sessione di prenotazione.</p>
    </section>
  </LegalSection>
);

const TermsOfService = () => (
  <LegalSection title="Termini e Condizioni">
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Oggetto</h2>
      <p>I presenti Termini disciplinano l'utilizzo del sito web bbtconsulting.com e del servizio di prenotazione integrato. L'accesso al sito implica l'accettazione integrale degli stessi.</p>
    </section>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Proprietà Intellettuale</h2>
      <p>Tutti i contenuti (testi, grafiche, loghi) presenti sul sito sono di proprietà di BBT S.r.l. o dei rispettivi aventi diritto e sono protetti dalle leggi sul diritto d'autore.</p>
    </section>
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Limitazione di Responsabilità</h2>
      <p>BBT S.r.l. declina ogni responsabilità per eventuali disservizi tecnici legati a piattaforme esterne di prenotazione o per inesattezze temporanee nei contenuti informativi.</p>
    </section>
  </LegalSection>
);

const Footer = ({ onNavigate }: { onNavigate: (p: Page) => void }) => (
  <footer className="bg-black/50 border-t border-white/5 pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="text-2xl font-bold tracking-tighter mb-6 flex items-center gap-3">
            <img src="/Favicon/apple-touch-icon.png" alt="BBT Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold">BBT <span className="text-blue-500">Consulting</span></span>
          </div>
          <p className="text-white/40 max-w-sm leading-relaxed mb-8">
            "Ingegnerizziamo il successo attraverso la fusione tra intelletto umano e intelligenza artificiale."
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold mb-6">Navigazione</h4>
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <button onClick={() => onNavigate('home')} className="text-left hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => onNavigate('servizi')} className="text-left hover:text-blue-400 transition-colors">Servizi</button>
            <button onClick={() => onNavigate('chi-siamo')} className="text-left hover:text-blue-400 transition-colors">Chi Siamo</button>
            <button onClick={() => onNavigate('contatti')} className="text-left hover:text-blue-400 transition-colors">Contatti</button>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Legale</h4>
          <div className="flex flex-col gap-4 text-sm text-white/60">
            <button onClick={() => onNavigate('privacy')} className="text-left hover:text-blue-400 transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('cookies')} className="text-left hover:text-blue-400 transition-colors">Cookie Policy</button>
            <button onClick={() => onNavigate('terms')} className="text-left hover:text-blue-400 transition-colors">Termini e Condizioni</button>
            <a href="https://nis2.bbt-consulting.it" target="_blank" rel="noopener noreferrer" className="text-left hover:text-blue-400 transition-colors opacity-40 hover:opacity-100 flex items-center gap-2">
              Accesso Partner <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/30">
        <p>© {new Date().getFullYear()} BBT S.r.l. Tutti i diritti riservati.</p>
        <div className="flex gap-8">
          <span>P.IVA 05371510263</span>
          <span>Vedelago (TV), Italia</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="relative min-h-screen atmosphere overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[100px] rounded-full" />
        <div className="absolute top-[20%] left-[15%] w-[30%] h-[30%] bg-cyan-500/5 blur-[140px] rounded-full animate-bounce [animation-duration:10s]" />
      </div>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
            {currentPage === 'servizi' && <Servizi />}
            {currentPage === 'case-studies' && <CaseStudies onNavigate={setCurrentPage} />}
            {currentPage === 'chi-siamo' && <ChiSiamo />}
            {currentPage === 'contatti' && <Contatti />}
            {currentPage === 'privacy' && <PrivacyPolicy />}
            {currentPage === 'cookies' && <CookiePolicy />}
            {currentPage === 'terms' && <TermsOfService />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
