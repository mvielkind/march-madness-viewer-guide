import type { CSSProperties } from 'react'
import type { GameData } from '../types/game.ts'
import Hero from './Hero.tsx'
import TournamentHero from './TournamentHero.tsx'
import Callout from './Callout.tsx'
import StakeCard from './StakeCard.tsx'
import StyleOfPlayCard from './StyleOfPlayCard.tsx'
import KeyItem from './KeyItem.tsx'
import PredictionSection from './PredictionSection.tsx'
import TournamentPredictionSection from './TournamentPredictionSection.tsx'
import PlayerCard from './PlayerCard.tsx'
import FactCard from './FactCard.tsx'
import Timeline from './Timeline.tsx'
import SourceList from './SourceList.tsx'
import TrendSection from './TrendSection.tsx'
import Footer from './Footer.tsx'

function hexToRgb(hex: string): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `${r},${g},${b}`
}

export default function GameGuide({ game }: { game: GameData }) {
  const isTournament = game.format === 'tournament'
  const teamA = game.teams[0]
  const teamB = game.teams[1]

  const cssVars = {
    '--team-a-primary': isTournament ? game.tournament!.colors.primary : teamA.colors.primary,
    '--team-a-primary-rgb': hexToRgb(isTournament ? game.tournament!.colors.primary : teamA.colors.primary),
    '--team-b-primary': isTournament ? game.tournament!.colors.primary : teamB.colors.primary,
    '--team-b-primary-rgb': hexToRgb(isTournament ? game.tournament!.colors.primary : teamB.colors.primary),
  } as CSSProperties

  return (
    <div style={cssVars}>
      {isTournament ? <TournamentHero game={game} /> : <Hero game={game} />}

      <section className="guide-section guide-stakes">
        <h2>{isTournament ? 'The Stakes' : 'Why This Game Matters'}</h2>
        <Callout html={game.stakes.callout} />
        {game.stakes.cards.map((s) => (
          <StakeCard key={s.label} stake={s} />
        ))}
      </section>

      <section className="guide-section guide-styles">
        <h2>{isTournament ? 'How to Win This Course' : 'How They Play'}</h2>
        <div className="style-blocks-row">
          {game.styles.map((s, i) => (
            isTournament
              ? <TournamentStyleCard key={i} style={s} />
              : <StyleOfPlayCard key={s.team} style={s} game={game} />
          ))}
        </div>
      </section>

      <section className="guide-section guide-keys">
        <h2>{isTournament ? 'Keys to the Tournament' : 'Keys to the Game'}</h2>
        {game.keys.map((k, i) => (
          <KeyItem key={i} item={k} index={i} />
        ))}
      </section>

      <section className="guide-section guide-prediction">
        <h2>Prediction</h2>
        {isTournament && game.tournamentPrediction ? (
          <TournamentPredictionSection prediction={game.tournamentPrediction} />
        ) : (
          <PredictionSection prediction={game.prediction} teamAName={teamA.name} teamBName={teamB.name} />
        )}
      </section>

      <section className="guide-section guide-players">
        <h2>{isTournament ? 'Players to Watch' : 'Players to Watch'}</h2>
        {isTournament ? (
          game.players.map((p) => (
            <PlayerCard key={p.name} player={p} />
          ))
        ) : (
          <>
            <h3 className="team-a-heading" style={{ color: teamA.colors.primary, borderBottomColor: teamA.colors.primary }}>{teamA.name} {teamA.mascot}</h3>
            {game.players.filter((p) => p.team === 'a').map((p) => (
              <PlayerCard key={p.name} player={p} />
            ))}
            <h3 className="team-b-heading" style={{ color: teamB.colors.primary, borderBottomColor: teamB.colors.primary }}>
              {teamB.name} {teamB.mascot}
            </h3>
            {game.players.filter((p) => p.team === 'b').map((p) => (
              <PlayerCard key={p.name} player={p} />
            ))}
          </>
        )}
      </section>

      {game.trends && game.trends.length > 0 && (
        <section className="guide-section guide-trends">
          <h2>Trends to Watch</h2>
          {game.trends.map((t) => (
            <TrendSection key={t.title} trend={t} />
          ))}
        </section>
      )}

      {game.funFacts && game.funFacts.length > 0 && (
        <section className="guide-section guide-facts">
          <h2>Fun Facts &amp; Storylines</h2>
          {game.funFacts.map((f) => (
            <FactCard key={f.title} fact={f} />
          ))}
        </section>
      )}

      {game.history && (
        <section className="guide-section guide-history">
          <h2>Historic Context</h2>
          <Callout html={game.history.callout} />
          {game.history.subsections.map((sub) => (
            <div key={sub.title}>
              <h3>{sub.title}</h3>
              {sub.type === 'timeline' && sub.timeline && (
                <Timeline entries={sub.timeline} />
              )}
              {sub.type === 'card' && (
                <div className="history-prose" dangerouslySetInnerHTML={{ __html: sub.content }} />
              )}
            </div>
          ))}
        </section>
      )}

      <section className="guide-section guide-sources">
        <h2>Sources &amp; Further Reading</h2>
        <SourceList groups={game.sources} />
      </section>

      <Footer text={game.footerText} />
    </div>
  )
}

function TournamentStyleCard({ style }: { style: { title: string; bullets: string[] } }) {
  return (
    <div className="style-col">
      <p className="style-subtitle">{style.title}</p>
      {style.bullets.map((b, i) => (
        <p key={i} className="style-point" dangerouslySetInnerHTML={{ __html: b }} />
      ))}
    </div>
  )
}
