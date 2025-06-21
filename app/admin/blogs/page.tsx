"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye, Calendar, Clock, Search, FileText } from "lucide-react"

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "2024'te Google Ads Stratejileri: ROI'nizi Maksimize Edin",
      excerpt:
        "Google Ads kampanyalarınızda daha yüksek dönüşüm oranları elde etmek için uygulamanız gereken 7 temel strateji.",
      category: "PPC",
      status: "published",
      date: "15/12/2024",
      readTime: "5 dk",
      views: 1250,
    },
    {
      id: 2,
      title: "Instagram Algoritması: Organik Erişimi Artırmanın Sırları",
      excerpt:
        "Instagram'da organik erişiminizi artırmak ve daha fazla etkileşim almak için bilmeniz gereken algoritma değişiklikleri.",
      category: "Sosyal Medya",
      status: "published",
      date: "12/12/2024",
      readTime: "7 dk",
      views: 980,
    },
    {
      id: 3,
      title: "React vs Vue.js: 2024'te Hangi Framework'ü Seçmeli?",
      excerpt:
        "Modern web geliştirme için React ve Vue.js karşılaştırması. Proje ihtiyaçlarınıza göre doğru seçimi yapın.",
      category: "Web Geliştirme",
      status: "draft",
      date: "10/12/2024",
      readTime: "8 dk",
      views: 0,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "PPC", "Sosyal Medya", "Web Geliştirme", "SEO", "Grafik Tasarım"]

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDelete = (id: number) => {
    if (confirm("Bu blog yazısını silmek istediğinizden emin misiniz?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id))
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Yayında</Badge>
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Taslak</Badge>
      default:
        return <Badge variant="secondary">Bilinmiyor</Badge>
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Blog Yönetimi</h1>
            <p className="text-gray-600 dark:text-gray-200">
              Blog yazılarınızı yönetin, düzenleyin ve yeni içerikler ekleyin.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Yeni Blog Ekle
          </Button>
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
                    placeholder="Blog yazılarında ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "Tüm Kategoriler" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog List */}
        <div className="grid gap-6">
          {filteredBlogs.map((blog) => (
            <Card key={blog.id} className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{blog.title}</h3>
                      {getStatusBadge(blog.status)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-200 mb-3 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{blog.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{blog.views} görüntüleme</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {blog.category}
                      </Badge>
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
                      onClick={() => handleDelete(blog.id)}
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

        {filteredBlogs.length === 0 && (
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-12 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Blog yazısı bulunamadı</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                Arama kriterlerinize uygun blog yazısı bulunamadı.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
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
