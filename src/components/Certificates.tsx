import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { certificates } from '@/data/certificates'

function CertificatePreview({ certificate, close }: { certificate: (typeof certificates)[number]; close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => { const dialog = ref.current!; const trigger = document.activeElement as HTMLElement; dialog.showModal(); return () => { dialog.close(); trigger?.focus({ preventScroll: true }) } }, [])
  return createPortal(<dialog ref={ref} className="jb-case certificate-dialog" aria-label={`${certificate.name} certificate`} onCancel={close} onClick={event => { if (event.target === event.currentTarget) close() }}><div className="jb-case__surface"><header className="jb-case__bar"><span>{certificate.title}</span><button className="jb-case__close" onClick={close} aria-label="Close certificate" autoFocus>✕</button></header><div className="jb-case__body"><img className="certificate-dialog__image" src={certificate.image} alt={`${certificate.title} — Justin Bernaldez`} /><p>{certificate.issuer} · {certificate.date}</p><a className="jb-link" href={certificate.verification} target="_blank" rel="noopener noreferrer">Verify certificate ↗</a></div></div></dialog>, document.body)
}

export default function Certificates() {
  const [selected, setSelected] = useState<(typeof certificates)[number] | null>(null)
  useEffect(() => {
    if (window.location.hash !== '#credentials') return
    const frame = requestAnimationFrame(() => document.getElementById('credentials')?.scrollIntoView({ block: 'start' }))
    return () => cancelAnimationFrame(frame)
  }, [])
  return <section className="certificates" id="credentials" aria-labelledby="credentials-title"><h2 id="credentials-title">Credentials</h2><p>Certificates of completion in CRM and automation training.</p><div className="certificates__grid">{certificates.map(certificate => <article className="certificate" key={certificate.name}><button className="certificate__image" onClick={() => setSelected(certificate)} aria-label={`View ${certificate.name} certificate`} aria-haspopup="dialog"><img src={certificate.image} alt={`${certificate.name} certificate — Justin Bernaldez`} loading="lazy" /></button><h3>{certificate.name}</h3><p>{certificate.title}</p><small>{certificate.issuer} · {certificate.date}</small><a className="jb-link" href={certificate.verification} target="_blank" rel="noopener noreferrer">Verify certificate ↗</a></article>)}</div>{selected && <CertificatePreview certificate={selected} close={() => setSelected(null)} />}</section>
}
