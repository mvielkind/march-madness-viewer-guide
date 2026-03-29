import { Link } from 'react-router-dom'
import { games } from '../data/games/index.ts'

function getToday(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function getEventType(game: (typeof games)[number]): 'basketball' | 'golf' {
  return game.slug.startsWith('pga-') ? 'golf' : 'basketball'
}

function GameCard({ game }: { game: (typeof games)[number] }) {
  const [teamA, teamB] = game.teams
  const eventType = getEventType(game)
  const isTournament = game.format === 'tournament' && game.tournament
  return (
    <Link key={game.slug} to={`/games/${game.slug}`} className="home-game-link">
      <div className="home-game-event">
        <span className={`home-event-badge home-event-badge--${eventType}`}>
          {eventType === 'golf' ? 'PGA Tour' : 'NCAA'}
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

export default function HomePage() {
  const today = getToday()
  const todayGames = games.filter((g) => g.tipTime.startsWith(today))
  const futureGames = games.filter((g) => g.tipTime.slice(0, 10) > today)

  return (
    <div className="home-landing">
      <h1>Sports Viewing Guides</h1>
      <p className="home-subtitle">Your guide to today&rsquo;s games and events</p>

      {todayGames.length > 0 && (
        <section className="home-today">
          <h2 className="home-today-heading">Today&rsquo;s Events</h2>
          <div className="home-today-games">
            {todayGames.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>
      )}

      {futureGames.length > 0 && (
        <section className="home-all">
          <h2 className="home-section-heading">Upcoming Events</h2>
          <div className="home-games">
            {futureGames.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
