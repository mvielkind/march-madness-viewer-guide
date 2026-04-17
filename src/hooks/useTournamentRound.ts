import { useState, useMemo } from 'react'
import type { GameData } from '../types/game.ts'

export function useTournamentRound(game: GameData) {
  const roundKeys = useMemo(
    () => (game.rounds ? Object.keys(game.rounds) : []),
    [game.rounds]
  )

  const [selectedRound, setSelectedRound] = useState(
    roundKeys.length > 0 ? roundKeys[roundKeys.length - 1] : null
  )

  const activeGame: GameData = useMemo(() => {
    if (!selectedRound || !game.rounds?.[selectedRound]) return game
    const round = game.rounds[selectedRound]
    return {
      ...game,
      date: round.date,
      tipTime: round.tipTime,
      extraInfo: round.extraInfo,
      eventTag: round.eventTag,
      round: round.roundLabel,
      stakes: round.stakes,
      styles: round.styles,
      keys: round.keys,
      prediction: round.prediction,
      tournamentPrediction: round.tournamentPrediction,
      players: round.players,
      trends: round.trends,
      funFacts: round.funFacts,
      sources: round.sources,
      footerText: round.footerText,
    }
  }, [game, selectedRound])

  return { activeGame, selectedRound, setSelectedRound, roundKeys }
}
