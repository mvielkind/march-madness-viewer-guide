import type { FunFact } from '../types/game.ts'

export default function FactCard({ fact }: { fact: FunFact }) {
  return (
    <p className="fact-prose">
      <strong>{fact.title}:</strong>{' '}
      <span dangerouslySetInnerHTML={{ __html: fact.body }} />
    </p>
  )
}
