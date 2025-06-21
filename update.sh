#!/bin/bash

# Arda Yumlu Portfolio - Güncelleme Scripti

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔄 Arda Yumlu Portfolio Güncelleniyor...${NC}"

# Proje dizinine git
cd /var/www/arda-yumlu-portfolio

# Mevcut değişiklikleri kaydet
echo -e "${YELLOW}💾 Mevcut değişiklikler kaydediliyor...${NC}"
git stash

# En son kodu çek
echo -e "${YELLOW}📥 En son kod çekiliyor...${NC}"
git pull origin main

# Bağımlılıkları güncelle
echo -e "${YELLOW}📦 Bağımlılıklar güncelleniyor...${NC}"
npm install

# Veritabanını güncelle
echo -e "${YELLOW}🗄️ Veritabanı güncelleniyor...${NC}"
npx prisma generate
npx prisma db push

# Projeyi yeniden build et
echo -e "${YELLOW}🏗️ Proje yeniden build ediliyor...${NC}"
npm run build

# PM2 ile uygulamayı yeniden başlat
echo -e "${YELLOW}🚀 Uygulama yeniden başlatılıyor...${NC}"
pm2 restart arda-yumlu-portfolio

echo -e "${GREEN}✅ Güncelleme tamamlandı!${NC}"
echo -e "${GREEN}🌐 Site güncellendi ve yeniden başlatıldı.${NC}"
