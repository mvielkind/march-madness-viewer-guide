import { createContext, type ReactNode } from 'react'
import type { ManifestEntry } from '../types/manifest.ts'

export const ManifestContext = createContext<ManifestEntry[] | null>(null)

let manifestCache: ManifestEntry[] | null = null
let manifestPromise: Promise<ManifestEntry[]> | null = null

function fetchManifest(): Promise<ManifestEntry[]> {
  if (manifestCache) return Promise.resolve(manifestCache)
  if (!manifestPromise) {
    manifestPromise = fetch(import.meta.env.BASE_URL + 'data/manifest.json')
      .then((r) => r.json())
      .then((data: ManifestEntry[]) => {
        manifestCache = data
        return data
      })
  }
  return manifestPromise
}

function useManifestResource(): ManifestEntry[] {
  if (manifestCache) return manifestCache
  throw fetchManifest()
}

export function ManifestProvider({ children }: { children: ReactNode }) {
  const manifest = useManifestResource()
  return (
    <ManifestContext.Provider value={manifest}>
      {children}
    </ManifestContext.Provider>
  )
}
