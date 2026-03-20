import { useParams } from 'react-router-dom'
import { games } from '../data/games/index.ts'
import GameGuide from '../components/GameGuide.tsx'
import SwipeNav from '../components/SwipeNav.tsx'
import NotFoundPage from './NotFoundPage.tsx'

export default function GamePage() {
  const { slug } = useParams<{ slug: string }>()
  const game = games.find((g) => g.slug === slug)

  if (!game) return <NotFoundPage />

  return (
    <SwipeNav currentSlug={game.slug}>
      <GameGuide game={game} />
    </SwipeNav>
  )
}
