import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arda Yumlu - Dijital Pazarlama ve Grafik Tasarım Uzmanı",
  description:
    "PPC reklamcılık, sosyal medya yönetimi, web tasarım ve grafik tasarım hizmetleriyle işletmenizi dijital dünyada büyütün. React, Vue.js, Node.js uzmanı.",
  keywords: [
    "dijital pazarlama",
    "PPC reklamcılık",
    "Google Ads",
    "Facebook Ads",
    "sosyal medya yönetimi",
    "web tasarım",
    "grafik tasarım",
    "React geliştirici",
    "Vue.js geliştirici",
    "Node.js",
    "SEO uzmanı",
    "Instagram pazarlama",
    "dijital pazarlama uzmanı",
    "Arda Yumlu",
  ],
  authors: [{ name: "Arda Yumlu" }],
  creator: "Arda Yumlu",
  publisher: "Arda Yumlu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ardayumlu.com",
    siteName: "Arda Yumlu - Dijital Pazarlama Uzmanı",
    title: "Arda Yumlu - Dijital Pazarlama ve Grafik Tasarım Uzmanı",
    description:
      "PPC reklamcılık, sosyal medya yönetimi, web tasarım ve grafik tasarım hizmetleriyle işletmenizi dijital dünyada büyütün.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arda Yumlu - Dijital Pazarlama Uzmanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arda Yumlu - Dijital Pazarlama ve Grafik Tasarım Uzmanı",
    description:
      "PPC reklamcılık, sosyal medya yönetimi, web tasarım ve grafik tasarım hizmetleriyle işletmenizi dijital dünyada büyütün.",
    images: ["/og-image.jpg"],
    creator: "@ardayumlu",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://ardayumlu.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arda Yumlu",
              jobTitle: "Dijital Pazarlama ve Grafik Tasarım Uzmanı",
              description: "PPC reklamcılık, sosyal medya yönetimi, web tasarım ve grafik tasarım konularında uzman",
              url: "https://ardayumlu.com",
              sameAs: [
                "https://linkedin.com/in/ardayumlu",
                "https://instagram.com/ardayumlu",
                "https://twitter.com/ardayumlu",
              ],
              knowsAbout: [
                "Dijital Pazarlama",
                "PPC Reklamcılık",
                "Google Ads",
                "Facebook Ads",
                "Sosyal Medya Yönetimi",
                "Web Tasarım",
                "Grafik Tasarım",
                "React",
                "Vue.js",
                "Node.js",
                "SEO",
              ],
              offers: {
                "@type": "Service",
                serviceType: "Dijital Pazarlama Hizmetleri",
                provider: {
                  "@type": "Person",
                  name: "Arda Yumlu",
                },
                areaServed: "Türkiye",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Dijital Pazarlama Hizmetleri",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "PPC Reklamcılık",
                        description: "Google Ads ve Facebook Ads kampanya yönetimi",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Sosyal Medya Yönetimi",
                        description: "Instagram, Facebook, LinkedIn hesap yönetimi",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Web Tasarım ve Geliştirme",
                        description: "React, Vue.js ile modern web siteleri",
                      },
                    },
                  ],
                },
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "İstanbul",
                addressCountry: "TR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90-545-664-2302",
                contactType: "customer service",
                email: "arda@ardayumlu.com",
                availableLanguage: "Turkish",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
