#!/bin/bash

read -e -p "Enter folder path: " folder

# Checking if the user inserted the folder path.
# Verifica se o usuário inseriu o caminho da pasta.
if [ -z "$folder" ]; then
	echo "No one folder path was provided"
	exit 1
fi

# This line give the absolute path
FOLDER=$(realpath "$(eval echo "$folder")")


#Verificar se a pasta a ser  feita o backup existe
# Verify if the folder path is valid.
if [ ! -d "$FOLDER" ]; then
  echo "❌ Invalid folder path: $folder"
  exit 1 
fi

# Verify if the backup folder exist.
# Verificar se a pasta de backup padrão existe
BACKUPFOLDER="/home/$USER/backups"

# If there no a backup folder, one is create on /home/user/backups
# Se não existe, uma é criada na /home/user/backup
if [ ! -d "$BACKUPFOLDER" ]; then
  echo "Backups folder do not exist"
  echo "Creating backups folder on path: $BACKUPFOLDER"
  mkdir -p $BACKUPFOLDER
  
fi

#criar backup da pasta indicada usando tar
# Creating backup file with tar.gz

tar -czvf "$BACKUPFOLDER/backup_$(date +%d%m%Y_%H%M%S).tar.gz" $FOLDER

# 
echo "✅ Operation completed successfully."
