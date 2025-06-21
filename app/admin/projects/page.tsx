"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye, Calendar, Globe, Users, TrendingUp, Search } from "lucide-react"

export default function AdminProjects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      clientName: "TechStart Yazılım",
      services: ["Web Tasarım", "Google Ads"],
      status: "completed",
      completedDate: "Kasım 2024",
      budget: "₺25,000",
      roi: "%320",
    },
    {
      id: 2,
      clientName: "Moda Butik",
      services: ["Sosyal Medya", "Facebook Ads"],
      status: "ongoing",
      completedDate: "Ekim 2024",
      budget: "₺15,000",
      roi: "%280",
    },
    {
      id: 3,
      clientName: "Sağlık Kliniği",
      services: ["Web Tasarım"],
      status: "completed",
      completedDate: "Eylül 2024",
      budget: "₺18,000",
      roi: "%250",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const statuses = ["all", "completed", "ongoing", "paused"]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const handleDelete = (id: number) => {
    if (confirm("Bu projeyi silmek istediğinizden emin misiniz?")) {
      setProjects(projects.filter((project) => project.id !== id))
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Tamamlandı</Badge>
      case "ongoing":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Devam Ediyor</Badge>
      case "paused":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Durduruldu</Badge>
        )
      default:
        return <Badge variant="secondary">Bilinmiyor</Badge>
    }
  }

  const getServiceIcon = (service: string) => {
    if (service.includes("Web")) return Globe
    if (service.includes("Sosyal") || service.includes("Facebook") || service.includes("Instagram")) return Users
    if (service.includes("Ads") || service.includes("Google")) return TrendingUp
    return Globe
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Proje Yönetimi</h1>
            <p className="text-gray-600 dark:text-gray-200">
              Müşteri projelerinizi yönetin, düzenleyin ve yeni projeler ekleyin.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Yeni Proje Ekle
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-200">Toplam Proje</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{projects.length}</p>
                </div>
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-200">Aktif Proje</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {projects.filter((p) => p.status === "ongoing").length}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-200">Tamamlanan</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {projects.filter((p) => p.status === "completed").length}
                  </p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-200">Ortalama ROI</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">%283</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Projelerde ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Tüm Durumlar</option>
                  <option value="completed">Tamamlandı</option>
                  <option value="ongoing">Devam Ediyor</option>
                  <option value="paused">Durduruldu</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project List */}
        <div className="grid gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.clientName}</h3>
                      {getStatusBadge(project.status)}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.services.map((service, index) => {
                        const Icon = getServiceIcon(service)
                        return (
                          <Badge key={index} variant="outline" className="flex items-center gap-1">
                            <Icon className="h-3 w-3" />
                            {service}
                          </Badge>
                        )
                      })}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.completedDate}</span>
                      </div>
                      <div>
                        <span className="font-medium">Bütçe:</span> {project.budget}
                      </div>
                      <div>
                        <span className="font-medium">ROI:</span>
                        <span className="text-green-600 dark:text-green-400 ml-1">{project.roi}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Görüntüle
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Düzenle
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Sil
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-12 text-center">
              <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Proje bulunamadı</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">Arama kriterlerinize uygun proje bulunamadı.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedStatus("all")
                }}
              >
                Filtreleri Temizle
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  )
}
