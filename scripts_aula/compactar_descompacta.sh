#! /bin/bash

read -p "Entre com a operação desejada: 'compactar' ou 'descompactar'" operacao
case "$operacao" in
	"compactar")
		read -e -p "Digite o nome do arquivo final (.tar.gz)" arquivo_saida
		read -e -p "Digite a lista de arquivos separados por espaço: " arquivos
		tar -czf "$arquivo_saida" "$arquivos"
		echo "Arquivos compactados com sucesso em $arquivo_saida"
	;;
	"descompactar")
		read -e -p "Digite o nome do arquivo a descompactar (.tar.gz)" arquivo
		read -e -p "Digite o diretório de destino: " diretorio
		tar -xzf "$arquivo" -C "$diretorio"
		echo "Arquivo descompactado com sucesso em $diretorio"
	;;
	*)
	echo "Operação inválida!"
	echo "Selecione descompactar ou compactar"
	exit 1
	;;
esac