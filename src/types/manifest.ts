export interface ManifestTeam {
  name: string
  mascot: string
  seed: string
  colors: { primary: string }
}

export interface ManifestEntry {
  slug: string
  title: string
  eventTag: string
  date: string
  round: string
  tipTime: string
  venue: string
  format?: 'matchup' | 'tournament'
  teams: [ManifestTeam, ManifestTeam]
  tournament?: {
    name: string
    colors: { primary: string }
  }
  availableRounds?: string[]
}
