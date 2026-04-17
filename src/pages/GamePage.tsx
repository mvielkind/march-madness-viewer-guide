import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useManifest } from '../hooks/useManifest.ts'
import { useGame } from '../hooks/useGame.ts'
import { useTournamentRound } from '../hooks/useTournamentRound.ts'
import { ErrorBoundary } from '../components/ErrorBoundary.tsx'
import GameGuide from '../components/GameGuide.tsx'
import RoundSelector from '../components/RoundSelector.tsx'
import SwipeNav from '../components/SwipeNav.tsx'
import NotFoundPage from './NotFoundPage.tsx'

function GameContent({ slug }: { slug: string }) {
  const game = useGame(slug)
  const { activeGame, selectedRound, setSelectedRound, roundKeys } = useTournamentRound(game)

  const roundSelector = roundKeys.length > 1 && selectedRound ? (
    <RoundSelector rounds={roundKeys} selected={selectedRound} onSelect={setSelectedRound} />
  ) : null

  return (
    <SwipeNav currentSlug={slug}>
      <GameGuide game={activeGame} roundSelector={roundSelector} />
    </SwipeNav>
  )
}

export default function GamePage() {
  const { slug } = useParams<{ slug: string }>()
  const manifest = useManifest()

  if (!slug || !manifest.some((g) => g.slug === slug)) {
    return <NotFoundPage />
  }

  return (
    <ErrorBoundary fallback={<NotFoundPage />}>
      <Suspense fallback={<div className="loading-spinner">Loading&hellip;</div>}>
        <GameContent slug={slug} />
      </Suspense>
    </ErrorBoundary>
  )
}
