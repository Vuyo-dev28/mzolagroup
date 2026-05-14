import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CompanyProfile from './components/CompanyProfile'
import WorkImageStrip from './components/WorkImageStrip'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { COMPANY } from './data/company'
import { FALLBACK_WORK_IMAGE, HERO_WORK_IMAGE, WORK_GALLERY_IMAGES } from './data/workGallery'

const serviceLines = [
  { title: 'Electrical', desc: 'Distribution, compliance, and dependable electrical installations.' },
  { title: 'Mechanical', desc: 'Mechanical systems support for industrial and commercial sites.' },
  { title: 'HVAC', desc: 'Heating, ventilation, and air conditioning installation and upkeep.' },
  { title: 'Civil installation & maintenance', desc: 'Civil works aligned with infrastructure and facility needs.' },
  { title: 'Construction', desc: 'Construction coordination and delivery alongside technical trades.' },
]

const processSteps = [
  { title: 'Consultation', desc: 'We clarify scope, timelines, and site requirements with your team.' },
  { title: 'Planning', desc: 'We prepare method statements, materials, and resource planning for safe execution.' },
  { title: 'Installation', desc: 'Qualified crews complete installation to specification and quality checks.' },
  { title: 'Maintenance', desc: 'We support ongoing maintenance and performance improvements where needed.' },
]

const testimonials = [
  { name: 'Facilities manager', quote: 'Mzola Group delivered a clean installation and clear communication throughout the project.' },
  { name: 'Commercial client', quote: 'Professional workmanship on electrical and solar-related scope. We would engage them again.' },
  { name: 'Operations lead', quote: 'Responsive team with strong attention to safety and documentation on site.' },
]

const faqs = [
  { q: 'Where is Mzola Group based?', a: `${COMPANY.location}. Contact us to confirm coverage for your project.` },
  { q: 'What services do you offer?', a: `${COMPANY.tagline}.` },
  {
    q: 'How do I request a quote?',
    a: `Call ${COMPANY.cellDisplay} or ${COMPANY.phoneDisplay}, or email ${COMPANY.email} with your project details.`,
  },
]

const viewportOnce = { once: true, margin: '-70px' }

function buildVariants(reduce) {
  const t = reduce ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  const fadeInUp = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: t },
  }
  const stagger = {
    hidden: { opacity: reduce ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.1, delayChildren: 0.06 },
    },
  }
  const scaleIn = {
    hidden: reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: { ...t, duration: reduce ? 0 : 0.65 } },
  }
  return { fadeInUp, stagger, scaleIn }
}

