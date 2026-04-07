import type { GameData } from '../types/game.ts'

const gameCache = new Map<string, GameData>()
const gamePromises = new Map<string, Promise<GameData>>()

function fetchGame(slug: string): Promise<GameData> {
  if (gameCache.has(slug)) return Promise.resolve(gameCache.get(slug)!)
  if (!gamePromises.has(slug)) {
    const promise = fetch(
      import.meta.env.BASE_URL + `data/games/${slug}.json`
    )
      .then((r) => {
        if (!r.ok) throw new Error(`Game not found: ${slug}`)
        return r.json()
      })
      .then((data: GameData) => {
        gameCache.set(slug, data)
        return data
      })
    gamePromises.set(slug, promise)
  }
  return gamePromises.get(slug)!
}

export function useGame(slug: string): GameData {
  if (gameCache.has(slug)) return gameCache.get(slug)!
  throw fetchGame(slug)
}
