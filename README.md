# 🚀 Arda Yumlu - Dijital Pazarlama Portfolio

Modern ve responsive dijital pazarlama portfolio sitesi. Next.js, TypeScript, Tailwind CSS ve Prisma ile geliştirilmiştir.

## ✨ Özellikler

- 🎨 Modern ve responsive tasarım
- 🌙 Dark/Light mode desteği
- 📱 Mobil uyumlu
- ⚡ Hızlı performans
- 🔐 Admin panel
- 📊 İstatistik takibi
- 📝 Blog yönetimi
- 💼 Proje yönetimi
- 📧 İletişim formu
- 🔒 SSL güvenliği

## 🛠️ Teknolojiler

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui
- **Database**: SQLite (Prisma ORM)
- **Authentication**: NextAuth.js
- **Deployment**: PM2, Nginx
- **Icons**: Lucide React

## 📦 Kurulum

### Gereksinimler
- Node.js 18+
- npm 8+

### Hızlı Başlangıç

\`\`\`bash
# Projeyi klonlayın
git clone https://github.com/your-repo/arda-yumlu-portfolio.git
cd arda-yumlu-portfolio

# Bağımlılıkları kurun
npm install

# Çevre değişkenlerini ayarlayın
cp .env.example .env

# Veritabanını hazırlayın
npx prisma generate
npx prisma db push
npm run db:seed

# Geliştirme sunucusunu başlatın
npm run dev
\`\`\`

Site http://localhost:3000 adresinde çalışacaktır.

### Production Kurulumu

Ubuntu VDS için detaylı kurulum rehberi: [UBUNTU_KURULUM.md](./UBUNTU_KURULUM.md)

## 🔐 Admin Panel

- **URL**: `/admin/login`
- **Kullanıcı Adı**: `arda2025`
- **Şifre**: `arda2025!`

### Admin Özellikleri
- Dashboard ve istatistikler
- Blog yazısı yönetimi
- Proje yönetimi
- Mesaj yönetimi
- İstatistik takibi

## 📁 Proje Yapısı

\`\`\`
├── app/                    # Next.js App Router
│   ├── admin/             # Admin panel sayfaları
│   ├── api/               # API routes
│   └── (pages)/           # Public sayfalar
├── components/            # React bileşenleri
│   ├── ui/               # Shadcn/ui bileşenleri
│   └── admin/            # Admin bileşenleri
├── context/              # React Context
├── hooks/                # Custom hooks
├── lib/                  # Utility fonksiyonlar
├── prisma/               # Veritabanı şeması
├── public/               # Statik dosyalar
└── types/                # TypeScript tipleri
\`\`\`

## 🚀 Deployment

### PM2 ile Production
\`\`\`bash
npm run build
pm2 start ecosystem.config.js --env production
\`\`\`

### Nginx Konfigürasyonu
\`\`\`bash
sudo cp nginx.conf /etc/nginx/sites-available/yourdomain.com
sudo ln -sf /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/
sudo systemctl restart nginx
\`\`\`

## 📊 Veritabanı

Proje SQLite veritabanı kullanır. Prisma ORM ile yönetilir.

### Veritabanı Komutları
\`\`\`bash
npx prisma generate      # Client oluştur
npx prisma db push       # Şemayı uygula
npx prisma studio        # Veritabanı arayüzü
npm run db:seed          # Test verisi ekle
\`\`\`

## 🔧 Geliştirme

### Yeni Bileşen Ekleme
\`\`\`bash
# Shadcn/ui bileşeni ekle
npx shadcn@latest add button
\`\`\`

### Veritabanı Değişiklikleri
\`\`\`bash
# Şemayı düzenleyin: prisma/schema.prisma
npx prisma db push
npx prisma generate
\`\`\`

## 📝 Scripts

\`\`\`bash
npm run dev          # Geliştirme sunucusu
npm run build        # Production build
npm run start        # Production sunucu
npm run lint         # ESLint kontrolü
npm run db:generate  # Prisma client oluştur
npm run db:push      # Veritabanı güncelle
npm run db:seed      # Test verisi ekle
\`\`\`

## 🔒 Güvenlik

- NextAuth.js ile kimlik doğrulama
- Rate limiting (Nginx)
- CSRF koruması
- XSS koruması
- SQL injection koruması (Prisma)
- SSL/TLS şifreleme

## 📈 Performance

- Next.js optimizasyonları
- Image optimization
- Code splitting
- Lazy loading
- Gzip compression
- CDN ready

## 🌐 SEO

- Meta tags
- Open Graph
- Twitter Cards
- Structured data (JSON-LD)
- Sitemap
- Robots.txt

## 📞 Destek

- **E-posta**: arda@ardayumlu.com
- **GitHub Issues**: [Repository Issues]
- **Dokümantasyon**: [Wiki]

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📋 Changelog

### v1.0.0 (2024-12-20)
- İlk sürüm
- Admin panel
- Blog sistemi
- Proje yönetimi
- İletişim formu
- Dark mode
- Responsive tasarım

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
