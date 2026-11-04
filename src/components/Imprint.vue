<template>
  <article class="mx-auto min-h-screen max-w-3xl px-6 py-12 sm:px-10 lg:px-16">
    <a href="/" class="text-accent-300 hover:text-accent-100 font-mono text-sm transition-colors">
      ← {{ localize(content.back) }}
    </a>
    <h1 class="text-cream-100 mt-12 font-serif text-4xl">{{ localize(content.title) }}</h1>

    <div class="text-cream-300 mt-10 space-y-8 leading-7">
      <section>
        <h2 class="text-cream-100 mb-2 font-serif text-2xl">
          {{ localize(content.providerHeading) }}
        </h2>
        <p>
          Kianu-Thomé Kroll<br />
          c/o MDC#1762<br />
          Welserstraße 3<br />
          87463 Dietmannsried<br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 class="text-cream-100 mb-2 font-serif text-2xl">
          {{ localize(content.contactHeading) }}
        </h2>
        <p>
          {{ localize(content.email) }}:
          <span class="text-accent-300"> kianukroll03@gmail.com </span>
          <br />
          {{ localize(content.phone) }}:
          <span class="text-accent-300">01745636014</span>
        </p>
      </section>

      <section>
        <h2 class="text-cream-100 mb-2 font-serif text-2xl">
          {{ localize(content.responsibleHeading) }}
        </h2>
        <p>
          Kianu-Thomé Kroll<br />
          c/o MDC#1762<br />
          Welserstraße 3<br />
          87463 Dietmannsried<br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 class="text-cream-100 mb-2 font-serif text-2xl">
          {{ localize(content.liabilityHeading) }}
        </h2>
        <p>{{ localize(content.liabilityText) }}</p>
      </section>

      <section>
        <h2 class="text-cream-100 mb-2 font-serif text-2xl">
          {{ localize(content.linksHeading) }}
        </h2>
        <p>{{ localize(content.linksText) }}</p>
      </section>

      <section>
        <h2 class="text-cream-100 mb-2 font-serif text-2xl">
          {{ localize(content.disputeHeading) }}
        </h2>
        <p>{{ localize(content.disputeText) }}</p>
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';

const { localize } = useLocale();
const content = {
  back: { en: 'Back to homepage', de: 'Zurück zur Startseite' },
  title: { en: 'Imprint', de: 'Impressum' },
  providerHeading: { en: 'Provider', de: 'Diensteanbieter' },
  contactHeading: { en: 'Contact', de: 'Kontakt' },
  email: { en: 'Email', de: 'E-Mail' },
  phone: { en: 'Phone', de: 'Telefon' },
  responsibleHeading: {
    en: 'Responsible for content',
    de: 'Verantwortlich für den Inhalt',
  },
  liabilityHeading: {
    en: 'Liability for content',
    de: 'Haftung für Inhalte',
  },
  liabilityText: {
    en: 'As a service provider, I am responsible for my own content on this website in accordance with Section 7(1) of the German Digital Services Act (DDG). Under Sections 8 to 10 DDG, I am generally not obliged to monitor transmitted or stored third-party information or investigate circumstances indicating unlawful activity. Obligations to remove or block the use of information under generally applicable laws remain unaffected.',
    de: 'Als Diensteanbieter bin ich gemäß § 7 Absatz 1 des Digitale-Dienste-Gesetzes (DDG) für eigene Inhalte auf dieser Website verantwortlich. Nach den §§ 8 bis 10 DDG bin ich grundsätzlich nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hindeuten. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemein geltenden Gesetzen bleiben davon unberührt.',
  },
  linksHeading: {
    en: 'Liability for links',
    de: 'Haftung für Links',
  },
  linksText: {
    en: 'This website contains links to external websites of third parties (e.g. former employers and my profiles on LinkedIn and GitHub), over whose content I have no influence. I therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking; no unlawful content was apparent at that time. Permanent monitoring of linked pages is not reasonable without concrete indications of a violation. Upon becoming aware of any legal violations, I will remove the affected links immediately.',
    de: 'Diese Website enthält Links zu externen Websites Dritter (z. B. frühere Arbeitgeber sowie meine Profile bei LinkedIn und GitHub), auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte kann ich daher keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.',
  },
  disputeHeading: {
    en: 'Consumer dispute resolution',
    de: 'Verbraucherstreitbeilegung',
  },
  disputeText: {
    en: 'I am neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
    de: 'Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
  },
};
</script>
