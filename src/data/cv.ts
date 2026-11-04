import type { ExperienceEntry, LocalizedText } from '@/types/content';
import { projects } from '@/data/projects';

export const cvLabels = {
  back: { en: 'Back to website', de: 'Zurück zur Website' },
  summary: { en: 'Professional summary', de: 'Profil' },
  experience: { en: 'Professional experience', de: 'Berufserfahrung' },
  projects: { en: 'Selected projects', de: 'Ausgewählte Projekte' },
  education: {
    en: 'Education and certifications',
    de: 'Ausbildung und Zertifikate',
  },
  languages: { en: 'Languages', de: 'Sprachkenntnisse' },
  skills: { en: 'Technical skills', de: 'Technische Kenntnisse' },
} satisfies Record<string, LocalizedText>;

export const cvSummary = {
  en: 'DevOps and software engineer with hands-on experience designing, building, deploying, and operating production applications and hybrid infrastructure. Combines application modernization, backend integration, CI/CD, containerization, GitOps, and secure platform operations.',
  de: 'DevOps- und Softwareentwickler mit praktischer Erfahrung in der Konzeption, Entwicklung, Bereitstellung und Betreuung produktiver Anwendungen und hybrider Infrastruktur. Verbindet Anwendungsmodernisierung, Backend-Integration, CI/CD, Containerisierung, GitOps und sicheren Plattformbetrieb.',
} satisfies LocalizedText;

export const cvTitle = {
  en: 'DevOps & Software Engineer',
  de: 'DevOps- & Softwareentwickler',
} satisfies LocalizedText;

export type CvVariantId = 'general' | 'devops' | 'software';

export interface CvVariant {
  id: CvVariantId;
  path: string;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  experienceIds: string[];
  projectIds: string[];
  skillPriority: string[];
}

