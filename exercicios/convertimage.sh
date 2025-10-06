#! /bin/bash

# Crie um script que seja capaz de converter todos os arquivos com extensão .jpg de um 
# diretório para .png de forma simples.

# Não se esqueça de solicitar ao usuário o caminho do diretório em que as imagens estão 
# armazenadas e exibir mensagens no terminal para indicar o sucesso ou falha no processo.
read -e -p "Enter folder path: " folder

# Checking if the user inserted the folder path.
# Verifica se o usuário inseriu o caminho da pasta.
if [ -z "$folder" ]; then
	echo "No one folder path was provided"
	exit 1
fi

# This line give the absolute path
FOLDER=$(realpath "$(eval echo "$folder")")

if [ ! -d "$FOLDER" ]; then
  echo "❌ Invalid folder path: $folder"
  exit 1 
fi

#echo "$FOLDER"/*.jpg

for img in "$FOLDER"/*.jpg; do
  nome_base="${img%.jpg}"
  convert "$img" "${nome_base}.png"
  echo "✅ Convertido: $img → ${nome_base}.png"
done
