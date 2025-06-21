"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppProvider, useApp } from "@/context/AppContext"
import { useModal } from "@/hooks/useModal"
import { ProjectCard } from "@/components/ProjectCard"
import { ContactModal } from "@/components/ContactModal"
import { FloatingContactButton } from "@/components/FloatingContactButton"
import { Layout } from "@/components/Layout"

function ProjelerimPageContent() {
  const { projects } = useApp()
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Projelerim</h1>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              Müşterilerimle birlikte gerçekleştirdiğim başarılı projeleri keşfedin. Her proje, dijital pazarlama ve
              tasarım alanındaki uzmanlığımın bir yansımasıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-200">Bu kategoride henüz proje bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Siz de Projelerimde Yer Almak İster misiniz?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 mb-8">
            Benzer başarılı projeler için hemen iletişime geçin. Size özel çözümler geliştirelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openModal}
              className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
            >
              Projem İçin Teklif Al
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Link href="/iletisim">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ProjelerimPage() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <AppProvider>
      <Layout>
        <ProjelerimPageContent />
        <ContactModal isOpen={isOpen} onClose={closeModal} />
        <FloatingContactButton onOpenModal={openModal} />
      </Layout>
    </AppProvider>
  )
}
