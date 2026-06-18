'use client'

import { useState } from 'react'
import { es } from '@/lib/lang/es';
import { en } from '@/lib/lang/en';
import BoldOnHover from '@/components/ui/bold-on-hover';

const Home = () => {
  const [language, setLanguage] = useState('es')

  return (
    <main>
      <BoldOnHover text={language === 'es' ? es.home.callToAction : en.home.callToAction} initialStyle="font-normal" hoverStyle="font-bold" />
    </main>
  )
}

export default Home
