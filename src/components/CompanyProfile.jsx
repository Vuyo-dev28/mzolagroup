import { motion, useReducedMotion } from 'framer-motion'
import {
  Award,
  Bolt,
  Building2,
  Cog,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Shield,
  Target,
  Users,
} from 'lucide-react'
import { COMPANY, ELECTRICAL_SPECIALISATIONS } from '../data/company'
import WorkImageStrip from './WorkImageStrip'

const viewportOnce = { once: true, margin: '-70px' }

function buildVariants(reduce) {
  const t = reduce ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  return {
    fadeInUp: {
      hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: t },
    },
    stagger: {
      hidden: { opacity: reduce ? 1 : 0 },
      visible: {
        opacity: 1,
        transition: reduce ? { duration: 0 } : { staggerChildren: 0.06, delayChildren: 0.03 },
      },
    },
  }
}

const jumpLinks = [
  { label: 'About', href: '#about' },
  { label: 'Mission & goals', href: '#mission' },
  { label: 'Capabilities', href: '#competences' },
  { label: 'Quality', href: '#quality' },
  { label: 'Safety', href: '#health-safety' },
  { label: 'Empowerment', href: '#empowerment' },
  { label: 'Registration', href: '#general-info' },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--brand))]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-display text-3xl tracking-tight text-[rgb(var(--fg))] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))] sm:text-base">{description}</p> : null}
    </div>
  )
}

function IconCard({ icon: Icon, title, children, className = '' }) {
  return (
    <div
      className={`cool-card glass flex h-full flex-col rounded-2xl border border-white/10 p-5 backdrop-blur-md sm:p-6 ${className}`}
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(var(--brand)/0.35)] bg-[rgb(var(--brand)/0.12)] text-[rgb(var(--brand))]">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="font-display text-lg text-[rgb(var(--fg))]">{title}</h3>
      <div className="mt-3 flex-1 text-sm leading-7 text-[rgb(var(--muted))]">{children}</div>
    </div>
  )
}

