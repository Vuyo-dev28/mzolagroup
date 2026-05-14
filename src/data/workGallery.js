/**
 * On-site project photography — files live under `public/images/workdone/`
 * (renamed from originals to mzola-work-NN.jpeg).
 */

/** Set to false when you no longer want filenames visible under strips / hero / gallery. */
export const SHOW_WORK_IMAGE_FILENAMES_IN_UI = true

/** Hero + navbar thumbnail — change this string to swap which file is used (must match a real filename). */
export const HERO_WORK_IMAGE_FILENAME = 'mzola-work-11.jpeg'

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

/** 0-based index → `mzola-work-NN.jpeg` (for labels and lookups). */
export function workImageFilenameForIndex(zeroBasedIndex) {
  if (!Number.isInteger(zeroBasedIndex) || zeroBasedIndex < 0 || zeroBasedIndex >= WORK_IMAGE_COUNT) return null
  return `mzola-work-${String(zeroBasedIndex + 1).padStart(2, '0')}.jpeg`
}

/** @type {{ src: string, alt: string, filename: string }[]} */
export const WORK_GALLERY_IMAGES = Array.from({ length: WORK_IMAGE_COUNT }, (_, i) => {
  const filename = workImageFilenameForIndex(i)
  return {
    src: `${WORK_IMAGES_BASE}/${filename}`,
    alt: `${ALT_ROTATION[i % ALT_ROTATION.length]} (project photo ${i + 1}).`,
    filename,
  }
})

/**
 * Resolve a gallery row from a basename like `mzola-work-09.jpeg` (path prefix optional).
 * @param {string} filename
 * @returns {{ src: string, alt: string, filename: string } | null}
 */
export function workGalleryEntryByFilename(filename) {
  const base = filename.replace(/^.*[/\\]/, '').trim().toLowerCase()
  return WORK_GALLERY_IMAGES.find((img) => img.filename.toLowerCase() === base) ?? null
}

export const HERO_WORK_IMAGE = workGalleryEntryByFilename(HERO_WORK_IMAGE_FILENAME) ?? WORK_GALLERY_IMAGES[0]
export const FALLBACK_WORK_IMAGE = WORK_GALLERY_IMAGES[0]
