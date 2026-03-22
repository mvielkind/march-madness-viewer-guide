import type { Prediction } from '../types/game.ts'
import Callout from './Callout.tsx'

export default function PredictionSection({
  prediction,
  teamAName,
  teamBName,
}: {
  prediction: Prediction
  teamAName: string
  teamBName: string
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
      <div className="prediction-score">
        <div className="prediction-score-line">
          <span className="prediction-team">{teamAName}</span>
          <span className="prediction-number">{prediction.projectedScore.teamA}</span>
        </div>
        <div className="prediction-score-line">
          <span className="prediction-team">{teamBName}</span>
          <span className="prediction-number">{prediction.projectedScore.teamB}</span>
        </div>
        <p className="prediction-rationale">{prediction.projectedScore.rationale}</p>
      </div>
    </>
  )
}
