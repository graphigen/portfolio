#!/bin/bash

# Arda Yumlu Portfolio - Yedekleme Scripti

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}💾 Arda Yumlu Portfolio Yedekleniyor...${NC}"

# Yedek dizini oluştur
BACKUP_DIR="/var/backups/arda-yumlu-portfolio"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_PATH="$BACKUP_DIR/$DATE"

sudo mkdir -p $BACKUP_PATH

echo -e "${YELLOW}📁 Proje dosyaları yedekleniyor...${NC}"
sudo cp -r /var/www/arda-yumlu-portfolio $BACKUP_PATH/

echo -e "${YELLOW}🗄️ Veritabanı yedekleniyor...${NC}"
sudo cp /var/www/arda-yumlu-portfolio/prisma/dev.db $BACKUP_PATH/database_backup.db

echo -e "${YELLOW}📋 Nginx konfigürasyonu yedekleniyor...${NC}"
sudo cp -r /etc/nginx/sites-available $BACKUP_PATH/nginx_config

echo -e "${YELLOW}🔒 SSL sertifikaları yedekleniyor...${NC}"
sudo cp -r /etc/letsencrypt $BACKUP_PATH/ssl_certificates

# Eski yedekleri temizle (30 günden eski)
echo -e "${YELLOW}🧹 Eski yedekler temizleniyor...${NC}"
sudo find $BACKUP_DIR -type d -mtime +30 -exec rm -rf {} +

echo -e "${GREEN}✅ Yedekleme tamamlandı!${NC}"
echo -e "${GREEN}📁 Yedek konumu: $BACKUP_PATH${NC}"
