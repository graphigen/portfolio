#!/bin/bash

# Arda Yumlu Portfolio - Yedekleme Scripti
set -e

# Renkli çıktı için
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Yedek dizini
BACKUP_DIR="/var/backups/arda-yumlu-portfolio"
PROJECT_DIR="/var/www/arda-yumlu-portfolio"
DATE=$(date +%Y%m%d_%H%M%S)

echo -e "${YELLOW}💾 Yedekleme başlıyor...${NC}"

# Yedek dizini oluştur
sudo mkdir -p $BACKUP_DIR

# Proje dosyalarını yedekle
echo -e "${YELLOW}📁 Proje dosyaları yedekleniyor...${NC}"
sudo tar -czf $BACKUP_DIR/project_$DATE.tar.gz -C /var/www arda-yumlu-portfolio

# Veritabanını yedekle
echo -e "${YELLOW}🗄️ Veritabanı yedekleniyor...${NC}"
sudo cp $PROJECT_DIR/prisma/dev.db $BACKUP_DIR/database_$DATE.db

# Eski yedekleri temizle (30 günden eski)
echo -e "${YELLOW}🧹 Eski yedekler temizleniyor...${NC}"
sudo find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete
sudo find $BACKUP_DIR -name "*.db" -mtime +30 -delete

echo -e "${GREEN}✅ Yedekleme tamamlandı!${NC}"
echo -e "${GREEN}📁 Yedek konumu: $BACKUP_DIR${NC}"
