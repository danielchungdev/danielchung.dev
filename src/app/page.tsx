import ThemeWrapper from './ThemeWrapper'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://danielchung.dev/#person',
      name: 'Daniel Chung',
      url: 'https://danielchung.dev',
      email: 'daniel@danielchung.dev',
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
      <ThemeWrapper />
    </>
  )
}
