export interface TeamColors {
  primary: string
  secondary: string
  name: string
}

export interface TeamInfo {
  name: string
  mascot: string
  seed: string
  record: string
  colors: TeamColors
  className: string
  logoUrl?: string
}

export interface StakeCard {
  label: string
  value: string
}

export interface StyleOfPlay {
  team: 'a' | 'b'
  title: string
  bullets: string[]
}

export interface KeyToGame {
  title: string
  description: string
}

export interface PredictionPhase {
  title: string
  description: string
}

export interface Prediction {
  summary: string
  phases: PredictionPhase[]
  projectedScore: {
    teamA: number
    teamB: number
    rationale: string
  }
}

export interface Player {
  team: 'a' | 'b'
  name: string
  stats: string
  meta: string
  bio: string
}

export interface FunFact {
  emoji: string
  title: string
  body: string
}

export interface TimelineEntry {
  date: string
  text: string
}

export interface HistorySection {
  callout: string
  subsections: {
    title: string
    content: string
    type: 'timeline' | 'card'
    timeline?: TimelineEntry[]
  }[]
}

export interface SourceGroup {
  heading: string
  links: { label: string; url: string }[]
}

export interface TabDef {
  id: string
  label: string
}

export interface GameData {
  slug: string
  title: string
  eventTag: string
  date: string
  round: string
  tipTime: string
  venue: string
  extraInfo: string
  teams: [TeamInfo, TeamInfo]
  tabs: TabDef[]
  stakes: {
    callout: string
    cards: StakeCard[]
  }
  styles: StyleOfPlay[]
  keys: KeyToGame[]
  prediction: Prediction
  players: Player[]
  funFacts: FunFact[]
  history: HistorySection
  sources: SourceGroup[]
  footerText: string
}
