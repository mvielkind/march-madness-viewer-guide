import type { StakeCard as StakeCardType } from '../types/game.ts'

export default function StakeCard({ stake }: { stake: StakeCardType }) {
  return (
    <p className="stake-prose">
      <strong className="stake-label">{stake.label}:</strong>{' '}
      <span dangerouslySetInnerHTML={{ __html: stake.value }} />
    </p>
  )
}
