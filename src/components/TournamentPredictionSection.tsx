import type { TournamentPrediction } from '../types/game.ts'
import Callout from './Callout.tsx'

export default function TournamentPredictionSection({
  prediction,
}: {
  prediction: TournamentPrediction
}) {
  return (
    <>
      <Callout html={prediction.summary} />
      {prediction.phases.map((phase, i) => (
        <div className="key-entry" key={i}>
          <p>
            <span className="key-number">{i + 1}.</span>{' '}
            <strong>{phase.title}</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: phase.description }} />
          </p>
        </div>
      ))}
      <div className="prediction-score prediction-score--tournament">
        <div className="prediction-score-line">
          <span className="prediction-team">Projected Winner</span>
          <span className="prediction-number">{prediction.projectedWinner.name}</span>
        </div>
        <div className="prediction-score-line">
          <span className="prediction-team">Winning Score</span>
          <span className="prediction-number">{prediction.projectedWinner.score}</span>
        </div>
        <p className="prediction-rationale">{prediction.projectedWinner.rationale}</p>
      </div>
    </>
  )
}
