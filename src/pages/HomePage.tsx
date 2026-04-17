import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useManifest } from '../hooks/useManifest.ts'
import type { ManifestEntry } from '../types/manifest.ts'

function getToday(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

type EventType = 'mens-basketball' | 'womens-basketball' | 'golf' | 'mlb' | 'nba' | 'nwsl'

function getEventType(game: ManifestEntry): EventType {
  if (game.slug.startsWith('mlb-')) return 'mlb'
  if (game.slug.startsWith('pga-')) return 'golf'
  if (game.slug.startsWith('nba-') || game.eventTag.startsWith('NBA')) return 'nba'
  if (game.slug.startsWith('nwsl-')) return 'nwsl'
  if (game.slug.includes('womens')) return 'womens-basketball'
  return 'mens-basketball'
}

const categoryLabels: Record<EventType, { badge: string; heading: string }> = {
  'mens-basketball': { badge: 'NCAAM', heading: "Men's College Basketball" },
  'womens-basketball': { badge: 'NCAAW', heading: "Women's College Basketball" },
  'golf': { badge: 'PGA Tour', heading: 'PGA Tour' },
  'mlb': { badge: 'MLB', heading: 'Major League Baseball' },
  'nba': { badge: 'NBA', heading: 'NBA' },
  'nwsl': { badge: 'NWSL', heading: 'NWSL' },
}

function GameCard({ game }: { game: ManifestEntry }) {
  const [teamA, teamB] = game.teams
  const eventType = getEventType(game)
  const isTournament = game.format === 'tournament' && game.tournament
  return (
    <Link key={game.slug} to={`/games/${game.slug}`} className="home-game-link">
      <div className="home-game-event">
        <span className={`home-event-badge home-event-badge--${eventType}`}>
          {categoryLabels[eventType].badge}
        </span>
        {game.eventTag}
      </div>
      {isTournament ? (
        <div className="home-game-matchup">
          <span style={{ color: game.tournament!.colors.primary }}>{game.tournament!.name}</span>
          <span className="home-game-round"> &bull; {game.round}</span>
          {game.availableRounds && game.availableRounds.length > 1 && (
            <span className="home-game-rounds-count"> &bull; {game.availableRounds.length} rounds</span>
          )}
        </div>
      ) : (
        <div className="home-game-matchup">
          <span style={{ color: teamA.colors.primary }}>{teamA.name}</span>
          {' vs '}
          <span style={{ color: `color-mix(in srgb, ${teamB.colors.primary} 50%, #7eb8e2)` }}>
            {teamB.name}
          </span>
        </div>
      )}
      <div className="home-game-info">{game.date} &bull; {game.venue}</div>
    </Link>
  )
}

function groupByCategory(gameList: ManifestEntry[]) {
  const order: EventType[] = ['mens-basketball', 'womens-basketball', 'golf', 'mlb', 'nba', 'nwsl']
  const groups = new Map<EventType, ManifestEntry[]>()
  for (const game of gameList) {
    const type = getEventType(game)
    if (!groups.has(type)) groups.set(type, [])
    groups.get(type)!.push(game)
  }
  return order.filter((t) => groups.has(t)).map((t) => ({ type: t, games: groups.get(t)! }))
}

export default function HomePage() {
  const manifest = useManifest()
  const today = getToday()
  const [selectedSport, setSelectedSport] = useState<EventType | 'all'>('all')

  const availableSports = useMemo(() => {
    const order: EventType[] = ['mens-basketball', 'womens-basketball', 'golf', 'mlb', 'nba', 'nwsl']
    const present = new Set(manifest.map(getEventType))
    return order.filter((t) => present.has(t))
  }, [manifest])

  const { todayGroups, futureGroups, pastGroups } = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 7)
    const cutoff = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    const filtered = selectedSport === 'all'
      ? manifest
      : manifest.filter((g) => getEventType(g) === selectedSport)
    const todayGames = filtered.filter((g) => g.tipTime.startsWith(today))
    const futureGames = filtered.filter((g) => {
      const date = g.tipTime.slice(0, 10)
      return date > today && date <= cutoff
    })
    const pastGames = filtered
      .filter((g) => g.tipTime.slice(0, 10) < today)
      .sort((a, b) => b.tipTime.localeCompare(a.tipTime))
    return {
      todayGroups: groupByCategory(todayGames),
      futureGroups: groupByCategory(futureGames),
      pastGroups: groupByCategory(pastGames),
    }
  }, [manifest, today, selectedSport])

  const hasUpcoming = todayGroups.length > 0 || futureGroups.length > 0

  return (
    <div className="home-landing">
      <h1>Sports Viewing Guides</h1>
      <p className="home-subtitle">Your guide to today&rsquo;s games and events</p>

      <div className="home-sport-filter">
        <label htmlFor="sport-select" className="home-sport-filter-label">Sport</label>
        <select
          id="sport-select"
          className="home-sport-select"
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value as EventType | 'all')}
        >
          <option value="all">All Sports</option>
          {availableSports.map((t) => (
            <option key={t} value={t}>{categoryLabels[t].heading}</option>
          ))}
        </select>
      </div>

      {todayGroups.length > 0 && (
        <section className="home-today">
          <h2 className="home-today-heading">Today&rsquo;s Events</h2>
          {todayGroups.map(({ type, games: categoryGames }) => (
            <div key={type} className="home-category">
              <h3 className="home-category-heading">{categoryLabels[type].heading}</h3>
              <div className="home-today-games">
                {categoryGames.map((game) => (
                  <GameCard key={game.slug} game={game} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {futureGroups.length > 0 && (
        <section className="home-all">
          <h2 className="home-section-heading">Upcoming Events</h2>
          {futureGroups.map(({ type, games: categoryGames }) => (
            <div key={type} className="home-category">
              <h3 className="home-category-heading">{categoryLabels[type].heading}</h3>
              <div className="home-games">
                {categoryGames.map((game) => (
                  <GameCard key={game.slug} game={game} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {!hasUpcoming && pastGroups.length > 0 && (
        <section className="home-all">
          <h2 className="home-section-heading">Previous Events</h2>
          {pastGroups.map(({ type, games: categoryGames }) => (
            <div key={type} className="home-category">
              <h3 className="home-category-heading">{categoryLabels[type].heading}</h3>
              <div className="home-games">
                {categoryGames.map((game) => (
                  <GameCard key={game.slug} game={game} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
