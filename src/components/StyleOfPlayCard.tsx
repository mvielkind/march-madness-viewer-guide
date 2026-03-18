import type { StyleOfPlay, GameData } from '../types/game.ts'

interface Props {
  style: StyleOfPlay
  game: GameData
}

export default function StyleOfPlayCard({ style, game }: Props) {
  const team = style.team === 'a' ? game.teams[0] : game.teams[1]
  return (
    <div className={`style-col team-${style.team}`}>
      <h4 className="style-team-name">{team.name} {team.mascot}</h4>
      <p className="style-subtitle">{style.title}</p>
      {style.bullets.map((b, i) => (
        <p key={i} className="style-point" dangerouslySetInnerHTML={{ __html: b }} />
      ))}
    </div>
  )
}
