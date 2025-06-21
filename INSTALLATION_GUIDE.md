# 🚀 Arda Yumlu Portfolio & Admin Panel - Kurulum Rehberi

Bu rehber, Arda Yumlu'nun dijital pazarlama portföy sitesini ve admin panelini farklı sistemlere kurmanız için detaylı talimatlar içerir.

## 📋 Sistem Gereksinimleri

- **Node.js**: v18.0.0 veya üzeri
- **npm**: v8.0.0 veya üzeri (Node.js ile birlikte gelir)
- **Git**: Versiyon kontrolü için
- **SQLite**: Veritabanı (otomatik kurulur)

## 🔐 Admin Panel Giriş Bilgileri

- **Kullanıcı Adı**: `arda2025`
- **Şifre**: `arda2025!`
- **Admin Panel URL**: `http://your-domain.com/admin/login`

---

## 💻 1. WINDOWS KURULUMU

### Otomatik Kurulum (Önerilen)

1. **PowerShell'i Yönetici olarak açın**
2. **Kurulum scriptini çalıştırın:**

\`\`\`powershell
# Node.js kurulumu (Chocolatey ile)
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
choco install nodejs git -y

# Proje kurulumu
git clone https://github.com/your-repo/arda-yumlu-portfolio.git
cd arda-yumlu-portfolio
npm install
npm run build
npm start
