# Encadeamento de Comandos

Quando executamos um comando no terminal, muitas vezes a saída pode ser extensa e conter um grande volume de informações. Para facilitar nosso processo de análise, podemos usar comandos para filtrar, ordenar e exibir apenas as informações relevantes de acordo com nossa demanda.

Por exemplo, se estamos buscando apenas processos relacionados ao navegador Firefox em um ambiente Linux, podemos usar o seguinte encadeamento de comandos em nosso terminal:
```bash

ps aux | grep firefox
```

O pipe (|) é utilizado para redirecionar a saída de um comando para a entrada de outro comando. Dessa forma, conseguimos encadear vários comandos e processar sua saída de forma sequencial.

## GREP 
O comando **grep**, que ainda não exploramos por aqui, realiza uma busca por padrões especificados pelo usuário. Neste caso, estamos filtrando a lista de processos para exibir apenas aqueles que contêm o padrão firefox.

Para exibir linhas específicas da saída de um comando, podemos utilizar os comandos head e tail.

O comando head exibe as primeiras linhas da saída. Por padrão, ele exibe as primeiras 10 linhas, mas podemos ajustar o número de linhas exibidas usando a opção -n.

O comando tail exibe as últimas linhas da saída. Por padrão, ele mostra as últimas 10 linhas, mas podemos ajustar o número de linhas exibidas utilizando também a opção -n.

Por outro lado, podemos aplicar o comando **sort** para ordenar a saída de um comando ou o conteúdo de um arquivo. Por exemplo, para ordenar a lista de processos pela coluna de uso de CPU, podemos combinar os comandos ps aux com sort da seguinte forma:
```bash
ps aux --sort=-%cpu
```

Utilizando **--sort=-%cpu** estamos ordenando a saída de modo decrescente com base no uso de CPU.