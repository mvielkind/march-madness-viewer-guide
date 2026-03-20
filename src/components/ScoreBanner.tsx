import { Link, useParams } from 'react-router-dom'
import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { games } from '../data/games/index.ts'

const rounds = ['All Rounds', ...Array.from(new Set(games.map((g) => g.round)))]

export default function ScoreBanner() {
  const { slug } = useParams<{ slug: string }>()
  const gamesRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [selectedRound, setSelectedRound] = useState('All Rounds')

  const filteredGames = useMemo(
    () =>
      selectedRound === 'All Rounds'
        ? games
        : games.filter((g) => g.round === selectedRound),
    [selectedRound],
  )

  const closestSlug = useMemo(() => {
    if (filteredGames.length === 0) return null
    const now = Date.now()
    let best = filteredGames[0]
    let bestDiff = Math.abs(Date.parse(best.tipTime) - now)
    for (const g of filteredGames) {
      const diff = Math.abs(Date.parse(g.tipTime) - now)
      if (diff < bestDiff) {
        best = g
        bestDiff = diff
      }
    }
    return best.slug
  }, [filteredGames])

  const updateArrows = useCallback(() => {
    const el = gamesRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 1)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  useEffect(() => {
    const el = gamesRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    const ro = new ResizeObserver(updateArrows)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      ro.disconnect()
    }
  }, [updateArrows])

  const isInitialMount = useRef(true)

  useEffect(() => {
    const targetSlug = slug || closestSlug
    if (!targetSlug || !gamesRef.current) return

    const behavior = isInitialMount.current ? 'instant' as const : 'smooth' as const
    isInitialMount.current = false

    // Small delay to let the DOM update after filter change
    const t = setTimeout(() => {
      const el = gamesRef.current?.querySelector(`[data-slug="${targetSlug}"]`)
      if (el) {
        el.scrollIntoView({ inline: 'center', block: 'nearest', behavior })
      }
      updateArrows()
    }, 50)
    return () => clearTimeout(t)
  }, [selectedRound, slug, closestSlug, updateArrows])

  const scroll = (dir: number) => {
    gamesRef.current?.scrollBy({ left: dir * 200, behavior: 'smooth' })
  }

  return (
    <nav className="score-banner">
      <div className="score-banner-inner">
        <div className="banner-brand">GUIDES</div>
        <select
          className="banner-round-select"
          value={selectedRound}
          onChange={(e) => setSelectedRound(e.target.value)}
        >
          {rounds.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <div className="banner-games-wrap">
          {canScrollLeft && (
            <button
              className="banner-arrow banner-arrow--left"
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
            >
              ‹
            </button>
          )}
          <div className="banner-games" ref={gamesRef}>
            {filteredGames.map((game) => {
              const [teamA, teamB] = game.teams
              const active = slug === game.slug
              return (
                <Link
                  key={game.slug}
                  to={`/games/${game.slug}`}
                  data-slug={game.slug}
                  className={`score-bug${active ? ' score-bug--active' : ''}${!slug && game.slug === closestSlug ? ' score-bug--now' : ''}`}
                >
                  <div className="bug-teams">
                    <div className="bug-team">
                      <span
                        className="bug-color"
                        style={{ background: teamA.colors.primary }}
                      />
                      <span className="bug-name">{teamA.name}</span>
                      <span className="bug-seed">{teamA.seed}</span>
                    </div>
                    <div className="bug-team">
                      <span
                        className="bug-color"
                        style={{ background: teamB.colors.primary }}
                      />
                      <span className="bug-name">{teamB.name}</span>
                      <span className="bug-seed">{teamB.seed}</span>
                    </div>
                  </div>
                  <div className="bug-meta">{game.date}</div>
                </Link>
              )
            })}
          </div>
          {canScrollRight && (
            <button
              className="banner-arrow banner-arrow--right"
              onClick={() => scroll(1)}
              aria-label="Scroll right"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
