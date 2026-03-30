import { Link } from 'react-router-dom'
import { games } from '../data/games/index.ts'

function getToday(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

type EventType = 'mens-basketball' | 'womens-basketball' | 'golf'

function getEventType(game: (typeof games)[number]): EventType {
  if (game.slug.startsWith('pga-')) return 'golf'
  if (game.slug.includes('womens')) return 'womens-basketball'
  return 'mens-basketball'
}

const categoryLabels: Record<EventType, { badge: string; heading: string }> = {
  'mens-basketball': { badge: 'NCAAM', heading: "Men's College Basketball" },
  'womens-basketball': { badge: 'NCAAW', heading: "Women's College Basketball" },
  'golf': { badge: 'PGA Tour', heading: 'PGA Tour' },
}

function GameCard({ game }: { game: (typeof games)[number] }) {
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

function groupByCategory(gameList: typeof games) {
  const order: EventType[] = ['mens-basketball', 'womens-basketball', 'golf']
  const groups = new Map<EventType, typeof games>()
  for (const game of gameList) {
    const type = getEventType(game)
    if (!groups.has(type)) groups.set(type, [])
    groups.get(type)!.push(game)
  }
  return order.filter((t) => groups.has(t)).map((t) => ({ type: t, games: groups.get(t)! }))
}

export default function HomePage() {
  const today = getToday()
  const todayGames = games.filter((g) => g.tipTime.startsWith(today))
  const futureGames = games.filter((g) => g.tipTime.slice(0, 10) > today)

  const todayGroups = groupByCategory(todayGames)
  const futureGroups = groupByCategory(futureGames)

  return (
    <div className="home-landing">
      <h1>Sports Viewing Guides</h1>
      <p className="home-subtitle">Your guide to today&rsquo;s games and events</p>

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
    </div>
  )
}
