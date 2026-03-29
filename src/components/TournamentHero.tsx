import type { CSSProperties } from 'react'
import type { GameData } from '../types/game.ts'

export default function TournamentHero({ game }: { game: GameData }) {
  const t = game.tournament!
  return (
    <header className="masthead masthead--tournament"
            style={{ '--panel-color': t.colors.primary } as CSSProperties}>
      <div className="masthead-kicker">
        <span className="masthead-kicker-label">{game.eventTag}</span>
      </div>

      <div className="tournament-hero-body">
        <h1 className="tournament-hero-name">{t.name}</h1>
        <p className="tournament-hero-course">{t.courseName}</p>
        <p className="tournament-hero-round">{game.round}</p>
      </div>

      <div className="masthead-meta">
        <span>{game.date}</span>
        <span className="masthead-meta-sep">&bull;</span>
        <span>{game.venue}</span>
      </div>
      {game.extraInfo && (
        <div className="masthead-extra"
             dangerouslySetInnerHTML={{ __html: game.extraInfo }} />
      )}

      <div className="masthead-funnel" />
    </header>
  )
}
