import type { ProjectEntry } from '@/types/content';

export const projects: ProjectEntry[] = [
  {
    id: 'k3s-cluster-bootstrap',
    name: {
      en: 'K3s Cluster Bootstrap',
      de: 'K3s-Cluster-Bootstrap',
    },
    type: {
      en: 'Infrastructure as Code & Platform Engineering',
      de: 'Infrastructure as Code und Plattform-Engineering',
    },
    stack: [
      'Ansible',
      'Nebula',
      'K3s',
      'Kubernetes',
      'Helm',
      'Argo CD',
      'OpenBao',
      'External Secrets Operator',
      'Gateway API',
      'cert-manager',
      'Debian',
    ],
    highlights: [
      {
        en: 'Built an Ansible-based bootstrap workflow that prepares Debian hosts, creates an encrypted Nebula overlay network, and installs a K3s cluster.',
        de: 'Entwicklung eines Ansible-basierten Bootstrap-Workflows zur Vorbereitung von Debian-Hosts, Einrichtung eines verschlüsselten Nebula-Overlay-Netzwerks und Installation eines K3s-Clusters.',
      },
      {
        en: 'Handed cluster application management to Argo CD and structured platform components with Helm, Gateway API, cert-manager, OpenBao, and External Secrets.',
        de: 'Übergabe des Anwendungsmanagements an Argo CD sowie Strukturierung der Plattformkomponenten mit Helm, Gateway API, cert-manager, OpenBao und External Secrets.',
      },
      {
        en: 'Protected bootstrap credentials with Ansible Vault and documented repeatable workflows for adding nodes and recovering cluster services.',
        de: 'Absicherung von Bootstrap-Zugangsdaten mit Ansible Vault sowie Dokumentation reproduzierbarer Abläufe zum Hinzufügen von Nodes und Wiederherstellen von Cluster-Diensten.',
      },
    ],
    link: 'https://github.com/kianukroll/pub-k3s-cluster-bootstrap',
  },
  {
    id: 'portfolio-cv',
    name: {
      en: 'Developer Portfolio & Interactive CV',
      de: 'Entwickler-Portfolio und interaktiver Lebenslauf',
    },
    type: {
      en: 'Production Web Application',
      de: 'Produktive Webanwendung',
    },
    stack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'],
    highlights: [
      {
        en: 'Built a typed, bilingual Vue 3 portfolio with reusable sections, localized content, and a print-ready CV.',
        de: 'Entwicklung eines typsicheren, zweisprachigen Vue-3-Portfolios mit wiederverwendbaren Bereichen, lokalisierten Inhalten und druckfähigem CV.',
      },
      {
        en: 'Automated type checks, tests, linting, and deployment to GitHub Pages with GitHub Actions.',
        de: 'Automatisierung von Typprüfungen, Tests, Linting und Deployment auf GitHub Pages mit GitHub Actions.',
      },
    ],
    link: 'https://github.com/kianukroll/kianukroll.github.io',
  },
  {
    id: 'homelab-infrastructure',
    name: {
      en: 'Self-Hosted Home-Cloud Platform',
      de: 'Selbstgehostete Home-Cloud-Plattform',
    },
    type: {
      en: 'Platform Engineering & Infrastructure',
      de: 'Plattform-Engineering und Infrastruktur',
    },
    stack: [
      'Debian',
      'Docker Compose',
      'Proxmox',
      'WireGuard',
      'Vaultwarden',
      'Nextcloud',
      'Immich',
    ],
    highlights: [
      {
        en: 'Architected and maintain a self-hosted platform for productivity, password management, and media services as reliable production workloads.',
        de: 'Konzeption und Betrieb einer selbstgehosteten Plattform für Produktivität, Passwortverwaltung und Mediendienste als zuverlässige Produktiv-Workloads.',
      },
      {
        en: 'Implemented reproducible containerized deployments with Docker Compose and secure remote access using WireGuard.',
        de: 'Implementierung reproduzierbarer, containerisierter Deployments mit Docker Compose und sicherer Fernzugriffe über WireGuard.',
      },
      {
        en: 'Established backup, monitoring, update, and disaster-recovery workflows to keep self-hosted applications reliable and recoverable.',
        de: 'Aufbau von Backup-, Monitoring-, Update- und Disaster-Recovery-Workflows für zuverlässige und wiederherstellbare selbstgehostete Anwendungen.',
      },
    ],
  },
];
