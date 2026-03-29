import { useRef, useEffect, type ReactNode } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { games } from '../data/games/index.ts'

export default function SwipeNav({ currentSlug, children }: { currentSlug: string; children: ReactNode }) {
  const navigate = useNavigate()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const currentIndex = games.findIndex((g) => g.slug === currentSlug)
  const prevGame = currentIndex > 0 ? games[currentIndex - 1] : null
  const nextGame = currentIndex < games.length - 1 ? games[currentIndex + 1] : null

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0]
      touchStart.current = { x: t.clientX, y: t.clientY }
    }

    function onTouchEnd(e: TouchEvent) {
      if (!touchStart.current) return
      const t = e.changedTouches[0]
      const deltaX = t.clientX - touchStart.current.x
      const deltaY = t.clientY - touchStart.current.y
      touchStart.current = null

      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0 && nextGame) {
          navigate(`/games/${nextGame.slug}`)
        } else if (deltaX > 0 && prevGame) {
          navigate(`/games/${prevGame.slug}`)
        }
      }
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [navigate, prevGame, nextGame])

  return (
    <div ref={wrapperRef}>
      {children}
      {prevGame && (
        <Link to={`/games/${prevGame.slug}`} className="swipe-nav-link swipe-nav-link--prev" title={prevGame.format === 'tournament' ? prevGame.title : `${prevGame.teams[0].name} vs ${prevGame.teams[1].name}`}>
          <span className="swipe-nav-arrow">&lsaquo;</span>
        </Link>
      )}
      {nextGame && (
        <Link to={`/games/${nextGame.slug}`} className="swipe-nav-link swipe-nav-link--next" title={nextGame.format === 'tournament' ? nextGame.title : `${nextGame.teams[0].name} vs ${nextGame.teams[1].name}`}>
          <span className="swipe-nav-arrow">&rsaquo;</span>
        </Link>
      )}
    </div>
  )
}
