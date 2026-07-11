"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Reveal } from "./reveal"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What facilities are included in the room?",
    answer: "All our rooms come fully furnished with a bed, wardrobe, study table, chair, and bedding. Common areas include a kitchen, laundry facility, and recreational space. High-speed WiFi is available throughout the property.",
  },
  {
    question: "What is the lease term and deposit requirement?",
    answer: "Standard lease terms are 6 or 12 months, with flexible options available. A security deposit of one month's rent is required, along with the first month's rent to be paid before check-in.",
  },
  {
    question: "Are utilities included in the rent?",
    answer: "Yes, utilities including water, electricity, and WiFi are included in the monthly rent. There are no hidden charges or surprise bills.",
  },
  {
    question: "What is the house policy regarding guests?",
    answer: "Guests are allowed in common areas during designated hours. Overnight guests require 24-hour advance notice to the management. All guests must adhere to house rules and maintain noise discipline.",
  },
  {
    question: "How is maintenance and repairs handled?",
    answer: "We have a dedicated maintenance team available 24/7 for emergencies. Non-emergency requests can be submitted through our portal and will be addressed within 24-48 hours.",
  },
  {
    question: "What are the check-in and check-out procedures?",
    answer: "Check-in is available from 2 PM onwards with a property walk-through. Check-out must be completed by 10 AM on your last day. Your security deposit will be refunded within 7 days after final inspection.",
  },
]

export function NewsletterSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl" style={{ color: 'rgb(255, 125, 0)' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg text-neutral-600">
                Find answers to common questions about our AM Co-Living spaces
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-neutral-200 rounded-lg overflow-hidden hover:border-neutral-300 transition-colors"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-left font-semibold text-neutral-900">{item.question}</span>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown size={20} className="text-neutral-600" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-neutral-200"
                      >
                        <div className="px-6 py-5 bg-neutral-50">
                          <p className="text-neutral-600 leading-relaxed">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-neutral-600 mb-4">Still have questions?</p>
              <a
                href="mailto:contact@amcoliving.com"
                className="inline-block px-8 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
