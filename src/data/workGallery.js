/**
 * On-site project photography — files live under `public/images/workdone/`
 * (renamed from originals to mzola-work-NN.jpeg).
 */
export const WORK_IMAGES_BASE = '/images/workdone'

const ALT_ROTATION = [
  'Electrical distribution and cabling work on a commercial or residential project',
  'Solar panels, inverters or backup power equipment installed by Mzola Group',
  'Industrial or commercial electrical and mechanical site work',
  'HVAC, switchgear or related installation and maintenance work',
  'Construction-phase electrical and building services installation',
]

/** Must match the number of mzola-work-NN.jpeg files in public/images/workdone */
export const WORK_IMAGE_COUNT = 47

/** @type {{ src: string, alt: string }[]} */
export const WORK_GALLERY_IMAGES = Array.from({ length: WORK_IMAGE_COUNT }, (_, i) => ({
  src: `${WORK_IMAGES_BASE}/mzola-work-${String(i + 1).padStart(2, '0')}.jpeg`,
  alt: `${ALT_ROTATION[i % ALT_ROTATION.length]} (project photo ${i + 1}).`,
}))

export const HERO_WORK_IMAGE = WORK_GALLERY_IMAGES[0]
export const FALLBACK_WORK_IMAGE = WORK_GALLERY_IMAGES[0]
