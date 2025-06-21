"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Service, Stats, Testimonial, BlogPost, Project } from "@/types"

interface AppContextType {
  services: Service[]
  stats: Stats
  testimonials: Testimonial[]
  blogPosts: BlogPost[]
  projects: Project[]
  activeService: string | null
  setActiveService: (id: string | null) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const servicesData: Service[] = [
  {
    id: "ppc",
    title: "PPC Reklamcılık",
    description: "Google Ads, Facebook Ads ve diğer platformlarda etkili reklam kampanyaları yönetimi.",
    icon: "MousePointer",
    features: ["Google Ads Yönetimi", "Facebook & Instagram Ads", "ROI Optimizasyonu", "A/B Testing"],
    price: "₺2,500/ay",
  },
  {
    id: "social",
    title: "Sosyal Medya Yönetimi",
    description: "Instagram, Facebook, LinkedIn platformlarında içerik üretimi ve topluluk yönetimi.",
    icon: "Users",
    features: ["İçerik Üretimi", "Topluluk Yönetimi", "Hashtag Stratejisi", "Analiz & Raporlama"],
    price: "₺1,800/ay",
  },
  {
    id: "web",
    title: "Web Tasarım & Geliştirme",
    description: "React, Vue.js, Node.js gibi modern teknolojilerle responsive web siteleri.",
    icon: "Globe",
    features: ["React/Vue.js Geliştirme", "Responsive Tasarım", "SEO Optimizasyonu", "Performance Optimizasyonu"],
    price: "₺5,000+",
  },
]

const statsData: Stats = {
  clients: 150,
  projects: 300,
  experience: 5,
  satisfaction: 98,
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Mehmet Kaya",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Arda Yumlu ile çalışmak harika bir deneyimdi. Google Ads kampanyalarımızda %300 ROI artışı sağladı. Profesyonel yaklaşımı ve sonuç odaklı çalışması gerçekten etkileyici. Kesinlikle tavsiye ederim!",
    rating: 5,
    date: "2 hafta önce",
    platform: "Google",
  },
  {
    id: "2",
    name: "Ayşe Demir",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Sosyal medya hesaplarımızı tamamen dönüştürdü. Instagram ve Facebook'ta takipçi sayımız 6 ayda 10 kat arttı ve satışlarımız patladı. İçerik stratejisi ve hashtag optimizasyonu mükemmeldi.",
    rating: 5,
    date: "1 ay önce",
    platform: "Google",
  },
  {
    id: "3",
    name: "Can Özkan",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Web sitemizi React ile yeniden tasarladı. Hem görsel hem de performans açısından mükemmel bir iş çıkardı. Site hızı %80 arttı ve SEO skorumuz 95'e çıktı. Çok memnun kaldık.",
    rating: 5,
    date: "3 hafta önce",
    platform: "Google",
  },
  {
    id: "4",
    name: "Zeynep Yılmaz",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Dijital pazarlama stratejimizi baştan sona planladı. PPC kampanyaları ve sosyal medya yönetimi sayesinde ilk aydan itibaren ciddi sonuçlar almaya başladık. ROI'miz %250 arttı.",
    rating: 5,
    date: "1 hafta önce",
    platform: "Google",
  },
]

