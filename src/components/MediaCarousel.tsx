import { useState } from 'react'
import { Link } from 'react-router-dom'
import { certificates } from '@/data/certificates'
import { caseStudies } from '@/data/portfolio'
import details from '@/data/case-details.json'

type Slide = { image: string; alt: string; title: string; href: string; external?: boolean }
const projectSlides: Slide[] = caseStudies.flatMap(project =>
  details[project.slug as keyof typeof details].images.map(image => ({ image: image.src, alt: image.alt, title: project.name, href: '/projects' })),
)
const certificateSlides: Slide[] = certificates.map(certificate => ({ image: certificate.image, alt: `${certificate.name} certificate of completion awarded to Justin Bernaldez`, title: certificate.name, href: '/about#credentials' }))

export default function MediaCarousel({ kind }: { kind: 'projects' | 'certificates' }) {
  const slides = kind === 'projects' ? projectSlides : certificateSlides
  const [index, setIndex] = useState(0)
  const slide = slides[index]
  const move = (delta: number) => setIndex(current => (current + delta + slides.length) % slides.length)
  return <section className="media-carousel" aria-label={kind === 'projects' ? 'Project screenshots' : 'Training certificates'} aria-roledescription="carousel"
    onKeyDown={event => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1) } }}>
    <Link to={slide.href} className="media-carousel__image" aria-label={kind === 'projects' ? `Explore ${slide.title}` : `View ${slide.title} certificate and verification`}>
      <img src={slide.image} alt={slide.alt} loading="lazy" />
    </Link>
    <div className="media-carousel__controls">
      <button type="button" onClick={() => move(-1)} aria-label={`Previous ${kind === 'projects' ? 'project screenshot' : 'certificate'}`}>‹</button>
      <div className="media-carousel__caption" aria-live="polite" aria-atomic="true"><span>{slide.title}</span><small>{index + 1} / {slides.length}</small></div>
      <button type="button" onClick={() => move(1)} aria-label={`Next ${kind === 'projects' ? 'project screenshot' : 'certificate'}`}>›</button>
    </div>
  </section>
}
