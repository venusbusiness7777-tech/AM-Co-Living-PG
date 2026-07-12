import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "House Rules - AM Co-Living PG",
  description: "Community guidelines and house rules at AM Co-Living PG for a safe and comfortable living environment.",
}

const rules = [
  {
    title: "Respect Quiet Hours",
    items: [
      "Please maintain a peaceful atmosphere, especially between 10:00 PM and 7:00 AM.",
      "Avoid loud music, shouting, or activities that may disturb other residents.",
    ],
    icon: "✅",
  },
  {
    title: "Visitor Policy",
    items: [
      "Visitors are welcome only between 10:00 AM and 6:00 PM.",
      "Overnight guests are not permitted. Additional charges will apply if this policy is violated.",
      "All visitors must register at the reception/security desk first.",
    ],
    icon: "👥",
  },
  {
    title: "Cleanliness & Hygiene",
    items: [
      "Keep your room neat and tidy.",
      "Dispose of waste in the designated bins provided in each room.",
      "Help maintain cleanliness in shared spaces such as the kitchen, dining area, and lounges.",
      "Daily housekeeping is provided for rooms, bathrooms, and common areas. Residents are expected to keep their personal belongings organized.",
    ],
    icon: "✨",
  },
  {
    title: "Safety & Security",
    items: [
      "Always lock your room before leaving.",
      "Do not share room keys or face access cards.",
      "Report suspicious activities or maintenance issues immediately.",
      "CCTV surveillance operates throughout common areas for everyone's safety.",
    ],
    icon: "🛡️",
  },
  {
    title: "Respect Shared Spaces",
    items: [
      "Use shared facilities responsibly: Refrigerator, Water Dispenser, Lift, Dining Area, Common Utilities.",
      "After use: Clean the area, return shared items to their designated place.",
      "Avoid damaging furniture or common property.",
    ],
    icon: "🏠",
  },
  {
    title: "Smoking & Alcohol",
    items: [
      "Smoking, alcohol consumption, and the use of prohibited substances are strictly prohibited anywhere within the premises.",
    ],
    icon: "🚭",
  },
  {
    title: "Electrical Appliances",
    items: [
      "Do not use induction cookers, heaters, electric stoves, or other high-power appliances inside rooms without prior permission.",
      "Switch off lights, fans, air conditioners, and other electrical appliances before leaving your room.",
    ],
    icon: "⚡",
  },
  {
    title: "Meals",
    items: [
      "Meals are served during scheduled timings.",
      "Please avoid food wastage.",
      "Inform the management in advance if you will not be having meals.",
    ],
    icon: "🍽️",
  },
  {
    title: "Damage & Maintenance",
    items: [
      "Residents are responsible for any damage caused to furniture, fixtures, or property beyond normal wear and tear.",
      "Report maintenance issues immediately so they can be resolved promptly.",
    ],
    icon: "🔧",
  },
  {
    title: "Payments",
    items: [
      "Rent must be paid on or before the due date.",
      "Late payments may attract additional charges as per the rental agreement.",
      "Security deposit terms are governed by the signed agreement.",
    ],
    icon: "💳",
  },
  {
    title: "Emergency Contact",
    items: [
      "In case of an emergency, immediately contact the management team or use the emergency contact numbers provided during check-in.",
    ],
    icon: "📞",
  },
  {
    title: "Conduct & Behavior",
    items: [
      "Maintain respectful and courteous behavior towards all residents and staff.",
      "Avoid any form of harassment, discrimination, or bullying.",
      "Report any misconduct or rule violations to the management immediately.",
    ],
    icon: "🤝",
  },
]

export default function HouseRulesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f2703b] mb-6" style={{ fontSize: "36px", fontFamily: '"Geist", sans-serif' }}>
              House Rules
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
              Community Guidelines for a Safe and Comfortable Living Environment
            </p>
          </div>
        </div>
      </section>

      {/* Rules with Image Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Image at Top */}
          <div className="flex justify-center mb-16">
            <div className="relative w-[420px] h-[280px]">
              <Image
                src="/house-rules-man.png"
                alt="Illustration of man pointing to house rules"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 3 Columns x 4 Rows Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ fontFamily: '"Geist", sans-serif' }}>
            {/* Column 1 - Rules 0-3 */}
            <div className="space-y-8">
              {rules.slice(0, 4).map((rule) => (
                <div key={rule.title} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{rule.icon}</span>
                    <h3 className="text-lg font-medium text-neutral-900">{rule.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {rule.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-neutral-600 flex gap-2">
                        <span className="text-[#f2703b] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 2 - Rules 4-7 */}
            <div className="space-y-8">
              {rules.slice(4, 8).map((rule) => (
                <div key={rule.title} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{rule.icon}</span>
                    <h3 className="text-lg font-medium text-neutral-900">{rule.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {rule.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-neutral-600 flex gap-2">
                        <span className="text-[#f2703b] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 3 - Rules 8-11 */}
            <div className="space-y-8">
              {rules.slice(8).map((rule) => (
                <div key={rule.title} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{rule.icon}</span>
                    <h3 className="text-lg font-medium text-neutral-900">{rule.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {rule.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-neutral-600 flex gap-2">
                        <span className="text-[#f2703b] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Notice Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#ffb700" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#f6f0f0", fontFamily: '"Geist", sans-serif', textAlign: "center" }}>
                Important Notice!
              </h2>
            </div>
            <div className="space-y-4" style={{ color: "#0e0000", fontFamily: '"Geist", sans-serif' }}>
              <p className="leading-relaxed" style={{ textAlign: "justify" }}>
                AM Co-Living PG accepts payments only through the official payment system. Any payment made directly to an employee, agent, or any individual through cash, bank transfer, or any other mode is not valid and will not be considered for booking confirmation.
              </p>
              <p className="leading-relaxed" style={{ textAlign: "justify" }}>
                For your safety and to avoid fraud, please do not make payments to anyone outside the AM Co-Living PG platform. All bookings are confirmed only after payment is successfully completed through the official payment system.
              </p>
              <div className="flex flex-wrap items-center pt-6" style={{ gap: "32px", justifyContent: "center" }}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-pay-gpay-logo-11530962961mwws81tde9-removebg-preview-7DilxQljPiPMA82Jo9WRz2yYcktDhd.png"
                  alt="Google Pay"
                  className="object-contain"
                  style={{ borderRadius: "4px", width: "80px", height: "80px" }}
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paytm-icon-removebg-preview-CMkvaScc4WjXSx2uulsU5ILd5HUiRg.png"
                  alt="Paytm"
                  className="object-contain"
                  style={{ borderRadius: "4px", width: "80px", height: "80px" }}
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PhonePe_Logo.svg-removebg-preview-8ECfJhNAoYJn4V2M05rqY8sDc74QsO.png"
                  alt="PhonePe"
                  className="object-contain"
                  style={{ borderRadius: "4px", width: "80px", height: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-6">
              Thank You for Being Part of Our Community
            </h2>
            <p className="text-base md:text-lg text-black leading-relaxed text-justify font-sans" style={{ fontFamily: '"Inter", sans-serif' }}>
              We appreciate your co-operation in helping us maintain a safe, clean, secure, and welcoming community for everyone. These house rules are designed to ensure that all residents enjoy a comfortable and harmonious living experience. Together, let's make AM Co-Living PG a place you'll truly enjoy calling home.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
