"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MousePointer, Users, Globe, Check } from "lucide-react"
import type { Service } from "@/types"
import { useApp } from "@/context/AppContext"

const iconMap = {
  MousePointer,
  Users,
  Globe,
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { activeService, setActiveService } = useApp()
  const Icon = iconMap[service.icon as keyof typeof iconMap]
  const isActive = activeService === service.id

  return (
    <Card
      className={`border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 cursor-pointer h-full ${
        isActive ? "ring-2 ring-gray-900 dark:ring-white shadow-lg" : ""
      }`}
      onClick={() => setActiveService(isActive ? null : service.id)}
    >
      <CardHeader className="p-4 sm:p-6">
        <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-gray-700 dark:text-white mb-3 sm:mb-4" />
        <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white leading-tight">
          {service.title}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-white mb-3 sm:mb-4 leading-relaxed">
          {service.description}
        </CardDescription>

        {isActive && (
          <div className="space-y-3 sm:space-y-4 animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-2">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-white">{feature}</span>
                </div>
              ))}
            </div>
            {service.price && (
              <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{service.price}</div>
            )}
            <Button className="w-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 text-sm sm:text-base">
              Teklif Al
            </Button>
          </div>
        )}
      </CardHeader>
    </Card>
  )
}
