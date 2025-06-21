import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: "arda@ardayumlu.com" },
    update: {},
    create: {
      email: "arda@ardayumlu.com",
      name: "Arda Yumlu",
      role: "admin",
    },
  })

  // Create initial stats
  const stats = await prisma.stats.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      clients: 150,
      projects: 300,
      experience: 5,
      satisfaction: 98,
      monthlyViews: 1250,
      totalRevenue: "₺500,000+",
    },
  })

  // Create sample blog posts
  const blogPosts = [
    {
      title: "2024'te Google Ads Stratejileri: ROI'nizi Maksimize Edin",
      content:
        "Google Ads kampanyalarınızda daha yüksek dönüşüm oranları elde etmek için uygulamanız gereken 7 temel strateji...",
      excerpt:
        "Google Ads kampanyalarınızda daha yüksek dönüşüm oranları elde etmek için uygulamanız gereken 7 temel strateji.",
      category: "PPC",
      status: "published",
      slug: "google-ads-stratejileri-2024",
      readTime: "5 dk",
      views: 1250,
      published: true,
      publishedAt: new Date(),
    },
    {
      title: "Instagram Algoritması: Organik Erişimi Artırmanın Sırları",
      content:
        "Instagram'da organik erişiminizi artırmak ve daha fazla etkileşim almak için bilmeniz gereken algoritma değişiklikleri...",
      excerpt:
        "Instagram'da organik erişiminizi artırmak ve daha fazla etkileşim almak için bilmeniz gereken algoritma değişiklikleri.",
      category: "Sosyal Medya",
      status: "published",
      slug: "instagram-algoritması-organik-erisim",
      readTime: "7 dk",
      views: 980,
      published: true,
      publishedAt: new Date(),
    },
  ]

  for (const post of blogPosts) {
    await prisma.blog.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
  }

  // Create sample projects
  const projects = [
    {
      clientName: "TechStart Yazılım",
      description: "Kurumsal web sitesi ve Google Ads kampanyası",
      services: JSON.stringify(["Web Tasarım", "Google Ads"]),
      status: "completed",
      budget: "₺25,000",
      roi: "%320",
      completedDate: "Kasım 2024",
    },
    {
      clientName: "Moda Butik",
      description: "Sosyal medya yönetimi ve Facebook Ads",
      services: JSON.stringify(["Sosyal Medya", "Facebook Ads"]),
      status: "ongoing",
      budget: "₺15,000",
      roi: "%280",
      completedDate: "Ekim 2024",
    },
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    })
  }

  console.log("Database seeded successfully!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
