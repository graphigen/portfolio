"use client"

import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AppProvider } from "@/context/AppContext"
import { ContactForm } from "@/components/ContactForm"
import { FloatingContactButton } from "@/components/FloatingContactButton"
import { useModal } from "@/hooks/useModal"
import { ContactModal } from "@/components/ContactModal"
import { Layout } from "@/components/Layout"

function IletisimPageContent() {
  const { isOpen, openModal, closeModal } = useModal()

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      description: "Hemen arayın, size yardımcı olalım",
      value: "+90 545 664 2302",
      action: "tel:+905456642302",
      actionText: "Ara",
    },
    {
      icon: Mail,
      title: "E-posta",
      description: "Detaylı bilgi için e-posta gönderin",
      value: "arda@ardayumlu.com",
      action: "mailto:arda@ardayumlu.com",
      actionText: "E-posta Gönder",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Anında mesajlaşma için WhatsApp",
      value: "+90 545 664 2302",
      action: "https://wa.me/905456642302",
      actionText: "WhatsApp",
    },
    {
      icon: MapPin,
      title: "Adres",
      description: "Ofis ziyareti için randevu alın",
      value: "Atakent Mah. Tame İstanbul 2, Küçükçekmece/İstanbul",
      action:
        "https://www.google.com/maps/dir/?api=1&destination=Atakent+Mahallesi,+Tame+İstanbul+2,+Küçükçekmece,+İstanbul",
      actionText: "Yol Tarifi",
    },
  ]

  const workingHours = [
    { day: "Pazartesi - Cuma", hours: "09:00 - 18:00" },
    { day: "Cumartesi", hours: "10:00 - 16:00" },
    { day: "Pazar", hours: "Kapalı" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">İletişime Geçin</h1>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              Projeniz hakkında konuşmak için benimle iletişime geçin. Size en uygun çözümü birlikte bulalım.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <method.icon className="h-12 w-12 text-gray-700 dark:text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-200 mb-3">{method.description}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-4">{method.value}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <a href={method.action} target={method.title === "WhatsApp" ? "_blank" : undefined}>
                      {method.actionText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-2">
                  <Send className="h-6 w-6" />
                  Mesaj Gönderin
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-200">
                  Projeniz hakkında detaylı bilgi verin, size en kısa sürede dönüş yapalım.
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Working Hours & Map */}
            <div className="space-y-6">
              {/* Working Hours */}
              <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Çalışma Saatleri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-200">{schedule.day}</span>
                        <span className="font-medium text-gray-900 dark:text-white">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Ofis Konumu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 dark:text-gray-300 mx-auto mb-2" />
                      <p className="text-gray-500 dark:text-gray-200">Harita Görünümü</p>
                      <p className="text-sm text-gray-400 dark:text-gray-300">Google Maps Entegrasyonu</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-200 mb-4">
                    Atakent Mahallesi, Tame İstanbul 2, Küçükçekmece, İstanbul
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Atakent+Mahallesi,+Tame+İstanbul+2,+Küçükçekmece,+İstanbul"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Yol Tarifi Al
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sık Sorulan Sorular</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">En çok merak edilen sorular ve cevapları</p>
          </div>

          <div className="space-y-6">
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Proje süresi ne kadar?</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Proje süreleri, projenin kapsamına göre değişiklik gösterir. Web tasarım projeleri 2-4 hafta, dijital
                  pazarlama kampanyaları ise sürekli devam eden süreçlerdir.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Fiyatlandırma nasıl yapılıyor?
                </h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Her proje kendine özgüdür. Projenizin gereksinimlerini değerlendirdikten sonra size özel bir teklif
                  hazırlıyorum. Ücretsiz danışmanlık için iletişime geçebilirsiniz.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Hangi teknolojileri kullanıyorsunuz?
                </h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Web geliştirme için React, Vue.js, Next.js; dijital pazarlama için Google Ads, Facebook Ads; tasarım
                  için Adobe Creative Suite ve Figma kullanıyorum.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Proje sonrası destek veriyor musunuz?
                </h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Evet, tüm projelerimde proje teslimi sonrası 3 ay ücretsiz destek veriyorum. Sonrasında da uygun
                  fiyatlarla destek hizmeti sunuyorum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default function IletisimPage() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <AppProvider>
      <Layout>
        <IletisimPageContent />
        <ContactModal isOpen={isOpen} onClose={closeModal} />
        <FloatingContactButton onOpenModal={openModal} />
      </Layout>
    </AppProvider>
  )
}
