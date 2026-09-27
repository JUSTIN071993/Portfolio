import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { caseStudies } from '@/data/portfolio'
import details from '@/data/case-details.json'

type Project = (typeof caseStudies)[number]

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const content = details[project.slug as keyof typeof details]
  useEffect(() => {
    const dialog = dialogRef.current!
    const trigger = document.activeElement as HTMLElement | null
    dialog.showModal()
    return () => { dialog.close(); trigger?.focus({ preventScroll: true }) }
  }, [])

  return createPortal(
    <dialog ref={dialogRef} className="jb-case" aria-labelledby="case-title" onCancel={onClose}
      onClick={event => { if (event.target === event.currentTarget) onClose() }}>
      <div className="jb-case__surface">
        <header className="jb-case__bar">
          <span className="jb-index">Case study / {project.category}</span>
          <button type="button" className="jb-case__close" onClick={onClose} aria-label="Close case study" autoFocus>✕</button>
        </header>
        <div className="jb-case__body" data-lenis-prevent>
          <h2 id="case-title">{project.name}</h2>
          <p className="jb-case__intro">{project.description}</p>
          <div className="jb-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="jb-case__columns">
            <section><h3>Client challenge</h3><p>{content.challenge}</p></section>
            <section><h3>Solution</h3><p>{content.solution}</p></section>
          </div>
          <section><h3>How it all flows</h3><ol>{content.workflow.map(step => <li key={step}>{step}</li>)}</ol></section>
          <section><h3>Project screenshots</h3><div className="jb-case__gallery">{content.images.map(image => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{image.alt}</figcaption></figure>)}</div></section>
          <div className="jb-case__columns">
            <section><h3>Key features</h3><ul>{content.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
            <section><h3>Business value</h3><ul>{content.outcomes.filter(outcome => outcome !== 'Business Value').map(outcome => <li key={outcome}>{outcome}</li>)}</ul></section>
          </div>
        </div>
      </div>
    </dialog>, document.body,
  )
}

export default function PortfolioCards({ featured = false }: { featured?: boolean }) {
  const [selected, setSelected] = useState<Project | null>(null)
  return <>
    <div className="jb-cards">
      {(featured ? caseStudies.slice(0, 1) : caseStudies).map((project, index) =>
        <button type="button" key={project.slug} className="jb-card jb-card--trigger" onClick={() => setSelected(project)} aria-haspopup="dialog" aria-label={`Read case study: ${project.name}`}>
          <span className="jb-index">0{index + 1} / {project.category}</span>
          <h2>{project.name}</h2><p>{project.description}</p>
          <div className="jb-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <span className="jb-link">Read case study ↗</span>
        </button>,
      )}
    </div>
    {selected && <CaseStudy project={selected} onClose={() => setSelected(null)} />}
  </>
}
