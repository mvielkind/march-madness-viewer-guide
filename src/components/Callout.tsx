export default function Callout({ html }: { html: string }) {
  return (
    <div className="callout">
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
