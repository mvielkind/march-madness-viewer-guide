import type { TimelineEntry } from '../types/game.ts'

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {entries.map((e, i) => (
        <div key={i} className="timeline-item">
          <div className="t-date">{e.date}</div>
          <div className="t-text" dangerouslySetInnerHTML={{ __html: e.text }} />
        </div>
      ))}
    </div>
  )
}
