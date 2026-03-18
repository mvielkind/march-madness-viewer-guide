import type { CSSProperties } from 'react'
import type { GameData } from '../types/game.ts'

export default function Hero({ game }: { game: GameData }) {
  const [teamA, teamB] = game.teams
  return (
    <header className="masthead">
      <div className="masthead-kicker"><span className="masthead-kicker-label">{game.eventTag}</span></div>

      <div className="masthead-panel masthead-panel--a"
           style={{ '--panel-color': teamA.colors.primary } as CSSProperties}>
        <div className="masthead-panel-inner">
          <span className="masthead-seed">{teamA.seed}</span>
          <h1 className="masthead-team-name">{teamA.name}</h1>
          <span className="masthead-mascot">{teamA.mascot}</span>
          <span className="masthead-record">{teamA.record}</span>
          <svg className="masthead-sparkle" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0L14 9L24 12L14 15L12 24L10 15L0 12L10 9Z" fill="currentColor" />
          </svg>
          <svg className="masthead-sparkle masthead-sparkle--sm" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0L14 9L24 12L14 15L12 24L10 15L0 12L10 9Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="masthead-divider">
        <span className="masthead-divider-line" />
        <span className="masthead-vs">
          vs
          <svg className="masthead-vs-circle" viewBox="0 0 60 60" aria-hidden="true">
            <path d="M30 5C48 4 57 15 56 30C55 45 44 56 28 55C12 54 3 43 4 28C5 16 14 6 26 5"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <span className="masthead-divider-line" />
      </div>

      <div className="masthead-panel masthead-panel--b"
           style={{ '--panel-color': teamB.colors.primary } as CSSProperties}>
        <div className="masthead-panel-inner">
          <span className="masthead-seed">{teamB.seed}</span>
          <h1 className="masthead-team-name">{teamB.name}</h1>
          <span className="masthead-mascot">{teamB.mascot}</span>
          <span className="masthead-record">{teamB.record}</span>
          <svg className="masthead-sparkle" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0L14 9L24 12L14 15L12 24L10 15L0 12L10 9Z" fill="currentColor" />
          </svg>
          <svg className="masthead-sparkle masthead-sparkle--sm" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0L14 9L24 12L14 15L12 24L10 15L0 12L10 9Z" fill="currentColor" />
          </svg>
        </div>
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
