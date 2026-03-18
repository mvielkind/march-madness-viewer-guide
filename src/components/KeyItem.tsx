import type { KeyToGame } from '../types/game.ts'

export default function KeyItem({ item, index }: { item: KeyToGame; index: number }) {
  return (
    <div className="key-entry">
      <p>
        <span className="key-number">{index + 1}.</span>{' '}
        <strong>{item.title}</strong> {item.description}
      </p>
    </div>
  )
}
