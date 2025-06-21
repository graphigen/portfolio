"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/types"

interface GoogleTestimonialCardProps {
  testimonial: Testimonial
}

export function GoogleTestimonialCard({ testimonial }: GoogleTestimonialCardProps) {
  return (
    <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={`${testimonial.name} profil fotoğrafı`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
              <div className="flex items-center gap-1" role="img" aria-label={`${testimonial.rating} yıldız`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-white">{testimonial.date}</p>
          </div>
        </div>

        <blockquote className="text-gray-700 dark:text-white text-sm leading-relaxed mb-4">
          {testimonial.content}
        </blockquote>

        <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">G</span>
          </div>
          <span className="text-sm text-gray-600 dark:text-white">Google'da yayınlandı</span>
        </div>
      </CardContent>
    </Card>
  )
}
