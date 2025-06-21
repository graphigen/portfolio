# 🐧 Ubuntu VDS Kurulum Rehberi

Bu rehber, Arda Yumlu Portfolio projesini Ubuntu VDS'e kurmanız için detaylı talimatlar içerir.

## 📋 Sistem Gereksinimleri

- **Ubuntu**: 20.04 LTS veya üzeri
- **RAM**: Minimum 1GB (2GB önerilen)
- **Disk**: Minimum 10GB boş alan
- **CPU**: 1 vCPU (2 vCPU önerilen)
- **Domain**: SSL sertifikası için gerekli

## 🚀 Hızlı Kurulum

### 1. VDS'e Bağlanın
\`\`\`bash
ssh root@your-server-ip
\`\`\`

### 2. Sudo Kullanıcısı Oluşturun (Root değilseniz atlayın)
\`\`\`bash
adduser arda
usermod -aG sudo arda
su - arda
\`\`\`

### 3. Kurulum Scriptini İndirin ve Çalıştırın
\`\`\`bash
wget https://raw.githubusercontent.com/graphigen/portfolio/main/install-ubuntu.sh
chmod +x install-ubuntu.sh
./install-ubuntu.sh
\`\`\`

### 4. Domain ve E-posta Bilgilerini Girin
Script size domain adınızı ve e-posta adresinizi soracak.

## 🔧 Manuel Kurulum

### 1. Sistem Güncellemesi
\`\`\`bash
sudo apt update && sudo apt upgrade -y
\`\`\`

### 2. Gerekli Paketleri Kurun
\`\`\`bash
sudo apt install -y curl wget git nginx ufw fail2ban
\`\`\`

### 3. Node.js Kurulumu
\`\`\`bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
\`\`\`

### 4. PM2 Kurulumu
\`\`\`bash
sudo npm install -g pm2
\`\`\`

### 5. Projeyi İndirin
\`\`\`bash
sudo mkdir -p /var/www
sudo chown -R $USER:$USER /var/www
cd /var/www
git clone https://github.com/graphigen/portfolio.git arda-yumlu-portfolio
cd arda-yumlu-portfolio
\`\`\`

### 6. Çevre Değişkenlerini Ayarlayın
\`\`\`bash
cp .env.example .env
nano .env
\`\`\`

Aşağıdaki değerleri güncelleyin:
- `NEXTAUTH_URL`: Domain adresiniz
- `NEXTAUTH_SECRET`: Güvenli bir secret key
- `NODE_ENV`: "production"

### 7. Bağımlılıkları Kurun
\`\`\`bash
npm install
\`\`\`

### 8. Veritabanını Hazırlayın
\`\`\`bash
npx prisma generate
npx prisma db push
npm run db:seed
\`\`\`

### 9. Projeyi Build Edin
\`\`\`bash
npm run build
\`\`\`

### 10. SSL Sertifikası Kurun
\`\`\`bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d ardayumlu.com -d www.ardayumlu.com
\`\`\`

### 11. Nginx Konfigürasyonu
\`\`\`bash
sudo cp nginx.conf /etc/nginx/sites-available/ardayumlu.com
sudo ln -sf /etc/nginx/sites-available/ardayumlu.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
\`\`\`

### 12. Firewall Ayarları
\`\`\`bash
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw allow 3000
\`\`\`

### 13. PM2 ile Uygulamayı Başlatın
\`\`\`bash
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
\`\`\`

## 🔐 Güvenlik Ayarları

### Fail2ban Konfigürasyonu
\`\`\`bash
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
\`\`\`

### SSH Güvenliği
\`\`\`bash
sudo nano /etc/ssh/sshd_config
\`\`\`

Aşağıdaki ayarları yapın:
- `PermitRootLogin no`
- `PasswordAuthentication no` (SSH key kullanıyorsanız)
- `Port 2222` (Varsayılan port değiştirin)

## 📊 Monitoring ve Bakım

### PM2 Komutları
\`\`\`bash
pm2 status                    # Durum kontrolü
pm2 logs                      # Logları görüntüle
pm2 restart arda-yumlu-portfolio  # Yeniden başlat
pm2 stop arda-yumlu-portfolio     # Durdur
pm2 delete arda-yumlu-portfolio   # Sil
\`\`\`

### Nginx Komutları
\`\`\`bash
sudo systemctl status nginx   # Durum kontrolü
sudo systemctl restart nginx  # Yeniden başlat
sudo nginx -t                 # Konfigürasyon test
\`\`\`

### Log Dosyaları
- PM2 Logs: `/var/log/pm2/`
- Nginx Logs: `/var/log/nginx/`
- Application Logs: `pm2 logs`

## 🔄 Güncelleme

Projeyi güncellemek için:
\`\`\`bash
./update.sh
\`\`\`

## 💾 Yedekleme

Düzenli yedekleme için:
\`\`\`bash
./backup.sh
\`\`\`

Otomatik yedekleme için crontab ekleyin:
\`\`\`bash
crontab -e
# Her gün saat 02:00'da yedek al
0 2 * * * /var/www/arda-yumlu-portfolio/backup.sh
\`\`\`

## 🆘 Sorun Giderme

### Site Açılmıyor
1. PM2 durumunu kontrol edin: `pm2 status`
2. Nginx durumunu kontrol edin: `sudo systemctl status nginx`
3. Firewall ayarlarını kontrol edin: `sudo ufw status`

### SSL Sertifikası Sorunu
\`\`\`bash
sudo certbot renew --dry-run
sudo systemctl restart nginx
\`\`\`

### Veritabanı Sorunu
\`\`\`bash
cd /var/www/arda-yumlu-portfolio
npx prisma db push
npm run db:seed
\`\`\`

## 📞 Destek

Kurulum sırasında sorun yaşarsanız:
- GitHub Issues: [Proje Repository]
- E-posta: arda@ardayumlu.com

## 🎉 Kurulum Tamamlandı!

Kurulum başarıyla tamamlandıktan sonra:
- **Site**: https://ardayumlu.com
- **Admin Panel**: https://ardayumlu.com/admin/login
- **Kullanıcı Adı**: arda2025
- **Şifre**: arda2025!
