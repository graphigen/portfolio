"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, Phone, Calendar, Search, Archive, Trash2, Reply } from "lucide-react"

export default function AdminMessages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Ahmet Kaya",
      email: "ahmet@example.com",
      phone: "+90 532 123 4567",
      service: "PPC Reklamcılık",
      message: "Google Ads kampanyalarım için yardıma ihtiyacım var. ROI'mi artırmak istiyorum.",
      date: "2024-12-20",
      time: "14:30",
      status: "new",
      priority: "high",
    },
    {
      id: 2,
      name: "Zeynep Demir",
      email: "zeynep@example.com",
      phone: "+90 533 987 6543",
      service: "Web Tasarım",
      message: "E-ticaret sitemi yenilemek istiyorum. Modern bir tasarım ve hızlı yükleme süresi önemli.",
      date: "2024-12-19",
      time: "16:45",
      status: "replied",
      priority: "medium",
    },
    {
      id: 3,
      name: "Can Özkan",
      email: "can@example.com",
      phone: "+90 534 456 7890",
      service: "Sosyal Medya Yönetimi",
      message: "Instagram hesabımın takipçi sayısını artırmak ve etkileşimi yükseltmek istiyorum.",
      date: "2024-12-18",
      time: "10:15",
      status: "archived",
      priority: "low",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedPriority, setSelectedPriority] = useState("all")

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || message.status === selectedStatus
    const matchesPriority = selectedPriority === "all" || message.priority === selectedPriority
    return matchesSearch && matchesStatus && matchesPriority
  })

  const handleDelete = (id: number) => {
    if (confirm("Bu mesajı silmek istediğinizden emin misiniz?")) {
      setMessages(messages.filter((message) => message.id !== id))
    }
  }

  const handleStatusChange = (id: number, newStatus: string) => {
    setMessages(messages.map((message) => (message.id === id ? { ...message, status: newStatus } : message)))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Yeni</Badge>
      case "replied":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Yanıtlandı</Badge>
      case "archived":
        return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">Arşivlendi</Badge>
      default:
        return <Badge variant="secondary">Bilinmiyor</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Yüksek</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Orta</Badge>
      case "low":
        return <Badge variant="outline">Düşük</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  const messageStats = {
    total: messages.length,
    new: messages.filter((m) => m.status === "new").length,
    replied: messages.filter((m) => m.status === "replied").length,
    archived: messages.filter((m) => m.status === "archived").length,
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mesaj Yönetimi</h1>
          <p className="text-gray-600 dark:text-gray-200">Gelen mesajları yönetin, yanıtlayın ve takip edin.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-200">Toplam Mesaj</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{messageStats.total}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-200">Yeni Mesaj</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{messageStats.new}</p>
                </div>
                <Mail className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-200">Yanıtlanan</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{messageStats.replied}</p>
                </div>
                <Reply className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-200">Arşivlenen</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{messageStats.archived}</p>
                </div>
                <Archive className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Mesajlarda ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Tüm Durumlar</option>
                  <option value="new">Yeni</option>
                  <option value="replied">Yanıtlandı</option>
                  <option value="archived">Arşivlendi</option>
                </select>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Tüm Öncelikler</option>
                  <option value="high">Yüksek</option>
                  <option value="medium">Orta</option>
                  <option value="low">Düşük</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Message List */}
        <div className="space-y-4">
          {filteredMessages.map((message) => (
            <Card key={message.id} className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{message.name}</h3>
                      {getStatusBadge(message.status)}
                      {getPriorityBadge(message.priority)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        <span>{message.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        <span>{message.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {message.date} - {message.time}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <Badge variant="outline" className="mb-2">
                        {message.service}
                      </Badge>
                      <p className="text-gray-700 dark:text-gray-200">{message.message}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:w-48">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(`mailto:${message.email}`, "_blank")}
                    >
                      <Reply className="h-4 w-4 mr-1" />
                      Yanıtla
                    </Button>
                    {message.status === "new" && (
                      <Button variant="outline" size="sm" onClick={() => handleStatusChange(message.id, "replied")}>
                        Yanıtlandı İşaretle
                      </Button>
                    )}
                    <Button variant="outline" size="sm" onClick={() => handleStatusChange(message.id, "archived")}>
                      <Archive className="h-4 w-4 mr-1" />
                      Arşivle
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(message.id)}
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

        {filteredMessages.length === 0 && (
          <Card className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Mesaj bulunamadı</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">Arama kriterlerinize uygun mesaj bulunamadı.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedStatus("all")
                  setSelectedPriority("all")
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