function CheckList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-[rgb(var(--muted))]">
          <span
            className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--brand))]"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CompanyProfile() {
  const reduce = useReducedMotion()
  const { fadeInUp, stagger } = buildVariants(reduce)

  const strategyItems = [
    'Provide appropriate services and solutions that are delivered as requested with correct pricing and quality.',
    'Become ISO 9001 compliant.',
    'Employ quality human resources management.',
    'Deliver a good return to members.',
    'Focus regionally.',
    'Be a model corporate structure.',
  ]

  const objectiveItems = [
    'Offer members good returns on investments.',
    'Work towards the long-term survival of the organisation in a constantly changing and volatile environment.',
    'Select and employ highly motivated and competitive employees.',
    'Undertake projects in regions outside Southern Africa.',
    'Continuously maintain a good standing certification with the South African Revenue Services.',
  ]

  return (
    <div id="company-profile" className="relative border-t border-white/10 bg-slate-950/40">

      <nav
        className="sticky top-[4.25rem] z-30 border-b border-white/10 bg-[rgb(var(--bg))/0.75] py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-[rgb(var(--bg))/0.55]"
        aria-label="On this page"
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-6">
          <span className="hidden shrink-0 text-[10px] font-bold uppercase tracking-widest text-[rgb(var(--muted))] sm:block">
            Jump to
          </span>
          <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {jumpLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-[rgb(var(--fg))] transition-colors hover:border-[rgb(var(--brand)/0.4)] hover:bg-[rgb(var(--brand)/0.12)] hover:text-[rgb(var(--fg))]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
          className="grid gap-8 lg:grid-cols-12 lg:gap-10"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--muted))]">Head office</p>
            <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {COMPANY.registeredLegalName}
            </h1>
            <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
              Electrical, mechanical, HVAC and building services from Roodepoort North — reach us by phone, email or
              visit during office hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${COMPANY.cellTel}`}
                className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--brand))] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(245,158,11,0.28)] transition-colors hover:bg-[rgb(var(--brand2))]"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {COMPANY.cellDisplay}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--fg))] transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Email
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="cool-card glass rounded-2xl border border-white/10 p-5 backdrop-blur-md sm:p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--brand))]" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Postal</p>
                  <address className="mt-2 not-italic text-sm leading-7 text-[rgb(var(--muted))]">
                    {COMPANY.postalLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
            </div>
            <div className="cool-card glass rounded-2xl border border-white/10 p-5 backdrop-blur-md sm:p-6">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--brand))]" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Physical</p>
                  <address className="mt-2 not-italic text-sm leading-7 text-[rgb(var(--muted))]">
                    {COMPANY.physicalLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
            </div>
            <div className="cool-card glass rounded-2xl border border-white/10 p-5 backdrop-blur-md sm:col-span-2 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Switchboard</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <a
                  href={`tel:${COMPANY.cellTel}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-[rgb(var(--brand)/0.35)]"
                >
                  <Phone className="h-4 w-4 text-[rgb(var(--brand))]" aria-hidden />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--muted))]">Cell</p>
                    <p className="text-sm font-semibold text-[rgb(var(--fg))] group-hover:underline">{COMPANY.cellDisplay}</p>
                  </div>
                </a>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-[rgb(var(--brand)/0.35)]"
                >
                  <Phone className="h-4 w-4 text-[rgb(var(--brand))]" aria-hidden />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--muted))]">Tel</p>
                    <p className="text-sm font-semibold text-[rgb(var(--fg))] group-hover:underline">{COMPANY.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-[rgb(var(--brand)/0.35)]"
                >
                  <Mail className="h-4 w-4 text-[rgb(var(--brand))]" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--muted))]">Email</p>
                    <p className="truncate text-sm font-semibold text-[rgb(var(--fg))] group-hover:underline">{COMPANY.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.article
          id="about"
          className="mt-20 scroll-mt-32 border-t border-white/10 pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              eyebrow="Who we are"
              title="A multidisciplinary group with deep site experience"
              description={`${COMPANY.legal} was founded in 2015. The group spans electrical, HVAC and mechanical work, and has expanded into building services and civil engineering — with a strong focus on local employment and developing previously disadvantaged team members.`}
            />
          </motion.div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Founded 2015', 'Roodepoort North', 'Commercial & industrial'].map((tag) => (
              <motion.span
                key={tag}
                variants={fadeInUp}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-[rgb(var(--muted))]"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.article>

        <motion.article
          id="mission"
          className="mt-20 scroll-mt-32 border-t border-white/10 pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              eyebrow="Direction"
              title="Mission, strategy and objectives"
              description="Clear intent guides how we price work, grow the team, and keep clients and members aligned for the long term."
            />
          </motion.div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="cool-card glass relative h-full rounded-2xl border border-white/10 p-6 backdrop-blur-md sm:p-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--brand)/0.35)] bg-[rgb(var(--brand)/0.12)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[rgb(var(--brand))]">
                    <Target className="h-3.5 w-3.5" aria-hidden />
                    Mission
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[rgb(var(--muted))] sm:text-base">
                    To be the leading supplier of quality electrical, mechanical and building services throughout Southern
                    Africa — securing survival through sustained growth and profitability, with superior returns for primary
                    stakeholders.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="cool-card glass h-full rounded-2xl border border-white/10 p-6 backdrop-blur-md sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">
                  <Award className="h-3.5 w-3.5 text-[rgb(var(--brand))]" aria-hidden />
                  Strategy
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">
                  How {COMPANY.legal} delivers the mission
                </p>
                <div className="mt-4">
                  <CheckList items={strategyItems} />
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="cool-card glass h-full rounded-2xl border border-white/10 p-6 backdrop-blur-md sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">
                  <Users className="h-3.5 w-3.5 text-[rgb(var(--brand))]" aria-hidden />
                  Objectives
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]">
                  What we optimise for, every year
                </p>
                <div className="mt-4">
                  <CheckList items={objectiveItems} />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.article>

        <WorkImageStrip
          files={['mzola-work-39.jpeg', 'mzola-work-46.jpeg']}
          caption="Real sites, real delivery"
        />

        <motion.article
          id="competences"
          className="mt-20 scroll-mt-32 border-t border-white/10 pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              eyebrow="Capabilities"
              title="Company competences & service lines"
              description={`Through field experience and structured delivery, ${COMPANY.legal} supports projects from planning through commissioning — with CIDB registration as additional assurance.`}
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[rgb(var(--muted))]">
              CIDB
            </span>
            {COMPANY.cidbGrades.map((g) => (
              <span
                key={g}
                className="rounded-full border border-[rgb(var(--brand)/0.35)] bg-[rgb(var(--brand)/0.12)] px-4 py-2 text-xs font-bold text-[rgb(var(--brand))]"
              >
                Grade {g}
              </span>
            ))}
          </motion.div>

          <div id="electrical" className="mt-14 scroll-mt-32">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgb(var(--brand)/0.35)] bg-[rgb(var(--brand)/0.12)] text-[rgb(var(--brand))]">
                  <Bolt className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--muted))]">Electrical</p>
                  <h3 className="font-display text-2xl text-[rgb(var(--fg))]">Installations, maintenance & supply</h3>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Scope</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Repairs and delivery of complete electrical infrastructure from inception to completion — planning,
                  organising, project management, construction supervision and documentation across transmission and
                  distribution environments.
                </p>
              </div>
              <div className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Team & governance</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Projects are managed by director Mr V. Dube as the company scales. Designated foremen run sites with
                  qualified artisans, and each job starts with a programme that keeps quality and deadlines aligned.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--muted))]">Fields of specialisation</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {ELECTRICAL_SPECIALISATIONS.map((line) => (
                  <div
                    key={line}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs leading-snug text-[rgb(var(--muted))] sm:text-sm"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="mechanical" className="mt-16 scroll-mt-32 border-t border-white/5 pt-16">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgb(var(--brand)/0.35)] bg-[rgb(var(--brand)/0.12)] text-[rgb(var(--brand))]">
                <Cog className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--muted))]">Mechanical</p>
                <h3 className="font-display text-2xl text-[rgb(var(--fg))]">Installations, maintenance & supply</h3>
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md lg:col-span-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Scope</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Full mechanical service from inception to completion as per specifications — design, planning, project
                  management, supervision and documentation wherever equipment is installed.
                </p>
              </div>
              <div className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md lg:col-span-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Specialisation</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Repairs to complete mechanical infrastructure including HVAC. Equipment is designed, supplied and installed
                  to client specification — deviations can be costly for both parties, so discipline on spec is non‑negotiable.
                </p>
              </div>
              <div className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md lg:col-span-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Team</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Part-time engineers support delivery. Foremen lead sites with qualified artisans, supported by programmes
                  that keep quality and timelines visible from day one.
                </p>
              </div>
            </div>
          </div>

          <div id="building" className="mt-16 scroll-mt-32 border-t border-white/5 pt-16">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgb(var(--brand)/0.35)] bg-[rgb(var(--brand)/0.12)] text-[rgb(var(--brand))]">
                <Building2 className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--muted))]">Building services</p>
                <h3 className="font-display text-2xl text-[rgb(var(--fg))]">Commercial, industrial & institutional</h3>
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Scope</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Renovations, replacement of worn materials and new installations across commercial, industrial and
                  institutional facilities. Planning, design, testing, documentation, commissioning and contract management
                  are available on request.
                </p>
              </div>
              <div className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Specialisation</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-[rgb(var(--muted))]">
                  <li>General repairs: building, electrical, plumbing, carpentry and joinery</li>
                  <li>Replacement of old equipment</li>
                  <li>New installations</li>
                </ul>
              </div>
              <div className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--fg))]">Oversight</p>
                <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                  Projects are monitored by part-time engineers to keep quality aligned with client expectations.
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article
          id="quality"
          className="mt-20 scroll-mt-32 border-t border-white/10 pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              eyebrow="Assurance"
              title="Quality, health & safety"
              description="Operational resilience depends on how we manage risk, people and performance — not only on technical output."
            />
          </motion.div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <IconCard icon={Award} title="Quality">
                <p>
                  {COMPANY.legal} recognises that survival, growth and profitability rely on efficiency, productivity,
                  flexibility, quality and effectiveness — all treated as measurable outcomes, not slogans.
                </p>
              </IconCard>
            </motion.div>
            <motion.div variants={fadeInUp} id="health-safety" className="scroll-mt-32">
              <IconCard icon={Shield} title="Health and safety">
                <p className="mb-3">
                  {COMPANY.legal} accepts moral, legal and financial responsibility for safeguarding everyone affected by
                  our activities — employees, customers, clients and suppliers deserve a clean, hygienic, safe and healthy
                  environment.
                </p>
                <p>
                  We adopt high standards for measuring safety and health performance, comply with applicable legislation,
                  and add controls where needed to keep sites predictable and professional.
                </p>
              </IconCard>
            </motion.div>
          </div>
        </motion.article>

        <motion.article
          id="empowerment"
          className="mt-10 scroll-mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="flex items-start gap-4 lg:max-w-xs lg:shrink-0">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(var(--brand)/0.35)] bg-[rgb(var(--brand)/0.12)] text-[rgb(var(--brand))]">
                  <HeartHandshake className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--brand))]">Social impact</p>
                  <h3 className="mt-1 font-display text-xl text-[rgb(var(--fg))]">Empowerment</h3>
                </div>
              </div>
              <div className="grid flex-1 gap-6 text-sm leading-7 text-[rgb(var(--muted))] lg:grid-cols-3">
                <p>
                  {COMPANY.legal} is a black empowered company and applies empowerment policy objectively across
                  recruitment, promotion and procurement, aligned with government legislation.
                </p>
                <p>
                  The policy supports disadvantaged communities. Preferential attention goes to recruitment, development
                  and promotion — especially for black women. Further education is encouraged and financial assistance is
                  available.
                </p>
                <p>
                  Procurement favours empowered suppliers who meet similarly strict employment and empowerment criteria —
                  extending impact beyond our own payroll.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.article>

        <motion.article
          id="general-info"
          className="mt-20 scroll-mt-32 border-t border-white/10 pb-4 pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              eyebrow="Registration"
              title="Company particulars"
              description="Use these details for vendor onboarding, compliance packs and formal correspondence."
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { label: 'Registered name', value: COMPANY.registeredLegalName },
              { label: 'Postal address', value: COMPANY.postalLines.join(', ') },
              { label: 'Physical address', value: COMPANY.physicalLines.join(', ') },
              { label: 'Telephone', value: COMPANY.phoneDisplay, href: `tel:${COMPANY.phoneTel}` },
              { label: 'Cellphone', value: COMPANY.cellDisplay, href: `tel:${COMPANY.cellTel}` },
              { label: 'Fax', value: COMPANY.fax },
              { label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { label: 'Directors', value: COMPANY.directors, wide: true },
            ].map((row) => (
              <div
                key={row.label}
                className={`cool-card glass rounded-2xl border border-white/10 p-5 backdrop-blur-md ${row.wide ? 'sm:col-span-2 lg:col-span-3' : ''}`}
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--muted))]">{row.label}</p>
                <div className="mt-2 text-sm font-semibold leading-6 text-[rgb(var(--fg))]">
                  {row.href ? (
                    <a href={row.href} className="underline decoration-white/20 underline-offset-4 hover:decoration-[rgb(var(--brand))]">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.article>
      </section>
    </div>
  )
}
