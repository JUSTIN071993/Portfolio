/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
 name: 'Justin', firstName: 'Justin', handle: 'Justin Automation', role: 'AI Automation Specialist',
 avatarSrc: '/jbern-portrait.jpg', verifiedLabel: 'CRM and automation training: GoHighLevel, Make.com, n8n and Zapier',
 email: 'justin.automationtech@gmail.com', location: '',
 stats: [{value:'6',label:'Case studies',Icon:Briefcase},{value:'24/7',label:'AI response',Icon:SealCheck},{value:'24h',label:'Reply time',Icon:Clock}],
 displayName: {line1:'Automate work.',line2:'Grow your business.'},
 hero: {body:'I build AI automations, CRM systems and connected workflows that help businesses save time and grow revenue.',portraitSrc:'/jbern-portrait.jpg',portraitAlt:'Justin — AI Automation Specialist'},
 socials: []
}
