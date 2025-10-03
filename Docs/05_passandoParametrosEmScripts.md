# 05 Passando parâmetros em Scripts

A passagem de parâmetros em scripts em Bash no Ubuntu é uma 
forma de fornecer informações ou argumentos para o script 
durante sua execução. Isso torna os scripts mais flexíveis e 
reutilizáveis, pois seu comportamento é ajustado de acordo 
com os argumentos fornecidos.

Essa passagem de parâmetros é realizada por meio de variáveis 
especiais, conhecidas como **variáveis de posição** . Elas são 
numeradas de 1 a 9, com **$1** representando o primeiro argumento, 
**$2** representando o segundo, e assim por diante. Além 
disso, todos os argumentos posicionais podem ser acessados 
através do **$@**.

A seguir, temos um exemplo de script que verifica se foram fornecidos 
exatamente dois argumentos na linha de comando. Se não, ele exibe uma 
mensagem de erro. Caso contrário, ele atribui os valores dos argumentos 
às variáveis arg1 e arg2 e os imprime.

```bash
#!/bin/bash

if [ $# -ne 2 ]; then
	echo "Erro! Não foram fornecidos dois argumentos!"
	exit 1
fi

arg1=$1
arg2=$2

echo "O primeiro argumento é: $arg1"
echo "O segundo argumento é: $arg2"

```
## Verificando a existência de arquivos

Você trabalha na empresa Hermex Log, uma empresa de logística conhecida 
por seus serviços de entrega. Seu time está trabalhando em um script 
para otimizar o processo de compactação de arquivos e fazer as entregas 
de maneira mais eficiente.

Esse script permite ao usuário selecionar um conjunto de arquivos a 
serem compactados, fornecer o nome do arquivo compactado e o 
direcionamento para a pasta onde este será armazenado. O script já está 
quase pronto, mas você percebe que ainda falta uma última peça no código.

Utilizando a passagem de parâmetros, como você pode checar se os arquivos 
escolhidos para compactação existem no diretório?


```bash
arquivos=("$@")
for arquivo in "${arquivos[@]}"; do
	if [ ! -e "$arquivo" ]; then
		echo "Arquivo não encontrado: $arquivo"
    		exit 1
  	fi
done
```

## Mãos na massa: Verificando um diretório

É bem comum pedirmos ao usuário que nos indique o caminho (path) do 
diretório no qual um arquivo ou uma saída de um script deve ser 
armazenada, ou mesmo para que o script consiga acessar os dados que serão 
processados. Desse modo, uma etapa importante nesses scripts consiste na 
verificação da validade do caminho informado pelo usuário.

Como é que você faria essa verificação de forma simples usando apenas o 
comando if?

```bash
#!/bin/bash

if [ $# -ne 1 ]; then
	echo "Erro! No one path were provided"
	exit 1
fi
path=$1

if [ -d "$path" ] then
	echo "This path: $path is valid."
else
	echo "This path: $path is invalid."
fi



















