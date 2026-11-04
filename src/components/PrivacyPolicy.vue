<template>
  <article class="mx-auto min-h-screen max-w-3xl px-6 py-12 sm:px-10 lg:px-16">
    <a href="/" class="text-accent-300 hover:text-accent-100 font-mono text-sm transition-colors">
      ← {{ localize(content.back) }}
    </a>
    <h1 class="text-cream-100 mt-12 font-serif text-4xl">{{ localize(content.title) }}</h1>
    <p class="text-cream-500 mt-3 text-sm">{{ localize(content.updated) }}</p>

    <div class="text-cream-300 mt-10 space-y-8 leading-7">
      <section v-for="section in content.sections" :key="localize(section.heading)">
        <h2 class="text-cream-100 mb-2 font-serif text-2xl">
          {{ localize(section.heading) }}
        </h2>
        <p v-for="paragraph in section.paragraphs" :key="paragraph.en">
          {{ localize(paragraph) }}
        </p>
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';

const { localize } = useLocale();
const content = {
  back: { en: 'Back to homepage', de: 'Zurück zur Startseite' },
  title: { en: 'Privacy policy', de: 'Datenschutzerklärung' },
  updated: { en: 'Last updated: November 3, 2026', de: 'Stand: 3. November 2026' },
  sections: [
    {
      heading: { en: '1. Controller', de: '1. Verantwortlicher' },
      paragraphs: [
        {
          en: 'Controller for this website: Kianu-Thomé Kroll, c/o MDC#1762, Welserstraße 3, 87463 Dietmannsried, Germany.',
          de: 'Verantwortlicher für diese Website ist Kianu-Thomé Kroll, c/o MDC#1762, Welserstraße 3, 87463 Dietmannsried, Deutschland.',
        },
        {
          en: 'Contact: kianukroll03@gmail.com, Phone: 01745636014',
          de: 'Kontakt: kianukroll03@gmail.com, Telefon: 01745636014',
        },
      ],
    },
    {
      heading: { en: '2. Hosting by GitHub Pages', de: '2. Hosting durch GitHub Pages' },
      paragraphs: [
        {
          en: 'This website is provided through GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you visit the website, technically required connection data such as your IP address, time of access, and browser information may be transmitted to GitHub and processed in server logs to provide a secure and stable website.',
          de: 'Diese Website wird über GitHub Pages, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, bereitgestellt. Beim Aufruf können technisch erforderliche Verbindungsdaten wie IP-Adresse, Zeitpunkt und Browserinformationen an GitHub übermittelt und in Server-Logdateien verarbeitet werden. Diese Verarbeitung dient der sicheren und stabilen Bereitstellung der Website.',
        },
        {
          en: 'More information is available in GitHub’s privacy statement: https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement',
          de: 'Weitere Informationen enthält die Datenschutzerklärung von GitHub: https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement',
        },
      ],
    },
    {
      heading: { en: '3. Contact', de: '3. Kontaktaufnahme' },
      paragraphs: [
        {
          en: 'When you contact me by email, submitted data is processed only to handle your request and related communication. The legal basis is Art. 6(1)(f) GDPR or, where the request concerns a contract, Art. 6(1)(b) GDPR.',
          de: 'Wenn Sie per E-Mail Kontakt aufnehmen, werden die übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage und für die damit verbundene Kommunikation verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; soweit die Anfrage auf den Abschluss eines Vertrags zielt, zusätzlich Art. 6 Abs. 1 lit. b DSGVO.',
        },
        {
          en: 'Data is deleted once the request is finally handled unless statutory retention duties apply.',
          de: 'Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
        },
      ],
    },
    {
      heading: {
        en: '4. Language preference and local storage',
        de: '4. Spracheinstellung und lokaler Speicher',
      },
      paragraphs: [
        {
          en: 'The website starts in English unless a previously selected language is available. When you select a language with the toggle, this preference is stored in your browser’s local storage so it remains selected on later visits. The preference stays on your device, is not transmitted to us, and can be deleted through your browser settings.',
          de: 'Die Website startet auf Englisch, sofern keine zuvor gewählte Sprache verfügbar ist. Wenn Sie über den Umschalter eine Sprache auswählen, wird diese Einstellung im lokalen Speicher Ihres Browsers abgelegt und bei späteren Besuchen berücksichtigt. Die Einstellung verbleibt auf Ihrem Gerät, wird nicht an uns übermittelt und kann über die Browsereinstellungen gelöscht werden.',
        },
      ],
    },
    {
      heading: { en: '5. No other tracking services', de: '5. Keine weiteren Tracking-Dienste' },
      paragraphs: [
        {
          en: 'This website uses no analytics, marketing, or social media tracking services, no embedded external content, and no cookies. The local language preference described above is stored with local storage and is not used for tracking.',
          de: 'Diese Website verwendet keine Analyse-, Marketing- oder Social-Media-Tracking-Dienste, keine eingebetteten externen Inhalte und keine Cookies. Die oben beschriebene Spracheinstellung wird im lokalen Speicher abgelegt und nicht zum Tracking verwendet.',
        },
      ],
    },
    {
      heading: { en: '6. Your rights', de: '6. Ihre Rechte' },
      paragraphs: [
        {
          en: 'Subject to statutory requirements, you have rights of access, rectification, erasure, restriction of processing, data portability, and objection. You also have the right to lodge a complaint with a data protection supervisory authority.',
          de: 'Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung. Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.',
        },
      ],
    },
  ],
};
</script>
