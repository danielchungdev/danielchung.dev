import ThemeWrapper from './ThemeWrapper'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Daniel Chung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daniel Chung is a freelance full-stack web developer and software engineer based in Panama City, Panama. He specializes in React, Next.js, TypeScript, Node.js, and AI tool development. He is currently building AI tools at Mod Op and is available for freelance projects worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Daniel Chung offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daniel Chung offers freelance web development services including: custom web application development with React and Next.js, full-stack application development, AI tool development and LLM integration, payments integration (Stripe and local processors), frontend UI/UX implementation, and technical consulting for startups and enterprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Daniel Chung located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daniel Chung is based in Panama City, Panama (UTC-5) and works with clients worldwide. He is fully bilingual in English and Spanish.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I hire Daniel Chung for a project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Daniel Chung directly at daniel@danielchung.dev or through his website at https://danielchung.dev to discuss your project requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does Daniel Chung specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Daniel Chung specializes in React, Next.js, TypeScript, Node.js, Python, TailwindCSS, and Framer Motion on the frontend and full-stack side. He also has expertise in AI tool development, LLM integrations, payments integration, and data engineering with Python ETL processes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Daniel Chung available for remote freelance work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Daniel Chung is available for remote freelance projects and technical consulting engagements for clients worldwide, working from Panama City, Panama.',
      },
    },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://danielchung.dev/#person',
      name: 'Daniel Chung',
      url: 'https://danielchung.dev',
      email: 'daniel@danielchung.dev',
      image: {
        '@type': 'ImageObject',
        url: 'https://danielchung.dev/images/profile.png',
        width: 400,
        height: 400,
      },
      jobTitle: 'Freelance Full-Stack Web Developer',
      description:
        'Daniel Chung is a freelance full-stack web developer and software engineer based in Panama City, Panama, specializing in React, Next.js, TypeScript, and AI tools.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Panama City',
        addressRegion: 'Panama',
        addressCountry: 'PA',
      },
      sameAs: [
        'https://github.com/danielchungdev',
        'https://www.linkedin.com/in/danielchungdev',
      ],
      knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Python',
        'TailwindCSS',
        'Framer Motion',
        'AI tool development',
        'Full-stack web development',
        'Payments integration',
        'Data engineering',
      ],
      availableLanguage: ['English', 'Spanish'],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Freelance Web Developer',
        description:
          'Freelance full-stack web developer specializing in React, Next.js, TypeScript, and AI tools, based in Panama City, Panama.',
        occupationLocation: {
          '@type': 'Country',
          name: 'Panama',
        },
      },
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Freelance Web Development',
          description:
            'Custom web application development, frontend development with React and Next.js, full-stack applications, AI tool integration, payments integration, and technical consulting — available from Panama City, Panama for clients worldwide.',
          provider: { '@id': 'https://danielchung.dev/#person' },
        },
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://danielchung.dev/#website',
      url: 'https://danielchung.dev',
      name: 'Daniel Chung — Freelance Web Developer in Panama',
      author: { '@id': 'https://danielchung.dev/#person' },
      description:
        'Portfolio and contact site for Daniel Chung, freelance full-stack web developer based in Panama City, Panama.',
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ThemeWrapper />
    </>
  )
}
