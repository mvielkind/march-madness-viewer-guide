import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useManifest } from '../hooks/useManifest.ts'
import { useGame } from '../hooks/useGame.ts'
import { ErrorBoundary } from '../components/ErrorBoundary.tsx'
import GameGuide from '../components/GameGuide.tsx'
import SwipeNav from '../components/SwipeNav.tsx'
import NotFoundPage from './NotFoundPage.tsx'

function GameContent({ slug }: { slug: string }) {
  const game = useGame(slug)
  return (
    <SwipeNav currentSlug={slug}>
      <GameGuide game={game} />
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
