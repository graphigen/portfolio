"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useContactForm } from "@/hooks/useContactForm"
import { useApp } from "@/context/AppContext"

interface ContactFormProps {
  onSuccess?: () => void
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const { services } = useApp()
  const { formData, isSubmitting, isSubmitted, handleChange, handleSubmit } = useContactForm()

  const handleFormSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e)
    if (onSuccess) {
      setTimeout(() => {
        onSuccess()
      }, 2000)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mesajınız Gönderildi!</h3>
        <p className="text-gray-600 dark:text-white">En kısa sürede size dönüş yapacağım.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Ad Soyad</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">E-posta</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Telefon</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Hizmet</label>
        <select
          value={formData.service}
          onChange={(e) => handleChange("service", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
        >
          <option value="">Hizmet Seçin</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Mesaj</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
          placeholder="Projeniz hakkında detayları paylaşın..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50"
      >
        {isSubmitting ? "Gönderiliyor..." : "Teklif Gönder"}
      </Button>
    </form>
  )
}