function AppSolar() {
  const reduce = useReducedMotion()
  const { fadeInUp, stagger, scaleIn } = buildVariants(reduce)
  const [visibleGalleryItems, setVisibleGalleryItems] = useState(6)
  const fallbackImg = FALLBACK_WORK_IMAGE.src

  const handleImageError = (event) => {
    const el = event.currentTarget
    if (el.dataset.fallbackToWork === '1') return
    el.dataset.fallbackToWork = '1'
    el.src = fallbackImg
    if (!el.alt) el.alt = FALLBACK_WORK_IMAGE.alt
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[rgb(var(--bg))] text-[rgb(var(--fg))] selection:bg-[rgb(var(--brand)/0.25)]">
      <div className="glow-bg" aria-hidden />
      <div className="page-grid-bg" aria-hidden />
      <Navbar />
      <main className="relative z-10 pt-24">
        <section id="home" className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={fadeInUp} className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[rgb(var(--muted))] backdrop-blur-sm">
                {COMPANY.legal}
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="font-display mt-5 text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
              >
                <span className="text-[rgb(var(--brand))]">{COMPANY.name}</span> — installation and maintenance you can rely on.
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-5 max-w-2xl text-[15px] leading-7 text-[rgb(var(--muted))] sm:text-base">
                {COMPANY.tagline}. Based in {COMPANY.location}, we support commercial and industrial clients with end-to-end technical delivery.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href={`tel:${COMPANY.cellTel}`}
                  whileHover={reduce ? {} : { scale: 1.03 }}
                  whileTap={reduce ? {} : { scale: 0.98 }}
                  className="inline-flex rounded-full bg-[rgb(var(--brand))] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[rgb(var(--brand2))]"
                >
                  Call {COMPANY.cellDisplay}
                </motion.a>
                <motion.a
                  href={`mailto:${COMPANY.email}`}
                  whileHover={reduce ? {} : { scale: 1.03, backgroundColor: 'rgba(255,255,255,0.12)' }}
                  whileTap={reduce ? {} : { scale: 0.98 }}
                  className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[rgb(var(--fg))] backdrop-blur-sm transition-colors hover:border-white/20"
                >
                  Email us
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={reduce ? false : { opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40 shadow-lg"
                whileHover={reduce ? {} : { y: -2, transition: { type: 'spring', stiffness: 400, damping: 28 } }}
              >
                <img
                  src={HERO_WORK_IMAGE.src}
                  alt={HERO_WORK_IMAGE.alt}
                  className="h-full min-h-[280px] w-full object-cover sm:min-h-[360px]"
                  loading="eager"
                  onError={handleImageError}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <CompanyProfile />

        <WorkImageStrip indices={[8, 9]} caption="Recent installations" />

        <motion.section
          id="services"
          className="mx-auto max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">
            Services
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
            What we do
          </motion.h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLines.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                custom={i}
                whileHover={reduce ? {} : { y: -2, transition: { type: 'spring', stiffness: 400, damping: 28 } }}
              >
                <div className="cool-card glass group relative h-full rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                  <div className="cool-card-accent relative mb-4" />
                  <p className="text-base font-semibold text-[rgb(var(--fg))]">{s.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted))]">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-3">
            {WORK_GALLERY_IMAGES.slice(1, 4).map((shot) => (
              <motion.div key={shot.src} variants={scaleIn} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
                <motion.img
                  src={shot.src}
                  alt={shot.alt}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                  onError={handleImageError}
                  whileHover={reduce ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="benefits"
          className="mx-auto max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">
            Why choose us
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
            Quality delivery across disciplines
          </motion.h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              'Multidisciplinary team for electrical, mechanical, and HVAC scope',
              'Civil installation and construction coordination from one contractor',
              'Maintenance mindset with structured handover and support',
              'Johannesburg base with professional site documentation',
            ].map((item) => (
              <motion.div key={item} variants={fadeInUp} whileHover={reduce ? {} : { y: -2 }}>
                <div className="cool-card glass h-full rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-[rgb(var(--brand)/0.35)] bg-[rgb(var(--brand)/0.12)] text-[rgb(var(--brand))]">
                    <span className="text-lg leading-none">✓</span>
                  </div>
                  <p className="text-sm font-semibold text-[rgb(var(--fg))]">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <WorkImageStrip indices={[11, 12]} caption="On site with our teams" />

        <motion.section
          id="process"
          className="mx-auto max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">
            How we work
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
            A clear project path
          </motion.h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div key={step.title} variants={fadeInUp} whileHover={reduce ? {} : { y: -2 }}>
                <div className="cool-card glass relative h-full rounded-2xl border border-white/10 p-6 backdrop-blur-md">
                  <motion.span
                    className="inline-flex rounded-full border border-[rgb(var(--brand)/0.4)] bg-[rgb(var(--brand)/0.15)] px-3 py-1 text-xs font-bold text-[rgb(var(--brand))]"
                    initial={reduce ? false : { scale: 0.8, opacity: 0 }}
                    whileInView={reduce ? false : { scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 500, damping: 28 }}
                  >
                    Step {index + 1}
                  </motion.span>
                  <p className="mt-3 text-base font-semibold text-[rgb(var(--fg))]">{step.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <WorkImageStrip indices={[19, 20]} caption="Electrical & mechanical delivery" />

        <motion.section
          id="gallery"
          className="mx-auto max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">
            Project gallery
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
            Recent work
          </motion.h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WORK_GALLERY_IMAGES.slice(0, visibleGalleryItems).map((img, i) => (
              <motion.div
                key={img.src}
                variants={fadeInUp}
                custom={i}
                whileHover={reduce ? {} : { y: -2 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
              >
                <div className="cool-card group overflow-hidden rounded-2xl border border-white/10 bg-slate-800/30 shadow-md">
                  <img
                    className="h-56 w-full object-cover transition duration-300 group-hover:opacity-95 opacity-100"
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInUp} className="mt-8">
            <motion.button
              type="button"
              onClick={() =>
                setVisibleGalleryItems((current) =>
                  current < WORK_GALLERY_IMAGES.length ? Math.min(current + 6, WORK_GALLERY_IMAGES.length) : 6,
                )
              }
              whileHover={reduce ? {} : { scale: 1.04 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-[rgb(var(--fg))] shadow-inner backdrop-blur-sm transition-colors hover:border-[rgb(var(--brand)/0.35)] hover:bg-white/15"
            >
              {visibleGalleryItems < WORK_GALLERY_IMAGES.length ? 'View more' : 'Show less'}
            </motion.button>
          </motion.div>
        </motion.section>

        <motion.section
          id="testimonials"
          className="mx-auto max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">
            Testimonials
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
            Client feedback
          </motion.h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.name}
                variants={fadeInUp}
                whileHover={reduce ? {} : { y: -2 }}
                className="cool-card glass rounded-2xl border border-white/10 p-6 backdrop-blur-md"
              >
                <p className="text-sm leading-7 text-[rgb(var(--muted))]">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-[rgb(var(--brand))]">— {item.name}</footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.section>

        <WorkImageStrip indices={[26, 27]} caption="Quality workmanship" />

        <motion.section
          id="faq"
          className="mx-auto max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.p variants={fadeInUp} className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">
            FAQ
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
            Frequently asked questions
          </motion.h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((item, i) => (
              <motion.details
                key={item.q}
                variants={fadeInUp}
                custom={i}
                className="group cool-card glass rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md open:border-white/20"
                whileHover={reduce ? {} : { x: 4 }}
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-[rgb(var(--fg))] [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {item.q}
                    <motion.span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-[rgb(var(--muted))] text-xs group-open:border-[rgb(var(--brand)/0.35)] group-open:text-[rgb(var(--brand))]"
                      initial={false}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </motion.span>
                  </span>
                </summary>
                <motion.p
                  initial={false}
                  className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]"
                >
                  {item.a}
                </motion.p>
              </motion.details>
            ))}
          </div>
        </motion.section>

        <WorkImageStrip indices={[34, 35]} caption="Projects across Gauteng" />

        <motion.section
          id="cta"
          className="mx-auto max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div
            variants={fadeInUp}
            className="cool-card glass rounded-2xl border border-white/10 p-8 sm:p-10 backdrop-blur-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Get started</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">Partner with {COMPANY.name}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[rgb(var(--muted))]">
              Share your electrical, mechanical, HVAC, civil, or construction requirements. We will respond with next steps and scheduling options.
            </p>
            <div className="mt-6">
              <motion.a
                href="#contact"
                whileHover={reduce ? {} : { scale: 1.04 }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                className="inline-flex rounded-full bg-[rgb(var(--brand))] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[rgb(var(--brand2))]"
              >
                Contact {COMPANY.name}
              </motion.a>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="cool-card glass rounded-2xl border border-white/10 p-10 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--muted))]">Contact</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">Reach {COMPANY.legal}</h2>
            <div className="mt-8 grid gap-4 text-sm text-[rgb(var(--muted))]">
              <motion.div whileHover={reduce ? {} : { x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
                <span className="font-semibold text-[rgb(var(--fg))]">Cell: </span>
                <a className="underline underline-offset-4 hover:text-[rgb(var(--fg))]" href={`tel:${COMPANY.cellTel}`}>
                  {COMPANY.cellDisplay}
                </a>
              </motion.div>
              <motion.div whileHover={reduce ? {} : { x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
                <span className="font-semibold text-[rgb(var(--fg))]">Tel: </span>
                <a className="underline underline-offset-4 hover:text-[rgb(var(--fg))]" href={`tel:${COMPANY.phoneTel}`}>
                  {COMPANY.phoneDisplay}
                </a>
              </motion.div>
              <motion.div whileHover={reduce ? {} : { x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
                <span className="font-semibold text-[rgb(var(--fg))]">Fax: </span>
                {COMPANY.fax}
              </motion.div>
              <motion.div whileHover={reduce ? {} : { x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
                <span className="font-semibold text-[rgb(var(--fg))]">Email: </span>
                <a className="underline underline-offset-4 hover:text-[rgb(var(--fg))]" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </motion.div>
              <motion.div whileHover={reduce ? {} : { x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
                <span className="font-semibold text-[rgb(var(--fg))]">Postal / physical: </span>
                <span className="block sm:inline sm:pl-1">{COMPANY.physicalLines.join(', ')}</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <motion.a
        href={`tel:${COMPANY.cellTel}`}
        initial={reduce ? false : { opacity: 0, scale: 0.85, y: 16 }}
        animate={reduce ? false : { opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={reduce ? {} : { scale: 1.06 }}
        whileTap={reduce ? {} : { scale: 0.95 }}
        className="fixed bottom-6 right-4 z-50 rounded-full bg-[rgb(var(--brand))] px-5 py-3 text-sm font-semibold text-white shadow-lg sm:bottom-8 sm:right-8"
        aria-label={`Call ${COMPANY.cellDisplay}`}
      >
        Call us
      </motion.a>
      <Footer />
    </div>
  )
}

export default AppSolar
