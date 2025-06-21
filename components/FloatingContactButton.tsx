"use client"

import { MessageCircle, FileText, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFloatingMenu } from "@/hooks/useFloatingMenu"

interface FloatingContactButtonProps {
  onOpenModal: () => void
}

export function FloatingContactButton({ onOpenModal }: FloatingContactButtonProps) {
  const { isOpen, toggleMenu, closeMenu, menuRef } = useFloatingMenu()

  const handleWhatsApp = () => {
    const phoneNumber = "905456642302"
    const message = "Merhaba! Dijital pazarlama hizmetleriniz hakkında bilgi almak istiyorum."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    closeMenu()
  }

  const handleTeklifAl = () => {
    onOpenModal()
    closeMenu()
  }

  const handleYolTarifi = () => {
    const address = "Atakent Mahallesi, Tame İstanbul 2, Küçükçekmece, İstanbul"
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
    window.open(mapsUrl, "_blank")
    closeMenu()
  }

  return (
    <div ref={menuRef} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Menu Items */}
      <div
        className={`absolute bottom-12 sm:bottom-16 right-0 flex flex-col gap-2 sm:gap-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-gray-700">
            WhatsApp
          </span>
          <Button
            onClick={handleWhatsApp}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="WhatsApp ile iletişim"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        {/* Teklif Al */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-gray-700">
            Teklif Al
          </span>
          <Button
            onClick={handleTeklifAl}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Teklif formu"
          >
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        {/* Yol Tarifi */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-gray-700">
            Yol Tarifi
          </span>
          <Button
            onClick={handleYolTarifi}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg transition-all duration-200 hover:scale-105"
            aria-label="Google Maps yol tarifi"
          >
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>

      {/* Main Button */}
      <Button
        onClick={toggleMenu}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black shadow-lg transition-all duration-300 ${
          isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"
        }`}
        aria-label="İletişim menüsü"
        aria-expanded={isOpen}
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/20 -z-10" onClick={closeMenu} aria-hidden="true" />}
    </div>
  )
}
