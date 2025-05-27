"use client"

import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"  // use this import for React client components
import CallToActionWithAnnotation from "@/components/HeroSection"
import SimpleThreeColumns from "@/components/Features"
import SplitWithImage from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J3W8SDFWRN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J3W8SDFWRN');
        `}
      </Script>

      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <SplitWithImage />

      {/* Vercel Analytics tracking */}
      <Analytics />
    </>
  )
}
