import { motion } from 'framer-motion'
import { COMPANY } from '../data/company'

const linkVariants = {
  rest: { x: 0 },
  hover: { x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } },
}

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="relative z-10 border-t border-white/10 bg-[rgb(var(--bg))/0.92] backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <p className="text-sm font-semibold text-[rgb(var(--fg))]">{COMPANY.legal}</p>
            <p className="mt-3 text-sm text-[rgb(var(--muted))]">
              {COMPANY.tagline}. {COMPANY.location}.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm font-semibold text-[rgb(var(--fg))]">Links</p>
            <div className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
              {[
                { href: '#company-profile', label: 'Company profile' },
                { href: '#about', label: 'About' },
                { href: '#services', label: 'Services' },
                { href: '#benefits', label: 'Why us' },
                { href: '#process', label: 'Process' },
                { href: '#gallery', label: 'Gallery' },
                { href: '#faq', label: 'FAQ' },
                { href: '#contact', label: 'Contact' },
              ].map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                  className="block rounded-lg py-0.5 transition-colors hover:text-[rgb(var(--brand))]"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-sm font-semibold text-[rgb(var(--fg))]">Contact</p>
            <div className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
              <motion.a
                href={`mailto:${COMPANY.email}`}
                whileHover={{ scale: 1.02 }}
                className="block w-fit rounded-lg transition-colors hover:text-[rgb(var(--brand))]"
              >
                {COMPANY.email}
              </motion.a>
              <motion.a
                href={`tel:${COMPANY.cellTel}`}
                whileHover={{ scale: 1.02 }}
                className="block w-fit rounded-lg transition-colors hover:text-[rgb(var(--brand))]"
              >
                {COMPANY.cellDisplay}
              </motion.a>
              <motion.a
                href={`tel:${COMPANY.phoneTel}`}
                whileHover={{ scale: 1.02 }}
                className="block w-fit rounded-lg transition-colors hover:text-[rgb(var(--brand))]"
              >
                {COMPANY.phoneDisplay}
              </motion.a>
              <p className="text-xs leading-relaxed">Fax {COMPANY.fax}</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 border-t border-white/10 pt-6 text-sm text-[rgb(var(--muted))]"
        >
          © 2026 Mzola Group (Pty) Ltd. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
