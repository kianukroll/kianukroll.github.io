import type { CertificateCategory } from '@/types/content';

export const certificates: CertificateCategory[] = [
  {
    id: 'ihk',
    label: {
      en: 'IHK (German Chamber of Industry & Commerce)',
      de: 'IHK',
    },
    items: [
      {
        id: 'FIAE',
        label: {
          en: 'State-recognized IT Specialist in Application Development',
          de: 'Fachinformatiker Anwendungsentwicklung',
        },
        subLabel: {
          en: 'Vocational qualification (IHK Fachinformatiker für Anwendungsentwicklung)',
          de: 'IHK Fachinformatiker für Anwendungsentwicklung',
        },
        description: {
          en: 'Accelerated 2.5-year dual program combining production software engineering with formal qualification.',
          de: 'Verkürzte 2,5-jährige duale Ausbildung mit praktischer Softwareentwicklung und formaler beruflicher Qualifikation.',
        },
        validFrom: '08/2024',
        validTill: '01/2027',
        upcoming: true,
      },
    ],
  },
];
