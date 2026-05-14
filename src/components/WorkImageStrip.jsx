import { motion, useReducedMotion } from 'framer-motion'
import {
  FALLBACK_WORK_IMAGE,
  SHOW_WORK_IMAGE_FILENAMES_IN_UI,
  WORK_GALLERY_IMAGES,
  WORK_IMAGE_COUNT,
  workGalleryEntryByFilename,
} from '../data/workGallery'

const viewportOnce = { once: true, margin: '-60px' }

function handleImgError(event) {
  const el = event.currentTarget
  if (el.dataset.fallbackToWork === '1') return
  el.dataset.fallbackToWork = '1'
  el.src = FALLBACK_WORK_IMAGE.src
  if (!el.alt) el.alt = FALLBACK_WORK_IMAGE.alt
}

/**
 * `files` — basenames only, e.g. ['mzola-work-09.jpeg', 'mzola-work-10.jpeg'] (easiest to reorder).
 * `indices` — 0-based into WORK_GALLERY_IMAGES; use `files` when you care which disk file is shown.
 * @param {{ caption?: string, files?: string[], indices?: number[], showFilenames?: boolean }} props
 */
export default function WorkImageStrip({
  caption = 'Our work on site',
  files,
  indices,
  showFilenames = SHOW_WORK_IMAGE_FILENAMES_IN_UI,
}) {
  const reduce = useReducedMotion()

  const shots = []
  if (files?.length) {
    for (const f of files) {
      const entry = workGalleryEntryByFilename(f)
      if (entry) shots.push(entry)
    }
  } else if (indices?.length) {
    for (const i of indices) {
      if (!Number.isInteger(i) || i < 0 || i >= WORK_IMAGE_COUNT) continue
      const entry = WORK_GALLERY_IMAGES[i]
      if (entry) shots.push(entry)
    }
  }

  if (!shots.length) return null

  return (
    <motion.div
      role="region"
      aria-label="Project photography"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? false : { opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-6xl px-6 py-8 sm:py-10"
    >
      <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[rgb(var(--brand))]">
        {caption}
      </p>
      <div className={`grid gap-4 ${shots.length > 1 ? 'sm:grid-cols-2' : ''}`}>
        {shots.map((img, idx) => (
          <figure
            key={`${img.src}-${idx}`}
            className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/30 shadow-md"
          >
            <img
              src={img.src}
              alt={img.alt}
              title={showFilenames ? img.filename : undefined}
              loading="lazy"
              decoding="async"
              onError={handleImgError}
              className="aspect-[16/10] w-full object-cover sm:aspect-[2/1]"
            />
            {showFilenames ? (
              <figcaption className="border-t border-white/10 bg-black/40 px-3 py-2 text-center font-mono text-[10px] tracking-wide text-[rgb(var(--muted))]">
                {img.filename}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </motion.div>
  )
}
