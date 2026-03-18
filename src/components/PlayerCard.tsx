import type { Player } from '../types/game.ts'

interface Props {
  player: Player
}

export default function PlayerCard({ player }: Props) {
  return (
    <div className="player-entry">
      <p>
        <strong className="player-name-inline">{player.name}</strong>
        <span className="player-stats-inline"> ({player.stats})</span>
        {' — '}
        <span className="player-meta-inline">{player.meta}</span>
      </p>
      <p className="player-bio-prose" dangerouslySetInnerHTML={{ __html: player.bio }} />
    </div>
  )
}
