import { useContext } from 'react'
import { ManifestContext } from '../context/ManifestContext.tsx'
import type { ManifestEntry } from '../types/manifest.ts'

export function useManifest(): ManifestEntry[] {
  const ctx = useContext(ManifestContext)
  if (!ctx) throw new Error('useManifest must be used inside ManifestProvider')
  return ctx
}
