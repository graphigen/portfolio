"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Home, Briefcase, FolderOpen, User, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/ContactModal"
import { FloatingContactButton } from "@/components/FloatingContactButton"
import { DarkModeToggle } from "@/components/DarkModeToggle"
import { useModal } from "@/hooks/useModal"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const { isOpen, openModal, closeModal } = useModal()

  const getPageTitle = (path: string) => {
    switch (path) {
      case "/":
        return "Anasayfa"
      case "/hizmetler":
        return "Hizmetlerimiz"
      case "/projelerim":
        return "Projelerim"
      case "/hakkimizda":
        return "Hakkımızda"
      case "/iletisim":
        return "İletişim"
      default:
        return "Anasayfa"
    }
  }

  const isActivePage = (path: string) => pathname === path

  const menuItems = [
    { href: "/", label: "Anasayfa", icon: Home },
    { href: "/hizmetler", label: "Hizmetlerimiz", icon: Briefcase },
    { href: "/projelerim", label: "Projelerim", icon: FolderOpen },
    { href: "/hakkimizda", label: "Hakkımızda", icon: User },
    { href: "/iletisim", label: "İletişim", icon: Phone },
  ]

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  const handleTeklifClick = () => {
    openModal()
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      {/* Navigation */}
      <nav
        className="border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur-sm sticky top-0 z-30 transition-colors"
        role="navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                Arda Yumlu
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/"
                className={`text-sm xl:text-base transition-colors ${
                  isActivePage("/")
                    ? "text-gray-900 dark:text-white font-medium"
                    : "text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Anasayfa
              </Link>
              <Link
                href="/hizmetler"
                className={`text-sm xl:text-base transition-colors ${
                  isActivePage("/hizmetler")
                    ? "text-gray-900 dark:text-white font-medium"
                    : "text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/projelerim"
                className={`text-sm xl:text-base transition-colors ${
                  isActivePage("/projelerim")
                    ? "text-gray-900 dark:text-white font-medium"
                    : "text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Projelerim
              </Link>
              <Link
                href="/hakkimizda"
                className={`text-sm xl:text-base transition-colors ${
                  isActivePage("/hakkimizda")
                    ? "text-gray-900 dark:text-white font-medium"
                    : "text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className={`text-sm xl:text-base transition-colors ${
                  isActivePage("/iletisim")
                    ? "text-gray-900 dark:text-white font-medium"
                    : "text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                İletişim
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <DarkModeToggle />

              {/* Desktop Teklif Al Button */}
              <Button
                onClick={openModal}
                size="sm"
                className="hidden lg:flex bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-xs sm:text-sm px-3 sm:px-4"
              >
                Teklif Al
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`h-6 w-6 absolute transition-all duration-300 text-gray-900 dark:text-white ${
                      isMobileMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    className={`h-6 w-6 absolute transition-all duration-300 text-gray-900 dark:text-white ${
                      isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-black shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white transition-colors"
              onClick={handleMenuItemClick}
            >
              Arda Yumlu
            </Link>
            <div className="flex items-center gap-2">
              <DarkModeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                aria-label="Menüyü kapat"
              >
                <X className="h-6 w-6 text-gray-900 dark:text-white" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleMenuItemClick}
                      className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-lg"
                          : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-200"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
            <Button
              onClick={handleTeklifClick}
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 py-3 transition-colors"
            >
              Teklif Al
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-white mb-2 transition-colors">İletişim</p>
              <div className="space-y-1">
                <a
                  href="tel:+905456642302"
                  className="block text-sm text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  +90 545 664 2302
                </a>
                <a
                  href="mailto:arda@ardayumlu.com"
                  className="block text-sm text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  arda@ardayumlu.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb - Only show on non-home pages */}
      {pathname !== "/" && (
        <div className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-4 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Anasayfa
              </Link>
              <span className="text-gray-400 dark:text-gray-300">/</span>
              <span className="text-gray-900 dark:text-white font-medium">{getPageTitle(pathname)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <main className="transition-colors">{children}</main>

      {/* Footer */}
      <footer
        className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 block transition-colors"
              >
                Arda Yumlu
              </Link>
              <p className="text-gray-600 dark:text-white mb-4 max-w-md transition-colors text-sm sm:text-base">
                Dijital pazarlama ve grafik tasarım hizmetleriyle işletmenizi büyütüyorum.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors text-sm sm:text-base">
                Hizmetler
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-white transition-colors text-sm">
                <li>PPC Reklamcılık</li>
                <li>Sosyal Medya Yönetimi</li>
                <li>Web Tasarım & Geliştirme</li>
                <li>Grafik Tasarım</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors text-sm sm:text-base">
                İletişim
              </h3>
              <address className="space-y-1 sm:space-y-2 text-gray-600 dark:text-white not-italic transition-colors text-sm">
                <div>arda@ardayumlu.com</div>
                <div>+90 545 664 2302</div>
                <div>İstanbul, Türkiye</div>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-600 dark:text-white transition-colors text-sm">
            <p>&copy; 2024 Arda Yumlu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isOpen} onClose={closeModal} />
      <FloatingContactButton onOpenModal={openModal} />
    </div>
  )
}
