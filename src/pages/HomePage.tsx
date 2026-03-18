import { Link } from 'react-router-dom'
import { games } from '../data/games/index.ts'

export default function HomePage() {
  return (
    <div className="home-landing">
      <h1>March Madness Viewing Guides</h1>
      <p className="home-subtitle">Select a game above to get started</p>
      <div className="home-games">
        {games.map((game) => {
          const [teamA, teamB] = game.teams
          return (
            <Link key={game.slug} to={`/games/${game.slug}`} className="home-game-link">
              <div className="home-game-event">{game.eventTag}</div>
              <div className="home-game-matchup">
                <span style={{ color: teamA.colors.primary }}>{teamA.name}</span>
                {' vs '}
                <span style={{ color: `color-mix(in srgb, ${teamB.colors.primary} 50%, #7eb8e2)` }}>
                  {teamB.name}
                </span>
              </div>
              <div className="home-game-info">{game.date} &bull; {game.venue}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
