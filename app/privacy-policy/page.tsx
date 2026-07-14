"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  const sections = [
    {
      title: "Information We Collect",
      content: "We may collect the following information:",
      items: [
        "Full Name",
        "Mobile Number",
        "Email Address",
        "Residential Address (if required)",
        "Identity Proof (during booking/check-in)",
        "Enquiry Details",
        "Payment Information (where applicable)",
      ],
    },
    {
      title: "How We Use Your Information",
      content: "Your information is collected to:",
      items: [
        "Respond to your enquiries.",
        "Process room bookings and reservations.",
        "Communicate important updates regarding your stay.",
        "Improve our website and services.",
        "Provide customer support.",
        "Comply with legal and regulatory requirements.",
      ],
    },
    {
      title: "Information Sharing",
      content: "We respect your privacy and do not sell, rent, or trade your personal information to third parties. Your information may only be shared:",
      items: [
        "When required by law.",
        "With trusted service providers assisting us in operating our services.",
        "To protect the safety, rights, or property of AM Co-Living and its residents.",
      ],
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, misuse, loss, or disclosure. While we strive to protect your information, no method of online transmission or electronic storage is completely secure.",
    },
    {
      title: "Third-Party Links",
      content: "Our website may contain links to third-party websites such as Google Maps or social media platforms. We are not responsible for the privacy practices or content of these external websites. We encourage you to review their respective privacy policies.",
    },
    {
      title: "Your Rights",
      content: "You have the right to:",
      items: [
        "Access your personal information.",
        "Request corrections to inaccurate information.",
        "Request deletion of your personal data where legally applicable.",
        "Withdraw consent for communications at any time.",
        "Contact us regarding any privacy-related concerns.",
      ],
    },
    {
      title: "Data Retention",
      content: "We retain your personal information only for as long as necessary to provide our services, fulfill legal obligations, resolve disputes, and enforce our policies.",
    },
    {
      title: "Policy Updates",
      content: "AM Co-Living may update this Privacy Policy from time to time. Any changes will be posted on this page along with the updated effective date.",
    },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <motion.section
          className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[rgb(255,125,0)] to-[rgb(255,140,20)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container-custom">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: '"Roboto", sans-serif' }}>
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
                Your Privacy Matters
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Introduction */}
        <motion.section
          className="py-12 md:py-16 lg:py-20 bg-neutral-50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-custom">
            <motion.div variants={itemVariants} className="max-w-3xl">
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed" style={{ fontFamily: '"Geist", sans-serif', textAlign: 'justify' }}>
                At AM Co-Living, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website or use our services.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Sections */}
        <motion.section
          className="py-12 md:py-16 lg:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-custom">
            <div className="max-w-3xl space-y-12 md:space-y-16">
              {sections.map((section, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-4" style={{ fontFamily: '"Geist", sans-serif' }}>
                  <h2 className="text-2xl md:text-3xl font-medium text-neutral-900" style={{ fontFamily: '"Geist", sans-serif' }}>
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed" style={{ fontFamily: '"Geist", sans-serif', textAlign: 'left' }}>
                    {section.content}
                  </p>
                  {section.items && (
                    <ul className="space-y-3 ml-4" style={{ fontFamily: '"Geist", sans-serif' }}>
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-700" style={{ fontFamily: '"Geist", sans-serif' }}>
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgb(255, 125, 0)", color: "white" }}>
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-base md:text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <p className="text-base md:text-lg text-neutral-600 italic border-l-4 border-[rgb(255,125,0)] pl-4 mt-4" style={{ fontFamily: '"Geist", sans-serif', textAlign: 'left' }}>
                      {section.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="py-12 md:py-16 lg:py-20 bg-neutral-50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-custom">
            <motion.div variants={itemVariants} className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-6" style={{ fontFamily: '"Geist", sans-serif' }}>
                Contact Us
              </h2>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6" style={{ fontFamily: '"Geist", sans-serif', textAlign: 'justify' }}>
                If you have any questions regarding this Privacy Policy or how your information is handled, please contact us.
              </p>
              <div className="space-y-3" style={{ fontFamily: '"Geist", sans-serif' }}>
                <p className="text-neutral-800">
                  <strong>AM Co-Living PG</strong>
                </p>
                <p className="text-neutral-700 flex items-start gap-2">
                  <span>📍</span>
                  <span style={{ textAlign: 'justify' }}>Address: AM Co-Living PG, Shivaji maharaj chowk, Phase 1, Hinjawadi, Pune, Maharashtra 411057</span>
                </p>
                <p className="text-neutral-700 flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+919067372121" className="hover:text-[rgb(255,125,0)] transition-colors">
                    +91 9067372121
                  </a>
                </p>
                <p className="text-neutral-700 flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:info@amcoliving.com" className="hover:text-[rgb(255,125,0)] transition-colors">
                    info@amcoliving.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Last Updated */}
        <motion.section
          className="py-12 md:py-16 lg:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-custom">
            <motion.p
              variants={itemVariants}
              className="text-center text-neutral-600 text-sm md:text-base"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Last Updated: July 2026
            </motion.p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}
