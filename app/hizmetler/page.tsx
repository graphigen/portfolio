"use client"

import Link from "next/link"
import { MousePointer, Users, Globe, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppProvider, useApp } from "@/context/AppContext"
import { ContactModal } from "@/components/ContactModal"
import { useModal } from "@/hooks/useModal"
import { FloatingContactButton } from "@/components/FloatingContactButton"
import { Layout } from "@/components/Layout"

const iconMap = {
  MousePointer,
  Users,
  Globe,
}

function HizmetlerPageContent() {
  const { services } = useApp()
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Hizmetlerimiz</h1>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              Dijital pazarlama ve grafik tasarım alanında sunduğumuz profesyonel hizmetlerle işletmenizi büyütün.
              Modern teknolojiler ve kanıtlanmış stratejilerle markanızı zirveye taşıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-gray-700 dark:text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                        {service.price && (
                          <p className="text-lg text-gray-600 dark:text-gray-200 mt-1">{service.price}</p>
                        )}
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">{service.description}</p>

                    <div className="space-y-4 mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Neler Dahil:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={openModal}
                      className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
                    >
                      Bu Hizmet İçin Teklif Al
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <Icon className="h-32 w-32 text-gray-400 dark:text-gray-300" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projenizi Başlatmaya Hazır mısınız?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 mb-8">
            Size özel bir teklif hazırlayalım. Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openModal}
              className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
            >
              Ücretsiz Teklif Al
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Link href="/hakkimizda">Hakkımızda Bilgi Al</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default function HizmetlerPage() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <AppProvider>
      <Layout>
        <HizmetlerPageContent />
        <ContactModal isOpen={isOpen} onClose={closeModal} />
        <FloatingContactButton onOpenModal={openModal} />
      </Layout>
    </AppProvider>
  )
}
