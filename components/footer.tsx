"use client"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-[rgb(255,125,0)] to-[rgb(255,140,20)]" style={{ backgroundColor: 'rgb(255, 125, 0)' }}>
      <div className="container-custom py-16 lg:py-24">
        {/* Brand Statement Section */}
        <motion.div
          className="pt-12 lg:pt-16 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-white text-center mb-8" style={{ fontFamily: '"Roboto", sans-serif', fontSize: '72px' }}>
            AM Co-Living PG
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm text-center border-t border-white/20 pt-8" style={{ fontFamily: '"Inter", sans-serif', color: 'rgba(78, 76, 76, 0.8)' }}>
            <p style={{ color: 'rgba(11, 11, 10, 0.8)' }}>&copy; {currentYear} AM Co-Living PG. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="transition-colors hover:text-[rgb(255,125,0)]" style={{ color: '#5b4c4c' }}>
                Privacy Policy
              </a>
              <a href="#" className="transition-colors" style={{ color: '#5b4c4c' }}>
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
