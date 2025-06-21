"use client"

import { useState } from "react"
import { Globe, Users, TrendingUp, Eye, ExternalLink, Calendar, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project, WebDesignDetails, SocialMediaDetails, DigitalMarketingDetails } from "@/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const getServiceIcon = (type: string) => {
    switch (type) {
      case "web-design":
        return Globe
      case "social-media":
        return Users
      case "digital-marketing":
        return TrendingUp
      default:
        return Globe
    }
  }

  const renderWebDesignDetails = (details: WebDesignDetails) => (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Web Sitesi Görüntüleri</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.screenshots.map((screenshot, index) => (
            <div key={index} className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={screenshot || "/placeholder.svg"}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Kullanılan Teknolojiler</h4>
          <div className="flex flex-wrap gap-2">
            {details.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Özellikler</h4>
          <div className="space-y-2">
            {details.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-sm text-gray-700 dark:text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {details.url && (
        <div>
          <Button
            asChild
            variant="outline"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <a href={details.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Web Sitesini Ziyaret Et
            </a>
          </Button>
        </div>
      )}
    </div>
  )

  const renderSocialMediaDetails = (details: SocialMediaDetails) => (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Sosyal Medya Görselleri</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {details.images.map((image, index) => (
            <div key={index} className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={image || "/placeholder.svg"}
                alt={`Social media post ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Platformlar</h4>
          <div className="flex flex-wrap gap-2">
            {details.platforms.map((platform, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
              >
                {platform}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Performans Metrikleri</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-200">Takipçi Artışı</span>
              <span className="font-semibold text-green-600 dark:text-green-400">
                {details.metrics.followersGrowth}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-200">Etkileşim Oranı</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">{details.metrics.engagementRate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-200">Erişim Artışı</span>
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                {details.metrics.reachIncrease}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDigitalMarketingDetails = (details: DigitalMarketingDetails) => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-green-50 dark:bg-green-900 rounded-lg">
          <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{details.roi}</div>
          <div className="text-sm text-gray-600 dark:text-gray-200">ROI</div>
        </div>

        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{details.roas}</div>
          <div className="text-sm text-gray-600 dark:text-gray-200">ROAS</div>
        </div>

        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
          <Users className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{details.costPerLead}</div>
          <div className="text-sm text-gray-600 dark:text-gray-200">Lead Maliyeti</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Kampanya Detayları</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-200">Aylık Bütçe</span>
              <span className="font-semibold text-gray-900 dark:text-white">{details.budget}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-200">Dönüşümler</span>
              <span className="font-semibold text-gray-900 dark:text-white">{details.conversions}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Kullanılan Platformlar</h4>
          <div className="flex flex-wrap gap-2">
            {details.platforms.map((platform, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
              >
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-gray-900 dark:text-white">{project.clientName}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge
              variant={project.status === "completed" ? "default" : "secondary"}
              className={
                project.status === "completed"
                  ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                  : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
              }
            >
              {project.status === "completed" ? (
                <>
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Tamamlandı
                </>
              ) : (
                <>
                  <Clock className="h-3 w-3 mr-1" />
                  Devam Ediyor
                </>
              )}
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-200">
          <Calendar className="h-4 w-4" />
          <span>{project.completedDate}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {project.services.map((service, index) => {
          const Icon = getServiceIcon(service.type)
          const isExpanded = expandedService === `${project.id}-${index}`

          return (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
            >
              <div
                className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setExpandedService(isExpanded ? null : `${project.id}-${index}`)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
                    <span className="font-medium text-gray-900 dark:text-white">{service.title}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Eye className="h-4 w-4" />
                    {isExpanded ? "Gizle" : "İncele"}
                  </Button>
                </div>
              </div>

              {isExpanded && (
                <div className="px-4 pb-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="pt-4">
                    {service.type === "web-design" && renderWebDesignDetails(service.details as WebDesignDetails)}
                    {service.type === "social-media" && renderSocialMediaDetails(service.details as SocialMediaDetails)}
                    {service.type === "digital-marketing" &&
                      renderDigitalMarketingDetails(service.details as DigitalMarketingDetails)}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
