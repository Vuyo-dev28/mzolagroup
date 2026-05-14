import { motion, useReducedMotion } from 'framer-motion'
import { FALLBACK_WORK_IMAGE, WORK_GALLERY_IMAGES, WORK_IMAGE_COUNT } from '../data/workGallery'

const viewportOnce = { once: true, margin: '-60px' }

function handleImgError(event) {
  const el = event.currentTarget
  if (el.dataset.fallbackToWork === '1') return
  el.dataset.fallbackToWork = '1'
  el.src = FALLBACK_WORK_IMAGE.src
  if (!el.alt) el.alt = FALLBACK_WORK_IMAGE.alt
}

/**
 * @param {{ indices: number[], caption?: string }} props
 * Indices are 0-based into WORK_GALLERY_IMAGES (same order as mzola-work-NN files).
 */
export default function WorkImageStrip({ indices, caption = 'Our work on site' }) {
  const reduce = useReducedMotion()
  const shots = indices
    .filter((i) => Number.isInteger(i) && i >= 0 && i < WORK_IMAGE_COUNT)
    .map((i) => WORK_GALLERY_IMAGES[i])

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
        {shots.map((img) => (
          <figure
            key={img.src}
            className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/30 shadow-md"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              onError={handleImgError}
              className="aspect-[16/10] w-full object-cover sm:aspect-[2/1]"
            />
          </figure>
        ))}
      </div>
    </motion.div>
  )
}