const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "2024'te Google Ads Stratejileri: ROI'nizi Maksimize Edin",
    excerpt:
      "Google Ads kampanyalarınızda daha yüksek dönüşüm oranları elde etmek için uygulamanız gereken 7 temel strateji.",
    image: "/placeholder.svg?height=160&width=280",
    date: "15/12/2024",
    readTime: "5 dk",
    category: "PPC",
    slug: "google-ads-stratejileri-2024",
  },
  {
    id: "2",
    title: "Instagram Algoritması: Organik Erişimi Artırmanın Sırları",
    excerpt:
      "Instagram'da organik erişiminizi artırmak ve daha fazla etkileşim almak için bilmeniz gereken algoritma değişiklikleri.",
    image: "/placeholder.svg?height=160&width=280",
    date: "12/12/2024",
    readTime: "7 dk",
    category: "Sosyal Medya",
    slug: "instagram-algoritması-organik-erisim",
  },
  {
    id: "3",
    title: "React vs Vue.js: 2024'te Hangi Framework'ü Seçmeli?",
    excerpt:
      "Modern web geliştirme için React ve Vue.js karşılaştırması. Proje ihtiyaçlarınıza göre doğru seçimi yapın.",
    image: "/placeholder.svg?height=160&width=280",
    date: "10/12/2024",
    readTime: "8 dk",
    category: "Web Geliştirme",
    slug: "react-vs-vuejs-2024-karsilastirma",
  },
  {
    id: "4",
    title: "E-ticaret SEO: Ürün Sayfalarını Optimize Etme Rehberi",
    excerpt: "E-ticaret sitelerinde ürün sayfalarının SEO optimizasyonu için detaylı rehber ve pratik ipuçları.",
    image: "/placeholder.svg?height=160&width=280",
    date: "08/12/2024",
    readTime: "6 dk",
    category: "SEO",
    slug: "eticaret-seo-urun-sayfalari",
  },
  {
    id: "5",
    title: "Facebook Ads vs Google Ads: Hangisi Daha Etkili?",
    excerpt: "İki büyük reklam platformunun detaylı karşılaştırması ve işletmeniz için doğru seçimi yapma rehberi.",
    image: "/placeholder.svg?height=160&width=280",
    date: "05/12/2024",
    readTime: "9 dk",
    category: "PPC",
    slug: "facebook-ads-vs-google-ads",
  },
  {
    id: "6",
    title: "Sosyal Medya İçerik Takvimi: 2024 Planlaması",
    excerpt: "Sosyal medya hesaplarınız için etkili içerik takvimi oluşturma ve yıllık planlama stratejileri.",
    image: "/placeholder.svg?height=160&width=280",
    date: "03/12/2024",
    readTime: "6 dk",
    category: "Sosyal Medya",
    slug: "sosyal-medya-icerik-takvimi-2024",
  },
  {
    id: "7",
    title: "Web Sitesi Hızını Artırmanın 10 Yolu",
    excerpt: "Web sitenizin yükleme hızını artırmak için uygulayabileceğiniz teknik ve pratik optimizasyon yöntemleri.",
    image: "/placeholder.svg?height=160&width=280",
    date: "01/12/2024",
    readTime: "8 dk",
    category: "Web Geliştirme",
    slug: "web-sitesi-hizi-optimizasyonu",
  },
  {
    id: "8",
    title: "Grafik Tasarımda 2024 Trendleri ve İpuçları",
    excerpt: "2024 yılında öne çıkan grafik tasarım trendleri ve markanız için etkili tasarım stratejileri.",
    image: "/placeholder.svg?height=160&width=280",
    date: "28/11/2024",
    readTime: "7 dk",
    category: "Grafik Tasarım",
    slug: "grafik-tasarim-2024-trendleri",
  },
]

const projectsData: Project[] = [
  {
    id: "1",
    clientName: "TechStart Yazılım",
    services: [
      {
        type: "web-design",
        title: "Kurumsal Web Sitesi",
        details: {
          screenshots: [
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
            "/placeholder.svg?height=300&width=500",
          ],
          technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
          features: ["Responsive Tasarım", "SEO Optimizasyonu", "Admin Panel", "Blog Sistemi"],
          url: "https://techstart.com",
        },
      },
      {
        type: "digital-marketing",
        title: "Google Ads Kampanyası",
        details: {
          budget: "₺15,000/ay",
          roi: "%320",
          roas: "4.2x",
          costPerLead: "₺45",
          conversions: "156 lead/ay",
          platforms: ["Google Ads", "Google Analytics"],
        },
      },
    ],
    completedDate: "Kasım 2024",
    status: "completed",
  },
  {
    id: "2",
    clientName: "Moda Butik",
    services: [
      {
        type: "social-media",
        title: "Instagram & Facebook Yönetimi",
        details: {
          platforms: ["Instagram", "Facebook", "Pinterest"],
          images: [
            "/placeholder.svg?height=300&width=300",
            "/placeholder.svg?height=300&width=300",
            "/placeholder.svg?height=300&width=300",
            "/placeholder.svg?height=300&width=300",
          ],
          metrics: {
            followersGrowth: "+850%",
            engagementRate: "8.5%",
            reachIncrease: "+1200%",
          },
        },
      },
      {
        type: "digital-marketing",
        title: "Facebook & Instagram Ads",
        details: {
          budget: "₺8,500/ay",
          roi: "%280",
          roas: "3.8x",
          costPerLead: "₺28",
          conversions: "89 satış/ay",
          platforms: ["Facebook Ads", "Instagram Ads"],
        },
      },
    ],
    completedDate: "Ekim 2024",
    status: "ongoing",
  },
  {
    id: "3",
    clientName: "Sağlık Kliniği",
    services: [
      {
        type: "web-design",
        title: "Randevu Sistemi Web Sitesi",
        details: {
          screenshots: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
          technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
          features: ["Online Randevu", "Hasta Paneli", "Doktor Paneli", "SMS Entegrasyonu"],
          url: "https://saglikkliniği.com",
        },
      },
    ],
    completedDate: "Eylül 2024",
    status: "completed",
  },
]

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <AppContext.Provider
      value={{
        services: servicesData,
        stats: statsData,
        testimonials: testimonialsData,
        blogPosts: blogPostsData,
        projects: projectsData,
        activeService,
        setActiveService,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
