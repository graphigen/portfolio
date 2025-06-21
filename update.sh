#!/bin/bash

# Arda Yumlu Portfolio - Güncelleme Scripti
set -e

# Renkli çıktı için
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}🔄 Proje güncelleniyor...${NC}"

# Proje dizinine git
cd /var/www/arda-yumlu-portfolio

# Git'ten son değişiklikleri çek
echo -e "${YELLOW}📥 Son değişiklikler çekiliyor...${NC}"
git pull origin main

# Bağımlılıkları güncelle
echo -e "${YELLOW}📦 Bağımlılıklar güncelleniyor...${NC}"
npm install

# Veritabanını güncelle
echo -e "${YELLOW}🗄️ Veritabanı güncelleniyor...${NC}"
npx prisma generate
npx prisma db push

# Projeyi yeniden build et
echo -e "${YELLOW}🏗️ Proje build ediliyor...${NC}"
npm run build

# PM2 ile uygulamayı yeniden başlat
echo -e "${YELLOW}🚀 Uygulama yeniden başlatılıyor...${NC}"
pm2 restart arda-yumlu-portfolio

echo -e "${GREEN}✅ Güncelleme tamamlandı!${NC}"
echo -e "${GREEN}🌐 Site: https://ardayumlu.com${NC}"
