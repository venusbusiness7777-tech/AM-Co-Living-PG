"use client"
import { motion } from "framer-motion"
import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "House Rules", href: "/house-rules" },
  ]

  const tenantLinks = [
    { name: "House Rules", href: "#" },
    { name: "Privacy Policies", href: "#" },
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-r from-[rgb(255,125,0)] to-[rgb(255,140,20)]" style={{ backgroundColor: 'rgb(255, 125, 0)' }}>
      <div className="container-custom py-16 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand and Contact Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: '"Geist", sans-serif' }}>AM Co-Living PG</h2>
              <p className="text-white/90 mb-8 leading-relaxed" style={{ fontSize: '16px' }}>
                Fully furnished apartments designed for students and working professionals.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
                <a href="mailto:contact@amcoliving.com" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group">
                  <Mail size={18} />
                  <span className="text-sm">contact@amcoliving.com</span>
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group">
                  <Phone size={18} />
                  <span className="text-sm">+91 9876543210</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For Tenants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6 text-lg">For Tenants</h4>
            <ul className="space-y-3">
              {tenantLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-6 text-lg">Socials</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[rgb(255,125,0)] transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

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
              <a href="#" className="transition-colors" style={{ color: '#5b4c4c' }}>
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
