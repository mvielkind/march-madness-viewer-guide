import type { SourceGroup } from '../types/game.ts'

export default function SourceList({ groups }: { groups: SourceGroup[] }) {
  return (
    <>
      {groups.map((group) => (
        <div key={group.heading}>
          <h3>{group.heading}</h3>
          <ul className="source-list">
            {group.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
