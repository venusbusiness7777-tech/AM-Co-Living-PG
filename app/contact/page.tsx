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
      details: "Available 9:00 AM - 6:00 PM for your inquiries",
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#ffce0d" }}>
        <div className="container-custom">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ color: "#000000", fontWeight: "400" }}>
              Contact Us
            </h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#222426" }}>
              We&apos;re here to help. Get in touch with us for room availability, bookings, or any questions about AM Co-Living Spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section - Two Column Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="mb-12">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Get In Touch</p>
                <h2 className="text-3xl md:text-4xl text-slate-900 leading-tight" style={{ fontWeight: "400" }}>
                  Come experience AM Co-Living
                </h2>
              </div>

              {/* Address */}
              <motion.div className="mb-8" variants={itemVariants}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-1">{contactInfo[0].icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 uppercase tracking-wider">ADDRESS</h3>
                    <p className="text-lg text-slate-700 font-semibold mb-2">{contactInfo[0].content}</p>
                    <p className="text-base text-slate-600">{contactInfo[0].details}</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div className="mb-8" variants={itemVariants}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-1">{contactInfo[1].icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 uppercase tracking-wider">PHONE</h3>
                    <p className="text-lg text-slate-700 font-semibold">{contactInfo[1].content}</p>
                    <p className="text-base text-slate-600 mt-1">{contactInfo[1].details}</p>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div className="mb-8" variants={itemVariants}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-1">{contactInfo[3].icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 uppercase tracking-wider">OFFICE HOURS</h3>
                    <p className="text-lg text-slate-700 font-semibold mb-1">{contactInfo[3].content}</p>
                    <p className="text-base text-slate-600">{contactInfo[3].details}</p>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div className="mb-12" variants={itemVariants}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-1">{contactInfo[2].icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 uppercase tracking-wider">EMAIL</h3>
                    <p className="text-lg text-slate-700 font-semibold">{contactInfo[2].content}</p>
                    <p className="text-base text-slate-600 mt-1">{contactInfo[2].details}</p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact Buttons */}
              <motion.div className="bg-slate-50 p-6 rounded-xl" variants={itemVariants}>
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">QUICK CONTACT</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919765230838"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300"
                  >
                    <span>CALL NOW</span>
                  </a>
                  <a
                    href="https://wa.me/919765230838"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300"
                  >
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col gap-8"
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-96 lg:h-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CIaLMIBS2AReRUlywFwNifKPC5PR2f.png"
                  alt="AM Co-Living PG Bedroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Bottom Box - Directions */}
              <motion.div
                className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-200"
                whileHover={{ borderColor: "#22d200" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wider">GET DIRECTIONS</h3>
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  Click the button below to open our location in Google Maps and get turn-by-turn directions to AM Co-Living PG.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300"
                >
                  OPEN IN GOOGLE MAPS
                </a>
              </motion.div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-6" style={{ fontWeight: "400" }}>
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
                className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-4 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                style={{ background: "linear-gradient(to right in oklab, rgb(255, 125, 0) 0%, rgb(255, 140, 20) 100%)", fontFamily: '"DM Sans", sans-serif' }}
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
