import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Calculator,
  ClipboardCheck,
  ClipboardList,
  Eye,
  FileCheck2,
  Handshake,
  Landmark,
  LockKeyhole,
  MailQuestion,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";

export const profile = {
  initials: "MC",
  fullName: "Milagros Castro Ruiz",
  role: "Abogada & Contadora Pública",
  shortRole: "Abogada & Contadora",
  specialties: "Especialista en Tributación y Derecho Administrativo",
  brandPhrase: "Soluciones legales, contables y tributarias para decisiones seguras.",
  location: "Colombia",
  whatsapp: "573043792371",
  email: "milagros.castro.ruiz@gmail.com",
  linkedin: "https://www.linkedin.com/in/milagros-castro-ruiz-28bbba174/"
};

export const referenceImages = {
  hero: "/images/imagenprincipal.png",
  about: "/images/imagenoficina.png",
  legalOffice: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
  accounting: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  caseOne: "/images/imagenconsultorias.png",
  caseTwo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  caseThree: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
  caseFour: "/images/imagenreunionpng.png",
  contact: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
};

export const heroIndicators = [
  "Más de 20 años de experiencia",
  "Asesoría integral",
  "Confianza y reserva",
  "Visión legal y financiera"
];

export const aboutHighlights = [
  {
    title: "Formación integral",
    description: "Criterio jurídico y contable aplicado a decisiones reales.",
    icon: BadgeCheck
  },
  {
    title: "Enfoque estratégico",
    description: "Lectura completa del riesgo antes de definir una ruta.",
    icon: TrendingUp
  },
  {
    title: "Confidencialidad",
    description: "Acompañamiento reservado, claro y responsable.",
    icon: LockKeyhole
  },
  {
    title: "Actualización constante",
    description: "Atención a cambios normativos, fiscales y administrativos.",
    icon: Sparkles
  }
];

export const services = [
  {
    title: "Asesoría legal",
    description:
      "Orientación jurídica para decisiones, documentos, respuestas y situaciones que requieren respaldo profesional.",
    icon: Scale
  },
  {
    title: "Asesoría contable",
    description:
      "Organización, lectura y revisión de información financiera para dar claridad a la gestión del negocio.",
    icon: Calculator
  },
  {
    title: "Asesoría tributaria",
    description:
      "Planeación, revisión de obligaciones y acompañamiento fiscal con visión preventiva y estratégica.",
    icon: Banknote
  },
  {
    title: "Asesoría empresarial",
    description:
      "Soporte integral para emprendedores y empresas que necesitan ordenar decisiones legales y financieras.",
    icon: BriefcaseBusiness
  },
  {
    title: "Planeación fiscal",
    description:
      "Diseño de rutas para cumplir obligaciones, anticipar impactos y tomar decisiones tributarias informadas.",
    icon: FileCheck2
  },
  {
    title: "Acompañamiento administrativo",
    description:
      "Gestión de requerimientos, trámites y actuaciones ante entidades con orden documental y criterio técnico.",
    icon: Landmark
  }
];

export const metrics = [
  { value: "Más de 20", label: "años de experiencia", icon: BadgeCheck },
  { value: "+200", label: "procesos o clientes acompañados", icon: Handshake },
  { value: "360°", label: "visión integral", icon: Eye },
  { value: "100%", label: "compromiso ético", icon: ShieldCheck }
];

export const timeline = [
  {
    stage: "Etapa 1",
    title: "Formación en Derecho",
    description:
      "Base jurídica para analizar obligaciones, riesgos y decisiones con criterio profesional."
  },
  {
    stage: "Etapa 2",
    title: "Formación en Contaduría Pública",
    description:
      "Lectura contable y financiera para comprender la realidad económica de cada caso."
  },
  {
    stage: "Etapa 3",
    title: "Especialización en Tributación",
    description:
      "Profundización fiscal para acompañar obligaciones, planeación y decisiones tributarias."
  },
  {
    stage: "Etapa 4",
    title: "Especialización en Derecho Administrativo",
    description:
      "Enfoque técnico para actuaciones, trámites y relaciones con entidades públicas."
  },
  {
    stage: "Etapa 5",
    title: "Experiencia en asesoría legal y contable",
    description:
      "Acompañamiento integral en asuntos que requieren orden jurídico, contable y documental."
  },
  {
    stage: "Etapa 6",
    title: "Acompañamiento a personas, emprendedores y empresas",
    description:
      "Orientación profesional para decisiones personales, comerciales y empresariales."
  },
  {
    stage: "Etapa 7",
    title: "Certificaciones e informes contables",
    description:
      "Preparación y revisión de soportes, informes y documentos de valor profesional."
  }
];

export const caseStudies = [
  {
    title: "Organización contable para pequeños negocios",
    category: "Contable",
    description:
      "Apoyo en la organización de información financiera, revisión de soportes y estructuración de procesos contables.",
    image: referenceImages.caseOne
  },
  {
    title: "Revisión de contratos y documentos",
    category: "Legal",
    description:
      "Análisis de documentos legales para prevenir riesgos, aclarar obligaciones y fortalecer la toma de decisiones.",
    image: referenceImages.caseTwo
  },
  {
    title: "Planeación tributaria para personas naturales",
    category: "Tributario",
    description:
      "Orientación en obligaciones fiscales, declaraciones y organización de información tributaria.",
    image: referenceImages.caseThree
  },
  {
    title: "Acompañamiento legal y administrativo empresarial",
    category: "Empresarial",
    description:
      "Soporte integral para empresas que requieren orden legal, contable y documental.",
    image: referenceImages.caseFour
  }
];

export const resources = [
  {
    title: "Checklist tributario",
    description:
      "Una guía breve para revisar obligaciones, soportes, vencimientos y responsabilidades fiscales.",
    icon: ClipboardCheck
  },
  {
    title: "Guía para organizar documentos",
    description:
      "Criterios prácticos para conservar información legal, contable y tributaria con orden.",
    icon: ClipboardList
  },
  {
    title: "Preguntas antes de firmar un contrato",
    description:
      "Puntos clave para revisar obligaciones, riesgos y compromisos antes de tomar una decisión.",
    icon: MailQuestion
  },
  {
    title: "Errores comunes en negocios",
    description:
      "Señales frecuentes de desorden documental, contable o tributario que conviene corregir a tiempo.",
    icon: BriefcaseBusiness
  }
];

export const movingWords = [
  "Derecho",
  "Contabilidad",
  "Tributación",
  "Planeación",
  "Confianza",
  "Estrategia",
  "Cumplimiento",
  "Administración",
  "Seguridad jurídica",
  "Visión financiera"
];

export const innovationItems = [
  {
    title: "Analizar la situación",
    description:
      "Comprender el contexto legal, contable, fiscal o empresarial antes de actuar.",
    icon: Eye
  },
  {
    title: "Detectar riesgos",
    description:
      "Identificar puntos sensibles, vacíos documentales y posibles contingencias.",
    icon: ShieldCheck
  },
  {
    title: "Ordenar obligaciones",
    description:
      "Priorizar compromisos, soportes, vencimientos y responsabilidades.",
    icon: ClipboardCheck
  },
  {
    title: "Diseñar estrategia",
    description:
      "Crear una ruta clara, viable y alineada con los objetivos del cliente.",
    icon: Building2
  },
  {
    title: "Acompañar la ejecución",
    description:
      "Dar seguimiento profesional para convertir la estrategia en acciones concretas.",
    icon: Handshake
  }
];
