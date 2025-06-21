"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { FileText, MessageSquare, Eye, Calendar, BarChart3, Globe } from "lucide-react"

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState({
    totalProjects: 15,
    totalBlogs: 8,
    totalMessages: 23,
    monthlyViews: 1250,
    newMessagesThisWeek: 5,
    publishedBlogs: 6,
    activeProjects: 3,
    completedProjects: 12,
  })

  useEffect(() => {
    if (status === "loading") return
    if (!session) {
      router.push("/admin/login")
    }
  }, [session, status, router])

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">Yükleniyor...</div>
  }

  if (!session) {
    return null
  }

  const dashboardCards = [
    {
      title: "Toplam Projeler",
      value: stats.totalProjects,
      icon: Globe,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900",
      change: "+2 bu ay",
    },
    {
      title: "Blog Yazıları",
      value: stats.totalBlogs,
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900",
      change: "+1 bu hafta",
    },
    {
      title: "Mesajlar",
      value: stats.totalMessages,
      icon: MessageSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900",
      change: "+5 bu hafta",
    },
    {
      title: "Aylık Görüntüleme",
      value: stats.monthlyViews,
      icon: Eye,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900",
      change: "+15% artış",
    },
  ]

  const recentActivities = [
    { action: "Yeni proje eklendi", time: "2 saat önce", type: "project" },
    { action: "Blog yazısı yayınlandı", time: "1 gün önce", type: "blog" },
    { action: "Yeni mesaj alındı", time: "3 saat önce", type: "message" },
    { action: "Proje güncellendi", time: "1 gün önce", type: "project" },
    { action: "İstatistikler güncellendi", time: "2 gün önce", type: "stats" },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-200">
            Hoş geldiniz, {session.user?.name}! İşte sitenizin genel durumu.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardCards.map((card, index) => (
            <Card key={index} className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-200">{card.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{card.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{card.change}</p>
                  </div>
                  <div className={`p-3 rounded-full ${card.bgColor}`}>
                    <card.icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Stats */}
          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Hızlı İstatistikler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-200">Aktif Projeler</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{stats.activeProjects}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-200">Tamamlanan Projeler</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{stats.completedProjects}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-200">Yayınlanan Bloglar</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{stats.publishedBlogs}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-200">Bu Hafta Mesajlar</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{stats.newMessagesThisWeek}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Son Aktiviteler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "project"
                          ? "bg-blue-500"
                          : activity.type === "blog"
                            ? "bg-green-500"
                            : activity.type === "message"
                              ? "bg-purple-500"
                              : "bg-orange-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">{activity.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
