const roundLabels: Record<string, string> = {
  preview: 'Preview',
  'round-1': 'R1',
  'round-2': 'R2',
  'round-3': 'R3',
  'round-4': 'R4',
}

export default function RoundSelector({
  rounds,
  selected,
  onSelect,
}: {
  rounds: string[]
  selected: string
  onSelect: (round: string) => void
}) {
  return (
    <nav className="round-selector">
      {rounds.map((key) => (
        <button
          key={key}
          className={`round-pill${key === selected ? ' round-pill--active' : ''}`}
          onClick={() => onSelect(key)}
        >
          {roundLabels[key] ?? key}
        </button>
      ))}
    </nav>
  )
}
