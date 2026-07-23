import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "About AM Co-Living PG | Safe & Comfortable Accommodation",
  description: "Learn about AM Co-Living - a place that feels like home for students and working professionals with fully furnished rooms and modern amenities.",
}

interface Feature {
  title: string
  iconUrl?: string
  icon?: string
  description: string
}

export default function AboutPage() {
  const features: Feature[] = [
    {
      title: "Fully Furnished & Move-in Ready Rooms",
      iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%282%29-esNJezc8YVTFVRqbykA2nSuqTno7Nv.png",
      description: "Complete with all essentials for immediate occupancy"
    },
    {
      title: "High-Speed Wi-Fi",
      iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%281%29-RCCG5p9BpXI2b96OU8bcNkxigge6xR.png",
      description: "Fast and reliable internet connectivity"
    },
    {
      title: "Nutritious Home-Style Meals",
      iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%283%29-b0i9wdodK9SjeWUYfk7820D01LZo8S.png",
      description: "Healthy and delicious meals prepared fresh daily"
    },
    {
      title: "24/7 Security & CCTV Surveillance",
      iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%286%29-XTxUYcvDwpoIgYR3wmx55UVIYs9CuA.png",
      description: "Round-the-clock safety and monitoring"
    },
    {
      title: "Daily Housekeeping",
      iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%284%29-El8bvR0jBcFHEElamJxJsTWEG62zlf.png",
      description: "Professional cleaning and maintenance staff"
    },
    {
      title: "Prime Location with Easy Metro/ Bus Access with 150 mtr.",
      iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%285%29-V27ljl5L81W3otXHxnN0e12yjwgjEu.png",
      description: "Convenient transportation and connectivity"
    },
    {
      title: "Clean & Hygienic Living Spaces",
      icon: "✨",
      description: "Spotless rooms and common areas"
    },
    {
      title: "Friendly & Responsive Management",
      icon: "👥",
      description: "Always available to help and support"
    },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-1">
        {/* Hero Section */}
        <section className="py-16 md:py-10 lg:py-22">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16" style={{ fontFamily: '"Quicksand", sans-serif' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[rgb(58,58,52)] mb-6" style={{ fontSize: "23px", fontFamily: '"Inter", sans-serif' }}>
                About
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[rgb(242,112,59)] mb-6" style={{ fontSize: "48px", fontFamily: '"Roboto", sans-serif' }}>
                AM Co-Living
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
                A Place That Feels Like Home Always!
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
                <div className="space-y-6" style={{ fontFamily: '"Geist", sans-serif' }}>
                  <p className="text-base md:text-lg text-[#120000] leading-relaxed font-sans text-justify" style={{ fontSize: "19px" }}>
                    At AM Co-Living PG, we believe that a great living experience goes beyond just providing a room. We offer safe, comfortable, and fully furnished accommodation designed to make students and working professionals feel at home from the very first day.
                  </p>
                  <p className="text-base md:text-lg text-black leading-relaxed font-sans text-justify" style={{ fontSize: "19px" }}>
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
        <section className="pt-10 pb-6 md:pt-14 md:pb-8 lg:pt-16 lg:pb-10">
          <div className="container-custom">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 mb-4">
                Why Choose AM Co-Living?
              </h2>
              <p className="text-base md:text-lg max-w-7xl mx-auto font-geist text-justify" style={{ color: "#1d1b1c" }}>
                Keeping this dynamic situation in mind, many students and white collared professionals flock to Pune in search of various opportunities. This further takes them to choose Paying Guests as an economical option of living. Shared living space or coliving space is the modern form of living where fellow mates are offered a host of living alternatives to choose from. With a host of facilities alongside, these spaces are focusing on features like advantages like flexibility, affordability and a sense of unity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 font-sans" style={{ fontFamily: '"Geist", sans-serif', fontSize: "18px" }}>
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-xl bg-white border border-neutral-200 hover:border-[#f2703b] hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        {feature.iconUrl ? (
                          <div className="w-12 h-12">
                            <img src={feature.iconUrl} alt={feature.title} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div style={{ fontSize: "30px" }}>{feature.icon}</div>
                        )}
                      </div>
                      <h3 className="font-semibold text-neutral-900 leading-snug mb-2" style={{ fontSize: "18px" }}>
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed" style={{ fontSize: "18px" }}>
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex items-center mt-auto pt-4 border-t border-neutral-100">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#22d200]/10" style={{ color: "#22d200" }}>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </div>
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
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-neutral-900 mb-6">
                A Community You'll Love ❤️
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-justify font-sans" style={{ color: "#210513" }}>
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
