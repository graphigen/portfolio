#!/bin/bash

# Arda Yumlu Portfolio - Ubuntu VDS Kurulum Scripti
# Bu script Ubuntu 20.04+ için tasarlanmıştır

set -e

# Renkli çıktı için
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Arda Yumlu Portfolio Kurulum Başlıyor...${NC}"

# Root kontrolü
if [[ $EUID -eq 0 ]]; then
   echo -e "${RED}❌ Bu scripti root kullanıcısı ile çalıştırmayın!${NC}"
   exit 1
fi

# Domain adı al
read -p "🌐 Domain adınızı girin (örn: ardayumlu.com): " DOMAIN
read -p "📧 E-posta adresinizi girin (SSL sertifikası için): " EMAIL

echo -e "${YELLOW}📦 Sistem güncelleniyor...${NC}"
sudo apt update && sudo apt upgrade -y

echo -e "${YELLOW}📦 Gerekli paketler kuruluyor...${NC}"
sudo apt install -y curl wget git nginx ufw fail2ban

# Node.js kurulumu
echo -e "${YELLOW}📦 Node.js kuruluyor...${NC}"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 kurulumu
echo -e "${YELLOW}📦 PM2 kuruluyor...${NC}"
sudo npm install -g pm2

# Proje dizini oluştur
echo -e "${YELLOW}📁 Proje dizini oluşturuluyor...${NC}"
sudo mkdir -p /var/www
sudo chown -R $USER:$USER /var/www

# Proje klonla (GitHub'dan)
echo -e "${YELLOW}📥 Proje indiriliyor...${NC}"
cd /var/www
git clone https://github.com/your-repo/arda-yumlu-portfolio.git
cd arda-yumlu-portfolio

# .env dosyasını kopyala ve düzenle
echo -e "${YELLOW}⚙️ Çevre değişkenleri ayarlanıyor...${NC}"
cp .env.example .env

# Domain adını .env dosyasında güncelle
sed -i "s|NEXTAUTH_URL=\"http://localhost:3000\"|NEXTAUTH_URL=\"https://$DOMAIN\"|g" .env
sed -i "s|NODE_ENV=\"development\"|NODE_ENV=\"production\"|g" .env

# Güvenli secret key oluştur
SECRET_KEY=$(openssl rand -base64 32)
sed -i "s|NEXTAUTH_SECRET=\"arda-yumlu-super-secret-key-2024-change-in-production\"|NEXTAUTH_SECRET=\"$SECRET_KEY\"|g" .env

echo -e "${YELLOW}📦 NPM paketleri kuruluyor...${NC}"
npm install

echo -e "${YELLOW}🗄️ Veritabanı hazırlanıyor...${NC}"
npx prisma generate
npx prisma db push
npm run db:seed

echo -e "${YELLOW}🏗️ Proje build ediliyor...${NC}"
npm run build

# PM2 ecosystem dosyasını güncelle
sed -i "s|your-domain.com|$DOMAIN|g" ecosystem.config.js

# Nginx konfigürasyonu
echo -e "${YELLOW}🌐 Nginx konfigürasyonu yapılıyor...${NC}"
sudo cp nginx.conf /etc/nginx/sites-available/$DOMAIN
sed -i "s|your-domain.com|$DOMAIN|g" /etc/nginx/sites-available/$DOMAIN
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Nginx test
sudo nginx -t

# Certbot kurulumu (SSL)
echo -e "${YELLOW}🔒 SSL sertifikası kuruluyor...${NC}"
sudo apt install -y certbot python3-certbot-nginx

# Geçici olarak Nginx'i başlat (SSL için)
sudo systemctl start nginx
sudo systemctl enable nginx

# SSL sertifikası al
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive

# Firewall ayarları
echo -e "${YELLOW}🔥 Firewall ayarlanıyor...${NC}"
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw allow 3000

# Fail2ban konfigürasyonu
echo -e "${YELLOW}🛡️ Fail2ban ayarlanıyor...${NC}"
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# PM2 ile uygulamayı başlat
echo -e "${YELLOW}🚀 Uygulama başlatılıyor...${NC}"
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup

# Log dizinleri oluştur
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2

# Nginx'i yeniden başlat
sudo systemctl restart nginx

# Sistem servislerini kontrol et
echo -e "${YELLOW}🔍 Servisler kontrol ediliyor...${NC}"
sudo systemctl status nginx --no-pager
pm2 status

echo -e "${GREEN}✅ Kurulum tamamlandı!${NC}"
echo -e "${GREEN}🌐 Siteniz şu adreste yayında: https://$DOMAIN${NC}"
echo -e "${GREEN}🔧 Admin panel: https://$DOMAIN/admin/login${NC}"
echo -e "${GREEN}👤 Kullanıcı adı: arda2025${NC}"
echo -e "${GREEN}🔑 Şifre: arda2025!${NC}"
echo ""
echo -e "${BLUE}📋 Yararlı komutlar:${NC}"
echo -e "${YELLOW}PM2 durumu: pm2 status${NC}"
echo -e "${YELLOW}PM2 logları: pm2 logs${NC}"
echo -e "${YELLOW}PM2 yeniden başlat: pm2 restart arda-yumlu-portfolio${NC}"
echo -e "${YELLOW}Nginx durumu: sudo systemctl status nginx${NC}"
echo -e "${YELLOW}Nginx yeniden başlat: sudo systemctl restart nginx${NC}"
echo ""
echo -e "${GREEN}🎉 Kurulum başarıyla tamamlandı!${NC}"
