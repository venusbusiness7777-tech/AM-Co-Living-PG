import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist, Roboto, Poppins, Fira_Sans, Rubik, Nunito, Open_Sans, Playfair_Display, JetBrains_Mono, DM_Sans, Quicksand, Work_Sans, Karla } from "next/font/google"
import "./globals.css"
import { SplashScreen } from "@/components/splash-screen"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

const firaSans = Fira_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
})

const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
})

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
})

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
})

const workSans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const karla = Karla({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
})

export const metadata: Metadata = {
  title: "Katachi — Design furniture for spaces that breathe.",
  description: "Architected in Belgium, built to last—timeless pieces.",
  generator: "v0.app",
  alternates: {
    canonical: "https://katachi.example/",
  },
  openGraph: {
    siteName: "Katachi",
    title: "Design furniture for spaces that breathe. | Katachi",
    description: "Architected in Belgium, built to last—timeless pieces.",
    type: "website",
    url: "https://katachi.example/",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "Katachi design furniture — timeless pieces, architected in Belgium",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_BE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design furniture for spaces that breathe. | Katachi",
    description: "Architected in Belgium, built to last—timeless pieces.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "Katachi design furniture — timeless pieces, architected in Belgium",
      },
    ],
    site: "@katachi",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} ${roboto.variable} ${poppins.variable} ${firaSans.variable} ${rubik.variable} ${nunito.variable} ${openSans.variable} ${playfairDisplay.variable} ${jetBrainsMono.variable} ${dmSans.variable} ${quicksand.variable} ${workSans.variable} ${karla.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">
        <SplashScreen />
        {children}
      </body>
    </html>
  )
}
