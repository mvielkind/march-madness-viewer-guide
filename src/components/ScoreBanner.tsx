import { Link, useParams } from 'react-router-dom'
import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { useManifest } from '../hooks/useManifest.ts'

const sports = ['All Sports', "Men's Basketball", "Women's Basketball", 'PGA Tour'] as const

function getToday(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function isPga(slug: string): boolean {
  return slug.startsWith('pga-')
}

function isWomens(slug: string): boolean {
  return slug.includes('womens')
}

export default function ScoreBanner() {
  const games = useManifest()
  const { slug } = useParams<{ slug: string }>()
  const gamesRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [selectedSport, setSelectedSport] = useState<string>('All Sports')

  const filteredGames = useMemo(() => {
    const today = getToday()
    return games.filter((g) => {
      const dateStr = g.tipTime.slice(0, 10)
      if (dateStr < today) return false
      if (selectedSport === 'PGA Tour') return isPga(g.slug)
      if (selectedSport === "Men's Basketball") return !isPga(g.slug) && !isWomens(g.slug)
      if (selectedSport === "Women's Basketball") return isWomens(g.slug)
      return true
    })
  }, [games, selectedSport])

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
    const targetSlug = (slug && filteredGames.some((g) => g.slug === slug)) ? slug : closestSlug
    if (!targetSlug || !gamesRef.current) return

    const behavior = isInitialMount.current ? 'instant' as const : 'smooth' as const
    isInitialMount.current = false

    const t = setTimeout(() => {
      const el = gamesRef.current?.querySelector(`[data-slug="${targetSlug}"]`)
      if (el) {
        el.scrollIntoView({ inline: 'center', block: 'nearest', behavior })
      }
      updateArrows()
    }, 50)
    return () => clearTimeout(t)
  }, [selectedSport, slug, closestSlug, updateArrows])

  const scroll = (dir: number) => {
    gamesRef.current?.scrollBy({ left: dir * 200, behavior: 'smooth' })
  }

  return (
    <nav className="score-banner">
      <div className="score-banner-inner">
        <Link to="/" className="banner-home" aria-label="Home">
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M10 2.5L2 9h2.5v7h4v-4h3v4h4V9H18L10 2.5z"/></svg>
        </Link>
        <div className="banner-brand">GUIDES</div>
        <select
          className="banner-round-select"
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value)}
        >
          {sports.map((s) => (
            <option key={s} value={s}>
              {s}
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
              const pga = isPga(game.slug)
              const active = slug === game.slug
              const now = !slug && game.slug === closestSlug

              if (pga) {
                const [tournamentName] = game.title.split(' — ')
                return (
                  <Link
                    key={game.slug}
                    to={`/games/${game.slug}`}
                    data-slug={game.slug}
                    className={`score-bug score-bug--pga${active ? ' score-bug--active' : ''}${now ? ' score-bug--now' : ''}`}
                  >
                    <div className="bug-pga-title">
                      <span
                        className="bug-color"
                        style={{ background: game.teams[0].colors.primary }}
                      />
                      <span className="bug-name">{tournamentName}</span>
                    </div>
                    <div className="bug-meta">{game.round} &bull; {game.date}</div>
                  </Link>
                )
              }

              const [teamA, teamB] = game.teams
              return (
                <Link
                  key={game.slug}
                  to={`/games/${game.slug}`}
                  data-slug={game.slug}
                  className={`score-bug${active ? ' score-bug--active' : ''}${now ? ' score-bug--now' : ''}`}
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