export const cvExperience: ExperienceEntry[] = [
  {
    id: 'fullstack-sysadmin',
    period: { en: '01/2021 — Present', de: '01/2021 — Heute' },
    role: {
      en: 'IT Infrastructure & Software Engineer',
      de: 'IT-Infrastruktur- & Softwareentwickler',
    },
    subText: { en: 'Part-time', de: 'Teilzeit' },
    focusPoints: [
      {
        label: {
          en: 'Mission-critical application engineering',
          de: 'Entwicklung geschäftskritischer Anwendungen',
        },
        detail: {
          en: 'Engineered and maintained a 24/7 access-control and time-tracking system used for real-time personnel monitoring across secure facility zones.',
          de: 'Entwicklung und Betreuung eines rund um die Uhr eingesetzten Zutrittskontroll- und Zeiterfassungssystems zur Echtzeitüberwachung von Personal in gesicherten Anlagenbereichen.',
        },
      },
      {
        label: {
          en: 'Application modernization and system integration',
          de: 'Anwendungsmodernisierung und Systemintegration',
        },
        detail: {
          en: 'Modernized a legacy VB.NET/MySQL desktop application into a Vue 3 web platform with PostgreSQL, CloudNativePG, REST APIs, and a Kotlin/Jetpack Android application with offline-first RFID synchronization.',
          de: 'Modernisierung einer Legacy-VB.NET-/MySQL-Desktopanwendung zu einer Vue-3-Webplattform mit PostgreSQL, CloudNativePG, REST-APIs und einer Kotlin-/Jetpack-Android-Anwendung mit Offline-First-Synchronisierung für RFID-Erfassung.',
        },
      },
      {
        label: {
          en: 'Hybrid infrastructure and platform engineering',
          de: 'Hybride Infrastruktur und Plattform-Engineering',
        },
        detail: {
          en: 'Designed and operated a hybrid K3s platform across on-premises infrastructure and German cloud providers, connected through a secure Nebula overlay network.',
          de: 'Konzeption und Betrieb einer hybriden K3s-Plattform über On-Premise-Infrastruktur und deutsche Cloud-Anbieter, verbunden durch ein sicheres Nebula-Overlay-Netzwerk.',
        },
      },
      {
        label: {
          en: 'GitOps, automation, and resilience',
          de: 'GitOps, Automatisierung und Ausfallsicherheit',
        },
        detail: {
          en: 'Implemented GitOps delivery with Argo CD, automated infrastructure bootstrapping with Ansible, and established encrypted secrets, snapshots, backups, and disaster-recovery workflows using Ansible Vault, External Secrets Operator, OpenBao, and CloudNativePG.',
          de: 'Implementierung von GitOps-Deployments mit Argo CD, automatisiertes Infrastruktur-Bootstrapping mit Ansible sowie Aufbau verschlüsselter Secrets-, Snapshot-, Backup- und Disaster-Recovery-Workflows mit Ansible Vault, External Secrets Operator, OpenBao und CloudNativePG.',
        },
      },
    ],
    company: { name: 'TTsecurity', link: 'https://www.ttsecurity.de' },
    stack: [
      'Vue 3',
      'TypeScript',
      'Kotlin',
      'Android Jetpack',
      'PostgreSQL',
      'CloudNativePG',
      'REST APIs',
      'Docker',
      'K3s',
      'Kubernetes',
      'Argo CD',
      'Ansible',
      'OpenBao',
      'External Secrets Operator',
      'Proxmox VE',
      'Ceph',
      'ZFS',
      'Nebula',
    ],
  },
  {
    id: 'kfw',
    period: { en: '08/2022 — 04/2024', de: '08/2022 — 04/2024' },
    role: {
      en: 'Computer Science Student (Dual Program, IT Operations)',
      de: 'Dualer Informatikstudent (IT-Operations)',
    },
    subText: {
      en: 'B.Sc. Computer Science · Berlin',
      de: 'B.Sc. Informatik · Berlin',
    },
    focusPoints: [
      {
        label: {
          en: 'Enterprise database operations and automation',
          de: 'Enterprise-Datenbankbetrieb und Automatisierung',
        },
        detail: {
          en: 'Automated recurring housekeeping and maintenance tasks for enterprise database systems using scripting and cron.',
          de: 'Automatisierung wiederkehrender Housekeeping- und Wartungsaufgaben für Enterprise-Datenbanksysteme mit Skripting und Cron.',
        },
      },
      {
        label: {
          en: 'Release and change management',
          de: 'Release- und Changemanagement',
        },
        detail: {
          en: 'Performed structured component testing during the introduction of new software solutions.',
          de: 'Durchführung strukturierter Komponententests bei der Einführung neuer Softwarelösungen.',
        },
      },
      {
        label: {
          en: 'Internal tooling',
          de: 'Internes Tooling',
        },
        detail: {
          en: 'Designed and delivered an internal chatbot to support departmental processes.',
          de: 'Konzeption und Bereitstellung eines abteilungsinternen Chatbots zur Unterstützung von Prozessen.',
        },
      },
      {
        label: {
          en: 'Transition to practice-oriented engineering',
          de: 'Wechsel in die praxisorientierte Entwicklung',
        },
        detail: {
          en: '→ Moved from the theoretical degree program into a highly practice-oriented path focused on application development and platform engineering.',
          de: '→ Gezielter Wechsel aus dem theoretischen Studium in einen hochgradig praxisbezogenen Weg mit Fokus auf Anwendungsentwicklung und Plattform-Engineering.',
        },
      },
    ],
    company: { name: 'KfW Bankengruppe', link: 'https://www.kfw.de' },
    stack: ['SQL', 'Scripting', 'Cron', 'Release Management', 'Chatbots'],
  },
  {
    id: 'apprenticeship',
    period: { en: '08/2024 — 01/2027', de: '08/2024 — 01/2027' },
    role: {
      en: 'Software Developer (Dual Program / Apprenticeship)',
      de: 'Auszubildender Fachinformatiker Anwendungsentwicklung',
    },
    subText: {
      en: 'Accelerated 2.5-year program · MDAX-listed digital media group',
      de: 'Verkürzte 2,5-jährige Ausbildung · Börsennotierter digitaler Medienkonzern im MDAX',
    },
    focusPoints: [
      {
        label: {
          en: 'Enterprise platform development',
          de: 'Entwicklung von Enterprise-Plattformen',
        },
        detail: {
          en: 'Developed and maintained the Fluffy CMS and Reels video-management platform with Vue.js, Composition API, TypeScript, Python, and REST APIs for editorial teams and high-traffic media brands.',
          de: 'Entwicklung und Wartung des Fluffy-CMS und der Reels-Video-Management-Plattform mit Vue.js, Composition API, TypeScript, Python und REST-APIs für Redaktionsteams und reichweitenstarke Medienmarken.',
        },
      },
      {
        label: {
          en: 'Performance and type-safety improvements',
          de: 'Performance- und Typsicherheitsverbesserungen',
        },
        detail: {
          en: 'Improved frontend observability with Sentry lazy loading and 1% performance sampling, and increased API-layer type safety with TypeScript branded types.',
          de: 'Verbesserung der Frontend-Beobachtbarkeit durch Sentry-Lazy-Loading und 1-%-Performance-Sampling sowie Erhöhung der Typsicherheit im API-Layer durch TypeScript Branded Types.',
        },
      },
      {
        label: {
          en: 'Quality engineering and release support',
          de: 'Qualitätssicherung und Release-Unterstützung',
        },
        detail: {
          en: 'Created Copilot instructions for unit testing that are now used across our teams projects, and performed manual end-to-end release validation across internal applications.',
          de: 'Erstellung von Copilot Instructions für Unit-Tests, die inzwischen in den Projekten unseres Teams genutzt werden, sowie Durchführung manueller End-to-End-Release-Validierungen für interne Anwendungen.',
        },
      },
    ],
    company: { name: 'Ströer SE & Co. KGaA', link: 'https://www.stroeer.de' },
    stack: ['Vue.js', 'TypeScript', 'Python', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Sentry'],
  },
  {
    id: 'homelab',
    period: { en: 'Ongoing', de: 'Fortlaufend' },
    role: {
      en: 'Self-Hosted Infrastructure Project',
      de: 'Selbstgehostetes Infrastrukturprojekt',
    },
    subText: {
      en: 'Personal platform engineering',
      de: 'Privates Plattform-Engineering',
    },
    focusPoints: [
      {
        label: {
          en: 'Private cloud and service operations',
          de: 'Private Cloud und Betrieb selbstgehosteter Dienste',
        },
        detail: {
          en: 'Architect and maintain a private home-cloud environment hosting Nextcloud, Immich, and Vaultwarden on Debian and Proxmox.',
          de: 'Konzeption und Betrieb einer privaten Home-Cloud-Umgebung mit Nextcloud, Immich und Vaultwarden auf Debian und Proxmox.',
        },
      },
      {
        label: {
          en: 'Secure connectivity and automation',
          de: 'Sichere Konnektivität und Automatisierung',
        },
        detail: {
          en: 'Operate containerized services with Docker Compose and provide secure remote access through WireGuard VPN topologies.',
          de: 'Betrieb containerisierter Dienste mit Docker Compose und Bereitstellung sicherer Fernzugriffe über WireGuard-VPN-Topologien.',
        },
      },
      {
        label: {
          en: 'Operational resilience',
          de: 'Betriebliche Ausfallsicherheit',
        },
        detail: {
          en: 'Apply backup, monitoring, update, and disaster-recovery practices while evaluating Kubernetes and K3s for future workloads.',
          de: 'Anwendung von Backup-, Monitoring-, Update- und Disaster-Recovery-Praktiken sowie Evaluierung von Kubernetes und K3s für zukünftige Workloads.',
        },
      },
    ],
    stack: [
      'Debian',
      'Docker',
      'Docker Compose',
      'Proxmox',
      'WireGuard',
      'Nextcloud',
      'Immich',
      'Vaultwarden',
      'Kubernetes',
      'K3s',
    ],
  },
];

export const skillPriority = [
  'Docker',
  'Docker Compose',
  'Kubernetes',
  'K3s',
  'Argo CD',
  'Ansible',
  'OpenBao',
  'External Secrets Operator',
  'Proxmox VE',
  'Ceph',
  'ZFS',
  'Nebula',
  'WireGuard',
  'PostgreSQL',
  'CloudNativePG',
  'REST APIs',
  'Vue 3',
  'Vue.js',
  'TypeScript',
  'Python',
  'Kotlin',
  'Android Jetpack',
  'MongoDB',
  'Sentry',
  'Debian',
  'Nextcloud',
  'Immich',
  'Vaultwarden',
  'Tailwind CSS',
  'GitHub Actions',
  'GitHub Pages',
];

export const cvVariants: CvVariant[] = [
  {
    id: 'general',
    path: '/cv',
    title: cvTitle,
    summary: cvSummary,
    description: {
      en: 'General CV covering software engineering, DevOps, infrastructure, and platform operations.',
      de: 'Allgemeiner CV mit Softwareentwicklung, DevOps, Infrastruktur und Plattformbetrieb.',
    },
    experienceIds: ['fullstack-sysadmin', 'apprenticeship', 'kfw'],
    projectIds: projects.map((project) => project.id),
    skillPriority,
  },
  {
    id: 'devops',
    path: '/cv/devops',
    title: { en: 'DevOps & Systems Engineer', de: 'DevOps- & System Engineer' },
    summary: {
      en: 'DevOps and systems engineer focused on reliable platforms, infrastructure automation, secure networking, and production operations across hybrid environments.',
      de: 'DevOps- und System Engineer mit Fokus auf zuverlässige Plattformen, Infrastrukturautomatisierung, sichere Netzwerke und produktiven Betrieb in hybriden Umgebungen.',
    },
    description: {
      en: 'Focused CV for infrastructure, platform engineering, and operations roles.',
      de: 'Fokussierter CV für Rollen in Infrastruktur, Plattform-Engineering und Betrieb.',
    },
    experienceIds: ['fullstack-sysadmin', 'apprenticeship', 'kfw', 'homelab'],
    projectIds: ['k3s-cluster-bootstrap', 'portfolio-cv', 'homelab-infrastructure'],
    skillPriority: [
      'Kubernetes',
      'K3s',
      'Docker',
      'Docker Compose',
      'Argo CD',
      'Ansible',
      'OpenBao',
      'External Secrets Operator',
      'CloudNativePG',
      'PostgreSQL',
      'Proxmox VE',
      'Proxmox',
      'Ceph',
      'ZFS',
      'Nebula',
      'WireGuard',
      'Debian',
      'GitHub Actions',
    ],
  },
  {
    id: 'software',
    path: '/cv/software',
    title: { en: 'Software Engineer', de: 'Softwareentwickler' },
    summary: {
      en: 'Software engineer focused on maintainable web and mobile applications, backend integration, type-safe delivery, and quality across the full development lifecycle.',
      de: 'Softwareentwickler mit Fokus auf wartbare Web- und Mobile-Anwendungen, Backend-Integration, typsichere Entwicklung und Qualität über den gesamten Entwicklungszyklus.',
    },
    description: {
      en: 'Focused CV for application engineering, integration, and software quality roles.',
      de: 'Fokussierter CV für Rollen in Anwendungsentwicklung, Integration und Softwarequalität.',
    },
    experienceIds: ['apprenticeship', 'fullstack-sysadmin', 'kfw', 'homelab'],
    projectIds: ['portfolio-cv', 'homelab-infrastructure'],
    skillPriority: [
      'TypeScript',
      'Vue 3',
      'Vue.js',
      'Python',
      'Kotlin',
      'Android Jetpack',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
      'Sentry',
      'Docker',
      'GitHub Actions',
      'Tailwind CSS',
    ],
  },
];

export function getCvVariant(id: CvVariantId): CvVariant {
  return cvVariants.find((variant) => variant.id === id) ?? cvVariants[0]!;
}
