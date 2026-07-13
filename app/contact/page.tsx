"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      content: "AM Co-Living PG, Mumbai, India",
      details: "Centrally located in the heart of the city",
    },
    {
      icon: "📞",
      title: "Phone Number",
      content: "+91-XXXXXXXXXX",
      details: "Available 24/7 for your inquiries",
    },
    {
      icon: "📧",
      title: "Email Address",
      content: "info@amcoliving.com",
      details: "We respond within 24 hours",
    },
    {
      icon: "🕒",
      title: "Office Hours",
      content: "9:00 AM - 6:00 PM",
      details: "Monday to Saturday",
    },
    {
      icon: "🚇",
      title: "Nearby Metro Station",
      content: "Central Station",
      details: "Just 200 meters away",
    },
  ]

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

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: '"Geist", sans-serif' }}>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              We&apos;re here to help. Get in touch with us for room availability, bookings, or any questions about AM Co-Living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 md:p-8 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-base md:text-lg font-medium text-slate-700 mb-2">
                    {info.content}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {info.details}
                  </p>
                  <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500/10" style={{ color: "#22d200" }}>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ready to Move In?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Book your stay today and experience safe, comfortable, and hassle-free living at AM Co-Living.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/bookings"
                className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
              >
                Book Your Stay
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
