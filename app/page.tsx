"use client"

import { ArrowRight, BarChart3, Globe, Megaphone, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { ServiceCard } from "@/components/ServiceCard"
import { AppProvider, useApp } from "@/context/AppContext"
import { ContactModal } from "@/components/ContactModal"
import { useModal } from "@/hooks/useModal"
import { GoogleTestimonialCard } from "@/components/GoogleTestimonialCard"
import { BlogSlider } from "@/components/BlogSlider"
import { FloatingContactButton } from "@/components/FloatingContactButton"
import { Layout } from "@/components/Layout"

function HomePageContent() {
  const { services, stats, testimonials, blogPosts } = useApp()
  const { openModal } = useModal()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 leading-tight">
              Dijital Pazarlama ve
              <span className="block text-gray-600 dark:text-white">Grafik Tasarım Uzmanı</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-white mb-6 sm:mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 leading-relaxed">
              PPC reklamcılık, sosyal medya yönetimi, web tasarım ve grafik tasarım hizmetleriyle işletmenizi dijital
              dünyada büyütün.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                onClick={openModal}
                className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 w-full sm:w-auto"
              >
                Projeni Başlat
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 w-full sm:w-auto"
              >
                <Link href="/hizmetler">Hizmetlerimi İncele</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Icons - Hidden on mobile */}
        <div className="hidden lg:block">
          <div className="absolute top-20 left-10 opacity-20 animate-bounce" aria-hidden="true">
            <BarChart3 className="h-8 w-8 text-gray-400 dark:text-white" />
          </div>
          <div className="absolute top-32 right-20 opacity-20 animate-pulse" aria-hidden="true">
            <Globe className="h-6 w-6 text-gray-400 dark:text-white" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-20 animate-bounce delay-1000" aria-hidden="true">
            <TrendingUp className="h-10 w-10 text-gray-400 dark:text-white" />
          </div>
          <div className="absolute bottom-32 right-10 opacity-20 animate-pulse delay-500" aria-hidden="true">
            <Zap className="h-7 w-7 text-gray-400 dark:text-white" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-white max-w-2xl mx-auto leading-relaxed">
              Dijital pazarlama ve grafik tasarım alanında sunduğumuz kapsamlı hizmetlerle markanızı zirveye taşıyın.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              asChild
              variant="outline"
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Link href="/hizmetler">
                Tüm Hizmetleri İncele
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">
            İstatistikler
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <AnimatedCounter end={stats.clients} suffix="+" />
              <div className="text-sm sm:text-base text-gray-600 dark:text-white mt-1 sm:mt-2">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.projects} suffix="+" />
              <div className="text-sm sm:text-base text-gray-600 dark:text-white mt-1 sm:mt-2">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.experience} suffix="+" />
              <div className="text-sm sm:text-base text-gray-600 dark:text-white mt-1 sm:mt-2">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.satisfaction} suffix="%" />
              <div className="text-sm sm:text-base text-gray-600 dark:text-white mt-1 sm:mt-2">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <article className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Dijital Pazarlama ve Grafik Tasarım Uzmanınız
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-white mb-4 sm:mb-6 leading-relaxed">
                Merhaba! Ben Arda Yumlu. Dijital pazarlama ve grafik tasarım alanında uzmanlaşmış bir profesyonel
                olarak, işletmelerin online varlıklarını güçlendirmelerine yardımcı oluyorum.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-white mb-6 sm:mb-8 leading-relaxed">
                Modern teknolojiler (React, Vue.js, Node.js) ve dijital pazarlama stratejileri konularında deneyimim ile
                markanızı dijital dünyada öne çıkarıyorum.
              </p>
              <Button
                asChild
                className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 w-full sm:w-auto"
              >
                <Link href="/hakkimizda">
                  Daha Fazla Bilgi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                <div className="text-center">
                  <Megaphone
                    className="h-16 sm:h-20 lg:h-24 w-16 sm:w-20 lg:w-24 text-gray-400 dark:text-white mx-auto mb-3 sm:mb-4"
                    aria-hidden="true"
                  />
                  <p className="text-gray-500 dark:text-white text-sm sm:text-base">Modern Çözümler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 sm:mb-16">
            <h2
              id="testimonials-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4"
            >
              Müşteri Yorumları
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-white max-w-2xl mx-auto leading-relaxed">
              Google'da paylaşılan gerçek müşteri deneyimlerini keşfedin.
            </p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <GoogleTestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 sm:mb-16">
            <h2
              id="blog-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4"
            >
              Son Blog Yazıları
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-white max-w-2xl mx-auto leading-relaxed">
              Dijital pazarlama dünyasından en güncel ipuçları ve stratejiler.
            </p>
          </header>
          <BlogSlider posts={blogPosts} />
        </div>
      </section>
    </>
  )
}

export default function HomePage() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <AppProvider>
      <Layout>
        <HomePageContent />
        <ContactModal isOpen={isOpen} onClose={closeModal} />
        <FloatingContactButton onOpenModal={openModal} />
      </Layout>
    </AppProvider>
  )
}
