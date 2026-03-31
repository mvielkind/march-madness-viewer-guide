import type { TrendCategory } from '../types/game.ts'

export default function TrendSection({ trend }: { trend: TrendCategory }) {
  return (
    <div className="trend-category">
      <h3>{trend.title}</h3>
      {trend.bullets.map((b, i) => (
        <p key={i} className="trend-bullet" dangerouslySetInnerHTML={{ __html: b }} />
      ))}
    </div>
  )
}
