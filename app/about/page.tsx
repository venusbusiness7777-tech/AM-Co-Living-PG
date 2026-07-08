import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "About AM Co-Living PG | Safe & Comfortable Accommodation",
  description: "Learn about AM Co-Living - a place that feels like home for students and working professionals with fully furnished rooms and modern amenities.",
}

export default function AboutPage() {
  const features = [
    "Fully Furnished & Move-in Ready Rooms",
    "High-Speed Wi-Fi",
    "Nutritious Home-Style Meals",
    "24/7 Security & CCTV Surveillance",
    "Daily Housekeeping",
    "Prime Location with Easy Metro Access",
    "Clean & Hygienic Living Spaces",
    "Friendly & Responsive Management",
  ]

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#f2703b] mb-6" style={{ fontSize: "36px" }}>
                About AM Co-Living PG
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                A Place That Feels Like Home!
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 mb-6">
                  Our Mission
                </h2>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-[#120000] leading-relaxed font-sans">
                    At AM Co-Living PG, we believe that a great living experience goes beyond just providing a room. We offer safe, comfortable, and fully furnished accommodation designed to make students and working professionals feel at home from the very first day.
                  </p>
                  <p className="text-base md:text-lg text-black leading-relaxed font-sans">
                    Our thoughtfully designed spaces combine modern amenities with a welcoming community, creating the perfect environment to live, work, study, and relax. Whether you're relocating for education or your career, we ensure a hassle-free stay with everything you need under one roof.
                  </p>
                </div>
              </div>
              <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/about-pg-building.jpg"
                  alt="AM Co-Living modern accommodation building with warm lighting"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container-custom">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 mb-4">
                Why Choose AM Co-Living?
              </h2>
              <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto font-sans">
                We provide everything you need for a comfortable, safe, and fulfilling living experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 font-sans">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="p-6 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-neutral-900 text-white">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-[#e51a1a]">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-neutral-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 mb-6">
                A Community You'll Love
              </h2>
              <p className="text-base md:text-lg text-[#040002] leading-relaxed text-justify font-sans">
                More than just a PG, AM Co-Living is a place where friendships grow, opportunities begin, and every resident enjoys a comfortable lifestyle with modern facilities and a supportive environment. We're dedicated to creating a space where you can truly belong.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
