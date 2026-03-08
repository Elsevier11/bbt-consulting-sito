
import React from 'react';
import {
  Megaphone,
  Handshake,
  Calendar,
  Users,
  ShoppingBag,
  Target,
  Zap,
  ShieldCheck,
  ArrowRightCircle,
  TrendingUp,
  Cpu,
  Puzzle,
  Clock,
  Sparkles,
  Scale,
  GraduationCap,
  Rocket,
  CheckCircle2,
  Lightbulb,
  FileText
} from 'lucide-react';
import { ApplicationArea, Phase, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'premessa', label: 'Premessa' },
  { id: 'obiettivi', label: 'Obiettivi' },
  { id: 'ambiti', label: 'Ambiti' },
  { id: 'camp', label: 'Football Camp' },
  { id: 'metodo', label: 'Metodo' },
  { id: 'benefici', label: 'Benefici' },
];

export const STRATEGIC_OBJECTIVES = [
  { text: "Integrare l'AI nei flussi di lavoro esistenti.", icon: <Puzzle className="w-6 h-6" /> },
  { text: "Ridurre tempi e complessità operative.", icon: <Clock className="w-6 h-6" /> },
  { text: "Migliorare qualità e coerenza degli output.", icon: <Sparkles className="w-6 h-6" /> },
  { text: "Standardizzare processi ripetitivi.", icon: <Scale className="w-6 h-6" /> },
  { text: "Rafforzare la capacità progettuale interna.", icon: <GraduationCap className="w-6 h-6" /> },
  { text: "Consolidare il posizionamento come Club innovativo.", icon: <Rocket className="w-6 h-6" /> }
];

export const APPLICATION_AREAS: ApplicationArea[] = [
  {
    id: 'marketing',
    title: 'Comunicazione e Marketing',
    icon: <Megaphone className="w-6 h-6 text-blue-400" />,
    items: [
      'Piano editoriale multiformato',
      'Produzione rapida contenuti social',
      'Storyboard e concept campagne',
      'Presentazioni istituzionali',
      'Infografiche e sintesi dati'
    ]
  },
  {
    id: 'commercial',
    title: 'Commerciale & Sponsorship',
    icon: <Handshake className="w-6 h-6 text-blue-400" />,
    items: [
      'Proposte personalizzate',
      'Presentazioni corporate modulari',
      'Report attivazioni post-evento',
      'Analisi comparativa competitor'
    ]
  },
  {
    id: 'events',
    title: 'Eventi e Hospitality',
    icon: <Calendar className="w-6 h-6 text-blue-400" />,
    items: [
      'Concept eventi corporate',
      'Materiali promozionali standard',
      'Moodboard e supporto creativo'
    ]
  },
  {
    id: 'hr',
    title: 'HR e Processi Interni',
    icon: <Users className="w-6 h-6 text-blue-400" />,
    items: [
      'Manuali onboarding',
      'Sintesi policy interne',
      'Template comunicazioni standard',
      'Questionari e feedback'
    ]
  },
  {
    id: 'merchandising',
    title: 'Merchandising',
    icon: <ShoppingBag className="w-6 h-6 text-blue-400" />,
    items: [
      'Naming nuove linee',
      'Descrizioni prodotto e storytelling',
      'Supporto contenuti e-commerce'
    ]
  }
];

export const WORK_PHASES: Phase[] = [
  {
    title: 'Fase 1: Allineamento',
    description: 'Consolidamento competenze e definizione basi.',
    steps: [
      'Training avanzato di prompting',
      'Definizione linee guida utilizzo',
      'Setup controllo qualità output'
    ]
  },
  {
    title: 'Fase 2: Laboratori',
    description: 'Focus specifico per ogni reparto operativo.',
    steps: [
      'Analisi processi per reparto',
      'Identificazione attività high-impact',
      'Sviluppo template concreti'
    ]
  },
  {
    title: 'Fase 3: Standardizzazione',
    description: 'Integrazione strutturale nei flussi.',
    steps: [
      'Libreria prompt condivisa',
      'Definizione modelli riutilizzabili',
      'Automazione flussi di lavoro'
    ]
  }
];

export const BENEFITS = [
  { text: "Riduzione tempi di produzione", icon: <Zap className="w-5 h-5" /> },
  { text: "Miglioramento qualità progettuale", icon: <Target className="w-5 h-5" /> },
  { text: "Coerenza comunicativa", icon: <ShieldCheck className="w-5 h-5" /> },
  { text: "Autonomia operativa", icon: <TrendingUp className="w-5 h-5" /> },
  { text: "Rapidità sviluppo iniziative", icon: <ArrowRightCircle className="w-5 h-5" /> },
  { text: "Leadership nell'innovazione", icon: <Cpu className="w-5 h-5" /> }
];
