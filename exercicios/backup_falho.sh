#!bin/bash

# Construa um script que seja capaz de criar uma cópia de segurança de um diretório específico.


# Solicitar caminho para o diretorio

read -e -p "Enter the folder name: " FILE


#montando o caminho real do arquivo
REALPATH="$(realpath $FILE)"

#pasta padrao de backups
backupfolder="$(pwd)/$FILE"


# Verificar se o arquivo existe

if [ ! -d "$PATH" ]; then
	echo "Invalid folder path: $PATH"
fi

# pasta padrao para backups
backUpFolder="$HOME/backups/"

# verificar a existencia da pasta backups
if [ ! -d "backUpFolder" ]; then
	mkdir -p "$backUpFolder"
fi

cp -r "$PATH" "$backUpFolder"

echo "backup done"

