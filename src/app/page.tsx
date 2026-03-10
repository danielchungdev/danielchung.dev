import TypingName from './TypingName'
import AnimatedContent from './AnimatedContent'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-bold text-2xl mb-24"><TypingName /></h1>
      <hr className="border-neutral-700 mb-12 -ml-[calc(50vw-50%)] w-[50vw]" />
      <AnimatedContent />
    </main>
  )
}
