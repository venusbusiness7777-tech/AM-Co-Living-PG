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
      "Smoking, alcohol consumption, and the use of prohibited substances are strictly prohibited anywhere within the premises unless explicitly approved by management.",
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
]

export default function HouseRulesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#f2703b] mb-6" style={{ fontSize: "36px" }}>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Image */}
            <div className="flex justify-center lg:justify-start mt-10">
              <div className="relative w-[420px] h-[280px]">
                <Image
                  src="/house-rules-man.png"
                  alt="Illustration of man pointing to house rules"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* First Column Rules */}
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

            {/* Second Column Rules */}
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
          </div>

          {/* Third Column Rules (Remaining) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      {/* Closing Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-6">
              Thank You for Being Part of Our Community
            </h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed text-justify font-sans">
              We appreciate your co-operation in helping us maintain a safe, clean, secure, and welcoming community for everyone. These house rules are designed to ensure that all residents enjoy a comfortable and harmonious living experience. Together, let's make AM Co-Living PG a place you'll truly enjoy calling home.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
