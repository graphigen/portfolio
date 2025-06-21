"use client"

import Link from "next/link"
import { ArrowRight, Award, Users, Target, TrendingUp, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AppProvider, useApp } from "@/context/AppContext"
import { ContactModal } from "@/components/ContactModal"
import { useModal } from "@/hooks/useModal"
import { FloatingContactButton } from "@/components/FloatingContactButton"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { Layout } from "@/components/Layout"

function HakkimizdaPageContent() {
  const { stats } = useApp()
  const { isOpen, openModal, closeModal } = useModal()

  const values = [
    {
      icon: Target,
      title: "Sonuç Odaklı",
      description:
        "Her projede ölçülebilir sonuçlar elde etmeyi hedefliyoruz. ROI ve performans metrikleri bizim için öncelik.",
    },
    {
      icon: Users,
      title: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin başarısı bizim başarımızdır. %98 müşteri memnuniyet oranımızla bunu kanıtlıyoruz.",
    },
    {
      icon: TrendingUp,
      title: "Sürekli Gelişim",
      description: "Dijital pazarlama dünyasındaki değişimleri takip ediyor, en güncel stratejileri uyguluyoruz.",
    },
    {
      icon: Award,
      title: "Kalite Garantisi",
      description: "Her projede en yüksek kalite standartlarını uyguluyoruz. Detaylara verdiğimiz önem fark yaratıyor.",
    },
  ]

  const timeline = [
    {
      year: "2019",
      title: "Başlangıç",
      description: "Dijital pazarlama alanında ilk adımlarımı attım. Freelance projelerle deneyim kazanmaya başladım.",
    },
    {
      year: "2020",
      title: "Uzmanlaşma",
      description:
        "PPC reklamcılık ve sosyal medya yönetimi konularında derinleştim. İlk büyük müşterilerimi kazandım.",
    },
    {
      year: "2021",
      title: "Teknoloji Entegrasyonu",
      description: "React ve Vue.js öğrenerek web geliştirme hizmetlerini de portföyüme ekledim.",
    },
    {
      year: "2022",
      title: "Büyüme",
      description: "Müşteri portföyümü genişlettim. 100+ başarılı proje tamamladım.",
    },
    {
      year: "2023",
      title: "Liderlik",
      description: "Sektörde tanınan bir uzman haline geldim. Grafik tasarım hizmetlerini de ekledim.",
    },
    {
      year: "2024",
      title: "İnovasyon",
      description: "AI destekli pazarlama stratejileri ve modern web teknolojileri ile hizmet kalitemi artırdım.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Merhaba, Ben <span className="text-gray-600 dark:text-gray-200">Arda Yumlu</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-200 mb-8">
                5+ yıllık deneyimim ile dijital pazarlama ve grafik tasarım alanında işletmelerin online varlıklarını
                güçlendiriyorum. Modern teknolojiler ve kanıtlanmış stratejilerle markanızı büyütmeye odaklanıyorum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={openModal}
                  className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
                >
                  Benimle Çalış
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <Link href="/hizmetler">Hizmetlerimi İncele</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-500 dark:text-gray-200">Arda Yumlu</p>
                  <p className="text-sm text-gray-400 dark:text-gray-300">Dijital Pazarlama Uzmanı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Rakamlarla Başarılarım</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">5 yıllık yolculuğumda elde ettiğim sonuçlar</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter end={stats.clients} suffix="+" />
              <div className="text-gray-600 dark:text-gray-200">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.projects} suffix="+" />
              <div className="text-gray-600 dark:text-gray-200">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.experience} suffix="+" />
              <div className="text-gray-600 dark:text-gray-200">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.satisfaction} suffix="%" />
              <div className="text-gray-600 dark:text-gray-200">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Değerlerim</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Her projede rehber aldığım temel değerler ve çalışma prensipleri
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-gray-700 dark:text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Yolculuğum</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">Dijital pazarlama alanındaki gelişim hikayem</p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mt-4"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Uzmanlık Alanlarım</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              Profesyonel olarak çalıştığım teknolojiler ve platformlar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Dijital Pazarlama</h3>
                <div className="space-y-3">
                  {["Google Ads", "Facebook Ads", "Instagram Marketing", "LinkedIn Ads", "SEO", "Analytics"].map(
                    (skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-200">{skill}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Web Teknolojileri</h3>
                <div className="space-y-3">
                  {["React.js", "Vue.js", "Node.js", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tasarım Araçları</h3>
                <div className="space-y-3">
                  {["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "Adobe XD", "Sketch"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Birlikte Çalışalım</h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 mb-8">
            Projeniz için size özel çözümler geliştirelim. Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openModal}
              className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
            >
              Ücretsiz Danışmanlık Al
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Link href="/hizmetler">Hizmetlerimi İncele</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default function HakkimizdaPage() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <AppProvider>
      <Layout>
        <HakkimizdaPageContent />
        <ContactModal isOpen={isOpen} onClose={closeModal} />
        <FloatingContactButton onOpenModal={openModal} />
      </Layout>
    </AppProvider>
  )
}
